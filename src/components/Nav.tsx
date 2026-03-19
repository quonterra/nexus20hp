'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [on, setOn] = useState(false)
  useEffect(() => {
    const h = () => setOn(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav className={`fixed inset-x-0 top-0 z-[300] flex items-center justify-between
      px-12 transition-all duration-300
      ${on ? 'py-3 bg-white/95 backdrop-blur-md shadow-[0_1px_0_#EEF0F3]'
           : 'py-[18px] bg-transparent'}`}>

      {/* ロゴ */}
      <Link href="/" className="flex items-baseline gap-1 no-underline">
        <span className="font-bebas text-[26px] tracking-[.1em] text-ink leading-none">NEXUS</span>
        <span className="font-jakarta text-[11px] font-bold text-org tracking-[.2em]">20</span>
      </Link>

      {/* ナビ（モバイルでは非表示） */}
      <ul className="hidden md:flex gap-7 list-none">
        {['コンセプト','イベント','ギャラリー','メンバーの声'].map((label, i) => {
          const ids = ['about','events','gallery','voice']
          return (
            <li key={i}>
              <a href={`#${ids[i]}`}
                 className="text-[13px] font-medium text-ink-sub hover:text-org transition-colors no-underline">
                {label}
              </a>
            </li>
          )
        })}
      </ul>

      {/* CTAボタン */}
      <a href="#cta"
         className="bg-org text-white text-[13px] font-bold tracking-[.06em]
                    px-6 py-[11px] rounded-full shadow-org
                    hover:bg-org-light hover:-translate-y-px transition-all no-underline">
        参加する →
      </a>
    </nav>
  )
}
