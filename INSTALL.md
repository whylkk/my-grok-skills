# 安装说明（无需上传 zip）

## 其他 Grok 账号（推荐）

直接复制 `PROMPT-FOR-OTHER-ACCOUNT.md` 全文发给对方 Grok 即可。  
技能从公开仓库拉取：https://github.com/whylkk/my-grok-skills

## 本机

```bash
git clone https://github.com/whylkk/my-grok-skills.git
cd my-grok-skills && bash install.sh
```

或：

```bash
for s in legado-book-source quantumult-x surge tampermonkey; do
  bash /root/.grok/skills/skill-installer/scripts/install-skill.sh \
    --repo whylkk/my-grok-skills --path "$s" --dest /home/workdir/.grok/skills
done
```
