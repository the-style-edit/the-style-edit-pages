import Link from "next/link";

export default function NotFound() {
  return <div className="shell not-found"><span className="eyebrow">PAGE NOT FOUND / 404</span><h1>We lost the thread.</h1><p>This page may have moved. Find your way back to the edit or the journal.</p><div className="button-row"><Link className="button button-dark" href="/">Go home <span>↗</span></Link><Link className="button button-outline" href="/articles/">Read the journal <span>↗</span></Link></div></div>;
}
