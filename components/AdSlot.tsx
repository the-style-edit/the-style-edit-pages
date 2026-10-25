export function AdSlot({ label = "Reserved banner space" }: { label?: string }) {
  return (
    <aside className="ad-slot" aria-label="Advertising space reserved for future use">
      <span className="ad-slot-mark" aria-hidden="true">✦</span>
      <span>{label}</span>
    </aside>
  );
}
