'use client'
import { Application } from '@splinetool/runtime';
import { useEffect,useRef } from 'react'

export default function notFound() {
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(()=> {
    const app = new Application(canvas.current!)
    app.load(process.env.NEXT_PUBLIC_ERROR!)
  },[])

  return <canvas ref={canvas} className='bg-[#000] absolute z-10 w-full h-[100vh]'/>
}