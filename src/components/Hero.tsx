'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const heroImages = ['/images/hero-01.jpg','/images/hero-02.jpg','/images/hero-03.jpg','/images/hero-04.jpg']

export default function Hero() {
  const [cur, setCur] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % heroImages.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-svh grid grid-cols-2 items-center overflow-hidden bg-white pt-20
                        max-lg:grid-cols-1">
      {/* 右上の装飾円 */}
      <div className="absolute -top-48 -right-48 w-[800px] h-[800px] rounded-full
                      bg-[radial-gradient(circle,#FFF3EC_0%,transparent_70%)] pointer-events-none" />

      {/* 左: テキスト */}
      <div className="relative z-10 px-20 py-20 max-lg:px-6 max-lg:py-16">

        {/* ピルバッジ */}
        <div className="anim-1 inline-flex items-center gap-2 bg-org-pale border border-org-pale2
                        rounded-full px-[18px] py-[7px] mb-7">
          <span className="dot-pulse w-[7px] h-[7px] rounded-full bg-org flex-shrink-0" />
          <span className="text-[11px] font-semibold text-org-text tracking-[.1em]">
            Community × Exchange × Next Move
          </span>
        </div>

        {/* タイトル */}
        <h1 className="anim-2 font-bebas leading-[.88] tracking-[.03em] text-ink mb-2
                       text-[clamp(68px,9.5vw,128px)]">
          NEXUS<span className="text-org">20</span>
        </h1>

        {/* キャッチ */}
        <p className="anim-3 font-jakarta italic font-normal text-ink-sub mb-6 leading-[1.5]
                      text-[clamp(18px,2.4vw,26px)]">
          出会いが、次を動かす。
        </p>

        {/* 説明文 */}
        <p className="anim-4 text-[15px] leading-[2.1] text-ink-sub mb-10 max-w-[420px]">
          食卓を囲む時間から、本物のつながりが生まれる。<br />
          ハロウィン、鍋パーティー、お祝い事まで——<br />
          あなたの「次の一手」が始まる場所。
        </p>

        {/* ボタン */}
        <div className="anim-5 flex items-center gap-4 flex-wrap mb-13">
          <a href="#cta"
             className="inline-flex items-center gap-2 bg-org text-white text-[15px] font-bold
                        tracking-[.05em] px-[38px] py-[17px] rounded-full shadow-org
                        hover:bg-org-light hover:-translate-y-0.5 hover:shadow-org-lg
                        transition-all no-underline">
            コミュニティに参加する
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M3 8.5h11M9.5 4l4.5 4.5L9.5 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#events"
             className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink-sub
                        hover:text-org transition-colors no-underline">
            イベントを見る ↓
          </a>
        </div>

        {/* 数字バー */}
        <div className="anim-6 flex border border-gray-line rounded-[20px] overflow-hidden max-w-[380px]">
          {[
            { val: '200+', lbl: 'メンバー' },
            { val: '50+',  lbl: '開催イベント' },
            { val: '4都市', lbl: '全国で展開' },
          ].map((s, i) => (
            <div key={i} className={`flex-1 py-[18px] px-5 text-center
                                     ${i < 2 ? 'border-r border-gray-line' : ''}`}>
              <div className="font-bebas text-[36px] text-org leading-none mb-1">{s.val}</div>
              <div className="text-[11px] text-ink-hint tracking-[.05em]">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 右: スライドショー */}
      <div className="relative h-full min-h-[600px] overflow-hidden max-lg:h-[400px]">
        {heroImages.map((src, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-[1300ms]
                                   ${i === cur ? 'opacity-100' : 'opacity-0'}`}>
            <Image src={src} alt="" fill className="object-cover" priority={i === 0}
                   sizes="50vw" />
          </div>
        ))}
        {/* 左フェード */}
        <div className="absolute inset-y-0 left-0 w-36 z-10
                        bg-gradient-to-r from-white to-transparent" />
        {/* 下フェード */}
        <div className="absolute inset-x-0 bottom-0 h-28 z-10
                        bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  )
}
