import type { Lang } from "./ui";

/**
 * Page copy for both locales. Command lines, flags, file paths, and terminal
 * output stay in English in both: they are what the tool actually prints.
 */
export const copy = {
  en: {
    meta: {
      title: "Aegis CLI — Review code. Verify vulnerabilities.",
      description:
        "Turn code-review findings into targeted security tests, then generate vulnerability reports for the risks that are proven to matter.",
    },
    nav: {
      links: [
        { label: "Product", href: "#product" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Docs", href: "/docs/" },
        { label: "Community", href: "#community" },
        { label: "Contributors", href: "#contributors" },
      ],
      github: "View on GitHub",
      language: "Language",
    },
    hero: {
      eyebrow: "Open-source security review CLI",
      tagline: "Review code. Verify vulnerabilities.",
      lede: "Turn code-review findings into targeted security tests, then generate vulnerability reports for the risks that are proven to matter",
      install: "Install Aegis CLI",
      github: "View on GitHub",
      copy: "Copy install command",
      installLabel: "Install command",
      note: "Supports macOS, Linux, and Windows (WSL). Requires Git and a supported shell.",
      toWindows: "Windows version",
      toUnix: "macOS / Linux version",
      noteWindows: "Windows 10 or later with PowerShell. Requires Git.",
    },
    harness: {
      title: "The harness, as it runs",
      body: "Aegis is a terminal program. This is the screen you get after installing it — the banner, the prompt, and the commands it accepts.",
      hint: "Try a command below, or click one of the suggestions.",
      placeholder: "Type a command or /help …",
      suggestions: ["/help", "/lang zh", "/lang en"],
      note: "A replica of the real interface. Nothing is sent anywhere; the responses are the program's own.",
    },
    steps: {
      title: "From review to verified risk",
      switcher: "Aegis workflow stages",
      diffPane: "Code diff visualization",
      findingPane: "Verified finding visualization",
      trace: {
        head: "Taint trace",
        kinds: ["source", "concat", "sink"],
        replay: "Replay with",
        payloadGroup: "Test payload",
      },
      pathLabel: "Path",
      fixLabel: "Fix",
      stages: [
        {
          label: "Review",
          signal: "Diff intelligence",
          title: "Review the code",
          detail:
            "Aegis traces changed code through routes, inputs, queries, and dependencies before it decides what deserves a test.",
          output: "Mapped req.query.id to database query path",
          metricLabel: "entry points",
          severity: "Candidate",
          fix: "Unsafe string interpolation reaches a SQL query.",
        },
        {
          label: "Probe",
          signal: "Attack surface",
          title: "Generate targeted tests",
          detail:
            "The scanner turns the risky path into focused probes instead of running a broad, noisy security checklist.",
          output: "Running SQL injection probe against /api/users",
          metricLabel: "targeted tests",
          severity: "Testing",
          fix: "Payload replay is isolated to the affected data flow.",
        },
        {
          label: "Verify",
          signal: "Verified risk",
          title: "Ship the verified fix",
          detail:
            "Only proven issues become report items, with severity, evidence, and remediation tied to the exact code path.",
          output: "Exported verified finding with remediation guidance",
          metricLabel: "critical finding",
          severity: "Critical",
          fix: "Use parameterized queries or an ORM-bound lookup.",
        },
      ],
      payloads: [
        {
          hint: "normal request",
          verdict: "Expected: 1 row. Returned: 1 row.",
          values: ['"1"', "WHERE id = 1", "1 row"],
        },
        {
          hint: "boolean injection",
          verdict: "Expected: 1 row. Returned: 43 rows — the filter was bypassed.",
          values: ['"1 OR 1=1"', "WHERE id = 1 OR 1=1", "43 rows"],
        },
        {
          hint: "column disclosure",
          verdict: "Returned a column the endpoint never exposes.",
          values: ['"1 UNION SELECT ..."', "WHERE id = 1 UNION SELECT ...", "password_hash"],
        },
      ],
    },
    features: [
      { title: "MIT Licensed", body: "Permissive license. Free to use, modify, and distribute." },
      { title: "Local-first", body: "Runs locally by default. Your code stays with you." },
      { title: "GitHub Actions ready", body: "CI-native. Easy to automate in your workflows." },
      { title: "Verified findings", body: "Only issues a test could reproduce are reported. No noise to triage." },
    ],
    docs: {
      title: "Docs & integrations",
      body: "Get started in minutes. Deep docs when you need them.",
      link: "Read the docs",
    },
    contributors: {
      title: "Contributors",
      body: "The people who build and maintain Aegis CLI.",
      listLabel: "Contributors",
    },
    footer: {
      tagline: "Review code. Verify vulnerabilities.",
      rights: "MIT Licensed.",
      columns: [
        {
          title: "Product",
          links: [
            { label: "Overview", href: "#product" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Rulesets", href: "#community" },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "Docs", href: "/docs/" },
            { label: "GitHub Action", href: "/docs/ci/" },
            { label: "CLI reference", href: "/docs/cli/" },
          ],
        },
        {
          title: "Community",
          links: [
            { label: "GitHub", href: "https://github.com/aegis/aegis" },
            { label: "Contributors", href: "#contributors" },
            { label: "Security policy", href: "/docs/troubleshooting/" },
          ],
        },
      ],
    },
  },

  zh: {
    meta: {
      title: "Aegis CLI — 審查程式碼，驗證漏洞。",
      description:
        "把程式碼審查的發現轉成針對性的資安測試，再為真正重要的風險產出漏洞報告。",
    },
    nav: {
      links: [
        { label: "產品", href: "#product" },
        { label: "運作方式", href: "#how-it-works" },
        { label: "文件", href: "/docs/" },
        { label: "社群", href: "#community" },
        { label: "開發者", href: "#contributors" },
      ],
      github: "在 GitHub 上查看",
      language: "語言",
    },
    hero: {
      eyebrow: "開源資安審查 CLI",
      tagline: "審查程式碼，驗證漏洞。",
      lede: "把程式碼審查的發現轉成針對性的資安測試，再為真正重要的風險產出漏洞報告",
      install: "安裝 Aegis CLI",
      github: "在 GitHub 上查看",
      copy: "複製安裝指令",
      installLabel: "安裝指令",
      note: "支援 macOS、Linux 與 Windows (WSL)，需要 Git 與支援的 shell。",
      toWindows: "Windows 版本",
      toUnix: "macOS / Linux 版本",
      noteWindows: "Windows 10 以上並具備 PowerShell，需要 Git。",
    },
    harness: {
      title: "實際執行的畫面",
      body: "Aegis 是一個終端機程式。安裝完成後看到的就是這個畫面：橫幅、輸入提示，以及它接受的指令。",
      hint: "可以在下面輸入指令，或直接點選建議。",
      placeholder: "Type a command or /help …",
      suggestions: ["/help", "/lang zh", "/lang en"],
      note: "這是實際介面的重現。輸入不會送到任何地方，回應就是程式本身的輸出。",
    },
    steps: {
      title: "從審查到已驗證的風險",
      switcher: "Aegis 工作流程階段",
      diffPane: "程式碼差異示意",
      findingPane: "已驗證問題示意",
      trace: {
        head: "汙點追蹤",
        kinds: ["來源", "串接", "匯入點"],
        replay: "重放輸入",
        payloadGroup: "測試輸入",
      },
      pathLabel: "位置",
      fixLabel: "修正",
      stages: [
        {
          label: "審查",
          signal: "差異分析",
          title: "審視程式碼",
          detail:
            "Aegis 會沿著路由、輸入、查詢與相依套件追蹤變更過的程式碼，再決定哪些地方值得測試。",
          output: "已將 req.query.id 對應到資料庫查詢路徑",
          metricLabel: "個進入點",
          severity: "待驗證",
          fix: "未經處理的字串串接進入 SQL 查詢。",
        },
        {
          label: "探測",
          signal: "攻擊面",
          title: "產生針對性測試",
          detail:
            "掃描器把有風險的路徑轉成聚焦的探測，而不是跑一份又大又吵的資安檢查清單。",
          output: "正在對 /api/users 執行 SQL 注入探測",
          metricLabel: "項針對性測試",
          severity: "測試中",
          fix: "重放範圍限縮在受影響的資料流內。",
        },
        {
          label: "驗證",
          signal: "已驗證風險",
          title: "交付已驗證的修正",
          detail:
            "只有被證實的問題才會進入報告，並附上嚴重程度、佐證，以及對應到該段程式碼的修正建議。",
          output: "已輸出含修正建議的已驗證問題",
          metricLabel: "個嚴重問題",
          severity: "嚴重",
          fix: "改用參數化查詢或 ORM 綁定的查詢。",
        },
      ],
      payloads: [
        {
          hint: "正常請求",
          verdict: "預期 1 筆，實際回傳 1 筆。",
          values: ['"1"', "WHERE id = 1", "1 row"],
        },
        {
          hint: "布林注入",
          verdict: "預期 1 筆，實際回傳 43 筆 —— 條件被繞過了。",
          values: ['"1 OR 1=1"', "WHERE id = 1 OR 1=1", "43 rows"],
        },
        {
          hint: "欄位外洩",
          verdict: "回傳了這個端點本來不該吐出的欄位。",
          values: ['"1 UNION SELECT ..."', "WHERE id = 1 UNION SELECT ...", "password_hash"],
        },
      ],
    },
    features: [
      { title: "MIT 授權", body: "寬鬆授權，可自由使用、修改與散布。" },
      { title: "本機優先", body: "預設在本機執行，程式碼不會離開你的機器。" },
      { title: "支援 GitHub Actions", body: "為 CI 而生，容易接進既有的工作流程。" },
      { title: "只報已驗證的問題", body: "測試重現得出來的問題才進報告，不用花時間過濾誤報。" },
    ],
    docs: {
      title: "文件與整合",
      body: "幾分鐘就能上手，需要細節時有完整文件。",
      link: "閱讀文件",
    },
    contributors: {
      title: "開發者名單",
      body: "打造與維護 Aegis CLI 的人。",
      listLabel: "開發者名單",
    },
    footer: {
      tagline: "審查程式碼，驗證漏洞。",
      rights: "採用 MIT 授權。",
      columns: [
        {
          title: "產品",
          links: [
            { label: "概觀", href: "#product" },
            { label: "運作方式", href: "#how-it-works" },
            { label: "規則集", href: "#community" },
          ],
        },
        {
          title: "資源",
          links: [
            { label: "文件", href: "/docs/" },
            { label: "GitHub Action", href: "/docs/ci/" },
            { label: "CLI 參考", href: "/docs/cli/" },
          ],
        },
        {
          title: "社群",
          links: [
            { label: "GitHub", href: "https://github.com/aegis/aegis" },
            { label: "開發者名單", href: "#contributors" },
            { label: "安全政策", href: "/docs/troubleshooting/" },
          ],
        },
      ],
    },
  },
} satisfies Record<Lang, unknown>;
