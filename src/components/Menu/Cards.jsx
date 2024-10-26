import React from 'react'

const Cards = ({image, price, detail, paragraph}) => {
  return (
    <>
    <div className="card border-[1px] border-[#DBDFD0] w-[306px] h-[428px] rounded-xl ml-6 mt-[60px] mb-[30px] hover:shadow-2xl hover:translate-y-4 hover:duration-500 duration-500">
      <div className='image flex justify-center pb-6 '>
        {image}
      
      </div>
      <div className="heading">
        {price}
        {detail}
        {paragraph}
        
        
       
      </div>
    </div>
    
    </>
  )
}

export default Cards