WidgetMetadata = {
  id: "pianku.vod.full",
  title: "片库·全线路",
  description: "片库 · 站点源+解析线路 · 直链优先 · 标签筛选",
  author: "Grok",
  site: "https://4k01.pianku.online",
  version: "1.6.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      id: "vod",
      title: "点播",
      functionName: "loadVod",
      type: "vod",
      params: [
        { name: "url", title: "链接", type: "input", value: "" },
        { name: "keyword", title: "关键词", type: "input", value: "" }
      ]
    }
  ]
};

// PLACEHOLDER for real content - will fix
