import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-gradient-to-b from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            巴菲特投资智慧
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            汇集沃伦·巴菲特的经典演讲、股东大会视频与价值投资理念，学习股神一生的投资哲学。
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/videos"
              className="px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
            >
              经典视频
            </Link>
            <Link
              href="/philosophy"
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              投资理念
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">关于巴菲特</h2>
          <p className="text-slate-600 leading-relaxed">
            沃伦·巴菲特（Warren Buffett），1930年出生于美国内布拉斯加州奥马哈，被誉为"奥马哈先知"和"股神"。
            他是伯克希尔·哈撒韦公司（Berkshire Hathaway）的董事长兼CEO，凭借长期价值投资策略，
            将一家濒临破产的纺织厂打造成市值超过万亿美金的投资帝国。巴菲特本人也多次成为世界首富，
            并承诺将其99%的财富捐赠给慈善事业。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">核心内容</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link
              href="/videos"
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-amber-300 transition-all"
            >
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                往期视频
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                历年股东大会、经典访谈、纪录片与投资课程精选视频资源。
              </p>
            </Link>

            <Link
              href="/philosophy"
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-amber-300 transition-all"
            >
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                投资理念
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                价值投资核心原则、安全边际、护城河理论与巴菲特经典语录。
              </p>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">经典语录</h2>
          <div className="space-y-4">
            {QUOTES.map((q, i) => (
              <blockquote
                key={i}
                className="bg-white border-l-4 border-amber-500 p-4 rounded-r-lg"
              >
                <p className="text-slate-700 italic">"{q.text}"</p>
                <footer className="text-sm text-slate-400 mt-2">
                  — {q.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-slate-400">
          <p>巴菲特投资智慧 — 学习价值投资，做时间的朋友。</p>
        </div>
      </footer>
    </>
  );
}

const QUOTES = [
  {
    text: "别人贪婪时我恐惧，别人恐惧时我贪婪。",
    source: "巴菲特 1986 年致股东信",
  },
  {
    text: "时间是优秀企业的朋友，是平庸企业的敌人。",
    source: "巴菲特致股东信",
  },
  {
    text: "以合理的价格买入一家优秀的企业，远胜于以低廉的价格买入一家平庸的企业。",
    source: "巴菲特 1989 年致股东信",
  },
  {
    text: "投资的第一条原则是不要亏钱，第二条原则是记住第一条。",
    source: "巴菲特投资法则",
  },
  {
    text: "如果你不打算持有一只股票十年，那就连十分钟都不要持有。",
    source: "巴菲特投资语录",
  },
];
