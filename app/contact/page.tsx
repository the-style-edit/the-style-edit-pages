import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { pinterestUrl } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Contact The Style Edit about editorial corrections, products, or collaborations." };
export default function ContactPage() { return <InfoPage eyebrow="GET IN TOUCH" title="Let’s talk style." intro="Questions, a correction, or a useful suggestion? We’d like to hear from you."><h2>Reach us on Pinterest</h2><p>Visit our Pinterest profile to connect with The Style Edit. We have not published a business email address yet.</p><p><a className="text-link" href={pinterestUrl} target="_blank" rel="noopener noreferrer">Open The Style Edit on Pinterest ↗</a></p><h2>Corrections</h2><p>Product pages, prices, and stock can change. If you find an outdated detail or a broken link, please include the article title and the item so we can review it.</p></InfoPage>; }
