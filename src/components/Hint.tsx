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
    <div ref={hint} className='w-full h-[100vh] absolute bg-[#fff] z-20'>
      <div className='hint font-bold absolute top-0 left-0 h-[100vh] w-[100%]'>
        <span id='load' className='absolute text-[#fff] top-[28%] text-[150px] left-[50%] translate-x-[-50%]'>
          loading......
        </span>
        <span className='absolute top-[70%] text-[30px] left-[50%] translate-x-[-50%] font-black'>
          按鍵盤D前進、A後退、空白跳躍
        </span>
      </div>
    </div>
  )
}
