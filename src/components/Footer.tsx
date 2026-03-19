import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t-[1.5px] border-gray-line">
      {/* 上段 */}
      <div className="max-w-[1200px] mx-auto px-12 max-lg:px-6 py-16 flex justify-between items-start max-lg:flex-col max-lg:gap-10">
        {/* 左: ロゴ + キャッチコピー */}
        <div>
          <Link href="/" className="flex items-baseline gap-1 no-underline mb-3">
            <span className="font-bebas text-[28px] tracking-[.1em] text-ink leading-none">NEXUS</span>
            <span className="font-jakarta text-[12px] font-bold text-org tracking-[.2em]">20</span>
          </Link>
          <p className="text-[13px] text-ink-sub leading-[1.8]">
            出会いが、次を動かす。<br />
            食卓を囲む時間から、本物のつながりが生まれる。
          </p>
        </div>

        {/* 右: ナビリンク */}
        <div className="flex gap-16 max-sm:gap-10">
          <div>
            <h4 className="text-[11px] font-bold text-ink tracking-[.15em] uppercase mb-4">Menu</h4>
            <ul className="space-y-2.5 list-none">
              {[
                { label: 'コンセプト', href: '#about' },
                { label: 'イベント', href: '#events' },
                { label: 'ギャラリー', href: '#gallery' },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="text-[13px] text-ink-sub hover:text-org transition-colors no-underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold text-ink tracking-[.15em] uppercase mb-4">Community</h4>
            <ul className="space-y-2.5 list-none">
              {[
                { label: 'メンバーの声', href: '#voice' },
                { label: '参加申し込み', href: '#cta' },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="text-[13px] text-ink-sub hover:text-org transition-colors no-underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 下段 */}
      <div className="border-t border-gray-line">
        <div className="max-w-[1200px] mx-auto px-12 max-lg:px-6 py-6 flex justify-between items-center max-sm:flex-col max-sm:gap-4">
          {/* 左: コピーライト */}
          <p className="text-[12px] text-ink-hint">
            © 2024 NEXUS20. All rights reserved.
          </p>

          {/* 右: SNSボタン */}
          <div className="flex gap-3">
            {['Instagram', 'X', 'LINE'].map((sns, i) => (
              <a key={i} href="#"
                 className="w-9 h-9 rounded-full border border-gray-line flex items-center justify-center
                            text-ink-sub text-[12px] hover:border-org hover:text-org transition-colors no-underline">
                {sns[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
