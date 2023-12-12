interface SkillData{
  title: string,
  overview: string[]
}

export const skillData: SkillData[] = [
  {
    title: '前端：', 
    overview: [
      ' HTML語意化標籤的使用',
      ' CSS、SCSS、Bootstrap、Tailwind製作RWD響應式網頁',
      ' 使用TypeScript、JavaScript 編寫專案',
      ' 使用axios、fetch、串接API',
      ' 使用React.js、Vue.js 撰寫前端網站'
    ]
  },
  {
    title: '後端：', 
    overview: [
      ' RESTful設計網頁路徑',
      ' MySQL、MongoDB 資料庫建置和資料操作',
      ' MVC架構開發(Ruby on Rails、Node.js)'
    ]
  },
  {
    title: '其他：', 
    overview: [
      ' 使用Next.js 製作SSR網站',
      ' 使用three.js、Spline建立3D模型',
      ' Git指令操作、使用Git有多人開發經驗',
      ' 使用 VSCode 環境開發',
      ' 使用Photoshop 去背修圖',
      ' 使用威力導演剪接影片能力'
    ]
  },
]