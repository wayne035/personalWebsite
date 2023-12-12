'use client'
import { useState } from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { SiCodewars } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";

export default function AboutMe() {
  const [toggle,setToggle] = useState(false);
  const aboutMeToggle = ()=> setToggle(v=> !v);

  return (
    <>
      <div className='absolute z-10 top-[40px] left-[40px] cursor-pointer w-[96px] h-[96px] text-[30px]'>
        <div>
          <div className='absolute top-[4px] left-[68px] w-[200px] pl-4 border-4 border-blue bg-[#d4b4f3] rounded-md text-center aboutMe-shadow'>
            <h1 onClick={aboutMeToggle} className=' font-black border-b-4 border-blue'>
              陳廷偉 Wayne
            </h1>
            <div className='p-1.5 pl-7 flex gap-6 text-[20px]'>
              <a href='https://github.com/wayne035' target='_blank'>
                <FaGithubSquare className='text-[#000]'/>
              </a>
              <a href='mailto:wayne30317@gmail.com' target='_blank'>
                <BiLogoGmail className='text-[#f00]'/>
              </a>
              <a href='https://www.codewars.com/users/Wayne30317' target='_blank'>
                <SiCodewars className='text-[#c44141]'/>
              </a>
            </div>
          </div>
          <img 
            onClick={aboutMeToggle} 
            src='/images/wayne.jpg'
            alt='headshot' 
            className='absolute rounded-full border-[6px] border-blue w-full h-full aboutMe-shadow2'
          />
        </div>
      </div>
    { toggle &&
      <div className='h-[100vh] w-full backdrop-blur-sm absolute z-20'>
        <div className='absolute z-20 text-[70px] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[700px] h-[390px] bg-[#fadda7] rounded-lg border-[5px] border-[#000] card-shadow'/>  
        <div className='absolute z-20 top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[650px] h-[340px]'>
          <h2 className='text-[45px] font-bold pl-[10px] flex justify-between items-center'>
          🔎 關於我：
            <span onClick={aboutMeToggle} className='cursor-pointer text-[40px]'>
              ❌
            </span>
          </h2>
          <div className='text-[36px] font-bold px-[5px] overflow-y-auto'>
            <p className='px-3'>
              畢業於中國科技大學資管系，對於學習網頁技術充滿好奇和求知欲，對網站和應用程式的設計感到驚喜。希望能夠利用自己的技能和熱情，在這個領域中不斷成長和發展!
            </p>
            <p className='text-right px-5'>Wayne . ✏️</p>
          </div>
        </div>
      </div>
    }
    </>
  )
}
