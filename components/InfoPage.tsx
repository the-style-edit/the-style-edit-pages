import type { ReactNode } from "react";

export function InfoPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <><div className="page-hero page-hero-info"><div className="shell"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div></div><div className="shell-narrow info-body">{children}</div></>;
}
