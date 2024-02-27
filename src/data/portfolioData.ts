export interface PortfolioData{
  url: string,
  img: string,
  title: string,
  overview: string
}

export const portfolioData: PortfolioData[] = [
    {
      url: 'https://nuli.vercel.app/',
      img: '/images/nuli.png',
      title: 'nuli找工作',
      overview: '使用python寫爬蟲，輸入關鍵字幫你找尋104、518、1111 等...七天內更新的工作',
    },
    {
      url: 'https://news-bug.vercel.app/',
      img: '/images/newsbug.png',
      title: 'newsBug',
      overview: '使用python寫爬蟲，爬取壹蘋果、ETtoday、民視、Newtalk、三立、風傳媒、台視等等...最新新聞',
    },
    {
      url: 'https://book-bug.vercel.app/',
      img: '/images/bookbug.jpg',
      title: 'bookBug',
      overview: '使用python寫爬蟲，爬取博客來、誠品、金石堂、墊腳石、讀冊生活、天瓏書局 電腦、資訊類 最新書籍。',
    },
    {
      url: 'https://moviehub-psi.vercel.app/',
      img: '/images/movie.jpg',
      title: 'Movie Hub',
      overview: 'Movie Hub 是一項串流媒體服務，使用gmail登入隨時隨地使用手機或桌電觀看，每週都會增加新的電視節目和電影！',
    },
  ]