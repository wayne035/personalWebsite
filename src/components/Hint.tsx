import { useEffect,useRef } from 'react'
import gsap from 'gsap'

export default function Hint() {
    const hint = useRef<HTMLDivElement>(null)

    useEffect(()=> {
      setTimeout(()=> {
        gsap.to(hint.current!, {
          opacity: 0,
          duration: 1,
          display: 'none',
        })
      }, 7_000);
    },[])

  return (
    <div ref={hint} className='w-full h-[100vh] absolute bg-[#fff] z-20 cursor-default'>
      <div className='hint font-bold absolute top-0 left-0 h-screen w-full'>
        <span className='load absolute text-[#fff] top-[17%] text-[250px] left-[50%] translate-x-[-50%] w-full text-center'>
          loading......
        </span>
        <span className='absolute top-[70%] text-[50px] left-[50%] translate-x-[-50%] font-black  w-full text-center'>
          按鍵盤 D 前進 、 A 後退 、 空白跳躍
        </span>
      </div>
    </div>
  )
}
