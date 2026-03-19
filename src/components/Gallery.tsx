import Image from 'next/image'

const galleryImages = [
  { src: '/images/gallery-01.jpg', span: 'col-span-3 row-span-2', style: { minHeight: '300px' } as React.CSSProperties },
  { src: '/images/gallery-02.jpg', span: 'col-span-3',            style: { aspectRatio: '3/2' } as React.CSSProperties },
  { src: '/images/gallery-03.jpg', span: 'col-span-3',            style: { aspectRatio: '3/2' } as React.CSSProperties },
  { src: '/images/gallery-04.jpg', span: 'col-span-2',            style: { aspectRatio: '1' } as React.CSSProperties },
  { src: '/images/gallery-05.jpg', span: 'col-span-2',            style: { aspectRatio: '1' } as React.CSSProperties },
  { src: '/images/gallery-06.jpg', span: 'col-span-2',            style: { aspectRatio: '1' } as React.CSSProperties },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-org-pale py-28 px-12 max-lg:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-org-pale2
                          rounded-full px-[16px] py-[6px] mb-5">
            <span className="text-[10px] font-bold text-org-text tracking-[.18em] uppercase">
              Gallery
            </span>
          </div>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-ink leading-[1.35]">
            イベントの<span className="text-org">風景</span>
          </h2>
        </div>

        <div className="grid grid-cols-6 gap-[10px] max-lg:grid-cols-2">
          {galleryImages.map((img, i) => (
            <div key={i} className={`${img.span} overflow-hidden rounded-[12px] relative max-lg:col-span-1 ${i === 0 ? 'max-lg:row-span-1' : ''}`}
                 style={img.style}>
              <Image src={img.src} alt="" fill
                     className="object-cover transition-transform duration-500 hover:scale-[1.05]"
                     sizes="(max-width: 768px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
