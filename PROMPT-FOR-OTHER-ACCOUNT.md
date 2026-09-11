# 复制下面整段发给其他 Grok 账号（无需上传 zip）

---

请帮我安装用户技能。**不要要求上传文件**，直接从 GitHub 安装。

## 仓库

https://github.com/whylkk/my-grok-skills

## 要安装的技能（仓库根目录下的同名文件夹）

- legado-book-source
- quantumult-x
- surge
- tampermonkey

## 安装目标目录

优先 `/home/workdir/.grok/skills`，否则 `~/.grok/skills`。

## 执行方式（任选其一）

**方式 A — skill-installer 循环：**

```bash
DEST="/home/workdir/.grok/skills"
mkdir -p "$DEST"
for s in legado-book-source quantumult-x surge tampermonkey; do
  if [ -d "$DEST/$s" ]; then rm -rf "$DEST/$s"; fi
  bash /root/.grok/skills/skill-installer/scripts/install-skill.sh \
    --repo whylkk/my-grok-skills --path "$s" --dest "$DEST" || true
done
ls -la "$DEST"
```

**方式 B — git clone 后复制：**

```bash
cd /tmp && rm -rf my-grok-skills
git clone --depth 1 https://github.com/whylkk/my-grok-skills.git
mkdir -p /home/workdir/.grok/skills
for s in legado-book-source quantumult-x surge tampermonkey; do
  rm -rf /home/workdir/.grok/skills/$s
  cp -a /tmp/my-grok-skills/$s /home/workdir/.grok/skills/
done
ls -la /home/workdir/.grok/skills
```

## 校验与回复

1. 确认每个技能目录存在且含有 `SKILL.md`
2. 打印各 SKILL.md 的 name / description 前几行
3. 说明：安装后请**新开一轮对话**再触发技能
4. 简要列出各技能触发关键词

现在开始安装。

---
