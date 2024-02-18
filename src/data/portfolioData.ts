export interface PortfolioData{
  url: string,
  img: string,
  title: string,
  overview: string
}

export const portfolioData: PortfolioData[] = [
    {
      url: 'https://news-bug.vercel.app/',
      img: '/images/newsbug.png',
      title: 'newsBug',
      overview: '使用python寫爬蟲，爬取壹蘋果、ETtoday、民視、Newtalk、三立、風傳媒、台視 最新新聞',
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
    {
      url: 'https://wayne035.github.io/chatHub/',
      img: '/images/chat.jpg',
      title: 'Chat Hub',
      overview: 'ChatHub是一個線上即時聊天平台，你可以隨機選擇素未謀面的陌生人盡情聊天!',
    },
  ]