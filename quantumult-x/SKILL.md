---
name: quantumult-x
description: Write and debug Quantumult X (圈X, QX) configs, filters, rewrites, MITM, and scripts. Use when the user mentions Quantumult X, 圈X, 圈叉, QX config, rewrite_local, filter_local, task_local, script-response-body, script-request-header, hostname MITM, BoxJS, or converting Surge/Loon rules to Quantumult X.
---

# Quantumult X 配置与脚本

指导编写/修改 Quantumult X（圈 X）配置文件、分流、重写、MITM 与 JS 脚本。不提供破解付费 App、绕过版权 DRM 的现成解锁脚本；专注语法、结构与可维护写法。

## 配置文件主结构

QX 配置为分段 INI 风格，常见段：

| 段名 | 用途 |
|------|------|
| `[general]` | 杂项、排除路由、资源解析器等 |
| `[dns]` | 服务器、system、no-ipv6 等 |
| `[policy]` | 策略组 static / url-test / available / round-robin |
| `[server_remote]` / `[server_local]` | 节点订阅与本地节点 |
| `[filter_remote]` / `[filter_local]` | 分流规则 |
| `[rewrite_remote]` / `[rewrite_local]` | 重写与脚本挂载 |
| `[task_local]` | 定时任务脚本 |
| `[http_backend]` | HTTP 后端（BoxJS 等） |
| `[mitm]` | hostname 列表与 CA |

远程资源一行格式：`url, tag=名称, update-interval=秒, opt-parser=true, enabled=true`

## 分流 filter

本地规则写在 `[filter_local]`。常用语法见 `references/filter-rules.md`。

## 重写 rewrite

见 `references/rewrite-types.md`。脚本 API 见 `references/script-api.md`。

## MITM

HTTPS 重写/脚本必须开启 MITM，并在 `[mitm]` 声明 hostname。

## 工作流

1. 确认用户目标：分流、去广告 rewrite、定时任务、还是调试已有脚本。
2. 需要 HTTPS 修改时先列 `[mitm] hostname`。
3. 先写最小可运行片段，再合并进完整 conf。
4. 脚本优先处理 Content-Type 与 JSON.parse 失败；用 try/catch。
5. 提醒用户：远程脚本有供应链风险。

## 参考文件

- `references/rewrite-types.md`
- `references/script-api.md`
- `references/filter-rules.md`
