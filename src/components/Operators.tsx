import Image from 'next/image'

const operators = [
  {
    name: '伊藤',
    image: '/images/profile-ito.jpg',
    tags: ['起業家', 'SNSマーケター', 'モデル'],
    description:
      '大学在学中の20歳で起業し、経営者としてのキャリアをスタート。アパレルモデルとしての活動経験も持ち、SNS総フォロワー約450万人のアカウント運用・立ち上げや、Instagramフォロワー約50万人のアパレルブランドアンバサダーを務めるなど、自身の発信力とビジュアルセンスを活かしたSNSマーケティングを強みとする。',
    sub: '学生時代に築いた縁やつながりが自己成長の大きな原動力になったと実感しており、その経験と持ち前の問題解決能力を活かして、現在は多くの挑戦をしていく人たちの成功を支援する存在として精力的に活動中。',
  },
  {
    name: '光禮彩華',
    nameEn: 'Ayaka Mirei',
    image: '/images/profile-mirei.jpg',
    tags: ['元銀行マン', '占い師', 'オーラ診断', '九星気学'],
    description:
      '元銀行マン。5回の転職を経て幅広いビジネススキルを習得。しかしスキルはあっても結果につながらない"器用貧乏"に悩む中、20代後半に大きな失敗を経験。「このままではいけない」という強い危機感から脱サラを決意。',
    sub: '元々持ち合わせていた霊感を、サラリーマン時代に1,000人以上の鑑定を通して磨き上げ、現在は占い師として独立。オーラ診断・タロット占い・九星気学を軸に、一人ひとりの深い悩みに真摯に向き合い、多くの人の問題解決へと導いている。',
  },
]

export default function Operators() {
  return (
    <section className="relative bg-white py-28 px-12 max-lg:px-6 overflow-hidden">
      {/* 装飾 */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full
                      bg-[rgba(255,232,214,0.35)] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-org-pale border border-org-pale2
                          rounded-full px-[16px] py-[6px] mb-6">
            <span className="text-[10px] font-bold text-org-text tracking-[.18em] uppercase">
              Operators
            </span>
          </div>
          <h2 className="text-[clamp(26px,3vw,38px)] font-bold text-ink leading-[1.4]">
            運営メンバー
          </h2>
          <p className="text-[14px] text-ink-sub mt-3 max-w-[480px] mx-auto leading-[1.9]">
            NEXUS20は、異なるフィールドで活躍する2人の運営者が<br className="max-lg:hidden" />
            それぞれの経験を活かしてコミュニティを牽引しています。
          </p>
        </div>

        {/* プロフィールカード */}
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 max-lg:gap-14">
          {operators.map((op) => (
            <div
              key={op.name}
              className="group relative bg-gray-bg rounded-[20px] p-8 max-sm:p-6
                         border border-gray-line
                         hover:border-org-pale2 hover:shadow-m
                         transition-all duration-300"
            >
              {/* 写真 + 名前 */}
              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-[90px] h-[90px] rounded-full overflow-hidden
                                ring-[3px] ring-org-pale2 ring-offset-2 ring-offset-gray-bg
                                shrink-0">
                  <Image
                    src={op.image}
                    alt={op.name}
                    width={180}
                    height={180}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-[22px] font-bold text-ink leading-tight">
                    {op.name}
                  </h3>
                  {op.nameEn && (
                    <p className="text-[12px] text-ink-hint tracking-[.08em] mt-0.5">
                      {op.nameEn}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {op.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-org-text bg-org-pale
                                   rounded-full px-2.5 py-[3px] tracking-[.04em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* プロフィール本文 */}
              <p className="text-[13px] leading-[2] text-ink-sub mb-3">
                {op.description}
              </p>
              <p className="text-[13px] leading-[2] text-ink-sub">
                {op.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
