WidgetMetadata = {
  id: "pianku.vod.full",
  title: "片库·全线路",
  description: "片库 · 站点源+解析线路 · 直链优先 · 标签筛选",
  author: "Grok",
  site: "https://4k01.pianku.online",
  version: "1.6.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  search: {
    title: "搜索",
    functionName: "searchVod",
    params: [
      { name: "keyword", title: "关键词", type: "input", value: "" },
      { name: "page", title: "页码", type: "page" }
    ]
  },
  modules: [
    {
      id: "pk-latest",
      title: "最新更新",
      requiresWebView: false,
      cacheDuration: 600,
      functionName: "getVodList",
      type: "video",
      params: [
        { name: "page", title: "页码", type: "page" },
        { name: "t", title: "分类", type: "constant", value: "0" }
      ]
    },
    {
      id: "pk-movie",
      title: "电影",
      requiresWebView: false,
      cacheDuration: 1200,
      functionName: "getVodList",
      type: "video",
      params: [
        { name: "page", title: "页码", type: "page" },
        {
          name: "t",
          title: "分类",
          type: "enumeration",
          value: "20",
          enumOptions: [
            { title: "全部电影", value: "20" },
            { title: "动作片", value: "21" },
            { title: "喜剧片", value: "22" },
            { title: "爱情片", value: "23" },
            { title: "科幻片", value: "24" },
            { title: "恐怖片", value: "25" },
            { title: "剧情片", value: "26" },
            { title: "战争片", value: "27" },
            { title: "惊悚片", value: "28" },
            { title: "犯罪片", value: "29" },
            { title: "冒险片", value: "30" },
            { title: "动画片", value: "31" },
            { title: "悬疑片", value: "32" },
            { title: "武侠片", value: "33" },
            { title: "奇幻片", value: "34" },
            { title: "纪录片", value: "35" },
            { title: "其他片", value: "36" }
          ]
        }
      ]
    },
    {
      id: "pk-tv",
      title: "剧集",
      requiresWebView: false,
      cacheDuration: 1200,
