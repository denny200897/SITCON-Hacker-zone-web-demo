export interface DocsLink {
  label: string;
  href: string;
}

export interface DocsSection {
  title: string;
  links: DocsLink[];
}

export const docsNav: DocsSection[] = [
  {
    title: "Get started",
    links: [
      { label: "Overview", href: "/docs/" },
      { label: "Install", href: "/docs/install/" },
      { label: "Quickstart", href: "/docs/quickstart/" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Configuration", href: "/docs/configuration/" },
      { label: "Rulesets", href: "/docs/rulesets/" },
      { label: "Continuous integration", href: "/docs/ci/" },
    ],
  },
  {
    title: "CLI reference",
    links: [
      { label: "aegis", href: "/docs/cli/" },
      { label: "aegis init", href: "/docs/cli/init/" },
      { label: "aegis scan", href: "/docs/cli/scan/" },
      { label: "aegis test", href: "/docs/cli/test/" },
      { label: "aegis report", href: "/docs/cli/report/" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Exit codes", href: "/docs/exit-codes/" },
      { label: "Troubleshooting", href: "/docs/troubleshooting/" },
    ],
  },
];

/** Flat page order, used for the previous / next footer links. */
export const docsOrder: DocsLink[] = docsNav.flatMap((section) => section.links);
