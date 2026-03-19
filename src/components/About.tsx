const cards = [
  { icon: '🤝', title: '多様な縁の交差点', body: '会社員、起業家、フリーランス、学生——異なる世界が交わる場所だから思いがけない可能性が生まれます。' },
  { icon: '🍽️', title: '食を中心に',        body: '食卓には人を和ませる力がある。おいしい料理と共に過ごす時間が心の距離を縮めます。' },
  { icon: '🚀', title: '次の一手が生まれる',  body: 'ここで出会った縁が、新しいプロジェクト、転職、パートナーシップへと繋がっていく。' },
  { icon: '🔄', title: '継続的なコミュニティ', body: '毎月のイベントで繰り返し顔を合わせることで、深い信頼関係が育まれます。' },
]

export default function About() {
  return (
    <section id="about" className="bg-gray-bg py-28 px-12 max-lg:px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-16 max-lg:grid-cols-1">

        {/* 左カラム */}
        <div>
          {/* セクションタグ */}
          <div className="inline-flex items-center gap-2 bg-org-pale border border-org-pale2
                          rounded-full px-[16px] py-[6px] mb-6">
            <span className="text-[10px] font-bold text-org-text tracking-[.18em] uppercase">
              What is NEXUS20
            </span>
          </div>

          {/* 見出し */}
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-ink leading-[1.35] mb-6">
            人と人が<span className="text-org">交わる</span>、<br />
            新しい<span className="text-org">結節点</span>。
          </h2>

          {/* 説明文 */}
          <p className="text-[14px] leading-[2.1] text-ink-sub mb-4 max-w-[440px]">
            NEXUS20は、食卓を中心に「本物のつながり」を生むコミュニティです。
            肩書きも年齢も関係ない——ただ「新しい出会い」を求める人が集まります。
          </p>
          <p className="text-[14px] leading-[2.1] text-ink-sub mb-8 max-w-[440px]">
            毎月のイベントを通じて、一度きりではない継続的な関係を育み、
            あなたの「次の一手」が生まれる場所を提供します。
          </p>

          {/* NEXUSカード */}
          <div className="bg-white border border-gray-line rounded-[20px] px-8 py-7">
            <div className="font-bebas text-[44px] text-org leading-none mb-2">NEXUS</div>
            <p className="text-[13px] text-ink-sub leading-[1.9]">
              ラテン語で「結び目・つながり」を意味する言葉。<br />
              人と人が交差し、新しい可能性が生まれる結節点——<br />
              それが NEXUS20 の名前の由来です。
            </p>
          </div>
        </div>

        {/* 右カラム: 4カードグリッド */}
        <div className="grid grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <div key={i}
                 className="bg-white border-[1.5px] border-gray-line rounded-[20px] p-6
                            hover:border-org-pale2 hover:-translate-y-1 hover:shadow-m
                            transition-all duration-300">
              <div className="text-[32px] mb-3">{card.icon}</div>
              <h3 className="text-[15px] font-bold text-ink mb-2">{card.title}</h3>
              <p className="text-[12.5px] leading-[1.95] text-ink-sub">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
