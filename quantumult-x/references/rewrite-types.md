# Quantumult X 重写类型速查

## 拦截类

```text
^https?://ads\.example\.com/ url reject
^https?://ads\.example\.com/ url reject-200
^https?://ads\.example\.com/banner url reject-img
```

## 重定向

```text
^https?://example\.com/old path 302 https://example.com/new
```

## Header / Body / 脚本

```text
^https?://api\.example\.com/user url script-response-body user.js
^https?://api\.example\.com/ url script-request-header auth.js
```

## MITM

```text
[mitm]
hostname = api.example.com, www.example.com
```
