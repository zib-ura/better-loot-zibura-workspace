from dataclasses import dataclass
import re


@dataclass(frozen=True, order=True)
class MCVersion:
    parts: tuple[int, ...]

    @classmethod
    def parse(cls, value: str):
        text = str(value).strip()
        m = re.fullmatch(r'(\d+(?:\.\d+)*)', text)
        if not m:
            raise ValueError(f'Unsupported Minecraft version string: {value!r}')
        return cls(tuple(int(x) for x in m.group(1).split('.')))

    def padded(self, size=3):
        return self.parts + (0,) * max(0, size - len(self.parts))

    def at_least(self, value: str):
        other = MCVersion.parse(value)
        size = max(len(self.parts), len(other.parts), 3)
        return self.padded(size) >= other.padded(size)

    def before(self, value: str):
        return not self.at_least(value)


# 正式版 Data Pack version。这里只登记已经核实、构建时需要写入 pack.mcmeta 的版本。
# 1.21.9 起 pack version 具有 major/minor；用 tuple 保存，严禁 float。
DATA_PACK_FORMATS = {
    # 1.20.x
    "1.20.1": 15,
    "1.20.2": 18,
    "1.20.3": 26,
    "1.20.4": 26,
    "1.20.5": 41,
    "1.20.6": 41,

    # 1.21.x
    "1.21": 48,
    "1.21.1": 48,
    "1.21.2": 57,
    "1.21.3": 57,
    "1.21.4": 61,
    "1.21.5": 71,
    "1.21.6": 80,
    "1.21.7": 81,
    "1.21.8": 81,
    "1.21.9": (88, 0),
    "1.21.10": (88, 0),
    "1.21.11": (94, 1),

    # 26.1.x
    "26.1": (101, 1),
    "26.1.1": (101, 1),
    "26.1.2": (101, 1),

    # 26.2
    "26.2": (107, 1),

    # 26.3
    "26.3": (121, 0),
}


@dataclass(frozen=True)
class VersionProfile:
    minecraft: str
    parsed: MCVersion
    data_pack_format: int | tuple[int, int]

    @property
    def singular_data_dirs(self) -> bool:
        # Java 1.21 将若干数据包目录由复数改为单数。
        return self.parsed.at_least('1.21')

    @property
    def modern_pack_metadata(self) -> bool:
        # Data Pack version >= 82 使用 major/minor pack version metadata。
        fmt = self.data_pack_format
        major = fmt[0] if isinstance(fmt, tuple) else fmt
        return major >= 82

    @property
    def loot_condition_modifier_format(self) -> bool:
        # 本项目当前已实现的新版 Loot JSON 转换从 26.3 开始启用。
        # 若未来确认更早 26.x 版本也需要该结构，只需调整此边界。
        return self.parsed.at_least('26.3')

    @property
    def recipe_disable_strategy(self) -> str:
        if self.parsed.at_least('26.3'):
            return 'neoforge_never'
        return 'legacy'

    @property
    def loot_table_dir(self) -> str:
        return 'loot_table' if self.singular_data_dirs else 'loot_tables'

    @property
    def loot_modifier_dir(self) -> str:
        return 'loot_modifiers'

    @property
    def recipe_dir(self) -> str:
        return 'recipe' if self.singular_data_dirs else 'recipes'


def get_version_profile(version: str) -> VersionProfile:
    version = str(version).strip()
    if version not in DATA_PACK_FORMATS:
        supported = ', '.join(DATA_PACK_FORMATS)
        raise ValueError(
            f'Minecraft {version} Data Pack version is not registered.\n'
            f'Registered versions: {supported}\n'
            'Verify the corresponding official Mojang technical notes before adding it to DATA_PACK_FORMATS.'
        )
    return VersionProfile(version, MCVersion.parse(version), DATA_PACK_FORMATS[version])


def pack_format_json(value: int | tuple[int, int]):
    if isinstance(value, tuple):
        return [value[0], value[1]]
    return value
