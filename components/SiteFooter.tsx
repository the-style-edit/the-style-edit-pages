import Link from "next/link";
import { pinterestUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div>
          <Link className="footer-logo" href="/">THE STYLE EDIT<span>.</span></Link>
          <p>Good style is a point of view,<br />not a price point.</p>
          <a className="footer-social" href={pinterestUrl} target="_blank" rel="noopener noreferrer">Follow on Pinterest <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-links">
          <div><h2>Explore</h2><Link href="/shop/">The edit</Link><Link href="/articles/">Journal</Link><Link href="/about/">About us</Link></div>
          <div><h2>Information</h2><Link href="/contact/">Contact</Link><Link href="/affiliate-disclosure/">Affiliate disclosure</Link><Link href="/privacy/">Privacy policy</Link><Link href="/terms/">Terms</Link></div>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} The Style Edit</span><span>Made for intentional wardrobes.</span></div>
    </footer>
  );
}
