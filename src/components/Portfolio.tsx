'use client'
import {usePortfolioToggle} from '../store/ToggleStore'
import { portfolioData } from '@/data/portfolioData'
import Item from './Item';

export default function Portfolio() {
  const {setPortfolioToggle} = usePortfolioToggle();
  const clear = ()=> setPortfolioToggle();

  return (
    <div className='h-[100vh] w-full backdrop-blur-sm absolute z-20 cursor-default'>
      <div className='absolute z-20 text-[70px] top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] w-[700px] h-[400px] bg-[#f8a353] rounded-lg border-[4px] border-[#000] box-shadow'>  
        {/*左帶*/}
        <span className='absolute  top-[-3%] left-[15%] w-[40px] h-[415px] bg-[#f34731] rounded-lg border-[4px] border-[#000]'/>
        {/*右帶*/}
        <span className='absolute  top-[-3%] right-[15%] w-[40px] h-[415px] bg-[#f34731] rounded-lg border-[4px] border-[#000]'/>
        {/*中握把*/}
        <span className='absolute z-20 top-[-26%] left-[28.3%] w-[301px] h-[45px] bg-[#bb4242] rounded-t-3xl border-4 border-[#000]'/>
        {/*左握把*/}
        <span className='absolute z-20 top-[-16.6%] left-[28.3%] w-[45px] h-[62px] bg-[#bb4242] border-x-4 border-[#000]'/>
        {/*右握把*/}
        <span className='absolute z-20 top-[-16.6%] right-[28.25%] w-[45px] h-[62px] bg-[#bb4242] border-x-4 border-[#000]'/>
        {/*內容*/}
        <div className='absolute z-20 top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] w-[650px] h-[362px] bg-[#a87240] rounded-lg border-[4px] border-[#000] text-[#fff]'>
          <h2 className='text-[50px] font-bold pl-[10px] flex justify-between  items-center'>
            📂 作品集 :
            <span onClick={clear} className='cursor-pointer text-[40px] pr-5'>
              ❌
            </span>
          </h2>
          <div className='text-[24px] font-bold pl-[10px] h-[279px] overflow-y-auto'>
            {
              portfolioData.map(({url, img, title, overview})=> (
                <Item 
                  key={crypto.randomUUID()} 
                  url={url} 
                  img={img} 
                  title={title} 
                  overview={overview}
                />
              ))
            }
          </div>
        </div>
      </div>
      {/*草地*/}
      <div className='absolute z-10 w-screen bg-[#76f576] h-[230px] bottom-0 border-t-[6px] border-[#000]'/>
    </div>
  )
}
