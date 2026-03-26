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
            まずはお気軽にイベントに参加してみてください。<br />
            下記の運営メンバーのLINEを追加して、お気軽にご連絡ください。
          </p>
        </div>

        {/* 右: LINE追加ボタン */}
        <div className="flex flex-col items-center gap-5 max-lg:items-center">
          <p className="text-[13px] text-ink-sub font-medium mb-1">
            運営メンバーのLINEを追加
          </p>

          {/* 伊藤 */}
          <a href="https://line.me/ti/p/qUt7KBMWXS"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-3 bg-[#06C755] text-white
                        text-[16px] font-bold tracking-[.06em]
                        px-[44px] py-[18px] rounded-full
                        shadow-[0_4px_20px_rgba(6,199,85,0.35)]
                        hover:brightness-110 hover:-translate-y-[3px]
                        hover:shadow-[0_8px_30px_rgba(6,199,85,0.45)]
                        transition-all no-underline whitespace-nowrap w-[280px] justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            伊藤を友だち追加
          </a>

          {/* 光禮彩華 */}
          <a href="https://line.me/ti/p/MljteuGpka"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-3 bg-[#06C755] text-white
                        text-[16px] font-bold tracking-[.06em]
                        px-[44px] py-[18px] rounded-full
                        shadow-[0_4px_20px_rgba(6,199,85,0.35)]
                        hover:brightness-110 hover:-translate-y-[3px]
                        hover:shadow-[0_8px_30px_rgba(6,199,85,0.45)]
                        transition-all no-underline whitespace-nowrap w-[280px] justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            光禮彩華を友だち追加
          </a>

          <p className="text-[12px] text-ink-hint tracking-[.04em] mt-2">
            LINEで次回イベントの情報もお届けします
          </p>
        </div>
      </div>
    </section>
  )
}
