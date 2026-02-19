import React from 'react'
import Certificate from './Certificate'

const DashMain = () => {
  return (
    <div>
      {/* ***************** Top section ******************* */}
        <div className="py-6 bg-light mt-5 rounded-[30px] w-[98%] mx-auto">

        </div>
        {/* ********************** bottom section ************************* */}
        <div className='bg-light mx-auto rounded-[34px] w-[98%] h-[87vh] my-3'>
          <Certificate/>
        </div>
        <div className='bg-light mx-auto rounded-[34px] w-[98%] h-[87vh] my-3'>
          <Certificate/>
        </div>
    </div>
  )
}

export default DashMain