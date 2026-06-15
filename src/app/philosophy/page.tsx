import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "巴菲特投资理念 | Buffett Insights",
  description:
    "深入学习巴菲特的投资理念：价值投资、安全边际、护城河理论、能力圈原则，及巴菲特致股东信精华。",
};

export default function PhilosophyPage() {
  return (
    <>
      <header className="bg-gradient-to-b from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <Link href="/" className="text-sm text-amber-400 hover:text-amber-300 transition-colors">
            ← 返回首页
          </Link>
          <h1 className="text-3xl font-bold mt-4 mb-2">巴菲特投资理念</h1>
          <p className="text-slate-300">深入理解价值投资的核心理念与方法论。</p>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-10 w-full">
        <article className="prose prose-slate max-w-none">
          {SECTIONS.map((section, i) => (
            <section key={i} className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">{section.icon}</span>
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              {section.keyPoints && (
                <ul className="mt-3 space-y-1.5">
                  {section.keyPoints.map((kp, k) => (
                    <li key={k} className="flex items-start gap-2 text-slate-600 text-sm">
                      <span className="text-amber-500 font-bold mt-0.5">•</span>
                      <span>{kp}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.quote && (
                <blockquote className="mt-4 pl-4 border-l-2 border-amber-400 text-slate-500 italic">
                  {section.quote}
                </blockquote>
              )}
            </section>
          ))}
        </article>

        <div className="text-center mt-8">
          <Link
            href="/videos"
            className="inline-block px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
          >
            观看巴菲特经典视频 →
          </Link>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-slate-400">
          <p>巴菲特投资智慧 — 学习价值投资，做时间的朋友。</p>
        </div>
      </footer>
    </>
  );
}

const SECTIONS = [
  {
    icon: "🏛️",
    title: "价值投资：投资的基石",
    paragraphs: [
      "价值投资（Value Investing）由本杰明·格雷厄姆创立，巴菲特将其发扬光大。其核心思想只有一个：股票代表的是企业所有权的一部分，而非一张投机交易的纸片。",
      "巴菲特认为，市场的短期波动是情绪化的——时而狂热、时而恐慌——但企业的内在价值并不会因为市场情绪而剧烈变化。投资者要做的是在市场价格低于内在价值时买入，然后耐心持有。",
    ],
    keyPoints: [
      "股票 = 企业的一部分所有权",
      "市场先生是你的仆人而非向导",
      "价格是你付出的，价值是你得到的",
      "长期持有优秀企业，复利是第八大奇迹",
    ],
    quote: "以合理的价格买入一家优秀的企业，远胜于以低廉的价格买入一家平庸的企业。",
  },
  {
    icon: "🛡️",
    title: "安全边际：避免永久性损失",
    paragraphs: [
      `安全边际（Margin of Safety）是格雷厄姆留给巴菲特最重要的思想遗产。简单说，就是用 0.5 元买价值 1 元的东西。这个"折扣"就是你犯错时的保护垫。`,
      `巴菲特特别强调"不要亏钱"——这里的亏钱指的不是短期股价波动带来的浮亏，而是本金的永久性损失。避免永久性损失比追求高回报重要得多，因为一旦本金大幅亏损，需要的回报率将呈指数级上升。`,
    ],
    keyPoints: [
      "永远留有安全边际，不追高",
      "本金亏损50%需要涨100%才能回本",
      "宁可错过，也不要做错",
      "不懂的生意不要碰——呆在能力圈内",
    ],
    quote: "投资的第一条原则是不要亏钱，第二条原则是记住第一条。",
  },
  {
    icon: "🏰",
    title: "护城河理论：寻找持久竞争优势",
    paragraphs: [
      `护城河（Economic Moat）是企业抵御竞争对手的持久优势，就像古代城堡周围的护城河一样。巴菲特只投资那些拥有"宽护城河"的企业——即很难被竞争对手复制或超越的公司。`,
      "常见的护城河包括：品牌溢价（茅台、可口可乐）、网络效应（腾讯、Visa）、规模成本优势（沃尔玛、Costco）、切换成本（微软Office、Adobe）以及监管壁垒。",
    ],
    keyPoints: [
      "品牌护城河——消费者愿意为品牌支付溢价",
      "转换成本——用户换用竞品的成本极高",
      "网络效应——用户越多，产品价值越大",
      "成本优势——规模效应带来的低成本优势",
    ],
    quote: "时间是优秀企业的朋友，是平庸企业的敌人。——这句话本身就是对护城河最好的诠释。",
  },
  {
    icon: "🎯",
    title: "能力圈：只做自己懂的事",
    paragraphs: [
      "能力圈（Circle of Competence）是巴菲特最为人所知的投资理念之一。它的意思很简单：只投资你真正理解的行业和企业。你不必成为每个行业的专家，但你必须清楚自己理解什么、不理解什么。",
      "巴菲特在科技股狂潮中坚守自己不投科技的立场数十年，后来投资苹果是因为他把苹果视为一家消费品牌公司而非科技公司——这恰好说明了他如何在自己的能力圈框架下做决策。",
    ],
    keyPoints: [
      "知道自己的能力边界比能力大小更重要",
      "不在能力圈内的机会，再大也不是你的机会",
      "持续扩展能力圈，但永远不要出圈投资",
    ],
    quote: "风险来自于你不知道自己在做什么。",
  },
  {
    icon: "⏳",
    title: "长期主义与复利思维",
    paragraphs: [
      "巴菲特的投资成功，本质上是对复利（Compound Interest）最极致的实践。他从11岁开始投资，至今超过80年——这正是复利最重要的变量：时间。",
      `复利不仅是数学概念，更是一种哲学。在商业中，好的企业会不断利用留存收益创造更多价值；在生活中，知识、技能、人脉都会随着时间产生复利效应。巴菲特的经典名言"如果你不打算持有一只股票十年，那就连十分钟都不要持有"，表达的就是这种长期主义信仰。`,
    ],
    keyPoints: [
      "复利 = 本金 × (1 + 年化回报率)^时间",
      "时间是复利最大的杠杆",
      "优秀企业的留存收益再投资本身就在创造复利",
      "长期主义不仅适用于投资，也适用人生",
    ],
    quote: "今天能坐在树荫下乘凉，是因为很久以前有人种了一棵树。",
  },
  {
    icon: "📖",
    title: "巴菲特推荐书单",
    paragraphs: [
      "巴菲特曾说，他每天80%的时间都在阅读。以下是他多次推荐的经典投资书籍：",
    ],
    keyPoints: [
      "《聪明的投资者》— 本杰明·格雷厄姆（价值投资圣经）",
      "《证券分析》— 格雷厄姆 & 多德（专业投资的奠基之作）",
      "《怎样选择成长股》— 菲利普·费雪（成长股投资经典）",
      "《巴菲特致股东的信》— 巴菲特/坎宁安编（巴菲特亲自推荐）",
      "《穷查理宝典》— 查理·芒格（多元思维模型集大成）",
      "《影响力》— 罗伯特·西奥迪尼（理解人性与商业心理）",
    ],
  },
];
