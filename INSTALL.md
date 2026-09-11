# 安装说明

## 方式一：本机一键安装

```bash
bash install.sh
bash install.sh --dest ~/.grok/skills
bash install.sh --only legado-book-source,surge
```

## 方式二：其他 Grok 账号（无需上传 zip）

直接对模型说：

```
请用 skill-installer 从 https://github.com/whylkk/my-grok-skills 安装：
legado-book-source、quantumult-x、surge、tampermonkey
路径即仓库根目录下对应文件夹。安装到 /home/workdir/.grok/skills，安装后新开对话。
```

或执行：

```bash
for s in legado-book-source quantumult-x surge tampermonkey; do
  bash /root/.grok/skills/skill-installer/scripts/install-skill.sh \
    --repo whylkk/my-grok-skills --path "$s" --dest /home/workdir/.grok/skills || true
done
```

## 方式三：本地 clone

```bash
git clone https://github.com/whylkk/my-grok-skills.git
cd my-grok-skills && bash install.sh
```
