'use client'
import { useSkillToggle } from '@/store/ToggleStore'
import { skillData } from '@/data/skillData';

export default function Skill() {
  const {setSkillToggle} = useSkillToggle();
  const clear = ()=> setSkillToggle();

  return (
    <div className='h-[100vh] w-full backdrop-blur-sm absolute z-20'>
      <div className='absolute z-20 text-[70px] top-[40%]  left-[50%] translate-x-[-50%] translate-y-[-50%] w-[700px] h-[350px] bg-[#be7153] rounded-lg border-[4px] border-[#000]'/>  

      <div className='absolute z-10 top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[20px] h-[500px] bg-[#be7153] rounded-2xl border-[4px] border-[#000]'/>

      <div className='absolute z-20 top-[40%]  left-[50%] translate-x-[-50%] translate-y-[-50%] w-[650px] h-[300px] bg-[#f7dbb2] '>
        <h2 className='text-[40px] font-bold pl-[10px] flex justify-between items-center'>
        🛠️技能 :
          <span onClick={clear} className='cursor-pointer'>
          ❌
          </span>
        </h2>
        <div className='text-[20px] font-bold pl-[10px] h-[240px] overflow-y-auto '>
          {
            skillData.map(({title, overview})=> (
              <>
                <h3 className='text-[25px] font-bold pt-[10px]'>{title}</h3>
                {
                  overview.map(overview=> (
                    <p className='my-1'>👍 {overview}</p>
                  ))
                }
              </>
            ))
          }
        </div>
      </div>
    </div>
  )
}
