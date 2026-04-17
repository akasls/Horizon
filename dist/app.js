const dictionary = {
  "zh-CN": {
    emptyTitle: "没有匹配的节点",
    emptyDescription: "可以尝试切换分组或修改搜索条件。",
    searchPlaceholder: "搜索节点、分组或系统",
    live: "实时连接",
    fallback: "轮询模式",
    disconnected: "连接断开",
    connecting: "连接中",
    currentTime: "当前时间",
    nodeCount: "当前在线",
    regionCount: "节点地区",
    totalTraffic: "流量数据",
    networkSpeed: "网络速率",
    groupAll: "全部",
    groupEmpty: "未分组",
    groupLabel: "分类：",
    network: "网络",
    traffic: "总流量",
    latency: "延迟",
    latency24: "延迟统计 (24h)",
    trafficUsage: "流量使用",
    usageFlow: "合计",
    cpu: "CPU",
    memory: "RAM",
    disk: "Disk",
    online: "在线",
    offline: "离线",
    loading: "载入中",
    noData: "暂无数据",
    packetLoss: "丢包",
    jitter: "波动",
    updatedAt: "更新于",
    detailBack: "返回",
    loadTab: "负载",
    latencyTab: "延迟",
    oneHour: "1小时",
    sixHours: "6小时",
    twelveHours: "12小时",
    twentyFourHours: "1天",
    chartUnavailable: "暂无历史记录",
    cpuName: "CPU",
    architecture: "架构",
    virtualization: "虚拟化",
    gpu: "GPU",
    operatingSystem: "操作系统",
    currentNetwork: "网络",
    totalFlow: "总流量",
    totalMemory: "内存",
    totalSwap: "交换",
    totalDisk: "磁盘",
    currentUptime: "运行时间",
    lastReport: "最后上报",
    upload: "上行",
    download: "下行",
    free: "免费",
    notSet: "未设置",
    daysLeft: "余{days}天",
    admin: "管理后台",
    login: "登录",
    oauth: "OAuth 登录",
    powered: "Powered by Komari Monitor.",
    search: "搜索",
    theme: "切换主题",
    gridView: "卡片视图",
    listView: "列表视图",
    latest: "最新",
    avg: "平均",
    pingEmpty: "暂无延迟检测数据",
    unknown: "未知",
    v4: "V4",
    v6: "V6",
    vpsValue: "小鸡价值",
    remainingWorth: "剩余价值",
    allHidden: "已隐藏全部地区",
    ratePending: "汇率载入中",
    rateDate: "汇率日期"
  },
  "en-US": {
    emptyTitle: "No matching nodes",
    emptyDescription: "Try changing the group or search query.",
    searchPlaceholder: "Search node, group, or system",
    live: "Realtime",
    fallback: "Polling",
    disconnected: "Disconnected",
    connecting: "Connecting",
    currentTime: "Current time",
    nodeCount: "Online",
    regionCount: "Regions",
    totalTraffic: "Traffic",
    networkSpeed: "Network",
    groupAll: "All",
    groupEmpty: "Ungrouped",
    groupLabel: "Groups:",
    network: "Network",
    traffic: "Traffic",
    latency: "Latency",
    latency24: "Latency (24h)",
    trafficUsage: "Traffic usage",
    usageFlow: "Total",
    cpu: "CPU",
    memory: "RAM",
    disk: "Disk",
    online: "Online",
    offline: "Offline",
    loading: "Loading",
    noData: "No data",
    packetLoss: "Loss",
    jitter: "Jitter",
    updatedAt: "Updated",
    detailBack: "Back",
    loadTab: "Load",
    latencyTab: "Latency",
    oneHour: "1h",
    sixHours: "6h",
    twelveHours: "12h",
    twentyFourHours: "24h",
    chartUnavailable: "No history",
    cpuName: "CPU",
    architecture: "Architecture",
    virtualization: "Virtualization",
    gpu: "GPU",
    operatingSystem: "OS",
    currentNetwork: "Network",
    totalFlow: "Traffic",
    totalMemory: "Memory",
    totalSwap: "Swap",
    totalDisk: "Disk",
    currentUptime: "Uptime",
    lastReport: "Last report",
    upload: "Upload",
    download: "Download",
    free: "Free",
    notSet: "Unset",
    daysLeft: "{days}d left",
    admin: "Admin",
    login: "Login",
    oauth: "OAuth",
    powered: "Powered by Komari Monitor.",
    search: "Search",
    theme: "Theme",
    gridView: "Grid view",
    listView: "List view",
    latest: "Latest",
    avg: "Avg",
    pingEmpty: "No latency data",
    unknown: "Unknown",
    v4: "V4",
    v6: "V6",
    vpsValue: "VPS Value",
    remainingWorth: "Remaining value",
    allHidden: "All regions hidden",
    ratePending: "Loading FX",
    rateDate: "FX date"
  }
};

const ICONS = {
  search: "<svg viewBox='0 0 24 24'><path d='m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'/></svg>",
  theme: "<svg viewBox='0 0 24 24'><path d='M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36-1.41-1.41M7.05 7.05 5.64 5.64m12.72 0-1.41 1.41M7.05 16.95l-1.41 1.41'/><circle cx='12' cy='12' r='4'/></svg>",
  sun: "<svg viewBox='0 0 24 24'><circle cx='12' cy='12' r='4'/><path d='M12 2v2m0 16v2m10-10h-2M4 12H2m17.07 7.07-1.41-1.41M6.34 6.34 4.93 4.93m14.14 0-1.41 1.41M6.34 17.66l-1.41 1.41'/></svg>",
  moon: "<svg viewBox='0 0 24 24'><path d='M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z'/></svg>",
  system: "<svg viewBox='0 0 24 24'><rect x='3' y='4' width='18' height='12' rx='2'/><path d='M8 20h8M12 16v4'/></svg>",
  admin: "<svg viewBox='0 0 24 24'><path d='M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-8 6a8 8 0 0 1 16 0'/></svg>",
  grid: "<svg viewBox='0 0 24 24'><path d='M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 0h7v7h-7z'/></svg>",
  list: "<svg viewBox='0 0 24 24'><path d='M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01'/></svg>",
  back: "<svg viewBox='0 0 24 24'><path d='M15 18 9 12l6-6'/></svg>",
  upload: "<svg viewBox='0 0 24 24'><path d='m12 19 0-14m0 0-4 4m4-4 4 4'/></svg>",
  download: "<svg viewBox='0 0 24 24'><path d='m12 5 0 14m0 0-4-4m4 4 4-4'/></svg>",
  clock: "<svg viewBox='0 0 24 24'><circle cx='12' cy='12' r='9'/><path d='M12 7v5l3 2'/></svg>",
  cpu: "<svg viewBox='0 0 24 24'><path d='M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m14 0h2M3 15h2m14 0h2'/><rect x='7' y='7' width='10' height='10' rx='2'/><path d='M10 10h4v4h-4z'/></svg>",
  server: "<svg viewBox='0 0 24 24'><rect x='4' y='4' width='16' height='6' rx='2'/><rect x='4' y='14' width='16' height='6' rx='2'/><path d='M8 7h.01M8 17h.01M12 7h6M12 17h6'/></svg>",
  globe: "<svg viewBox='0 0 24 24'><circle cx='12' cy='12' r='9'/><path d='M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18'/></svg>",
  traffic: "<svg viewBox='0 0 24 24'><path d='M7 7h10M7 7l3-3M7 7l3 3M17 17H7m10 0-3 3m3-3-3-3'/></svg>",
  bolt: "<svg viewBox='0 0 24 24'><path d='M13 2 4 14h6l-1 8 9-12h-6Z'/></svg>",
  network: "<svg viewBox='0 0 24 24'><path d='M7 17h10M5 12h14M8 7h8'/></svg>",
  category: "<svg viewBox='0 0 24 24'><path d='M4 7h16M4 12h10M4 17h13'/></svg>",
  loss: "<svg viewBox='0 0 24 24'><path d='M6 6h12v12H6z'/><path d='m9 9 6 6M15 9l-6 6'/></svg>",
  jitter: "<svg viewBox='0 0 24 24'><path d='M3 12c2.5 0 2.5-4 5-4s2.5 8 5 8 2.5-4 5-4 2.5 4 5 4'/></svg>"
};

const HOURS_OPTIONS = [1, 6, 12, 24];
const APPEARANCE_MODES = ["system", "light", "dark"];
const LOAD_CACHE = new Map();
const PING_CACHE = new Map();
const CHART_MAX_POINTS = 72;
const FETCH_TIMEOUT_MS = 12000;
const EXTERNAL_FETCH_TIMEOUT_MS = 5000;
const STORAGE_KEYS = {
  appearance: "horizon.appearance",
  group: "horizon.group"
};

let pendingNodeRenderFrame = 0;
let pendingStatsRenderFrame = 0;

const state = {
  language: readStorageValue("i18nextLng", "zh-CN") === "en-US" ? "en-US" : "zh-CN",
  appearance: APPEARANCE_MODES.includes(readStorageValue(STORAGE_KEYS.appearance, readStorageValue("appearance", "system"))) ? readStorageValue(STORAGE_KEYS.appearance, readStorageValue("appearance", "system")) : "system",
  viewMode: "grid",
  group: readStorageValue(STORAGE_KEYS.group, readStorageValue("nodeSelectedGroup", "__all__")) || "__all__",
  query: "",
  searchOpen: false,
  detailNodeId: null,
  detailSection: "load",
  detailHours: 24,
  publicInfo: null,
  me: null,
  version: null,
  themeSettings: {},
  nodes: [],
  nodeProtocols: {},
  live: {},
  onlineSet: new Set(),
  fxRates: { loaded: false, loading: false, date: "", base: "EUR", rates: { EUR: 1 } },
  pingHiddenTasks: {},
  tooltipTarget: null,
  connectionMode: "loading",
  ws: null,
  wsTicker: null,
  fallbackTicker: null,
  clockTicker: null
};

const elements = {
  root: document.documentElement,
  themeColorMeta: document.getElementById("theme-color-meta"),
  homeLogo: document.getElementById("home-logo"),
  siteIcon: document.getElementById("site-icon"),
  siteIconFallback: document.getElementById("site-icon-fallback"),
  siteTitle: document.getElementById("site-title"),
  searchToggle: document.getElementById("search-toggle"),
  appearanceToggle: document.getElementById("appearance-toggle"),
  authLink: document.getElementById("auth-link"),
  searchPanel: document.getElementById("search-panel"),
  searchInput: document.getElementById("search-input"),
  searchInputMobile: document.getElementById("search-input-mobile"),
  searchInlineMobile: document.getElementById("search-inline-mobile"),
  connectionState: document.getElementById("connection-state"),
  updateTime: document.getElementById("update-time"),
  groupPanel: document.getElementById("group-panel"),
  groupBarMain: document.querySelector(".group-bar__main"),
  groupTitleIcon: document.querySelector(".group-title__icon"),
  groupTitleText: document.querySelector(".group-title__text"),
  groupFilter: document.getElementById("group-filter"),
  globalStats: document.getElementById("global-stats"),
  homeView: document.getElementById("home-view"),
  detailView: document.getElementById("detail-view"),
  nodeList: document.getElementById("node-list"),
  emptyState: document.getElementById("empty-state"),
  footer: document.querySelector(".footer"),
  footerVersion: document.getElementById("footer-version"),
  nodeCardTemplate: document.getElementById("node-card-template"),
  detailBack: document.getElementById("detail-back"),
  detailFlag: document.getElementById("detail-flag"),
  detailTitle: document.getElementById("detail-title"),
  detailUuid: document.getElementById("detail-uuid"),
  detailStatus: document.getElementById("detail-status"),
  detailOverview: document.getElementById("detail-overview"),
  detailSectionTabs: document.getElementById("detail-section-tabs"),
  detailHourTabs: document.getElementById("detail-hour-tabs"),
  detailLoadTab: document.getElementById("tab-load"),
  detailPingTab: document.getElementById("tab-lat"),
  detailLoadCharts: document.getElementById("detail-load-charts"),
  detailPingTitle: document.getElementById("detail-ping-title"),
  detailPingSummary: document.getElementById("detail-ping-summary"),
  detailPingChart: document.getElementById("detail-ping-chart"),
  detailPingLegend: document.getElementById("detail-ping-legend"),
  tooltip: null
};

boot().catch((error) => {
  console.error(error);
  state.connectionMode = "offline";
  renderConnectionState();
});

async function boot() {
  normalizeSharedStorage();
  applyAppearance();
  ensureTooltip();
  injectStaticIcons();
  bindEvents();
  applyTranslations();
  applyThemeSettings();
  renderChrome();
  renderNodes();
  startClock();
  await Promise.allSettled([loadPublicInfo(), loadMe(), loadVersion(), loadNodes()]);
  syncRoute();
  connectRealtime();
}

function bindEvents() {
  bindTooltipEvents();
  elements.homeLogo.addEventListener("click", () => setRouteNode(null));
  elements.searchToggle.addEventListener("click", () => {
    if (!shouldShowFilterBar() || state.detailNodeId) return;
    state.searchOpen = !state.searchOpen;
    renderSearchPanel();
    if (state.searchOpen) elements.searchInputMobile.focus();
  });
  elements.appearanceToggle.addEventListener("click", cycleAppearance);
  [elements.searchInput, elements.searchInputMobile].forEach((input) => input.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderNodes();
  }));
  elements.detailBack.addEventListener("click", () => setRouteNode(null));
  window.addEventListener("popstate", syncRoute);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  if (typeof media.addEventListener === "function") media.addEventListener("change", handleSystemAppearanceChange);
  else if (typeof media.addListener === "function") media.addListener(handleSystemAppearanceChange);
}

function ensureTooltip() {
  if (elements.tooltip) return;
  const tooltip = document.createElement("div");
  tooltip.className = "floating-tooltip hidden";
  document.body.appendChild(tooltip);
  elements.tooltip = tooltip;
}

function bindTooltipEvents() {
  document.addEventListener("pointerover", (event) => {
    const target = findTooltipTarget(event.target);
    if (!target || target === state.tooltipTarget) return;
    showTooltip(target, event);
  });
  document.addEventListener("pointermove", (event) => {
    if (!state.tooltipTarget) return;
    placeTooltip(event, state.tooltipTarget);
  });
  document.addEventListener("pointerout", (event) => {
    const from = findTooltipTarget(event.target);
    if (!from || from !== state.tooltipTarget) return;
    const to = findTooltipTarget(event.relatedTarget);
    if (to === from) return;
    hideTooltip(from);
  });
  document.addEventListener("focusin", (event) => {
    const target = findTooltipTarget(event.target);
    if (!target) return;
    showTooltip(target);
  });
  document.addEventListener("focusout", (event) => {
    const target = findTooltipTarget(event.target);
    if (!target || target !== state.tooltipTarget) return;
    hideTooltip(target);
  });
  window.addEventListener("scroll", () => {
    if (!state.tooltipTarget) return;
    placeTooltip(null, state.tooltipTarget);
  }, true);
}

function findTooltipTarget(node) {
  let current = node;
  while (current && current !== document.body) {
    if (current.dataset?.note) return current;
    current = current.parentNode;
  }
  return null;
}

function showTooltip(target, event = null) {
  const note = String(target?.dataset?.note || "").trim();
  if (!note || !elements.tooltip) return;
  state.tooltipTarget = target;
  elements.tooltip.textContent = note;
  elements.tooltip.classList.remove("hidden");
  placeTooltip(event, target);
}

function hideTooltip(target) {
  if (target && target !== state.tooltipTarget) return;
  state.tooltipTarget = null;
  if (!elements.tooltip) return;
  elements.tooltip.classList.add("hidden");
  elements.tooltip.textContent = "";
}

function placeTooltip(event, target) {
  if (!elements.tooltip || elements.tooltip.classList.contains("hidden")) return;
  const rect = target?.getBoundingClientRect?.();
  const cursorX = Number.isFinite(event?.clientX) ? event.clientX : rect ? rect.left + rect.width / 2 : 0;
  const cursorY = Number.isFinite(event?.clientY) ? event.clientY : rect ? rect.top : 0;
  elements.tooltip.style.left = "0px";
  elements.tooltip.style.top = "0px";
  const box = elements.tooltip.getBoundingClientRect();
  let left = cursorX + 14;
  let top = cursorY - box.height - 14;
  if (left + box.width > window.innerWidth - 12) left = window.innerWidth - box.width - 12;
  if (left < 12) left = 12;
  if (top < 12) top = (Number.isFinite(event?.clientY) ? event.clientY : rect?.bottom || cursorY) + 16;
  if (top + box.height > window.innerHeight - 12) top = Math.max(12, window.innerHeight - box.height - 12);
  elements.tooltip.style.left = `${left}px`;
  elements.tooltip.style.top = `${top}px`;
}

function injectStaticIcons() {
  elements.searchToggle.innerHTML = ICONS.search;
  elements.appearanceToggle.innerHTML = currentAppearanceIcon();
  elements.authLink.innerHTML = ICONS.admin;
  elements.groupTitleIcon.innerHTML = ICONS.category;
  elements.detailBack.innerHTML = `${ICONS.back}<span>${escapeHtml(t().detailBack)}</span>`;
}

function applyTranslations() {
  elements.searchInput.placeholder = t().searchPlaceholder;
  elements.searchInputMobile.placeholder = t().searchPlaceholder;
  elements.searchToggle.title = t().search;
  elements.appearanceToggle.title = t().theme;
  elements.groupTitleText.textContent = t().groupLabel;
  elements.footerVersion.textContent = footerText();
  elements.emptyState.querySelector(".empty-state__title").textContent = t().emptyTitle;
  elements.emptyState.querySelector(".empty-state__description").textContent = t().emptyDescription;
}

function startClock() {
  clearInterval(state.clockTicker);
  state.clockTicker = null;
}

async function loadPublicInfo() {
  const payload = await fetchJson("/api/public");
  state.publicInfo = payload?.data || null;
  state.themeSettings = state.publicInfo?.theme_settings || {};
  applyThemeSettings();
  if (state.publicInfo?.sitename) elements.siteTitle.textContent = state.publicInfo.sitename;
  renderSiteIcon();
  renderChrome();
}

async function loadMe() {
  try {
    state.me = await fetchJson("/api/me");
  } catch (error) {
    state.me = { logged_in: false };
  }
  await loadNodeProtocols();
  renderChrome();
  renderNodes();
}

async function loadNodeProtocols() {
  state.nodeProtocols = {};
  try {
    const rpcResponse = await fetchWithTimeout("/api/rpc2", {
      method: "POST",
      credentials: "include",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "common:getNodes", params: {} })
    }, FETCH_TIMEOUT_MS).then((response) => response.ok ? response.json() : null);
    const rpcNodes = rpcResponse?.result && typeof rpcResponse.result === "object" ? Object.values(rpcResponse.result) : [];
    if (rpcNodes.length) {
      state.nodeProtocols = Object.fromEntries(rpcNodes.map((item) => [
        item.uuid,
        {
          ipv4: Boolean(String(item?.ipv4 || "").trim()),
          ipv6: Boolean(String(item?.ipv6 || "").trim())
        }
      ]));
    }
  } catch (error) {
    state.nodeProtocols = {};
  }
  if (Object.keys(state.nodeProtocols).length || !state.me?.logged_in) return;
  try {
    const payload = await fetchJson("/api/admin/client/list");
    const list = Array.isArray(payload) ? payload : Array.isArray(payload?.data) ? payload.data : [];
    state.nodeProtocols = Object.fromEntries(list.map((item) => [
      item.uuid,
      {
        ipv4: Boolean(String(item?.ipv4 || "").trim()),
        ipv6: Boolean(String(item?.ipv6 || "").trim())
      }
    ]));
  } catch (error) {
    state.nodeProtocols = {};
  }
}

async function loadVersion() {
  try {
    const payload = await fetchJson("/api/version");
    state.version = payload?.data || null;
  } catch (error) {
    state.version = null;
  }
  elements.footerVersion.textContent = footerText();
}

async function loadNodes() {
  const payload = await fetchJson("/api/nodes");
  const collator = new Intl.Collator(state.language, { numeric: true, sensitivity: "base" });
  const nodes = Array.isArray(payload?.data) ? payload.data : [];
  state.nodes = nodes.sort((a, b) => {
    const byWeight = safeNumber(a.weight) - safeNumber(b.weight);
    if (byWeight !== 0) return byWeight;
    const byGroup = collator.compare(normalizeGroup(a.group), normalizeGroup(b.group));
    if (byGroup !== 0) return byGroup;
    const byName = collator.compare(a.name || "", b.name || "");
    if (byName !== 0) return byName;
    return collator.compare(a.uuid || "", b.uuid || "");
  });
  loadExchangeRates(nodes).then(() => {
    scheduleStatsRender();
    if (!state.detailNodeId) scheduleNodesRender();
    else renderDetailPage(false);
  });
  renderChrome();
  renderNodes();
  if (state.detailNodeId) renderDetailPage();
}

function connectRealtime() {
  clearInterval(state.fallbackTicker);
  state.fallbackTicker = null;
  if (state.ws) {
    try { state.ws.close(); } catch (error) { console.warn(error); }
  }

  const protocol = location.protocol === "https:" ? "wss:" : "ws:";
  const ws = new WebSocket(`${protocol}//${location.host}/api/clients`);
  state.ws = ws;

  ws.onopen = () => {
    state.connectionMode = "live";
    renderConnectionState();
    ws.send("get");
    clearInterval(state.wsTicker);
    state.wsTicker = window.setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) ws.send("get");
    }, 8000);
  };

  ws.onmessage = (event) => {
    const payload = safeJsonParse(event.data);
    const data = payload?.data || {};
    state.live = data.data || {};
    state.onlineSet = new Set(data.online || []);
    renderGlobalStats();
    renderConnectionState();
    renderNodes();
    if (state.detailNodeId) renderDetailPage(false);
    updateTime();
  };

  ws.onerror = startFallbackPolling;
  ws.onclose = () => {
    clearInterval(state.wsTicker);
    startFallbackPolling();
  };
}

function startFallbackPolling() {
  if (state.fallbackTicker) return;
  state.connectionMode = "fallback";
  renderConnectionState();
  const run = async () => {
    if (!state.nodes.length) return;
    const entries = await Promise.all(state.nodes.map(async (node) => {
      try {
        const payload = await fetchJson(`/api/recent/${encodeURIComponent(node.uuid)}`);
        const records = Array.isArray(payload?.data) ? payload.data : [];
        return [node.uuid, records[records.length - 1] || null];
      } catch (error) {
        return [node.uuid, null];
      }
    }));
    state.live = Object.fromEntries(entries.filter(([, value]) => value));
    state.onlineSet = new Set(entries.filter(([, value]) => value).map(([id]) => id));
    renderGlobalStats();
    renderConnectionState();
    renderNodes();
    if (state.detailNodeId) renderDetailPage(false);
    updateTime();
  };
  run();
  state.fallbackTicker = window.setInterval(run, 30000);
}

function renderChrome() {
  injectStaticIcons();
  applyTranslations();
  renderSiteIcon();
  renderGlobalStats();
  renderConnectionState();
  renderSearchPanel();
  renderGroups();
  updateAuthLink();
  elements.footerVersion.textContent = "";
  elements.footer?.classList.add("hidden");
}

function renderGlobalStats() {
  const showStats = shouldShowTopStats() && !state.detailNodeId;
  elements.globalStats.classList.toggle("hidden", !showStats);
  if (!showStats) {
    elements.globalStats.innerHTML = "";
    return;
  }
  const visible = visibleNodes();
  const liveEntries = visible.map((node) => state.live[node.uuid]).filter(Boolean);
  const onlineCount = visible.filter((node) => state.onlineSet.has(node.uuid)).length;
  const totalUp = liveEntries.reduce((sum, item) => sum + safeNumber(item?.network?.totalUp), 0);
  const totalDown = liveEntries.reduce((sum, item) => sum + safeNumber(item?.network?.totalDown), 0);
  const speedUp = liveEntries.reduce((sum, item) => sum + safeNumber(item?.network?.up), 0);
  const speedDown = liveEntries.reduce((sum, item) => sum + safeNumber(item?.network?.down), 0);
  const worthSummary = summarizeFleetWorth(visible);
  const trafficNote = `${t().upload}：${formatBytes(totalUp)}\n${t().download}：${formatBytes(totalDown)}`;
  const speedNote = `${t().upload}：${formatSpeed(speedUp)}\n${t().download}：${formatSpeed(speedDown)}`;
  const trafficTitle = state.language === "zh-CN" ? "流量总计" : "Traffic Total";
  const valueLabel = t().vpsValue || (state.language === "zh-CN" ? "小鸡价值" : "VPS Value");
  const valueReady = worthSummary.convertedCount > 0 || (worthSummary.totalCount > 0 && worthSummary.missingCount === 0);
  const valueMain = worthSummary.pending
    ? t().ratePending
    : (valueReady ? formatMoney(worthSummary.totalCny, "CNY") : "--");
  const valueSub = "";
  const valueNote = [
    `${state.language === "zh-CN" ? "服务器数量" : "Servers"}：${visible.length}`,
    `${state.language === "zh-CN" ? "总价值" : "Total value"}：${valueReady ? formatMoney(worthSummary.totalCny, "CNY") : "--"}`,
    `${state.language === "zh-CN" ? "剩余价值" : "Remaining value"}：${valueReady ? formatMoney(worthSummary.remainingCny, "CNY") : "--"}`,
    worthSummary.missingCount > 0 ? `${state.language === "zh-CN" ? "未换算节点" : "Missing FX"}：${worthSummary.missingCount}` : "",
    `${t().rateDate}：${state.fxRates.date || "--"}`
  ].filter(Boolean).join("\n");
  elements.globalStats.innerHTML = [
    statBox(valueLabel, valueMain, valueSub, ICONS.server, false, valueNote),
    statBox(t().nodeCount, `${onlineCount} / ${visible.length}`, "", ICONS.globe, false, `${t().online} ${onlineCount}\n${t().offline} ${Math.max(visible.length - onlineCount, 0)}`),
    statBox(trafficTitle, formatBytes(totalUp + totalDown), `<span class="text-up">${ICONS.upload}${escapeHtml(formatBytes(totalUp))}</span><br><span class="text-down">${ICONS.download}${escapeHtml(formatBytes(totalDown))}</span>`, ICONS.traffic, true, trafficNote),
    statBox(t().networkSpeed, formatSpeed(speedUp + speedDown), `<span class="text-up">${ICONS.upload}${escapeHtml(formatSpeed(speedUp))}</span><br><span class="text-down">${ICONS.download}${escapeHtml(formatSpeed(speedDown))}</span>`, ICONS.bolt, true, speedNote)
  ].join("");
}

function renderSearchPanel() {
  const showFilterBar = shouldShowFilterBar() && !state.detailNodeId;
  elements.searchToggle.classList.toggle("hidden", !showFilterBar);
  elements.searchPanel.classList.add("hidden");
  elements.searchInlineMobile.classList.toggle("hidden", !showFilterBar || !state.searchOpen);
  elements.searchInput.value = state.query;
  elements.searchInputMobile.value = state.query;
}

function renderGroups() {
  const inDetail = Boolean(state.detailNodeId);
  const showFilterBar = shouldShowFilterBar() && !inDetail;
  elements.groupPanel.classList.toggle("hidden", !showFilterBar);
  if (inDetail) return;
  if (!showFilterBar) {
    state.group = "__all__";
    elements.groupFilter.innerHTML = "";
    return;
  }
  const groups = Array.from(new Set(visibleNodes().map((node) => normalizeGroup(node.group)))).sort((a, b) => a.localeCompare(b, state.language));
  const options = ["__all__", ...groups];
  if (!options.includes(state.group)) {
    state.group = "__all__";
    writeStorageValue("nodeSelectedGroup", state.group);
  }
  elements.groupFilter.innerHTML = options.map((group, index) => {
    const label = group === "__all__" ? t().groupAll : group;
    const separator = index < options.length - 1 ? `<span class="group-separator">|</span>` : "";
    return `<span class="group-link-wrap"><button class="group-link${state.group === group ? " is-active" : ""}" type="button" data-group="${escapeAttribute(group)}">${escapeHtml(label)}</button>${separator}</span>`;
  }).join("");
  elements.groupFilter.querySelectorAll("[data-group]").forEach((button) => {
    button.addEventListener("click", () => {
      state.group = button.dataset.group;
      writeStorageValue(STORAGE_KEYS.group, state.group);
      renderGroups();
      renderNodes();
    });
  });
}

function renderNodes() {
  if (state.detailNodeId) return;
  const nodes = filteredNodes();
  const loading = shouldRenderNodeSkeletons();
  elements.nodeList.classList.remove("is-list");
  elements.emptyState.classList.toggle("hidden", nodes.length > 0 || loading);

  if (loading) {
    elements.nodeList.innerHTML = "";
    renderNodeSkeletons(Math.max(Math.min(state.nodes.length || 4, 6), 3));
    return;
  }
  const existingCards = Array.from(elements.nodeList.querySelectorAll(".server-card"));
  const canPatch = existingCards.length === nodes.length
    && existingCards.every((card, index) => card.querySelector(".server-card__button")?.dataset.nodeId === nodes[index].uuid);
  if (canPatch) {
    nodes.forEach((node, index) => populateNodeCard(existingCards[index], node));
  } else {
    elements.nodeList.innerHTML = "";
    nodes.forEach((node) => {
      const fragment = elements.nodeCardTemplate.content.cloneNode(true);
      const button = fragment.querySelector(".server-card__button");
      button.dataset.nodeId = node.uuid;
      button.addEventListener("click", () => setRouteNode(node.uuid));
      populateNodeCard(fragment, node);
      elements.nodeList.appendChild(fragment);
    });
  }
  primeVisiblePingData(nodes.slice(0, 12));
}

function populateNodeCard(root, node) {
  const live = state.live[node.uuid];
  const online = state.onlineSet.has(node.uuid) && Boolean(live);
  const ping = getPingOverview(node.uuid, 24);
  const families = detectIpFamilies(node, live);
  const remainInfo = remainingDaysInfo(node);
  const worth = computeRemainingWorth(node);
  const flag = root.querySelector(".srv-flag");
  const familyText = renderFamilyBadges(families);
  root.querySelector(".srv-name-text").textContent = node.name || t().unknown;
  root.querySelector(".srv-os-text").textContent = [
    simplifyOsName(node.os) || t().unknown,
    familyText,
    online ? formatDuration(live?.uptime) : t().offline
  ].filter(Boolean).join(" / ");
  root.querySelector(".srv-families").textContent = "";
  root.querySelector(".srv-uptime").textContent = "";
  const status = root.querySelector(".status-badge");
  status.textContent = online ? t().online : t().offline;
  status.className = `status-badge ${online ? "status-online" : "status-offline"}`;
  setFlagMarkup(flag, node);
  root.querySelector(".dials").innerHTML = [
    dialGroup(t().cpu, safeNumber(live?.cpu?.usage), formatCpuCapacity(node)),
    dialGroup(t().memory, percentValue(live?.ram?.used, live?.ram?.total || node.mem_total), formatBytes(live?.ram?.total || node.mem_total)),
    dialGroup(t().disk, percentValue(live?.disk?.used, live?.disk?.total || node.disk_total), formatBytes(live?.disk?.total || node.disk_total))
  ].join("");
  const usage = computeTrafficUsage(node, live);
  const labels = root.querySelectorAll("[data-row]");
  labels[0].innerHTML = metricLabel(ICONS.network, t().network, `${t().upload} ${formatSpeed(live?.network?.up)}\n${t().download} ${formatSpeed(live?.network?.down)}`);
  labels[1].innerHTML = metricLabel(ICONS.clock, t().latency, online ? `${formatLatency(ping.average)}\n${t().packetLoss} ${formatPercent(ping.loss)}\n${t().jitter} ${formatLatency(ping.jitter)}` : `-1 ms\n${t().packetLoss} 0.0%\n${t().jitter} 0.0 ms`);
  labels[2].innerHTML = metricLabel(ICONS.traffic, state.language === "zh-CN" ? "流量" : "Traffic", `${t().upload} ${formatBytes(live?.network?.totalUp)}\n${t().download} ${formatBytes(live?.network?.totalDown)}`);
  labels[3].innerHTML = metricLabel(ICONS.traffic, t().usageFlow, usage.limit ? `${formatBytes(usage.used)} / ${formatBytes(usage.limit)}` : t().notSet);
  root.querySelector(".srv-network").innerHTML = renderPlainPair(formatSpeed(live?.network?.up), formatSpeed(live?.network?.down), true);
  root.querySelector(".srv-latency").innerHTML = renderLatencyLine(ping, online);
  root.querySelector(".srv-traffic").innerHTML = renderPlainPair(formatBytes(live?.network?.totalUp), formatBytes(live?.network?.totalDown), true);
  root.querySelector(".srv-usage-meta").textContent = usage.limit ? `${formatBytes(usage.used)} / ${formatBytes(usage.limit)}` : t().notSet;
  root.querySelector(".srv-usage").innerHTML = renderUsageBar(usage);
  const billing = billingTag(node);
  const priceNode = root.querySelector(".srv-price");
  const remainNode = root.querySelector(".srv-remain");
  const worthNode = root.querySelector(".srv-worth");
  priceNode.innerHTML = billing ? tagPill(billing, "blue") : "";
  remainNode.innerHTML = remainInfo ? tagPill(remainInfo.label, remainInfo.color, remainInfo.note) : "";
  worthNode.innerHTML = worth ? `<span class="worth-pill has-note" data-note="${escapeAttribute(worth.note)}">${escapeHtml(worth.display)}</span>` : "";
  priceNode.classList.toggle("hidden", !billing);
  remainNode.classList.toggle("hidden", !remainInfo);
  worthNode.classList.toggle("hidden", !worth);
}

function renderListHeader() {
  const columns = state.language === "zh-CN"
    ? ["服务器名称", "状态", "系统", "CPU", "内存", "磁盘", "网络", "流量", "价格"]
    : ["Server", "Status", "System", "CPU", "Memory", "Disk", "Network", "Traffic", "Price"];
  return `<article class="server-row-card server-row-card--head">${columns.map((label, index) => `<span class="server-row__cell server-row__cell--${index === 0 ? "name" : "meta"}">${escapeHtml(label)}</span>`).join("")}</article>`;
}

function renderListRow(node) {
  const live = state.live[node.uuid];
  const online = state.onlineSet.has(node.uuid) && Boolean(live);
  const region = resolveRegionFlagEmoji(node);
  const name = `${shouldShowFlag() && region ? `${region} ` : ""}${node.name || t().unknown}`;
  const price = billingTag(node) || (state.language === "zh-CN" ? "未设置" : "Unset");
  return `<article class="server-row-card"><button class="server-row-button" type="button" data-node-id="${escapeAttribute(node.uuid)}"><span class="server-row__cell server-row__cell--name">${escapeHtml(name)}</span><span class="server-row__cell"><span class="status-badge ${online ? "status-online" : "status-offline"}">${escapeHtml(online ? t().online : t().offline)}</span></span><span class="server-row__cell">${escapeHtml(simplifyOsName(node.os) || t().unknown)}</span><span class="server-row__cell">${escapeHtml(formatPercent(live?.cpu?.usage))}</span><span class="server-row__cell">${escapeHtml(formatBytes(live?.ram?.used))} / ${escapeHtml(formatBytes(live?.ram?.total || node.mem_total))}</span><span class="server-row__cell">${escapeHtml(formatBytes(live?.disk?.used))} / ${escapeHtml(formatBytes(live?.disk?.total || node.disk_total))}</span><span class="server-row__cell">${escapeHtml(formatSpeed(live?.network?.up))} / ${escapeHtml(formatSpeed(live?.network?.down))}</span><span class="server-row__cell">${escapeHtml(formatBytes(live?.network?.totalUp))} / ${escapeHtml(formatBytes(live?.network?.totalDown))}</span><span class="server-row__cell">${escapeHtml(price)}</span></button></article>`;
}

function renderPlainPair(upValue, downValue, withArrows = false) {
  const upLabel = withArrows ? ICONS.upload : "";
  const downLabel = withArrows ? ICONS.download : "";
  return `<span class="plain-metric plain-metric--up">${upLabel} ${escapeHtml(upValue)}</span><span class="plain-metric plain-metric--down">${downLabel} ${escapeHtml(downValue)}</span>`;
}

function renderLatencyLine(ping, online = true) {
  const hasPing = ping.status === "ready";
  const latency = !online ? "-1 ms" : hasPing ? formatLatency(ping.average) : "-1 ms";
  const loss = online && hasPing ? formatPercent(ping.loss) : "0.0%";
  const jitter = online && hasPing ? formatLatency(ping.jitter) : "0.0 ms";
  return `<span class="plain-metric">${escapeHtml(latency)}</span><span class="plain-metric">${ICONS.loss}${escapeHtml(loss)}</span><span class="plain-metric">${ICONS.jitter}${escapeHtml(jitter)}</span>`;
}

function visibleNodes() {
  return state.nodes.filter((node) => !(node.hidden && !state.me?.logged_in));
}

function filteredNodes() {
  return visibleNodes().filter((node) => {
    const group = normalizeGroup(node.group);
    if (shouldShowFilterBar() && state.group !== "__all__" && state.group !== group) return false;
    if (!state.query) return true;
    const haystack = [node.name, node.group, node.region, node.os, node.cpu_name, node.tags, node.public_remark].filter(Boolean).join(" ").toLowerCase();
    return haystack.includes(state.query);
  });
}

function syncRoute() {
  const nodeId = new URL(location.href).searchParams.get("node");
  if (nodeId !== state.detailNodeId) state.detailSection = "load";
  state.detailNodeId = nodeId;
  renderRoute();
}

function setRouteNode(nodeId) {
  const url = new URL(location.href);
  if (nodeId) url.searchParams.set("node", nodeId);
  else url.searchParams.delete("node");
  history.pushState({}, "", url);
  if (nodeId !== state.detailNodeId) state.detailSection = "load";
  state.detailNodeId = nodeId;
  renderRoute();
}

function renderRoute() {
  const inDetail = Boolean(state.detailNodeId && state.nodes.some((node) => node.uuid === state.detailNodeId));
  elements.homeView.classList.toggle("hidden", inDetail);
  elements.detailView.classList.toggle("hidden", !inDetail);
  elements.groupPanel.classList.toggle("hidden", inDetail);
  if (inDetail) {
    state.searchOpen = false;
    renderSearchPanel();
    scrollPageTop();
    renderDetailPage(true);
    scrollPageTop();
  } else {
    renderChrome();
    renderNodes();
    scrollPageTop();
  }
}

function scrollPageTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  window.requestAnimationFrame(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
}

function renderDetailPage(includeCharts = true) {
  const node = state.nodes.find((item) => item.uuid === state.detailNodeId);
  if (!node) return;
  const live = state.live[node.uuid];
  const online = state.onlineSet.has(node.uuid) && Boolean(live);
  setFlagMarkup(elements.detailFlag, node);
  elements.detailTitle.textContent = node.name || t().unknown;
  elements.detailUuid.textContent = "";
  elements.detailUuid.classList.add("hidden");
  elements.detailStatus.textContent = online ? t().online : t().offline;
  elements.detailStatus.className = `status-badge ${online ? "status-online" : "status-offline"}`;
  elements.detailOverview.innerHTML = buildDetailOverview(node, live).join("");
  injectStaticIcons();
  renderDetailSectionTabs();
  renderHourTabs();
  if (!includeCharts) return;
  primeDetailLoadingState(node.uuid, state.detailHours);
  renderDetailLoadCharts(node);
  renderDetailPing(node);
  loadDetailData(node.uuid, state.detailHours);
}

function primeDetailLoadingState(uuid, hours) {
  const key = `${uuid}:${hours}`;
  if (!LOAD_CACHE.has(key)) LOAD_CACHE.set(key, { status: "loading", data: { records: [] } });
  if (!PING_CACHE.has(key)) PING_CACHE.set(key, { status: "loading", data: { records: [], tasks: [] } });
}

function renderDetailSectionTabs() {
  elements.detailSectionTabs.innerHTML = [
    `<button class="tab${state.detailSection === "load" ? " active" : ""}" type="button" data-detail-section="load">${escapeHtml(t().loadTab)}</button>`,
    `<button class="tab${state.detailSection === "ping" ? " active" : ""}" type="button" data-detail-section="ping">${escapeHtml(t().latencyTab)}</button>`
  ].join("");
  elements.detailLoadTab.classList.toggle("tab-content--active", state.detailSection === "load");
  elements.detailPingTab.classList.toggle("tab-content--active", state.detailSection === "ping");
  elements.detailSectionTabs.querySelectorAll("[data-detail-section]").forEach((button) => {
    button.addEventListener("click", () => {
      state.detailSection = button.dataset.detailSection === "ping" ? "ping" : "load";
      renderDetailSectionTabs();
    });
  });
}

function renderHourTabs() {
  elements.detailHourTabs.innerHTML = HOURS_OPTIONS.map((hours) => {
    const label = hours === 1 ? t().oneHour : hours === 6 ? t().sixHours : hours === 12 ? t().twelveHours : t().twentyFourHours;
    return `<button class="tab${state.detailHours === hours ? " active" : ""}" type="button" data-hours="${hours}">${escapeHtml(label)}</button>`;
  }).join("");
  elements.detailHourTabs.querySelectorAll("[data-hours]").forEach((button) => {
    button.addEventListener("click", () => {
      state.detailHours = safeNumber(button.dataset.hours) || 24;
      renderHourTabs();
      renderDetailPage(true);
    });
  });
}

function buildDetailOverview(node, live) {
  return [
    specBox(t().cpuName, node.cpu_name || t().unknown, `${node.cpu_cores || 0} Cores`),
    specBox(t().architecture, node.arch || t().unknown),
    specBox(t().virtualization, node.virtualization || t().unknown),
    specBox(t().gpu, node.gpu_name || t().unknown),
    specBox(t().operatingSystem, node.os || t().unknown, node.kernel_version || "--"),
    specBox(t().currentNetwork, `${formatSpeed(live?.network?.up)} / ${formatSpeed(live?.network?.down)}`),
    specBox(t().totalFlow, `${formatBytes(live?.network?.totalUp)} / ${formatBytes(live?.network?.totalDown)}`),
    specBox(t().totalMemory, formatBytes(node.mem_total)),
    specBox(t().totalSwap, formatBytes(node.swap_total)),
    specBox(t().totalDisk, formatBytes(node.disk_total)),
    specBox(t().currentUptime, live ? formatDuration(live.uptime) : t().noData),
    specBox(t().lastReport, live?.updated_at ? formatDateTime(live.updated_at) : "--")
  ];
}

async function loadDetailData(uuid, hours) {
  await Promise.allSettled([loadLoadHistory(uuid, hours), loadPingHistory(uuid, hours)]);
  if (state.detailNodeId !== uuid || state.detailHours !== hours) return;
  const node = state.nodes.find((item) => item.uuid === uuid);
  if (!node) return;
  renderDetailLoadCharts(node);
  renderDetailPing(node);
}

async function loadLoadHistory(uuid, hours) {
  const key = `${uuid}:${hours}`;
  const current = LOAD_CACHE.get(key);
  if (current?.status === "loaded") return current?.data || null;
  if (current?.status === "loading" && current?.promise) return current.promise;
  const request = (async () => {
    const payload = await fetchJson(`/api/records/load?uuid=${encodeURIComponent(uuid)}&hours=${hours}`);
    const data = payload?.data || { records: [] };
    LOAD_CACHE.set(key, { status: "loaded", data });
    return data;
  })().catch(() => {
    LOAD_CACHE.set(key, { status: "error", data: { records: [] } });
    return { records: [] };
  });
  LOAD_CACHE.set(key, { status: "loading", data: current?.data || { records: [] }, promise: request });
  return request;
}

async function loadPingHistory(uuid, hours) {
  const key = `${uuid}:${hours}`;
  const current = PING_CACHE.get(key);
  if (current?.status === "loaded") return current?.data || null;
  if (current?.status === "loading" && current?.promise) return current.promise;
  const request = (async () => {
    const payload = await fetchJson(`/api/records/ping?uuid=${encodeURIComponent(uuid)}&hours=${hours}`);
    const data = payload?.data || { records: [], tasks: [] };
    PING_CACHE.set(key, { status: "loaded", data });
    return data;
  })().catch(() => {
    PING_CACHE.set(key, { status: "error", data: { records: [], tasks: [] } });
    return { records: [], tasks: [] };
  });
  PING_CACHE.set(key, { status: "loading", data: current?.data || { records: [], tasks: [] }, promise: request });
  return request;
}

function renderDetailLoadCharts(node) {
  const entry = LOAD_CACHE.get(`${node.uuid}:${state.detailHours}`);
  if (entry?.status === "loading") {
    elements.detailLoadCharts.innerHTML = [loadingChartCard(), loadingChartCard()].join("");
    return;
  }
  const live = state.live[node.uuid];
  const records = Array.isArray(LOAD_CACHE.get(`${node.uuid}:${state.detailHours}`)?.data?.records) ? LOAD_CACHE.get(`${node.uuid}:${state.detailHours}`).data.records : [];
  const sampledRecords = sampleRecords(records, CHART_MAX_POINTS);
  const cpuSeries = sampledRecords.map((item) => safeNumber(item.cpu));
  const memorySeries = sampledRecords.map((item) => historyPercent(item, ["ram", "memory", "ram_percent", "memory_percent"], ["ram_used", "memory_used", "mem_used"], live?.ram?.total || node.mem_total));
  const diskSeries = sampledRecords.map((item) => historyPercent(item, ["disk", "disk_percent"], ["disk_used"], live?.disk?.total || node.disk_total));
  const netOutSeries = sampledRecords.map((item) => firstFinite(item.net_out, item.network_out, item.upload, item.up));
  const netInSeries = sampledRecords.map((item) => firstFinite(item.net_in, item.network_in, item.download, item.down));
  const cards = [
    {
      title: `${t().cpu} / ${t().memory} / ${t().disk}`,
      icon: ICONS.server,
      value: live ? `${t().cpu} ${formatPercent(live?.cpu?.usage)}` : t().loading,
      sub: live ? `${t().memory} ${formatPercent(percentValue(live?.ram?.used, live?.ram?.total || node.mem_total))} · ${t().disk} ${formatPercent(percentValue(live?.disk?.used, live?.disk?.total || node.disk_total))}` : (node.cpu_name || t().unknown),
      note: live ? `${t().cpu} ${formatPercent(live?.cpu?.usage)}\n${t().memory} ${formatPercent(percentValue(live?.ram?.used, live?.ram?.total || node.mem_total))}\n${t().disk} ${formatPercent(percentValue(live?.disk?.used, live?.disk?.total || node.disk_total))}` : (node.cpu_name || t().unknown),
      svg: buildLineChart([
        { values: cpuSeries, color: varAccent(), titles: buildSeriesTitles(t().cpu, cpuSeries, sampledRecords, (value) => `${Math.round(value)}%`) },
        { values: memorySeries, color: "var(--warning)", titles: buildSeriesTitles(t().memory, memorySeries, sampledRecords, (value) => `${value.toFixed(1)}%`) },
        { values: diskSeries, color: "var(--success)", titles: buildSeriesTitles(t().disk, diskSeries, sampledRecords, (value) => `${value.toFixed(1)}%`) }
      ], { max: 100, formatter: (value) => `${Math.round(value)}%`, showArea: false, useCssColor: false, interactive: true, xLabels: buildTimeAxisLabels(sampledRecords.map((item) => item?.time)) }),
      legend: [legendItem(varAccent(), t().cpu), legendItem("var(--warning)", t().memory), legendItem("var(--success)", t().disk)]
    },
    {
      title: t().network,
      icon: ICONS.network,
      value: `${t().upload} ${formatSpeed(live?.network?.up)}`,
      sub: `${t().download} ${formatSpeed(live?.network?.down)}`,
      note: `${t().upload} ${formatSpeed(live?.network?.up)}\n${t().download} ${formatSpeed(live?.network?.down)}`,
      svg: buildLineChart([
        { values: netOutSeries, color: "var(--success)", titles: buildSeriesTitles(t().upload, netOutSeries, sampledRecords, formatSpeed) },
        { values: netInSeries, color: varAccent(), titles: buildSeriesTitles(t().download, netInSeries, sampledRecords, formatSpeed) }
      ], { max: maxValue([...netInSeries, ...netOutSeries], 1), formatter: formatSpeed, showArea: false, useCssColor: false, interactive: true, xLabels: buildTimeAxisLabels(sampledRecords.map((item) => item?.time)) }),
      legend: [legendItem("var(--success)", t().upload), legendItem(varAccent(), t().download)]
    }
  ];
  elements.detailLoadCharts.innerHTML = cards.map((card) => chartCard(card)).join("");
}

function renderDetailPing(node) {
  const entry = PING_CACHE.get(`${node.uuid}:${state.detailHours}`);
  if (entry?.status === "loading") {
    elements.detailPingTitle.textContent = `${t().latencyTab} · ${hoursLabel(state.detailHours)}`;
    elements.detailPingSummary.textContent = t().loading;
    elements.detailPingChart.innerHTML = buildLoadingChart();
    elements.detailPingLegend.innerHTML = "";
    return;
  }
  const data = entry?.data || { records: [], tasks: [] };
  const overview = summarizePing(data);
  elements.detailPingTitle.textContent = overview.sampleCount ? `${t().latencyTab} · ${hoursLabel(state.detailHours)}` : t().pingEmpty;
  elements.detailPingSummary.textContent = overview.sampleCount ? `${t().avg} ${formatLatency(overview.average)} · ${t().packetLoss} ${formatPercent(overview.loss)} · ${t().jitter} ${formatLatency(overview.jitter)}` : t().chartUnavailable;
  if (!overview.sampleCount) {
    elements.detailPingChart.innerHTML = buildEmptyChart(t().chartUnavailable);
    elements.detailPingLegend.innerHTML = "";
    return;
  }
  const colors = colorPalette();
  const visibility = state.pingHiddenTasks[node.uuid] || {};
  const taskSeries = overview.taskStats.map((task, index) => {
    const sampled = sampleSeriesWithTime(task.series, task.times, CHART_MAX_POINTS);
    return {
      id: String(task.id ?? task.name),
      name: task.name,
      color: colors[index % colors.length],
      visible: visibility[String(task.id ?? task.name)] !== false,
      values: sampled.map((item) => item.value),
      times: sampled.map((item) => item.time),
      note: `${t().latest} ${formatLatency(task.latest)}\n${t().avg} ${formatLatency(task.average)}\n${t().packetLoss} ${formatPercent(task.loss)}\n${t().jitter} ${formatLatency(task.jitter)}`,
      titles: sampled.map(({ value, time }) => formatPingTooltip(time, task.name, value, task.loss, task.jitter))
    };
  });
  const visibleSeries = taskSeries.filter((task) => task.visible).map((task) => ({
    values: task.values,
    color: task.color,
    titles: task.titles
  }));
  if (!visibleSeries.length) {
    elements.detailPingChart.innerHTML = buildEmptyChart(t().allHidden);
  } else {
    elements.detailPingChart.innerHTML = buildLineChart(visibleSeries, {
      max: maxValue(taskSeries.flatMap((task) => task.values), 10),
      formatter: formatLatency,
      useCssColor: false,
      showArea: false,
      interactive: true,
      xLabels: buildTimeAxisLabels(taskSeries.find((task) => task.visible)?.times || [])
    });
  }
  elements.detailPingLegend.innerHTML = taskSeries.map((task) => toggleLegendItem(task.color, task.name, task.note, task.id, task.visible)).join("");
  elements.detailPingLegend.querySelectorAll("[data-ping-task]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.pingTask;
      state.pingHiddenTasks[node.uuid] = { ...(state.pingHiddenTasks[node.uuid] || {}), [key]: visibility[key] === false };
      renderDetailPing(node);
    });
  });
}

function primeVisiblePingData(nodes) {
  nodes.forEach((node) => {
    const key = `${node.uuid}:24`;
    if (!PING_CACHE.has(key)) loadPingHistory(node.uuid, 24).then(() => {
      if (!state.detailNodeId) scheduleNodesRender();
    });
  });
}

function summarizePing(data) {
  const records = Array.isArray(data?.records) ? data.records : [];
  const tasks = Array.isArray(data?.tasks) ? data.tasks : [];
  const grouped = new Map();
  records.forEach((record) => {
    const key = safeNumber(record.task_id);
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(record);
  });
  const taskStats = tasks.map((task) => {
    const rows = (grouped.get(safeNumber(task.id)) || []).slice().sort((a, b) => new Date(a.time) - new Date(b.time));
    const series = rows.map((row) => safeNumber(row.value));
    return { id: safeNumber(task.id), name: task.name || `Task ${task.id}`, loss: safeNumber(task.loss), latest: series.length ? series[series.length - 1] : 0, average: average(series), jitter: calculateJitter(series), series, times: rows.map((row) => row.time) };
  }).filter((task) => task.series.length > 0);
  const all = taskStats.flatMap((task) => task.series);
  return { sampleCount: all.length, average: average(all), loss: average(taskStats.map((task) => task.loss)), jitter: average(taskStats.map((task) => task.jitter)), taskStats };
}

function getPingOverview(uuid, hours) {
  const cacheEntry = PING_CACHE.get(`${uuid}:${hours}`);
  const entry = cacheEntry?.data;
  if (!entry) return { average: 0, loss: 0, jitter: 0, status: cacheEntry?.status || "idle" };
  const overview = summarizePing(entry);
  if (!overview.sampleCount) return { average: 0, loss: 0, jitter: 0, status: cacheEntry?.status === "loading" ? "loading" : "empty" };
  return { average: overview.average, loss: overview.loss, jitter: overview.jitter, status: "ready" };
}

function renderConnectionState() {
  const mapping = { live: [t().live, "status-inline status-inline--online"], fallback: [t().fallback, "status-inline status-inline--loading"], offline: [t().disconnected, "status-inline status-inline--offline"], loading: [t().connecting, "status-inline status-inline--loading"] };
  const [label, className] = mapping[state.connectionMode] || mapping.loading;
  elements.connectionState.textContent = label;
  elements.connectionState.className = className;
}

function updateAuthLink() {
  if (state.me?.logged_in) {
    elements.authLink.href = "/admin";
    elements.authLink.title = t().admin;
    return;
  }
  if (state.publicInfo?.oauth_enable) {
    elements.authLink.href = "/api/oauth";
    elements.authLink.title = t().oauth;
    return;
  }
  elements.authLink.href = "/admin";
  elements.authLink.title = t().login;
}

function cycleAppearance() {
  const next = APPEARANCE_MODES[(APPEARANCE_MODES.indexOf(state.appearance) + 1) % APPEARANCE_MODES.length];
  state.appearance = next;
  writeStorageValue(STORAGE_KEYS.appearance, next);
  applyAppearance();
  renderChrome();
  if (state.detailNodeId) renderDetailPage();
  else renderNodes();
}

function applyAppearance() {
  const effective = state.appearance === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : state.appearance;
  elements.root.dataset.appearance = effective;
  updateThemeColorMeta(effective);
}

function updateThemeColorMeta(effective) {
  const color = effective === "dark" ? "#07111f" : "#f0f4f8";
  if (elements.themeColorMeta) elements.themeColorMeta.setAttribute("content", color);
  document.documentElement.style.backgroundColor = color;
  document.documentElement.style.colorScheme = effective;
  if (document.body) {
    document.body.style.backgroundColor = color;
    document.body.style.colorScheme = effective;
  }
}

function currentAppearanceIcon() {
  if (state.appearance === "system") return ICONS.system;
  const effective = elements.root.dataset.appearance || "light";
  return effective === "dark" ? ICONS.moon : ICONS.sun;
}

function handleSystemAppearanceChange() {
  if (state.appearance !== "system") return;
  applyAppearance();
  renderChrome();
  if (state.detailNodeId) renderDetailPage();
  else renderNodes();
}

function cycleView() {
  state.viewMode = state.viewMode === "grid" ? "table" : "grid";
  writeStorageValue("nodeViewMode", state.viewMode);
  renderChrome();
  renderNodes();
}

function applyThemeSettings() {
  elements.root.dataset.accent = String(readSetting("accent_color", "Blue")).toLowerCase();
  if (!hasStorageValue(STORAGE_KEYS.appearance)) {
    state.appearance = resolveAppearanceMode(readSetting("default_appearance", "System"));
    applyAppearance();
  }
}

function readSetting(key, fallback) {
  if (!state.themeSettings || !(key in state.themeSettings)) return fallback;
  return state.themeSettings[key];
}

function readBooleanSetting(key, fallback) {
  const value = readSetting(key, fallback);
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  if (typeof value === "string") return !["false", "0", "no", "off", ""].includes(value.trim().toLowerCase());
  return Boolean(value);
}

function shouldShowTopStats() { return readBooleanSetting("show_top_stats", true); }
function shouldShowFilterBar() {
  if (state.themeSettings && Object.prototype.hasOwnProperty.call(state.themeSettings, "show_filter_bar")) return readBooleanSetting("show_filter_bar", true);
  if (state.themeSettings && ("show_group_filter" in state.themeSettings || "show_search_box" in state.themeSettings)) return readBooleanSetting("show_group_filter", true) || readBooleanSetting("show_search_box", true);
  return true;
}
function shouldShowFlag() { return readBooleanSetting("show_region_flag", true); }
function t() { return dictionary[state.language] || dictionary["zh-CN"]; }
function footerText() { return `${t().powered}${state.version?.version ? ` · ${state.version.version}` : ""}`; }

function statBox(label, value, subMarkup, iconMarkup, rich = false, note = "") {
  const iconAttrs = note ? ` class="metric-icon has-note" data-note="${escapeAttribute(note)}"` : ` class="metric-icon"`;
  return `<article class="stat-box"><div class="stat-box__title"><span>${escapeHtml(label)}</span><span${iconAttrs}>${iconMarkup}</span></div><div class="stat-box__value">${escapeHtml(value)}</div>${rich ? `<div class="stat-box__sub">${subMarkup}</div>` : subMarkup ? `<div class="stat-box__sub">${escapeHtml(subMarkup)}</div>` : ""}</article>`;
}

function dialGroup(label, percent, sub) {
  const safePercent = clamp(safeNumber(percent), 0, 100).toFixed(1);
  return `<div class="dial-group"><div class="circle-wrap" style="--pct:${safePercent}%"><div class="circle-inner">${escapeHtml(formatPercent(percent))}</div></div><div class="dial-label">${escapeHtml(label)}</div><div class="dial-val">${escapeHtml(sub)}</div></div>`;
}

function inlineMetric(iconMarkup, value, tone) {
  return `<span class="inline-metric${tone ? ` inline-metric--${tone}` : ""}">${iconMarkup}${escapeHtml(value)}</span>`;
}

function renderUsageBar(info) {
  if (!info.limit) return `<div class="usage-bar usage-bar--empty"><div class="usage-bar__track"><span style="width:0%"></span></div></div>`;
  return `<div class="usage-bar"><div class="usage-bar__track"><span style="width:${clamp(info.percent, 0, 100).toFixed(1)}%"></span></div></div>`;
}

function computeNodeWorthSnapshot(node) {
  const price = safeNumber(node?.price);
  const cycleDays = safeNumber(node?.billing_cycle);
  if (price <= 0 || cycleDays <= 0) return null;
  const currency = resolveCurrencyCode(node);
  const expiredAt = node?.expired_at ? new Date(node.expired_at).getTime() : NaN;
  const remainingMs = Number.isFinite(expiredAt) ? Math.max(0, expiredAt - Date.now()) : 0;
  const remainingRatio = clamp(remainingMs / (cycleDays * 86400000), 0, 1);
  const totalSource = price;
  const remainingSource = price * remainingRatio;
  const cnyRate = getCnyRate(currency);
  return {
    currency,
    totalSource,
    remainingSource,
    cnyRate,
    totalCny: cnyRate ? totalSource * cnyRate : null,
    remainingCny: cnyRate ? remainingSource * cnyRate : null
  };
}

function summarizeFleetWorth(nodes) {
  const summary = (Array.isArray(nodes) ? nodes : []).reduce((result, node) => {
    const snapshot = computeNodeWorthSnapshot(node);
    if (!snapshot) return result;
    result.totalCount += 1;
    if (!Number.isFinite(snapshot.totalCny) || !Number.isFinite(snapshot.remainingCny)) {
      result.missingCount += 1;
    } else {
      result.convertedCount += 1;
      result.totalCny += snapshot.totalCny;
      result.remainingCny += snapshot.remainingCny;
    }
    return result;
  }, {
    totalCount: 0,
    convertedCount: 0,
    missingCount: 0,
    totalCny: 0,
    remainingCny: 0
  });
  summary.pending = state.fxRates.loading && summary.missingCount > 0;
  return summary;
}

function tagPill(label, colorClass, note = "") {
  const tooltip = note ? ` data-note="${escapeAttribute(note)}"` : "";
  const helper = note ? " has-note" : "";
  return `<span class="tag${colorClass ? ` ${colorClass}` : ""}${helper}"${tooltip}>${escapeHtml(label)}</span>`;
}
function billingTag(node) { if (safeNumber(node.price) < 0) return t().free; if (!safeNumber(node.price)) return ""; return `${node.currency || "$"}${safeNumber(node.price).toFixed(2)}/${billingCycleLabel(node.billing_cycle)}`; }
function remainingDaysInfo(node) {
  if (!node.expired_at || String(node.expired_at).startsWith("0001-")) return null;
  const diff = new Date(node.expired_at).getTime() - Date.now();
  if (!Number.isFinite(diff)) return null;
  const days = Math.max(0, Math.ceil(diff / 86400000));
  const color = days < 10 ? "red" : days < 30 ? "yellow" : "green";
  return {
    days,
    color,
    label: t().daysLeft.replace("{days}", String(days)),
    note: `${state.language === "zh-CN" ? "到期时间" : "Expires"}：${formatDateTime(node.expired_at)}`
  };
}
function billingCycleLabel(days) { const safeDays = safeNumber(days); if (safeDays >= 365) return state.language === "zh-CN" ? "年" : "yr"; if (safeDays >= 30) return state.language === "zh-CN" ? "月" : "mo"; return state.language === "zh-CN" ? "天" : "d"; }
function specBox(label, value, sub = "") { return `<article class="spec-box"><div class="spec-label">${escapeHtml(label)}</div><div class="spec-val">${escapeHtml(value)}</div>${sub ? `<div class="spec-sub">${escapeHtml(sub)}</div>` : ""}</article>`; }
function chartCard(card) { return `<article class="chart-card"><div class="chart-header"><span class="chart-title">${card.icon ? `<span class="chart-title__icon has-note" data-note="${escapeAttribute(card.note || card.title)}">${card.icon}</span>` : ""}<span>${escapeHtml(card.title)}</span></span><span class="chart-val">${escapeHtml(card.value)}${card.sub ? `<br>${escapeHtml(card.sub)}` : ""}</span></div><svg class="chart-svg" viewBox="0 0 960 320" preserveAspectRatio="xMidYMid meet">${card.svg}</svg><div class="chart-legend">${card.legend.join("")}</div></article>`; }
function legendItem(color, label, note = "") {
  const tooltip = note ? ` data-note="${escapeAttribute(note)}"` : "";
  return `<span class="legend-item"${tooltip}><span class="legend-swatch" style="background:${color}"></span>${escapeHtml(label)}</span>`;
}
function toggleLegendItem(color, label, note, taskId, visible) {
  const tooltip = note ? ` data-note="${escapeAttribute(note)}"` : "";
  return `<button class="legend-item legend-item--toggle${visible ? "" : " is-muted"}" type="button" data-ping-task="${escapeAttribute(taskId)}"${tooltip}><span class="legend-swatch" style="background:${color}"></span>${escapeHtml(label)}</button>`;
}

function buildLineChart(series, options) {
  const width = 960, height = 320, xLabels = Array.isArray(options?.xLabels) ? options.xLabels : [], padding = { top: 16, right: 16, bottom: xLabels.length ? 44 : 26, left: 52 }, innerWidth = width - padding.left - padding.right, innerHeight = height - padding.top - padding.bottom;
  const count = Math.max(...series.map((item) => item.values.length), 0);
  if (!count) return buildEmptyChart(t().chartUnavailable);
  const max = Math.max(options.max || maxValue(series.flatMap((item) => item.values), 1), 1);
  const y = (value) => padding.top + innerHeight - (clamp(safeNumber(value), 0, max) / max) * innerHeight;
  const x = (index) => padding.left + (index / Math.max(count - 1, 1)) * innerWidth;
  const grid = [0, 0.25, 0.5, 0.75, 1].map((ratio) => `<line x1="${padding.left}" y1="${(padding.top + innerHeight - innerHeight * ratio).toFixed(2)}" x2="${width - padding.right}" y2="${(padding.top + innerHeight - innerHeight * ratio).toFixed(2)}"></line><text x="${padding.left - 8}" y="${(padding.top + innerHeight - innerHeight * ratio + 4).toFixed(2)}" text-anchor="end">${escapeHtml(options.formatter(max * ratio))}</text>`).join("");
  const area = options.showArea === false ? "" : (() => { const first = series[0]; const path = first.values.map((value, index) => `${index === 0 ? "M" : "L"}${x(index).toFixed(2)},${y(value).toFixed(2)}`).join(" "); return `<path class="area" d="${path} L ${x(first.values.length - 1).toFixed(2)},${(padding.top + innerHeight).toFixed(2)} L ${x(0).toFixed(2)},${(padding.top + innerHeight).toFixed(2)} Z"></path>`; })();
  const paths = series.map((item, index) => {
    const path = item.values.map((value, pointIndex) => `${pointIndex === 0 ? "M" : "L"}${x(pointIndex).toFixed(2)},${y(value).toFixed(2)}`).join(" ");
    return `<path class="${options.useCssColor === false ? "" : `line${index === 1 ? " line--secondary" : index === 2 ? " line--tertiary" : ""}`}" d="${path}"${options.useCssColor === false ? ` style="fill:none;stroke:${item.color};stroke-width:2;stroke-linecap:round;stroke-linejoin:round"` : ""}></path>`;
  }).join("");
  const points = options.interactive ? series.map((item, index) => item.values.map((value, pointIndex) => {
    const title = item.titles?.[pointIndex] || options.formatter(value);
    const note = title ? ` data-note="${escapeAttribute(title)}"` : "";
    return `<circle class="chart-point${options.useCssColor === false ? " chart-point--custom" : ""}" cx="${x(pointIndex).toFixed(2)}" cy="${y(value).toFixed(2)}" r="3.4"${note}${options.useCssColor === false ? ` style="fill:${item.color};stroke:${item.color}"` : index === 1 ? ` data-tone="secondary"` : ""}></circle>`;
  }).join("")).join("") : "";
  const axisLabels = xLabels.map((item) => `<g class="axis-label"><line x1="${x(item.index).toFixed(2)}" y1="${(padding.top + innerHeight).toFixed(2)}" x2="${x(item.index).toFixed(2)}" y2="${(padding.top + innerHeight + 6).toFixed(2)}"></line><text x="${x(item.index).toFixed(2)}" y="${height - 8}" text-anchor="${item.anchor || "middle"}">${escapeHtml(item.label)}</text></g>`).join("");
  return `<g class="grid">${grid}</g><g class="axis"><line x1="${padding.left}" y1="${padding.top + innerHeight}" x2="${width - padding.right}" y2="${padding.top + innerHeight}"></line>${axisLabels}</g>${area}${paths}${points}`;
}

function buildEmptyChart(label) { return `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">${escapeHtml(label)}</text>`; }
function computeTrafficUsage(node, live) { const limit = safeNumber(node.traffic_limit); if (!limit) return { used: 0, limit: 0, percent: 0 }; const up = safeNumber(live?.network?.totalUp), down = safeNumber(live?.network?.totalDown); const used = up + down; return { used, limit, percent: limit ? (used / limit) * 100 : 0 }; }
async function loadExchangeRates(nodes) {
  const currencySet = Array.from(new Set((Array.isArray(nodes) ? nodes : []).map((node) => resolveCurrencyCode(node)).filter(Boolean)));
  const quotes = Array.from(new Set(["CNY", ...currencySet].filter((currency) => currency !== "EUR")));
  if (!quotes.length || state.fxRates.loading) return;
  state.fxRates.loading = true;
  const endpoints = [
    `https://api.frankfurter.dev/v2/rates?quotes=${encodeURIComponent(quotes.join(","))}`,
    `https://api.frankfurter.dev/v1/latest?symbols=${encodeURIComponent(quotes.join(","))}`
  ];
  for (const endpoint of endpoints) {
    try {
      const response = await fetchWithTimeout(endpoint, {
        headers: { Accept: "application/json" },
        credentials: "omit",
        referrerPolicy: "no-referrer"
      }, EXTERNAL_FETCH_TIMEOUT_MS);
      if (!response.ok) continue;
      const payload = await response.json();
      const normalized = normalizeFxPayload(payload);
      if (!normalized) continue;
      state.fxRates = {
        loaded: true,
        loading: false,
        date: normalized.date,
        base: normalized.base,
        rates: normalized.rates
      };
      return;
    } catch (error) {
      continue;
    }
  }
  state.fxRates = { ...state.fxRates, loaded: false, loading: false };
}
function normalizeFxPayload(payload) {
  if (Array.isArray(payload)) {
    const rates = { EUR: 1 };
    let date = "";
    let base = "EUR";
    payload.forEach((item) => {
      const quote = String(item?.quote || item?.symbol || "").toUpperCase();
      const rate = safeNumber(item?.price ?? item?.rate ?? item?.value);
      if (quote && rate) rates[quote] = rate;
      if (!date && item?.date) date = String(item.date);
      if (item?.base) base = String(item.base).toUpperCase();
    });
    return Object.keys(rates).length > 1 ? { date, base, rates } : null;
  }
  if (payload && typeof payload === "object" && payload.rates) {
    const base = String(payload.base || "EUR").toUpperCase();
    return {
      date: String(payload.date || payload.updatedAt || ""),
      base,
      rates: { [base]: 1, ...(payload.rates || {}) }
    };
  }
  return null;
}
function loadingChartCard() {
  return `<article class="chart-card chart-card--loading"><div class="chart-header"><span class="chart-title">${escapeHtml(t().loading)}</span></div><div class="chart-loading"><span class="skeleton skeleton--line skeleton--wide"></span><span class="skeleton skeleton--line"></span><span class="skeleton skeleton--chart"></span></div></article>`;
}
function buildLoadingChart() {
  return `<g class="chart-loading-svg"><rect class="chart-loading-bar" x="52" y="56" width="856" height="10" rx="5"></rect><rect class="chart-loading-bar" x="52" y="112" width="856" height="10" rx="5"></rect><rect class="chart-loading-bar" x="52" y="168" width="856" height="10" rx="5"></rect><rect class="chart-loading-bar" x="52" y="224" width="856" height="10" rx="5"></rect><rect class="chart-loading-bar chart-loading-bar--short" x="52" y="258" width="280" height="8" rx="4"></rect></g>`;
}
function computeRemainingWorth(node) {
  const price = safeNumber(node?.price);
  const cycleDays = safeNumber(node?.billing_cycle);
  if (price <= 0 || cycleDays <= 0 || !node?.expired_at) return null;
  const remainingMs = new Date(node.expired_at).getTime() - Date.now();
  if (!Number.isFinite(remainingMs) || remainingMs <= 0) return null;
  const remainingRatio = clamp(remainingMs / (cycleDays * 86400000), 0, 1);
  const sourceValue = price * remainingRatio;
  const currency = resolveCurrencyCode(node);
  const cnyRate = getCnyRate(currency);
  if (!cnyRate) {
    return {
      display: `${t().remainingWorth} ${formatMoney(sourceValue, currency)}`,
      note: `${t().remainingWorth}：${formatMoney(sourceValue, currency)}\n${state.language === "zh-CN" ? "当前汇率" : "Current rate"}：--\n${t().rateDate}：--`
    };
  }
  const cnyValue = sourceValue * cnyRate;
  return {
    display: `${t().remainingWorth} ${formatMoney(cnyValue, "CNY")}`,
    note: `${t().remainingWorth}：${formatMoney(sourceValue, currency)}\n${state.language === "zh-CN" ? "当前汇率" : "Current rate"}：1 ${currency} ≈ ${formatMoney(cnyRate, "CNY")}\n${t().rateDate}：${state.fxRates.date || "--"}`
  };
}
function getCnyRate(currency) {
  const code = String(currency || "").toUpperCase();
  if (!code) return 0;
  if (code === "CNY") return 1;
  const cny = safeNumber(state.fxRates?.rates?.CNY);
  if (!cny) return 0;
  if (code === "EUR") return cny;
  const baseRate = safeNumber(state.fxRates?.rates?.[code]);
  return baseRate ? cny / baseRate : 0;
}
function resolveCurrencyCode(node) {
  const candidates = [node?.currency_code, node?.currency, node?.currency_symbol];
  for (const candidate of candidates) {
    const raw = String(candidate || "").trim();
    if (!raw) continue;
    const upper = raw.toUpperCase();
    if (/^[A-Z]{3}$/.test(upper)) return upper;
    if (raw === "$" || raw === "US$") return "USD";
    if (raw === "€") return "EUR";
    if (raw === "£") return "GBP";
    if (raw === "¥" || raw === "￥" || upper === "RMB") return "CNY";
    if (raw === "HK$") return "HKD";
    if (raw === "C$") return "CAD";
    if (raw === "A$") return "AUD";
  }
  return "USD";
}
function readStorageValue(key, fallback = "") {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null || raw === undefined || raw === "") return fallback;
    try {
      return JSON.parse(raw);
    } catch (error) {
      return raw;
    }
  } catch (error) {
    return fallback;
  }
}
function writeStorageValue(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(error);
  }
}
function normalizeSharedStorage() {
  writeStorageValue(STORAGE_KEYS.group, readStorageValue(STORAGE_KEYS.group, readStorageValue("nodeSelectedGroup", state.group)));
  if (!hasStorageValue(STORAGE_KEYS.appearance)) {
    writeStorageValue(STORAGE_KEYS.appearance, resolveAppearanceMode(readStorageValue("appearance", state.appearance)));
  } else {
    writeStorageValue(STORAGE_KEYS.appearance, resolveAppearanceMode(readStorageValue(STORAGE_KEYS.appearance, state.appearance)));
  }
  clearLegacySharedStorage();
}
function clearLegacySharedStorage() {
  safeRemoveStorage("appearance");
  safeRemoveStorage("nodeSelectedGroup");
  safeRemoveStorage("nodeViewMode");
}
function hasStorageValue(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw !== null && raw !== undefined && raw !== "";
  } catch (error) {
    return false;
  }
}
function safeRemoveStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    return;
  }
}
function resolveAppearanceMode(value) {
  const raw = String(value ?? "").trim().toLowerCase();
  if (["light", "浅色", "日间", "白天"].includes(raw)) return "light";
  if (["dark", "深色", "夜间", "黑夜"].includes(raw)) return "dark";
  return "system";
}
function renderFamilyBadges(families) {
  const items = [];
  if (families.ipv4) items.push("ipv4");
  if (families.ipv6) items.push("ipv6");
  return items.join("｜");
}
function metricLabel(icon, text, note = "") {
  const tooltip = note ? ` class="metric-label-icon has-note" data-note="${escapeAttribute(note)}"` : ` class="metric-label-icon"`;
  return `<span${tooltip}>${icon}</span><span>${escapeHtml(text)}</span>`;
}
function detectIpFamilies(node, live) {
  const direct = state.nodeProtocols?.[node?.uuid];
  if (direct && (direct.ipv4 || direct.ipv6)) return { ipv4: direct.ipv4, ipv6: direct.ipv6 };
  const candidates = [
    node?.ipv4, node?.ipv6, node?.ip_v4, node?.ip_v6, node?.ipv4_support, node?.ipv6_support,
    live?.ipv4, live?.ipv6, live?.network?.ipv4, live?.network?.ipv6,
    node?.tags, node?.public_remark, node?.name, node?.group, node?.region
  ];
  const raw = candidates.flatMap((value) => Array.isArray(value) ? value : [value]).filter((value) => value !== null && value !== undefined).join(" ").toLowerCase();
  if (/\bipv4 only\b|\bv4 only\b|仅\s*ipv4|仅\s*v4/.test(raw)) return { ipv4: true, ipv6: false };
  if (/\bipv6 only\b|\bv6 only\b|仅\s*ipv6|仅\s*v6/.test(raw)) return { ipv4: false, ipv6: true };
  const dualStack = /\bdual\b|双栈/.test(raw);
  const ipv4 = dualStack || hasIpSupport(node?.ipv4) || hasIpSupport(node?.ip_v4) || hasIpSupport(node?.ipv4_support) || hasIpSupport(live?.ipv4) || hasIpSupport(live?.network?.ipv4) || /\bipv4\b|\bv4\b|\bip4\b/.test(raw);
  const ipv6 = dualStack || hasIpSupport(node?.ipv6) || hasIpSupport(node?.ip_v6) || hasIpSupport(node?.ipv6_support) || hasIpSupport(live?.ipv6) || hasIpSupport(live?.network?.ipv6) || /\bipv6\b|\bv6\b|\bip6\b/.test(raw);
  return { ipv4, ipv6 };
}

function renderSiteIcon() {
  const iconUrl = detectSiteIconUrl();
  if (!iconUrl) {
    elements.siteIcon.classList.add("hidden");
    elements.siteIconFallback.classList.remove("hidden");
    return;
  }
  elements.siteIcon.src = iconUrl;
  elements.siteIcon.alt = state.publicInfo?.sitename || "Site icon";
  elements.siteIcon.referrerPolicy = "no-referrer";
  elements.siteIcon.decoding = "async";
  elements.siteIcon.onload = () => {
    elements.siteIcon.classList.remove("hidden");
    elements.siteIconFallback.classList.add("hidden");
  };
  elements.siteIcon.onerror = () => {
    elements.siteIcon.classList.add("hidden");
    elements.siteIconFallback.classList.remove("hidden");
  };
}

function detectSiteIconUrl() {
  const iconLink = document.querySelector("link[rel~='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']");
  const candidate = iconLink?.getAttribute("href") || iconLink?.href || "/favicon.ico";
  return sanitizeUrl(candidate) || "/favicon.ico";
}

function setFlagMarkup(container, input) {
  if (!container) return;
  const info = renderRegionFlagInfo(input);
  if (!shouldShowFlag() || !info.markup) {
    if (container.dataset.flagKey !== "") {
      container.innerHTML = "";
      container.dataset.flagKey = "";
    }
    container.classList.add("hidden");
    return;
  }
  if (container.dataset.flagKey !== info.key) {
    container.innerHTML = info.markup;
    container.dataset.flagKey = info.key;
  }
  container.classList.remove("hidden");
}

function renderRegionFlag(input) {
  return renderRegionFlagInfo(input).markup;
}

function renderRegionFlagInfo(input) {
  const code = resolveRegionCode(input);
  const emoji = resolveRegionFlagEmoji(input);
  if (code) {
    return {
      key: `code:${code}`,
      markup: `<img class="flag-image" src="${escapeAttribute(flagAssetUrl(code))}" alt="${escapeAttribute(code.toUpperCase())}" loading="eager" decoding="async" referrerpolicy="no-referrer" crossorigin="anonymous">`
    };
  }
  return {
    key: emoji ? `emoji:${emoji}` : "",
    markup: emoji ? escapeHtml(emoji) : ""
  };
}

function resolveRegionCode(input) {
  const values = typeof input === "object" && input
    ? [input.region, input.country, input.location, input.group, input.public_remark, input.tags]
    : [input];
  for (const value of values) {
    const raw = String(value || "").trim();
    if (!raw) continue;
    const emojiMatch = raw.match(/[\u{1F1E6}-\u{1F1FF}]{2}/u);
    if (emojiMatch) return emojiToCountryCode(emojiMatch[0]);
    if (/^[A-Za-z]{2}$/.test(raw)) return raw.toLowerCase();
    const codeMatch = raw.match(/\b([A-Za-z]{2})\b/);
    if (codeMatch) return codeMatch[1].toLowerCase();
    const aliasCode = countryCodeFromText(raw);
    if (aliasCode) return aliasCode.toLowerCase();
  }
  return "";
}

function resolveRegionFlagEmoji(input) {
  const values = typeof input === "object" && input
    ? [input.region, input.country, input.location, input.group, input.public_remark, input.tags]
    : [input];
  for (const value of values) {
    const raw = String(value || "").trim();
    if (!raw) continue;
    const emojiMatch = raw.match(/[\u{1F1E6}-\u{1F1FF}]{2}/u);
    if (emojiMatch) return emojiMatch[0];
    if (/^[A-Za-z]{2}$/.test(raw)) {
      return raw.toUpperCase().split("").map((char) => String.fromCodePoint(127397 + char.charCodeAt(0))).join("");
    }
    const codeMatch = raw.match(/\b([A-Za-z]{2})\b/);
    if (codeMatch) {
      return codeMatch[1].toUpperCase().split("").map((char) => String.fromCodePoint(127397 + char.charCodeAt(0))).join("");
    }
    const aliasCode = countryCodeFromText(raw);
    if (aliasCode) return aliasCode.split("").map((char) => String.fromCodePoint(127397 + char.charCodeAt(0))).join("");
  }
  return "";
}
function emojiToCountryCode(emoji) {
  const chars = Array.from(String(emoji || ""));
  if (chars.length !== 2) return "";
  const code = chars.map((char) => {
    const point = char.codePointAt(0);
    if (!point || point < 127462 || point > 127487) return "";
    return String.fromCharCode(point - 127397);
  }).join("");
  return /^[A-Z]{2}$/.test(code) ? code.toLowerCase() : "";
}
function flagAssetUrl(code) { return `https://flagcdn.com/${String(code).toLowerCase()}.svg`; }
function firstFinite(...values) { for (const value of values) { const numeric = Number(value); if (Number.isFinite(numeric)) return numeric; } return 0; }
function historyPercent(record, percentKeys, usedKeys, total) {
  const percent = firstFinite(...percentKeys.map((key) => record?.[key]));
  if (percent >= 0 && percent <= 100) return percent;
  const used = firstFinite(...usedKeys.map((key) => record?.[key]));
  const totalValue = safeNumber(total);
  if (used > 0 && totalValue > 0) return (used / totalValue) * 100;
  if (percent > 100 && totalValue > 0) return (percent / totalValue) * 100;
  return clamp(percent, 0, 100);
}
function sampleRecords(records, maxPoints = CHART_MAX_POINTS) {
  if (!Array.isArray(records) || records.length <= maxPoints) return Array.isArray(records) ? records : [];
  return sampleIndexes(records.length, maxPoints).map((index) => records[index]);
}
function sampleSeries(values, maxPoints = CHART_MAX_POINTS) {
  if (!Array.isArray(values) || values.length <= maxPoints) return Array.isArray(values) ? values : [];
  return sampleIndexes(values.length, maxPoints).map((index) => values[index]);
}
function sampleSeriesWithTime(values, times, maxPoints = CHART_MAX_POINTS) {
  const safeValues = Array.isArray(values) ? values : [];
  const safeTimes = Array.isArray(times) ? times : [];
  if (safeValues.length <= maxPoints) return safeValues.map((value, index) => ({ value, time: safeTimes[index] }));
  return sampleIndexes(safeValues.length, maxPoints).map((index) => ({ value: safeValues[index], time: safeTimes[index] }));
}
function buildTimeAxisLabels(times) {
  const validTimes = Array.isArray(times) ? times.filter(Boolean) : [];
  if (!validTimes.length) return [];
  const pick = [0, Math.floor((validTimes.length - 1) / 2), validTimes.length - 1];
  return Array.from(new Set(pick)).map((index, labelIndex, list) => ({
    index,
    label: formatAxisTime(validTimes[index]),
    anchor: labelIndex === 0 ? "start" : labelIndex === list.length - 1 ? "end" : "middle"
  }));
}
function sampleIndexes(length, maxPoints) {
  if (length <= maxPoints) return Array.from({ length }, (_, index) => index);
  const indexes = [];
  const lastIndex = length - 1;
  for (let point = 0; point < maxPoints; point += 1) {
    indexes.push(Math.round((point / Math.max(maxPoints - 1, 1)) * lastIndex));
  }
  return Array.from(new Set(indexes));
}
function buildSeriesTitles(label, values, records, formatter) {
  return values.map((value, index) => formatSeriesTooltip(records[index]?.time, label, formatter(value)));
}
function formatSeriesTooltip(time, label, value) {
  return `${state.language === "zh-CN" ? "时间" : "Time"}：${formatChartTime(time)}\n${label}：${value}`;
}
function formatPingTooltip(time, region, latency, loss, jitter) {
  const prefixTime = state.language === "zh-CN" ? "时间" : "Time";
  const prefixRegion = state.language === "zh-CN" ? "地区" : "Region";
  return `${prefixTime}：${formatChartTime(time)}\n${prefixRegion}：${region}\n${t().latency}：${formatLatency(latency)}\n${t().packetLoss}：${formatPercent(loss)}\n${t().jitter}：${formatLatency(jitter)}`;
}
function shouldRenderNodeSkeletons() {
  return !state.nodes.length || (state.connectionMode === "loading" && !Object.keys(state.live || {}).length);
}
function renderNodeSkeletons(count = 4) {
  elements.nodeList.innerHTML = Array.from({ length: count }, () => `<article class="server-card server-card--loading"><div class="server-card__button"><div class="card-header"><div class="name-os"><span class="skeleton skeleton--title"></span><span class="skeleton skeleton--meta"></span></div><span class="skeleton skeleton--badge"></span></div><div class="dials dials--loading"><span class="skeleton skeleton--dial"></span><span class="skeleton skeleton--dial"></span><span class="skeleton skeleton--dial"></span></div><div class="list-row"><div class="list-row__label"><span class="skeleton skeleton--line"></span></div><div class="list-row__value"><span class="skeleton skeleton--line skeleton--short"></span></div></div><div class="list-row"><div class="list-row__label"><span class="skeleton skeleton--line"></span></div><div class="list-row__value"><span class="skeleton skeleton--line skeleton--short"></span></div></div><div class="usage-block"><div class="usage-block__head"><span class="skeleton skeleton--line"></span><span class="skeleton skeleton--line skeleton--short"></span></div><span class="skeleton skeleton--bar"></span></div><div class="card-footer"><div class="srv-price"><span class="skeleton skeleton--tag"></span></div><div class="srv-remain"><span class="skeleton skeleton--tag"></span></div><div class="srv-worth"><span class="skeleton skeleton--tag skeleton--tag-wide"></span></div></div></div></article>`).join("");
}
function formatAxisTime(value) {
  if (!value) return "--";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "--";
  const sameDay = new Date().toDateString() === date.toDateString();
  return sameDay
    ? new Intl.DateTimeFormat(state.language, { hour: "2-digit", minute: "2-digit" }).format(date)
    : new Intl.DateTimeFormat(state.language, { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(date);
}
function formatChartTime(value) {
  if (!value) return "--";
  try {
    return new Intl.DateTimeFormat(state.language, { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
  } catch (error) {
    return String(value);
  }
}
function hoursLabel(hours) {
  if (hours === 1) return t().oneHour;
  if (hours === 6) return t().sixHours;
  if (hours === 12) return t().twelveHours;
  return t().twentyFourHours;
}
function hasIpSupport(value) {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value > 0;
  if (typeof value === "string") {
    const raw = value.trim().toLowerCase();
    return !["", "false", "0", "none", "no", "off"].includes(raw);
  }
  return Boolean(value);
}
function countryCodeFromText(value) {
  const raw = String(value || "").trim().toLowerCase();
  const aliases = {
    us: ["united states", "usa", "america", "美国"],
    cn: ["china", "中国", "大陆"],
    hk: ["hong kong", "香港"],
    tw: ["taiwan", "台湾"],
    jp: ["japan", "日本"],
    kr: ["korea", "south korea", "韩国"],
    sg: ["singapore", "新加坡"],
    de: ["germany", "德国"],
    gb: ["united kingdom", "britain", "uk", "英国"],
    fr: ["france", "法国"],
    nl: ["netherlands", "荷兰"],
    ca: ["canada", "加拿大"],
    au: ["australia", "澳大利亚"],
    in: ["india", "印度"],
    ru: ["russia", "俄罗斯"]
  };
  return Object.entries(aliases).find(([, names]) => names.some((name) => raw.includes(name)))?.[0] || "";
}
function simplifyOsName(value) { const raw = String(value || "").trim(); if (!raw) return ""; const presets = [[/debian/i, "Debian"], [/ubuntu/i, "Ubuntu"], [/centos/i, "CentOS"], [/almalinux|alma/i, "AlmaLinux"], [/rocky/i, "Rocky"], [/fedora/i, "Fedora"], [/alpine/i, "Alpine"], [/arch/i, "Arch"], [/oracle/i, "Oracle"], [/freebsd/i, "FreeBSD"], [/openbsd/i, "OpenBSD"], [/windows/i, "Windows"], [/darwin|mac ?os/i, "macOS"]]; for (const [pattern, label] of presets) if (pattern.test(raw)) return label; return raw.split(/\s+/).slice(0, 2).join(" "); }
function updateTime() { const latest = visibleNodes().map((node) => state.live[node.uuid]?.updated_at).filter(Boolean).sort().pop(); elements.updateTime.textContent = latest ? `${t().updatedAt} ${formatDateTime(latest)}` : "--"; }
function fetchWithTimeout(url, options = {}, timeoutMs = FETCH_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { ...options, signal: controller.signal }).finally(() => window.clearTimeout(timer));
}
function fetchJson(url) {
  return fetchWithTimeout(url, {
    credentials: "include",
    headers: { Accept: "application/json" }
  }).then((response) => {
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    return response.json();
  });
}
function scheduleNodesRender() {
  if (pendingNodeRenderFrame || state.detailNodeId) return;
  pendingNodeRenderFrame = window.requestAnimationFrame(() => {
    pendingNodeRenderFrame = 0;
    renderNodes();
  });
}
function scheduleStatsRender() {
  if (pendingStatsRenderFrame) return;
  pendingStatsRenderFrame = window.requestAnimationFrame(() => {
    pendingStatsRenderFrame = 0;
    renderGlobalStats();
  });
}
function sanitizeUrl(value) {
  try {
    const parsed = new URL(String(value || ""), location.origin);
    if (!["http:", "https:"].includes(parsed.protocol)) return "";
    return parsed.href;
  } catch (error) {
    return "";
  }
}
function formatPercent(value) { return `${safeNumber(value).toFixed(safeNumber(value) >= 10 ? 0 : 1)}%`; }
function formatBytes(value) { const bytes = safeNumber(value); if (!bytes) return "0 B"; const units = ["B", "KB", "MB", "GB", "TB", "PB"], exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1), size = bytes / (1024 ** exponent); return `${size.toFixed(size >= 100 || exponent === 0 ? 0 : 1)} ${units[exponent]}`; }
function formatSpeed(value) { return `${formatBytes(value)}/s`; }
function formatLatency(value) { const latency = safeNumber(value); return `${latency.toFixed(latency >= 100 ? 0 : 1)} ms`; }
function formatMoney(value, currency = "CNY") {
  const amount = safeNumber(value);
  try {
    return new Intl.NumberFormat(state.language === "zh-CN" ? "zh-CN" : "en-US", { style: "currency", currency, maximumFractionDigits: 2 }).format(amount);
  } catch (error) {
    return `${currency} ${amount.toFixed(2)}`;
  }
}
function formatCpuCapacity(node) {
  const cores = safeNumber(node?.cpu_cores);
  return cores > 0 ? `${cores} Cores` : "--";
}
function formatDuration(totalSeconds) { const seconds = Math.max(0, Math.floor(safeNumber(totalSeconds))), days = Math.floor(seconds / 86400), hours = Math.floor((seconds % 86400) / 3600), minutes = Math.floor((seconds % 3600) / 60); if (state.language === "zh-CN") { if (days > 0) return `${days}天 ${hours}时`; if (hours > 0) return `${hours}时 ${minutes}分`; return `${minutes}分`; } if (days > 0) return `${days}d ${hours}h`; if (hours > 0) return `${hours}h ${minutes}m`; return `${minutes}m`; }
function formatDateTime(value) { try { return new Intl.DateTimeFormat(state.language, { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date(value)); } catch (error) { return String(value || "--"); } }
function percentValue(used, total) { const totalSafe = safeNumber(total); return totalSafe ? (safeNumber(used) / totalSafe) * 100 : 0; }
function normalizeGroup(value) { return value && String(value).trim() ? String(value).trim() : t().groupEmpty; }
function average(values) { return values.length ? values.reduce((sum, value) => sum + safeNumber(value), 0) / values.length : 0; }
function calculateJitter(values) { if (values.length < 2) return 0; let total = 0; for (let index = 1; index < values.length; index += 1) total += Math.abs(safeNumber(values[index]) - safeNumber(values[index - 1])); return total / (values.length - 1); }
function maxValue(values, fallback) { const clean = values.map((value) => safeNumber(value)).filter((value) => Number.isFinite(value)); return clean.length ? Math.max(...clean, fallback) : fallback; }
function safeNumber(value) { return Number.isFinite(Number(value)) ? Number(value) : 0; }
function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }
function safeJsonParse(value) { try { return JSON.parse(value); } catch (error) { return null; } }
function varAccent() { return "var(--primary)"; }
function colorPalette() { return ["#e53e3e", "#38a169", "#5a67d8", "#d69e2e", "#8b5cf6", "#06b6d4", "#ec4899", "#84cc16"]; }
function escapeHtml(value) { return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;"); }
function escapeAttribute(value) { return escapeHtml(value).replaceAll("`", "&#96;").replaceAll("\r", "").replaceAll("\n", "&#10;"); }
