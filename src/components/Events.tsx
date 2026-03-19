import Image from 'next/image'

const events = [
  { image: '/images/event-halloween.jpg', chip: '🎃 Halloween',    title: 'ハロウィンパーティー\n仮装で集まる、最高の夜！' },
  { image: '/images/event-tea.jpg',       chip: '☕ Afternoon Tea', title: '優雅な午後を\n特別なスイーツと。' },
  { image: '/images/event-wedding.jpg',   chip: '🎉 Celebration',  title: '仲間の喜びを\nみんなで祝う！' },
  { image: '/images/event-nabe.jpg',      chip: '🍲 Nabe Party',   title: '鍋を囲めば\nすぐに打ち解ける！' },
  { image: '/images/event-dinner.jpg',    chip: '🌙 Dinner',       title: '夜景の中の\n特別なディナー。' },
]

function EventCard({ ev, span, ratio, sizes }: { ev: typeof events[0]; span: string; ratio: string; sizes: string }) {
  return (
    <div className="relative overflow-hidden rounded-[20px] group"
         style={{ gridColumn: span, aspectRatio: ratio }}>
      <Image src={ev.image} alt={ev.title} fill
             className="object-cover transition-transform duration-[650ms] group-hover:scale-[1.06]"
             sizes={sizes} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="inline-block bg-org text-white text-[9px] font-bold
                         tracking-[.18em] uppercase px-3 py-1 rounded-full mb-2">
          {ev.chip}
        </span>
        <h3 className="text-white font-bold leading-[1.4] text-[clamp(13px,1.6vw,18px)]"
            style={{ whiteSpace: 'pre-line' }}>{ev.title}</h3>
      </div>
    </div>
  )
}

export default function Events() {
  return (
    <section id="events" className="bg-white py-28 px-12 max-lg:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-org-pale border border-org-pale2
                          rounded-full px-[16px] py-[6px] mb-5">
            <span className="text-[10px] font-bold text-org-text tracking-[.18em] uppercase">
              Events
            </span>
          </div>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-ink leading-[1.35]">
            多彩な<span className="text-org">イベント</span>
          </h2>
        </div>

        {/* デスクトップグリッド */}
        <div className="max-lg:hidden"
             style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '14px' }}>
          <EventCard ev={events[0]} span="span 7" ratio="7/4" sizes="58vw" />
          <EventCard ev={events[1]} span="span 5" ratio="5/4" sizes="42vw" />
          <EventCard ev={events[2]} span="span 4" ratio="4/3.4" sizes="33vw" />
          <EventCard ev={events[3]} span="span 4" ratio="4/3.4" sizes="33vw" />
          <EventCard ev={events[4]} span="span 4" ratio="4/3.4" sizes="33vw" />
        </div>

        {/* モバイルグリッド */}
        <div className="lg:hidden"
             style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          {events.map((ev, i) => (
            <EventCard key={i} ev={ev}
              span={i < 2 ? 'span 2' : 'span 1'}
              ratio={i < 2 ? '16/7' : '1'}
              sizes={i < 2 ? '100vw' : '50vw'} />
          ))}
        </div>
      </div>
    </section>
  )
}
