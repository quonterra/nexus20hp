const voices = [
  { initial: 'A', name: 'Aさん（30代・会社員）',     tenure: '参加歴 8ヶ月',     text: '最初はひとりで参加することに不安でしたが、温かい雰囲気でみんなすぐに話しかけてくれました。今では毎回のイベントが生活の楽しみです！' },
  { initial: 'K', name: 'Kさん（20代・起業家）',     tenure: '参加歴 1年3ヶ月',   text: '仕事以外の人脈がまったくなかった私が、ネクサスで出会った仲間と新しいビジネスを立ち上げることができました。まさに「次の動き」が生まれた場所です。' },
  { initial: 'M', name: 'Mさん（30代・フリーランス）', tenure: '参加歴 5ヶ月',     text: 'ハロウィンパーティーで初参加しましたが、仮装してくる人みんながキャラクターで最高でした！次のイベントまで待ち切れない気持ちになります。' },
  { initial: 'T', name: 'Tさん（20代・会社員）',     tenure: '参加歴 4ヶ月',     text: '転勤してきたばかりで友人がゼロの状態でした。ネクサスのおかげで、この街に本当の意味での「居場所」ができた気がします。' },
  { initial: 'Y', name: 'Yさん（30代・医療従事者）',  tenure: '参加歴 10ヶ月',    text: '食べることが好きな人が集まっているので、会話が尽きない。アフタヌーンティーのイベントがとくにお気に入りで、毎回参加しています！' },
]

const doubled = [...voices, ...voices]

export default function Voice() {
  return (
    <section id="voice" className="bg-org-pale py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-12 max-lg:px-6 mb-12">
        {/* セクションヘッダー */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-org-pale2
                          rounded-full px-[16px] py-[6px] mb-5">
            <span className="text-[10px] font-bold text-org-text tracking-[.18em] uppercase">
              Voice
            </span>
          </div>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-ink leading-[1.35]">
            メンバーの<span className="text-org">声</span>
          </h2>
        </div>
      </div>

      {/* 横スクロールトラック */}
      <div className="v-track inline-flex gap-5 px-5">
        {doubled.map((v, i) => (
          <div key={i}
               className="w-[330px] flex-shrink-0 bg-white border border-gray-line
                          rounded-[20px] p-7
                          hover:border-org-pale2 hover:shadow-m transition-all">
            <div className="text-org text-[14px] tracking-[3px] mb-[14px]">★★★★★</div>
            <p className="text-[13px] leading-[2.05] text-ink-sub mb-[22px]">{v.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-org text-white flex items-center
                              justify-center font-bold text-[15px] flex-shrink-0">
                {v.initial}
              </div>
              <div>
                <p className="text-[13px] font-bold text-ink">{v.name}</p>
                <p className="text-[11px] text-ink-hint mt-px">{v.tenure}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
