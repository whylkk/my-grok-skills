# Quantumult X 分流规则速查

```text
host, www.apple.com, DIRECT
host-suffix, apple.com, DIRECT
host-keyword, apple, DIRECT
host-wildcard, *.icloud.com, DIRECT
ip-cidr, 17.0.0.0/8, DIRECT
ip6-cidr, 2404:6800::/32, PROXY
geoip, CN, DIRECT
geoip, CN, DIRECT, no-resolve
user-agent, MicroMessenger*, DIRECT
final, PROXY
```

## 策略组引用

规则第三段为策略名或节点 tag。

## 远程规则

```text
[filter_remote]
https://example.com/CN.list, tag=CN, force-policy=DIRECT, update-interval=86400, opt-parser=true, enabled=true
```
