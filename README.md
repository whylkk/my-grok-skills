# my-grok-skills

Portable Grok user skills for other accounts.

## Skills

| Skill | Description |
|-------|-------------|
| legado-book-source | Legado/阅读 book source development (TDD + debug) |
| quantumult-x | Quantumult X configs, rules, rewrites, scripts |
| surge | Surge proxy full documentation reference |
| tampermonkey | Tampermonkey / userscript development |

## Install on another Grok account (no zip upload)

Paste this to Grok:

```
请用 skill-installer 从 https://github.com/whylkk/my-grok-skills 安装用户技能到 /home/workdir/.grok/skills 或 ~/.grok/skills：

技能目录（仓库根目录下）：
- legado-book-source
- quantumult-x
- surge
- tampermonkey

安装后新开对话生效。可循环执行：
bash /root/.grok/skills/skill-installer/scripts/install-skill.sh --repo whylkk/my-grok-skills --path <skill名> --dest /home/workdir/.grok/skills
```

See INSTALL.md for details.
