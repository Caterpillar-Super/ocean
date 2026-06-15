"use client";

import Link from "next/link";
import { useState } from "react";

type VideoItem = {
  title: string;
  desc: string;
  bvid?: string;
  aid?: string;
  platform: string;
};

type VideoCategory = {
  title: string;
  videos: VideoItem[];
};

const VIDEO_DATA: VideoCategory[] = [
  {
    title: "2025 年伯克希尔股东大会",
    videos: [
      {
        title: "2025 伯克希尔股东大会全程（中文字幕）",
        desc: "巴菲特亲自主持的第60届股东大会，回答股东提问，分享最新投资见解。",
        bvid: "BV1hT411z7Vx",
        platform: "B站",
      },
    ],
  },
  {
    title: "历年股东大会精选",
    videos: [
      {
        title: "2024 伯克希尔股东大会全程",
        desc: "巴菲特继任计划、减持苹果、AI与能源投资的精彩问答。",
        bvid: "BV1up42197be",
        platform: "B站",
      },
      {
        title: "2023 伯克希尔股东大会精彩集锦",
        desc: "巴菲特与芒格谈银行业危机、AI与苹果投资。",
        bvid: "BV1Az4y1B7YL",
        platform: "B站",
      },
      {
        title: "2022 伯克希尔股东大会（中文精选）",
        desc: "巴菲特回应通胀、石油投资和比特币等热点话题。",
        bvid: "BV1WS4y1B7ZY",
        platform: "B站",
      },
      {
        title: "2020 巴菲特股东大会（线上特别版）",
        desc: "首次线上股东大会，巴菲特经典名言'永远不要做空美国'。",
        bvid: "BV1rK4y1t76a",
        platform: "B站",
      },
    ],
  },
  {
    title: "纪录片与专题",
    videos: [
      {
        title: "《成为沃伦·巴菲特》HBO纪录片（中英双语）",
        desc: "HBO出品巴菲特个人纪录片，从奥马哈少年到世界首富的传奇一生。播放量 77万+。",
        bvid: "BV1cd4y1F7wN",
        platform: "B站",
      },
      {
        title: "《巴菲特神秘俱乐部》动画全集",
        desc: "巴菲特亲自参与制作的财商教育动画，通过趣味故事教孩子理财与商业。",
        bvid: "BV1Ts41117JV",
        platform: "B站",
      },
      {
        title: "巴菲特与比尔·盖茨对话合集",
        desc: "两位世界首富关于商业、慈善与人生的深度对话。",
        bvid: "BV1Ax411U7VF",
        platform: "B站",
      },
    ],
  },
  {
    title: "投资课程与演讲",
    videos: [
      {
        title: "巴菲特1998年佛罗里达大学演讲（完整版）",
        desc: "被广泛认为是最经典的巴菲特演讲，段永平自称看了不下10遍。覆盖投资、人生与择业。",
        bvid: "BV1cu4m1G7Kr",
        platform: "B站",
      },
      {
        title: "查理·芒格：人类误判心理学（25讲）",
        desc: "巴菲特50年搭档芒格的经典心理学课程，价值投资者的必看内容。",
        bvid: "BV1uJ411p7Mt",
        platform: "B站",
      },
      {
        title: "巴菲特价值投资入门课程",
        desc: "系统讲解巴菲特选股方法：护城河、安全边际、自由现金流折现。",
        bvid: "BV1sV411k7HA",
        platform: "B站",
      },
      {
        title: "巴菲特教你读财报",
        desc: "解读巴菲特如何通过财务报表识别优质公司。",
        bvid: "BV1kx411m7nW",
        platform: "B站",
      },
    ],
  },
];

function BilibiliPlayer({ bvid }: { bvid: string }) {
  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={`https://player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1&autoplay=0`}
        allowFullScreen
        className="absolute inset-0 w-full h-full rounded-lg"
        allow="autoplay; fullscreen"
        title="B站视频播放器"
      />
    </div>
  );
}

export default function VideosPage() {
  const [activeBvid, setActiveBvid] = useState<string | null>(null);

  return (
    <>
      <header className="bg-gradient-to-b from-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <Link
            href="/"
            className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
          >
            ← 返回首页
          </Link>
          <h1 className="text-3xl font-bold mt-4 mb-2">巴菲特往期视频</h1>
          <p className="text-slate-300">
            历年股东大会、经典访谈、纪录片与投资课程精选。点击视频卡片即可在本站播放。
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-4 py-10 w-full">
        {/* Embedded Player */}
        {activeBvid && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-slate-800">正在播放</h2>
              <button
                onClick={() => setActiveBvid(null)}
                className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
              >
                收起播放器 ↑
              </button>
            </div>
            <BilibiliPlayer bvid={activeBvid} />
          </div>
        )}

        {!activeBvid && (
          <div className="mb-10 bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <p className="text-sm text-blue-700">
              👆 点击下方任意视频卡片即可在本站播放，无需跳转。
            </p>
          </div>
        )}

        <div className="space-y-10">
          {VIDEO_DATA.map((category) => (
            <section key={category.title}>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-amber-500 rounded-full inline-block" />
                {category.title}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {category.videos.map((video) => {
                  const vid = video.bvid || video.aid || "";
                  const isActive = activeBvid === vid;
                  return (
                    <button
                      key={video.title}
                      onClick={() => setActiveBvid(vid)}
                      className={`group text-left bg-white border-2 rounded-lg p-4 transition-all ${
                        isActive
                          ? "border-amber-500 shadow-md"
                          : "border-slate-200 hover:shadow-md hover:border-amber-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-100 text-red-600">
                          {video.platform}
                        </span>
                        <span
                          className={`text-xs transition-colors ${
                            isActive
                              ? "text-amber-600 font-medium"
                              : "text-slate-400 group-hover:text-amber-500"
                          }`}
                        >
                          {isActive ? "▶ 播放中" : "▶ 播放"}
                        </span>
                      </div>
                      <h3 className="font-semibold text-slate-800 text-sm leading-snug">
                        {video.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                        {video.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-slate-400">
          <p>巴菲特投资智慧 — 学习价值投资，做时间的朋友。</p>
        </div>
      </footer>
    </>
  );
}
