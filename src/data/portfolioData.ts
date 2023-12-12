export interface PortfolioData{
  url: string,
  img: string,
  title: string,
  overview: string
}

export const portfolioData: PortfolioData[] = [
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
    {
      url: 'https://wanye30317.github.io/personalWebsite/',
      img: '/images/web.jpg',
      title: 'Vue個人網站(舊版)',
      overview: '使用Vue3 打造一個3D互動式的個人網站。',
    },
  ]