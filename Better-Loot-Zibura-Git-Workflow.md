# Better Loot Zibura 开发与 Git 工作流

> 项目根目录：`D:\模组开发\better loot zibura`

## 1. 架构

项目使用两个独立 Git 仓库：

``` text
better loot zibura/
├─ .git/                       # Workspace repo
├─ resources/                  # 共享源数据
├─ tools/                      # 共享生成器
├─ generated/                  # ignored
├─ datapacks/                  # ignored
├─ Better Loot Builds/         # ignored
└─ projects/                   # Workspace 整体 ignored
   ├─ .git-store/              # Mod repo 的共享 bare repository
   ├─ 1.20.1-fabric/           # worktree
   ├─ 1.20.1-forge/
   ├─ 1.21.1-fabric/
   ├─ 1.21.1-neoforge/
   ├─ 1.21.11-neoforge/
   ├─ 26.1.2-neoforge/
   ├─ 26.2-fabric/
   ├─ 26.2-neoforge/
   └─ 26.3-neoforge/
```

Workspace
远程：`https://github.com/zib-ura/better-loot-zibura-workspace.git`

Mod 远程：`https://github.com/zib-ura/better-loot-zibura`

## 2. Worktree / Branch 映射

  目录                 Branch
  -------------------- --------------------
  `1.20.1-fabric`      `1.20.1-fabric`
  `1.20.1-forge`       `1.20.1`
  `1.21.1-fabric`      `1.21.1-fabric`
  `1.21.1-neoforge`    `1.21.1`
  `1.21.11-neoforge`   `1.21.11-neoforge`
  `26.1.2-neoforge`    `26.1.2-neoforge`
  `26.2-fabric`        `26.2-fabric`
  `26.2-neoforge`      `26.2-neoforge`
  `26.3-neoforge`      `26.3_neoforge`

`26.3-neoforge` 的目录名与历史 branch 名写法不同，这是正常的。

## 3. 最重要的提交边界

修改 `resources/`、`tools/`：提交到根目录 Workspace repo。

``` powershell
git status
git add .
git commit -m "..."
git push
```

修改 `projects/<版本>/`：提交到对应 Mod worktree。例如：

``` powershell
git -C ".\projects\26.2-neoforge" status
git -C ".\projects\26.2-neoforge" add .
git -C ".\projects\26.2-neoforge" commit -m "..."
git -C ".\projects\26.2-neoforge" push
```

核心规则：

**共享资源/生成器 → Workspace `main`。**

**Mod Java/Gradle/版本项目 → 对应 worktree branch。**

## 4. IntelliJ IDEA 工作流

每个版本直接打开自己的目录，例如 `projects/1.21.1-neoforge`。

这个目录固定对应 branch `1.21.1`。修改代码后，可以直接使用 IDEA
的"提交"或"提交并推送"。

"提交并推送"会把当前 worktree 中选中的改动 commit 到当前 branch，然后
push 到它的 upstream；不会提交到 Workspace `main`，也不会把其他 worktree
一起提交。

IDEA Git Log 能看到其他版本的 branch/commit 是正常的，因为这些 worktree
共用同一个 Mod repository。

不要在一个 worktree 中随意 Checkout 到另一个已被其他 worktree使用的
branch。想开发哪个版本，就打开哪个 worktree。

## 5. 共享资源生成

``` text
resources/        # 权威源数据
    ↓
tools/main.py     # 生成器
    ├─ generated/<target>/
    └─ datapacks/
```

`generated/` 与 `datapacks/` 是生成结果，不进入 Workspace Git。

典型 Gradle 集成：

``` gradle
def betterLootRoot = file('../..')
def betterLootTarget = projectDir.name

sourceSets.main.resources {
    srcDir('src/generated/resources')
    srcDir("../../generated/${betterLootTarget}")
}

tasks.register('generateBetterLootResources', Exec) {
    workingDir = betterLootRoot
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

## 6. 修改共享资源后的流程

1.  修改 `resources/` 或 `tools/`。
2.  检查生成结果和受影响版本。
3.  在根 Workspace 提交：

``` powershell
git status
git add .
git commit -m "..."
git push
```

4.  按需要构建相关 Mod worktree。

共享资源变化本身不要求在每个 Mod branch 制造额外 commit。

## 7. 修改 Mod 代码后的流程

以 `26.2-fabric` 为例：

``` powershell
git -C ".\projects\26.2-fabric" status
```

开发、构建/测试，然后：

``` powershell
git -C ".\projects\26.2-fabric" add .
git -C ".\projects\26.2-fabric" commit -m "fix: ..."
git -C ".\projects\26.2-fabric" push
```

也可以直接在对应 IDEA 项目中使用"提交并推送"。

## 8. 新增版本

不要重新 clone 整个 Mod repository。通过 `projects/.git-store` 创建
worktree。

如果新版本没有合理的历史继承关系，可建立 orphan branch：

``` powershell
git -C ".\projects\.git-store" worktree add `
    --detach `
    "$PWD\projects\<新版本目录>" `
    main

git -C ".\projects\<新版本目录>" switch --orphan <新branch>
```

导入源码时排除缓存和构建目录：

``` powershell
robocopy `
    "<源项目>" `
    ".\projects\<新版本目录>" `
    /E `
    /XD ".gradle" ".idea" "build" "run"
```

然后：

``` powershell
git -C ".\projects\<新版本目录>" status --short
git -C ".\projects\<新版本目录>" add .
git -C ".\projects\<新版本目录>" commit -m "chore: import <版本> project"
git -C ".\projects\<新版本目录>" push -u origin <新branch>
```

如果保留了 `.backup`，等 commit、push、状态检查以及必要的 build
验证全部成功后再删除。

## 9. 健康检查

Workspace：

``` powershell
git status
git branch -vv
```

全部 Mod worktree：

``` powershell
$versions = @(
    "1.20.1-fabric",
    "1.20.1-forge",
    "1.21.1-fabric",
    "1.21.1-neoforge",
    "1.21.11-neoforge",
    "26.1.2-neoforge",
    "26.2-fabric",
    "26.2-neoforge",
    "26.3-neoforge"
)

foreach ($v in $versions) {
    Write-Host "`n========== $v ==========" -ForegroundColor Cyan
    git -C ".\projects\$v" status --short --branch
}
```

查看 worktree：

``` powershell
git -C ".\projects\.git-store" worktree list
```

清理失效 metadata：

``` powershell
git -C ".\projects\.git-store" worktree prune
```

中文路径显示为转义字节时：

``` powershell
git config --global core.quotepath false
```

## 10. 禁止/避免

不要强制把 `projects/` 加入 Workspace：

``` powershell
git add -f projects
```

通常不要提交：

``` text
generated/
datapacks/
Better Loot Builds/
resources/structure/
```

注意：`resources/1constants/structure/` 与 `resources/structure/`
不同，前者是源数据，应正常跟踪。

不要删除 worktree 中的 `.git` 文件。worktree 的 `.git` 通常是指向共享
Git 数据库的文件，这是正常结构。

不要通过在同一 worktree 中频繁切换版本 branch 来开发；直接打开目标
worktree。

## 11. 快速判断提交位置

``` text
resources/... ─┐
tools/...     ─┴→ Workspace repo → main

projects/1.21.1-neoforge/... → Mod repo → 1.21.1
projects/26.2-fabric/...     → Mod repo → 26.2-fabric
projects/26.3-neoforge/...   → Mod repo → 26.3_neoforge
```

日常记忆：

**Mod 代码：打开对应 worktree → 开发 → 构建/测试 → IDEA"提交并推送"。**

**共享资源/生成器：根 Workspace 修改 → 验证 → 提交并推送 `main`。**

## 12. 迁移完成时的基线

``` text
1.20.1-fabric       0d5dd3d
1.20.1-forge        24306cb
1.21.1-fabric       ac69a01
1.21.1-neoforge     ec75f76
1.21.11-neoforge    8539b62
26.1.2-neoforge     435ebbe
26.2-fabric         e26ab61
26.2-neoforge       5db6f5d
26.3-neoforge       c1bff24

Workspace main      e0bd810
```

这些 hash 只是迁移完成时的基线。后续开发后无需人工维护为"当前
HEAD"，实际 Git 状态始终以 Git 自身为准。
