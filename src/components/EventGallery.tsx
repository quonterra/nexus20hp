import Image from 'next/image'

const eventImages = [
  { src: '/images/event_02.jpg', caption: 'スパイスカレー料理教室' },
  { src: '/images/event_05.jpg', caption: '焼肉ナイト with Wagyu' },
  { src: '/images/event_06.jpg', caption: 'スパイス調合ワークショップ' },
  { src: '/images/LINE_ALBUM_イベント写真素材_260317_11.jpg', caption: '大人数交流会' },
  { src: '/images/event_07.jpg', caption: 'インドスパイス体験' },
  { src: '/images/LINE_ALBUM_イベント写真素材_260317_12.jpg', caption: 'ホームパーティー' },
  { src: '/images/LINE_ALBUM_イベント写真素材_260317_13.jpg', caption: 'ホームパーティー' },
  { src: '/images/LINE_ALBUM_イベント写真素材_260317_14.jpg', caption: 'ホームパーティー' },
]

export default function EventGallery() {
  return (
    <section id="event-gallery" className="bg-[#FFF3EC] py-28 px-12 max-lg:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-org-pale2
                          rounded-full px-[16px] py-[6px] mb-5">
            <span className="text-[10px] font-bold text-org-text tracking-[.18em] uppercase">
              Events Gallery
            </span>
          </div>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-ink leading-[1.35]">
            イベント<span className="text-org">実績</span>
          </h2>
          <p className="text-ink-sub text-sm mt-4 max-w-[520px] mx-auto leading-relaxed">
            NEXUS20で開催された多彩なイベントの一部をご紹介します
          </p>
        </div>

        {/* 3カラム グリッド */}
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {eventImages.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* オーバーレイ＋キャプション */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-4
                                translate-y-2 group-hover:translate-y-0
                                opacity-0 group-hover:opacity-100
                                transition-all duration-400">
                  <span className="text-white text-sm font-bold drop-shadow-md">
                    {img.caption}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
