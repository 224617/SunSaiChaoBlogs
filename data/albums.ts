// 🛡️ 本文件由 XingHuiSama 控制台自动生成，请勿手动修改
export interface Photo { url: string; caption?: string; }
export interface Album { id: string; title: string; description: string; cover: string; date: string; photos: Photo[]; }

export const albums: Album[] = [
  {
    "title": "扫雷",
    "cover": "https://tuku.sunsaichao.cc.cd/224617/SunSaiChao-images/6b6e5c6cfc171194748f00362cb6255237ea802f/saolei.jpg",
    "id": "album_1786638394639",
    "photos": [
      {
        "url": "https://tuku.sunsaichao.cc.cd/224617/SunSaiChao-images/6b6e5c6cfc171194748f00362cb6255237ea802f/sl2445.jpg",
        "caption": "2445"
      },
      {
        "url": "https://tuku.sunsaichao.cc.cd/224617/SunSaiChao-images/6b6e5c6cfc171194748f00362cb6255237ea802f/sl1340.jpg",
        "caption": "1340"
      },
      {
        "url": "https://tuku.sunsaichao.cc.cd/224617/SunSaiChao-images/6b6e5c6cfc171194748f00362cb6255237ea802f/sl1072.jpg",
        "caption": "1072"
      },
      {
        "url": "https://tuku.sunsaichao.cc.cd/224617/SunSaiChao-images/6b6e5c6cfc171194748f00362cb6255237ea802f/sl940.jpg",
        "caption": "940"
      },
      {
        "url": "https://tuku.sunsaichao.cc.cd/224617/SunSaiChao-images/6b6e5c6cfc171194748f00362cb6255237ea802f/sl727.jpg",
        "caption": "727"
      },
      {
        "url": "https://tuku.sunsaichao.cc.cd/224617/SunSaiChao-images/6b6e5c6cfc171194748f00362cb6255237ea802f/sl587.jpg",
        "caption": "587"
      }
    ],
    "date": "2026-08-13"
  },
  {
    "id": "terra-journey",
    "title": "泰拉大陆纪行",
    "description": "关于源石、孤星与前文明的视觉记录（测试用相册）",
    "cover": "https://bu.dusays.com/2026/03/24/69c24230de927.jpg",
    "date": "2026.01",
    "photos": [
      {
        "url": "扫雷"
      },
      {
        "url": "https://bu.dusays.com/2026/03/31/69cb69bb530d8.jpg",
        "caption": "原来的人"
      },
      {
        "url": "https://bu.dusays.com/2026/03/24/69c24230de927.jpg",
        "caption": "星空漫游"
      }
    ]
  },
  {
    "id": "history-tour",
    "title": "唐宋历史巡游",
    "description": "寻访千年前的长安与汴梁遗迹（测试用相册）",
    "cover": "https://bu.dusays.com/2026/03/24/69c24230a4efe.jpg",
    "date": "2025.10",
    "photos": [
      {
        "url": "https://bu.dusays.com/2026/03/24/69c24230a5ff8.jpg",
        "caption": "古都夕阳"
      },
      {
        "url": "https://bu.dusays.com/2026/03/24/69c24230d661d.jpg",
        "caption": "青石板小路"
      },
      {
        "url": "https://bu.dusays.com/2026/03/24/69c24230de927.jpg",
        "caption": "飞檐翘角"
      }
    ]
  }
];