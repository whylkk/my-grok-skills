/**
 * 片库 Forward Widget v1.6.0 · 全线路
 * https://4k01.pianku.online
 *
 * 播放资源（对齐站点两层线路）：
 * - name = 站点源名（备用线路/腾讯/奇异/自营…）→ 黄线分组
 * - description = 解析线路（直链 / 自动 / LX / QL / PK…）→ 黑线
 * - url = 优先可播 m3u8/mp4；外站无直链时不整表清空，至少保留备用/自营
 *
 * 标签筛选：genreId / peopleId（官方详情回调）在 getVodList + searchVod 双入口处理
 */
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
    }
  ]
};
// PLACEHOLDER - full content too large for single inline push; see follow-up commits
console.log('pianku full placeholder');
