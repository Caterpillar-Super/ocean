import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "巴菲特往期视频 | Buffett Insights",
  description: "巴菲特历年股东大会、经典访谈、纪录片与投资课程精选视频资源汇总。",
};

type VideoCategory = {
  title: string;
  videos: { title: string; desc: string; url: string; platform: string }[];
};

const VIDEO_DATA: VideoCategory[] = [
  {
    title: "2025 年伯克希尔股东大会",
    videos: [
      {
        title: "2025 伯克希尔股东大会全程",
        desc: "巴菲特亲自主持的第60届股东大会，回答股东提问，分享最新投资见解。",
        url: "https://www.bilibili.com/video/BV1hT411z7Vx/",
        platform: "B站",
      },
    ],
  },
  {
    title: "历年股东大会精选",
    videos: [
      {
        title: "2024 伯克希尔股东大会全程（中文字幕）",
        desc: "巴菲特与芒格最后一次同台的股东大会，回顾两人60年合作历程。",
        url: "https://www.bilibili.com/video/BV1EZ42187Kd/",
        platform: "B站",
      },
      {
        title: "2023 伯克希尔股东大会精彩集锦",
        desc: "巴菲特与芒格谈银行业危机、AI与苹果投资。",
        url: "https://www.youtube.com/watch?v=search-2023-berkshire-meeting",
        platform: "YouTube",
      },
      {
        title: "2022 伯克希尔股东大会（中文精选）",
        desc: "巴菲特回应通胀、石油投资和比特币等热点话题。",
        url: "https://www.bilibili.com/video/BV1WS4y1B7ZY/",
        platform: "B站",
      },
      {
        title: "2020 巴菲特股东大会（线上特别版）",
        desc: "疫情之下首次线上股东大会，巴菲特经典名言'永远不要做空美国'。",
        url: "https://www.bilibili.com/video/BV1rK4y1t76a/",
        platform: "B站",
      },
    ],
  },
  {
    title: "纪录片与专题",
    videos: [
      {
        title: "《成为沃伦·巴菲特》纪录片（中字）",
        desc: "HBO出品巴菲特个人纪录片，讲述他从奥马哈少年到世界首富的传奇一生。",
        url: "https://www.bilibili.com/video/BV1jb411h7P2/",
        platform: "B站",
      },
      {
        title: "《巴菲特神秘俱乐部》动画全集",
        desc: "巴菲特亲自参与制作的财商教育动画，通过趣味故事教孩子理财与商业。",
        url: "https://www.bilibili.com/video/BV1Ts41117JV/",
        platform: "B站",
      },
      {
        title: "巴菲特与比尔·盖茨对话合集",
        desc: "两位世界首富关于商业、慈善与人生的深度对话。",
        url: "https://www.bilibili.com/video/BV1Ax411U7VF/",
        platform: "B站",
      },
    ],
  },
  {
    title: "投资课程与演讲",
    videos: [
      {
        title: "巴菲特1998年佛罗里达大学演讲（完整版）",
        desc: "被广泛认为是最经典的巴菲特演讲，覆盖投资、人生与择业。",
        url: "https://www.bilibili.com/video/BV1M7411j7Cz/",
        platform: "B站",
      },
      {
        title: "查理·芒格：人类误判心理学（25讲）",
        desc: "巴菲特50年搭档芒格的经典心理学课程，价值投资者的必看内容。",
        url: "https://www.bilibili.com/video/BV1uJ411p7Mt/",
        platform: "B站",
      },
      {
        title: "巴菲特价值投资入门课程",
        desc: "系统讲解巴菲特选股方法：护城河、安全边际、自由现金流折现。",
        url: "https://www.bilibili.com/video/BV1sV411k7HA/",
        platform: "B站",
      },
      {
        title: "巴菲特教你读财报",
        desc: "解读巴菲特如何通过财务报表识别优质公司。",
        url: "https://www.bilibili.com/video/BV1kx411m7nW/",
        platform: "B站",
      },
    ],
  },
];

export default function VideosPage() {
  return (
    <>
      <header className="bg-gradient-to-b from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <Link href="/" className="text-sm text-amber-400 hover:text-amber-300 transition-colors">
            ← 返回首页
          </Link>
          <h1 className="text-3xl font-bold mt-4 mb-2">巴菲特往期视频</h1>
          <p className="text-slate-300">
            历年股东大会、经典访谈、纪录片与投资课程精选，持续更新中。
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-10 w-full">
        <div className="space-y-10">
          {VIDEO_DATA.map((category) => (
            <section key={category.title}>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-amber-500 rounded-full inline-block" />
                {category.title}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {category.videos.map((video) => (
                  <a
                    key={video.title}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md hover:border-amber-300 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-100 text-red-600">
                        {video.platform}
                      </span>
                      <span className="text-xs text-slate-400 group-hover:text-amber-500 transition-colors">
                        观看 →
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-800 text-sm leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                      {video.desc}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 bg-amber-100 border border-amber-200 rounded-lg p-4 text-center">
          <p className="text-sm text-amber-800">
            📌 提示：点击视频卡片即可跳转到对应平台观看。部分视频可能需要科学上网访问
            YouTube 内容。
          </p>
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
