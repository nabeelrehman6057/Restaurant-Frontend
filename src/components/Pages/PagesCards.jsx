import React from 'react'
import Cards from '../Menu/Cards'

const PagesCards = ({image, date, paragraph}) => {
  return (
    <>
          <div className="conatner border-[1px] border-[#F9F9F7] rounded-xl desktop:w-[306px] desktop:h-[340px] 
          w-[306px] h-[340px] laptop:w-[280px] laptop:h-[340px] hover:shadow-2xl hover:translate-y-4 hover:duration-500 duration-500 mb-6 bg-[#F9F9F7] ">
           <div className="image">
            {image}
           </div>

           <div className="heading">
            <h1 className=' font-DMSans font-medium text-[14] pt-[20px] text-left text-[#737865] pl-[25px]'>{date}</h1>
            <p className=' font-DMSans font-medium text-[20px] text-left pl-[25px] pt-[10px] '>{paragraph}</p>
           </div>
 

          </div>   
    </>
  )
}

export default PagesCards