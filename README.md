# SITCON Hacker Zone Web Demo

Aegis CLI 產品網站的示範實作：一個以 [Astro](https://astro.build) 建置的純靜態網站，包含中英雙語首頁、互動式流程展示，以及一份 `gcloud` 風格的 CLI 文件站。

> 這個 repository 是 Aegis CLI 的展示網站，不含工具本身的原始碼。站上文件的指令、旗標與輸出為說明用途，實際行為請以工具本身的說明為準。

## 技術組成

| 項目 | 選擇 | 說明 |
|---|---|---|
| 框架 | Astro 7 | `output: static`，全站在建置時產生 HTML |
| UI 函式庫 | 無 | 沒有 React/Vue，互動以原生 DOM API 撰寫 |
| 樣式 | 原生 CSS | 元件 scoped style + `src/styles/global.css` 的設計變數 |
| 圖示 | 手寫 inline SVG | 集中在 `src/components/Icons.astro`，無圖示套件 |
| 字型 | Google Fonts | Inter（介面）、JetBrains Mono（程式碼與數據） |
| 相依套件 | 1 個 | 只有 `astro` |

## 快速開始

需要 Node.js 20 以上（開發時使用 24.19.0）。

```bash
npm install
npm run dev        # 開發伺服器，預設 http://localhost:4321
npm run build      # 產出靜態檔案到 dist/
npm run preview    # 預覽 dist/ 的內容
```

此環境的 Astro CLI 會把 dev server 放到背景執行：

```bash
npx astro dev status   # 查看狀態與 pid
npx astro dev logs     # 查看日誌
npx astro dev stop     # 停止
```

若 `npm run dev` 顯示 `Dev server already running`，代表已有實體佔用連接埠，先 `npx astro dev stop` 再啟動；必要時用 `lsof -nP -iTCP:4321 -sTCP:LISTEN` 找出殘留的行程。

## 專案結構

```
src/
├── components/
│   ├── Nav.astro            # 導覽列與語言切換
│   ├── Hero.astro           # 主視覺、安裝指令、打字動畫
│   ├── Terminal.astro       # 終端機掃描結果示意
│   ├── Steps.astro          # 互動式工作流程（本專案最複雜的元件）
│   ├── FeatureStrip.astro   # 四格特性
│   ├── Docs.astro           # 文件與 GitHub Actions 範例
│   ├── Contributors.astro   # 開發者名單跑馬燈
│   ├── Footer.astro
│   ├── Icons.astro          # inline SVG 圖示集
│   └── docs/                # 文件站用的 CodeBlock、Callout
├── layouts/
│   ├── Base.astro           # HTML 骨架、meta、離開視窗暫停動畫的觀察器
│   └── DocsLayout.astro     # 文件站三欄版面（側欄／內容／目錄）
├── i18n/
│   ├── ui.ts                # 語系判定與路徑轉換
│   └── copy.ts              # 中英文案字典
├── data/docs-nav.ts         # 文件站導覽結構
├── pages/
│   ├── index.astro          # 英文首頁 /
│   ├── zh/index.astro       # 中文首頁 /zh/
│   └── docs/                # 文件站（9 頁，僅英文）
└── styles/global.css        # 設計變數、共用元件、效能規則
public/
├── favicon.svg
├── assets/
└── _headers                 # 部署用安全性標頭
```

## 多語言

- 英文是預設語系，路徑不加前綴：`/`
- 中文位於 `/zh/`
- 語系由網址第一段判定（`src/i18n/ui.ts` 的 `getLang()`），元件自行讀取，兩個首頁共用同一組元件
- 所有文案集中在 `src/i18n/copy.ts`，依 `en` / `zh` 兩棵結構相同的樹管理
- 指令、旗標、檔案路徑、終端機輸出在兩種語系都維持英文，因為那是工具實際會印出來的內容
- 文件站（`/docs/`）目前只有英文版

新增文案的流程：在 `copy.ts` 的兩個語系各加上同名欄位，元件透過 `copy[lang]` 取用。

## 文件站

`/docs/` 是一份 CLI 參考文件，採 `NAME / SYNOPSIS / DESCRIPTION / EXAMPLES / FLAGS / EXIT STATUS / SEE ALSO` 的結構：

- 入門：Overview、Install、Quickstart
- 指南：Configuration、Rulesets、Continuous integration
- CLI 參考：`aegis`、`init`、`scan`、`test`、`report`
- 支援：Exit codes、Troubleshooting

新增一頁的步驟：

1. 在 `src/pages/docs/` 建立 `.astro` 檔，使用 `DocsLayout`
2. 傳入 `title`、`description`、`breadcrumbs`、`toc`
3. 在 `src/data/docs-nav.ts` 加入連結，側邊欄與上一頁／下一頁會自動更新

## 互動設計

`Steps.astro` 是主要的互動區塊，三個面板連動：

- **階段切換**：Review / Probe / Verify，高亮膠囊會滑動；右下角三顆點同時是狀態指示器，也可以點擊切換
- **汙點追蹤**：SOURCE → CONCAT → SINK 三個節點，可選 payload（正常值、布林注入、欄位外洩），節點的值會由上而下依序更新，底部結論行跟著換色
- **雙向連動**：滑過程式碼行會標示對應節點，滑過節點會標示對應程式碼行
- **數據**：右側指標以 requestAnimationFrame 計數呈現

## 效能守則

網站曾因裝飾性效果造成明顯的 GPU 負載，以下規則請維持：

- **不使用 `backdrop-filter`**：毛玻璃每個捲動 frame 都要重新合成背景，成本最高
- **動畫只動 `transform` 與 `opacity`**：避免動畫化 `filter`、`box-shadow`、`background-position`、`width`
- **離開視窗即暫停**：帶 `data-anim-scope` 的區塊由 `Base.astro` 的 IntersectionObserver 加上 `data-anim-paused`
- **折線以下使用 `content-visibility: auto`** 搭配 `contain-intrinsic-size`
- **指標事件以 rAF 節流**，並以 `(hover: hover) and (pointer: fine)` 限制在桌機
- **一律支援 `prefers-reduced-motion`**

## 安全性

- 無後端、無表單、無 cookie、無 `localStorage`，不處理任何使用者輸入
- 不使用 `innerHTML`、`eval`、`set:html` 等注入面；動態文字一律走 `textContent`
- 外部連結使用 `rel="noopener noreferrer"`
- 開發者名單的連結經 `isSafeUrl()` 檢查，只有 `http(s)://` 會渲染成連結
- `public/_headers` 提供 CSP、HSTS、`nosniff`、`frame-ancestors 'none'`、`Referrer-Policy`、`Permissions-Policy`（Netlify／Cloudflare Pages 格式；Vercel 請改用 `vercel.json`，nginx 請用 `add_header`）

已知可再強化：CSP 目前含 `script-src 'unsafe-inline'`，因為 Astro 會內嵌 `define:vars` 產生的小型 script；若要移除，需改以 `<script type="application/json">` 傳遞資料。字型改為自架也能移除對 Google 的第三方請求。

## 部署

建置產物在 `dist/`，可直接放上任何靜態主機：

```bash
npm run build
```

- Netlify / Cloudflare Pages：build command `npm run build`，publish directory `dist`，`_headers` 會自動生效
- Vercel：需另外以 `vercel.json` 設定標頭
- 部署前請確認 `astro.config.mjs` 的 `site` 已改為實際網域

## 開發者

| 名稱 | 連結 |
|---|---|
| Cgm._.97 | https://cgm-csie.me/ |
| Denny | https://denny.li |
| 唐狗針 | https://kzzz.idv.tw/ |
| mochaowo | — |
| cenny | https://blog.sianqi.uk/ |

## 授權

網站上的「MIT Licensed」指的是 Aegis CLI 這個工具本身的授權，不是這個網站 repository。

這份網站原始碼目前沒有宣告授權；未指定授權時預設為保留所有權利。若要一併開放，請新增 `LICENSE` 檔案並填入著作權人。
