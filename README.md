# Komari Horizon

现代、简洁、偏仪表盘风格的 Komari 主题，适配首页节点总览和单机详情页。
## 预览
我的探针：https://vps.775544.xyz/
## 结构

```text
.
├── dist/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── komari-theme.json
└── preview.svg
```

## 当前特性

- 单文件内联页面，可直接作为 Komari 主题上传
- WebSocket 实时刷新，异常时自动回退到轮询
- 顶部统计、分类筛选、搜索、主题切换
- 首页节点卡片支持国旗、延迟、流量、剩余天数、剩余价值
- 详情页支持负载图表、网络图表、延迟图表和地区开关
- 主题设置支持强调色、默认主题模式、顶部统计显示、分类搜索显示、国旗显示

## 使用

1. 将 `dist/`、`komari-theme.json`、`preview.svg` 打成 zip。
2. 在 Komari 后台上传 zip 并启用主题。
3. 在主题管理中按需调整 `accent_color`、`default_appearance` 等配置。

## 发布包

当前打包文件名为 `Komari-Horizon.zip`。
