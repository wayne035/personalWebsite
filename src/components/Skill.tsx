'use client'
import { useSkillToggle } from '@/store/ToggleStore'
import { skillData } from '@/data/skillData';

export default function Skill() {
  const {setSkillToggle} = useSkillToggle();
  const clear = ()=> setSkillToggle();

  return (
    <div className='h-[100vh] w-full backdrop-blur-sm absolute z-20 cursor-default'>
      {/*牌子*/}
      <div className='absolute z-20 text-[70px] top-[40%]  left-[50%] translate-x-[-50%] translate-y-[-50%] w-[700px] h-[350px] bg-[#be7153] rounded-lg border-[4px] border-[#000]'/>  
      {/*草地*/}
      <div className='absolute z-10 w-screen bg-[#76f576] h-40 bottom-0 border-t-[6px] border-[#000]'/>
      {/*棍子*/}
      <div className='absolute z-10 top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[20px] h-[400px] bg-[#be7153] border-[4px] border-[#000]'/>
      {/*內容*/}
      <div className='absolute z-20 top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[650px] h-[300px] bg-[#f7dbb2] '>
        <h2 className='text-[50px] font-bold pl-[10px] flex justify-between items-center'>
        🛠️技能 :
          <span onClick={clear} className='cursor-pointer text-[40px]'>
          ❌
          </span>
        </h2>
        <div className='text-[20px] font-bold pl-[10px] h-[224px] overflow-y-auto '>
          {
            skillData.map(({title, overview})=> (
              <>
                <h3 key={crypto.randomUUID()} className='text-[35px] font-bold pl-[5px]'>
                  {title}
                </h3>
                {
                  overview.map(overview=> (
                    <p className='text-[30px]'>
                      🔅 {overview}
                    </p>
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
