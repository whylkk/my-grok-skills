# 上传完整 JS 模块

`.fwd` 与 README 已就绪。因单文件约 55KB，请用本机 git 推送完整模块：

```bash
git clone https://github.com/whylkk/my-grok-skills.git
cd my-grok-skills
# 将本地 artifacts/pianku_modules/*.js 复制到 pianku-widgets/
cp /path/to/pianku_modules/pianku_*.js pianku-widgets/
git add pianku-widgets/
git commit -m "Add pianku widget JS modules"
git push
```

推送后订阅链接即可使用：

https://raw.githubusercontent.com/whylkk/my-grok-skills/main/pianku-widgets/pianku.fwd
