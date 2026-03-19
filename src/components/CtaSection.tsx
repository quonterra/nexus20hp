export default function CtaSection() {
  return (
    <section id="cta" className="relative bg-gray-bg py-28 px-12 max-lg:px-6 overflow-hidden">
      {/* 装飾円 */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full
                      bg-[rgba(255,232,214,0.5)] pointer-events-none" />
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full
                      bg-[rgba(255,232,214,0.35)] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1">
        {/* 左: テキスト */}
        <div>
          <div className="inline-flex items-center gap-2 bg-org-pale border border-org-pale2
                          rounded-full px-[16px] py-[6px] mb-6">
            <span className="text-[10px] font-bold text-org-text tracking-[.18em] uppercase">
              Join Us
            </span>
          </div>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-ink leading-[1.35] mb-4">
            あなたの<span className="text-org">次の一手</span>を、<br />
            ここから始めよう。
          </h2>
          <p className="text-[14px] leading-[2.1] text-ink-sub max-w-[440px]">
            NEXUS20は、年齢・職業を問わず参加できるコミュニティです。<br />
            まずはお気軽にイベントに参加してみてください。
          </p>
        </div>

        {/* 右: ボタン */}
        <div className="max-lg:text-center">
          <a href="#"
             className="inline-flex items-center gap-3 bg-org text-white
                        text-[16px] font-bold tracking-[.06em]
                        px-[52px] py-[22px] rounded-full shadow-org
                        hover:bg-org-light hover:-translate-y-[3px]
                        hover:shadow-org-lg transition-all no-underline whitespace-nowrap">
            無料で参加を申し込む
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3.5 9h11M10 4.5l4.5 4.5L10 13.5" stroke="currentColor"
                    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="text-[12px] text-ink-hint tracking-[.04em] mt-3">
            次回イベントの情報もお届けします
          </p>
        </div>
      </div>
    </section>
  )
}
