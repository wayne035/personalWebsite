import Image from 'next/image'
import Link from 'next/link'
import { PortfolioData } from '@/data/portfolioData'

export default function Item({url,img,title,overview}: PortfolioData) {
  return (
    <div className='flex items-center border-t-4 border-[#000] mr-2'>
      <Link href={url} target='_blank' className='block p-5 my-2'>
        <Image src={img} width={300} height={100} alt='webimg'/>
      </Link>
      <div className='w-full'>
        <h3 className='py-2 text-[20px] font-bold'>🌐 {title}</h3>
        <p className='pl-2 text-[#fddaab]'>{overview}</p>
      </div>
    </div>
  )
}
