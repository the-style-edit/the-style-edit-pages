import Link from "next/link";

const links = [
  { href: "/shop/", label: "The edit" },
  { href: "/articles/", label: "Journal" },
  { href: "/about/", label: "Our story" },
];

export function SiteHeader() {
  return (
    <>
      <div className="announcement">A more considered way to get dressed <span aria-hidden="true">✦</span> Look Expensive. Spend Less.</div>
      <header className="site-header">
        <div className="shell header-inner">
          <Link className="wordmark" href="/" aria-label="The Style Edit home">
            <span className="wordmark-main">THE STYLE EDIT<span className="wordmark-dot">.</span></span>
            <span className="wordmark-sub">AN EDITORIAL WARDROBE</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>
          <Link className="header-cta" href="/shop/">Explore the edit <span aria-hidden="true">↗</span></Link>
          <details className="mobile-menu">
            <summary aria-label="Open menu"><span></span><span></span></summary>
            <nav aria-label="Mobile navigation">
              {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
