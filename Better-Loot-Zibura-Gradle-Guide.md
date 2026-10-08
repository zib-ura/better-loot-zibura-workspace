# Better Loot Zibura 多版本 Gradle 接入与构建指南

## 1. 目的

本指南用于 `better loot zibura` 多版本 Minecraft 模组工作区。

核心目标是：

> Gradle 构建某个版本时，先运行统一的 Python
> 资源生成器，再把该版本生成的 `data/` 作为正式 resources 打入最终 JAR。

工作区结构约定：

``` text
better loot zibura/
├─ generated/
│  └─ <target>/
│     └─ data/
├─ projects/
│  └─ <target>/
│     └─ build.gradle
├─ resources/
└─ tools/
   └─ main.py
```

其中 `<target>` 直接使用项目目录名，例如：

``` text
1.20.1-forge
1.20.1-fabric
1.21.1-neoforge
26.2-neoforge
```

------------------------------------------------------------------------

## 2. Gradle 修改的基本原则

不要把某个 Forge/Fabric/NeoForge 项目的整个 `build.gradle`
复制给另一个版本。

各 Loader 自己的以下配置应尽量保持原样：

-   `plugins`
-   Minecraft / Forge / NeoForge / Fabric Loom 配置
-   `dependencies`
-   metadata 处理
-   run configuration
-   remap / reobf 流程
-   原有 DataGen 资源目录

Better Loot 只进行最小侵入式接入：

1.  定位工作区根目录。
2.  从项目目录名取得 target。
3.  把 `generated/<target>` 加入 resources。
4.  注册 Python 生成任务。
5.  让 `processResources` 依赖 Python 任务。

------------------------------------------------------------------------

## 3. 定位工作区

假设当前项目为：

``` text
better loot zibura/projects/26.2-neoforge
```

项目向上两级就是工作区根目录，因此：

``` groovy
def betterLootRoot = file('../..')
```

此时：

``` text
betterLootRoot/tools/main.py
```

就是统一 Python 入口。

------------------------------------------------------------------------

## 4. 自动确定当前 target

使用：

``` groovy
def betterLootTarget = projectDir.name
```

例如项目目录：

``` text
projects/26.2-neoforge
```

则：

``` text
betterLootTarget = 26.2-neoforge
```

这样同一套 Gradle
接入逻辑可以用于多个项目，而不需要在每个文件里硬编码版本名。

------------------------------------------------------------------------

## 5. 接入 Python 生成的 resources

Python 输出结构是：

``` text
generated/<target>/data/...
```

因此 Gradle 的 resource root 必须是：

``` text
generated/<target>
```

而不是：

``` text
generated/<target>/data
```

推荐写法：

``` groovy
sourceSets.main.resources {
    srcDir("../../generated/${betterLootTarget}")
}
```

原因是最终 JAR 需要：

``` text
MOD.jar
└─ data/
   └─ ...
```

如果错误地把 `/data` 本身作为 resource root，JAR
内部目录层级会发生变化。

如果原项目已有：

``` groovy
sourceSets.main.resources {
    srcDir('src/generated/resources')
}
```

不要删除，应该扩展：

``` groovy
sourceSets.main.resources {
    srcDir('src/generated/resources')
    srcDir("../../generated/${betterLootTarget}")
}
```

------------------------------------------------------------------------

## 6. 注册 Python 生成任务

标准任务：

``` groovy
tasks.register('generateBetterLootResources', Exec) {
    group = 'better loot'
    description = "Generate Better Loot resources for ${betterLootTarget}"

    workingDir = betterLootRoot

    environment = [
            'PYTHONUTF8': '1',
            'PYTHONIOENCODING': 'utf-8'
    ]

    commandLine = [
            'python',
            '-X',
            'utf8',
            'tools/main.py',
            '--target',
            betterLootTarget
    ]
}
```

对于：

``` text
projects/26.2-neoforge
```

实际等价于在工作区根目录执行：

``` powershell
python -X utf8 tools/main.py --target 26.2-neoforge
```

UTF-8 参数用于减少 Windows 下 Python 输出/字符编码问题。

------------------------------------------------------------------------

## 7. 建立正确的 Gradle 任务依赖

真正消费资源的是：

``` text
processResources
```

因此应该建立：

``` groovy
tasks.named('processResources') {
    dependsOn(tasks.named('generateBetterLootResources'))
}
```

任务关系：

``` text
generateBetterLootResources
          ↓
     processResources
          ↓
      后续打包任务
          ↓
     build/libs/*.jar
```

不要只简单写成
`build.dependsOn(...)`，因为资源的生产者应该直接成为资源消费者
`processResources` 的依赖。

------------------------------------------------------------------------

## 8. 标准接入模板

对于结构兼容的项目，可参考：

``` groovy
// Better Loot workspace integration.
def betterLootRoot = file('../..')
def betterLootTarget = projectDir.name

sourceSets.main.resources {
    // 保留项目原本已有的资源目录。
    srcDir('src/generated/resources')

    // Better Loot Python generated resources.
    srcDir("../../generated/${betterLootTarget}")
}

tasks.register('generateBetterLootResources', Exec) {
    group = 'better loot'
    description = "Generate Better Loot resources for ${betterLootTarget}"

    workingDir = betterLootRoot

    environment = [
            'PYTHONUTF8': '1',
            'PYTHONIOENCODING': 'utf-8'
    ]

    commandLine = [
            'python',
            '-X',
            'utf8',
            'tools/main.py',
            '--target',
            betterLootTarget
    ]
}

tasks.named('processResources') {
    dependsOn(tasks.named('generateBetterLootResources'))
}
```

注意：这只是接入模板。实际修改新版本时，应先阅读该版本原始
`build.gradle`，不要覆盖 Loader 自己已有的配置。

------------------------------------------------------------------------

## 9. 变量声明位置

下面两个变量：

``` groovy
def betterLootRoot = file('../..')
def betterLootTarget = projectDir.name
```

必须在第一次使用它们之前声明。

例如如果 `sourceSets` 中已经使用：

``` groovy
srcDir("../../generated/${betterLootTarget}")
```

那么 `betterLootTarget` 必须放在这个 `sourceSets` 块之前。

否则可能出现：

``` text
Could not get unknown property 'betterLootTarget' for main resources
```

------------------------------------------------------------------------

## 10. 不使用 duplicatesStrategy 掩盖重复资源

如果 Gradle 报 duplicate resources，不建议直接：

``` groovy
duplicatesStrategy = DuplicatesStrategy.EXCLUDE
```

这可能掩盖真正的目录问题。

应先检查是否同时存在：

``` text
src/main/resources/data/...
```

以及：

``` text
generated/<target>/data/...
```

如果前者是旧生成结果、后者是新的统一 Python
输出，应清理旧的重复生成数据，同时保留真正手写的静态资源。

------------------------------------------------------------------------

## 11. Java / Gradle 工具链

Java 版本属于 Minecraft / Loader / Gradle 构建工具链要求，与 Python
资源生成机制是两件事。

当前工作区使用的构建约定：

``` text
1.20.1  → Java 17
1.21.1  → Java 21
26.x    → Java 25
```

项目可以在 `gradle.properties` 中指定，例如：

``` properties
org.gradle.java.home=D:/JAVA DOWNLOADED/JAVA25
```

但如果 Gradle Wrapper 本身被不兼容的系统 Java 启动，仍可能在非常早的
build script 解析阶段失败。

例如：

``` text
Unsupported class file major version 70
```

其中 major version 70 对应 Java 26。

这种情况下，在 PowerShell 中先切换 Launcher JVM：

``` powershell
$env:JAVA_HOME="D:\JAVA DOWNLOADED\JAVA25"
$env:Path="$env:JAVA_HOME\bin;$env:Path"

.\gradlew --stop
.\gradlew --version
```

确认 JVM 正确后再构建：

``` powershell
.\gradlew clean build
```

------------------------------------------------------------------------

## 12. 正常构建流程

项目接入完成后，不需要手动提前运行 Python。

直接：

``` powershell
.\gradlew clean build
```

预期流程：

``` text
Gradle build
   ↓
generateBetterLootResources
   ↓
tools/main.py --target <projectDir.name>
   ↓
generated/<target>/data 更新
   ↓
processResources
   ↓
Loader 后续任务
   ↓
build/libs/*.jar
```

最终发布 JAR 通常位于：

``` text
projects/<target>/build/libs/
```

实际发布前，应检查具体项目产生的 JAR 文件，避免误把
`sources`、`javadoc`、开发用 JAR 等当作正式发布文件。

------------------------------------------------------------------------

## 13. 新版本接入检查表

接入新的 Minecraft / Loader 项目时依次检查：

1.  确认项目目录名符合 Python target 命名规则。
2.  确认该版本要求的 Java 版本。
3.  阅读原始 `build.gradle`，确认 Loader 和插件体系。
4.  找到已有的 `sourceSets.main.resources`。
5.  保留原有 resource directories。
6.  在使用前声明 `betterLootRoot` 和 `betterLootTarget`。
7.  添加 `../../generated/${betterLootTarget}`。
8.  添加 `generateBetterLootResources`。
9.  添加 `processResources.dependsOn(generateBetterLootResources)`。
10. 执行 `gradlew clean build`。
11. 检查 Python 是否支持该 target。
12. 检查 `build/resources/main/data` 是否包含生成数据。
13. 检查最终 `build/libs` JAR 内容。
14. 在真实对应 Loader 环境中测试最终 JAR。

------------------------------------------------------------------------

## 14. 故障判断顺序

如果构建失败，按阶段判断问题，不要同时修改多处。

``` text
Gradle 启动/semantic analysis 就失败
→ 优先检查 Java、Gradle、插件兼容性

配置 build.gradle 失败
→ 检查变量声明位置、Gradle DSL、Loader 模板

generateBetterLootResources 失败
→ 检查 Python、target、版本转换逻辑

processResources 失败
→ 检查重复资源、目录结构、metadata expansion

JAR 构建成功但游戏加载失败
→ 检查 metadata、依赖、Loader、JAR 内容及运行时日志
```

核心原则：

> 先确定失败发生在哪一层，再修改对应层。不要用 Gradle 的容错配置去掩盖
> Python、资源目录或 metadata 的实际问题。

------------------------------------------------------------------------

## 15. 总结

Better Loot 多版本构建体系分成两个相对独立的层：

``` text
构建工具链
Minecraft版本
   ↓
Forge / Fabric / NeoForge
   ↓
Gradle
   ↓
对应 Java


Better Loot 数据管线
Gradle
   ↓
generateBetterLootResources
   ↓
Python
   ↓
generated/<target>/data
   ↓
processResources
   ↓
最终 MOD JAR
```

以后增加新版本时，应根据该版本自己的 Loader/Gradle 模板做最小修改，而
Better Loot 的资源接入规则保持一致。
