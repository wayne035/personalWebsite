'use client'
import { useRef,useEffect } from 'react'
import { Application } from '@splinetool/runtime'
import { useSkillToggle,usePortfolioToggle } from '@/store/ToggleStore'
import AboutMe from '@/components/AboutMe'
import Skill from '@/components/Skill'
export default function Home() {
  const {skill, setSkillToggle} = useSkillToggle()
  const {portfolio, setPortfolioToggle} = usePortfolioToggle()
  const canvas = useRef<HTMLCanvasElement>(null)
  
  useEffect(()=>{
    const app = new Application(canvas.current!);
    app.load(process.env.NEXT_PUBLIC_INDEX!)
    .then(()=>{
      app.addEventListener('mouseDown',(e)=>{
        if (e.target.name === 'skill'){
          setSkillToggle()
        }
        if(e.target.name === 'otherbox'){
          setPortfolioToggle()
        }
      })
    })
  },[])

  return (
    <>
      <AboutMe/>
      { skill && <Skill/> }
      <canvas ref={canvas} className='absolute z-0 w-[100vw]'/>
    </>
  )
}