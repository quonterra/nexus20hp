export default function TickerBar() {
  const items = ['Halloween Party','Afternoon Tea','Wedding Celebration','Home Party','Nabe Party','BBQ & Dinner']

  return (
    <div className="bg-org overflow-hidden py-[14px]">
      <div className="ticker-run inline-flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="font-bebas text-[14px] tracking-[.35em] mr-[60px]
                                    text-white/88">
            {item}
            <span className="text-white/40 ml-[60px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
