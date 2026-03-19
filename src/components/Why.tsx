const whyItems = [
  { num: '01', title: '異業種・異世代の\n本物の出会い',     body: '会社員、経営者、フリーランス、学生——肩書きも年齢も関係ない。思いがけない出会いが、人生の次のステージを開きます。' },
  { num: '02', title: '「食」が生む\n自然な距離感',     body: '食卓には緊張を解く力がある。アフタヌーンティーから鍋パーティーまで、おいしいものを囲む時間が本音で話せる関係を育てます。' },
  { num: '03', title: '月次イベントで\n深まるつながり',     body: '一回の出会いで終わらない。毎月繰り返し顔を合わせることで、本当に頼れる仲間が生まれます。' },
]

export default function Why() {
  return (
    <section className="bg-white py-28 px-12 max-lg:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-org-pale border border-org-pale2
                          rounded-full px-[16px] py-[6px] mb-5">
            <span className="text-[10px] font-bold text-org-text tracking-[.18em] uppercase">
              Why NEXUS20
            </span>
          </div>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-ink leading-[1.35]">
            選ばれる<span className="text-org">理由</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          {whyItems.map((item, i) => (
            <div key={i}
                 className="relative overflow-hidden bg-gray-bg border border-gray-line
                            rounded-[28px] p-11 group
                            hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(255,102,0,.12)]
                            hover:border-org-pale2 transition-all duration-300">
              {/* 上部アクセントバー */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-org
                              scale-x-0 group-hover:scale-x-100 origin-left
                              transition-transform duration-[380ms]" />
              {/* 番号 */}
              <div className="font-bebas text-[80px] text-gray-line leading-[.85] mb-5">{item.num}</div>
              {/* タイトル */}
              <h3 className="text-[17px] font-bold text-ink mb-3 leading-[1.5]"
                  style={{ whiteSpace: 'pre-line' }}>{item.title}</h3>
              {/* 本文 */}
              <p className="text-[13.5px] leading-[2.05] text-ink-sub">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
