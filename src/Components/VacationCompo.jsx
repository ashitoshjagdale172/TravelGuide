import React from 'react'

const VacationCompo = (props) => {
  return (
    <div>
      <div className=" flex gap-8">
            <div className=" bg-gray-600 px-[10px] py-[10px]">
              <img src={props.images} alt="" className="w-[700px]" />
            </div>
            <div>
              <div className="font-[700] text-[20px]">{props.Heading}</div>
              <div className="text-[14px] text-gray-500 font-[600]">
                {props.para}
              </div>
              <div className=" text-[20px] text-red-500 font-[700]">{props.price}</div>
            </div>
          </div>
    </div>
  )
}

export default VacationCompo
