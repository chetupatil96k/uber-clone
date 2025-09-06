import React from 'react'

const CaptainDetail = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
                  <div className='flex items-center justify-start gap-3' >
                    <img className='w-10 h-10 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
                    <h4 className='text-lg font-medium'>Chetan Pawar</h4>

                  </div>
                  <div>
                    <h4 className='text-xl font-semibold'>₹295.20</h4>
                    <p className='text-sm text-gray-600'>Earned</p>
                  </div>
                </div>

                <div className='flex justify-center mt-8 bg-yellow-200 rounded-xl p-5 gap-5 items-start' >
                  <div className='text-center'>
                  <i className="text-3xl mb-2  font-thin ri-time-line"></i>
                  <h5 className='text-lg font-medium'>10.2</h5>
                  <p className='text-sm text-gray-600'>Hours Online</p>
                  </div>

                  <div className='text-center'>
                  <i className="text-3xl mb-2  font-thin ri-speed-up-line"></i>
                  <h5 className='text-lg font-medium'>10.2</h5>
                  <p className='text-sm text-gray-600'>Hours Online</p>
                  </div>

                  <div className='text-center'>
                  <i className="text-3xl mb-2  font-thin ri-booklet-line"></i>
                  <h5 className='text-lg font-medium'>10.2</h5>
                  <p className='text-sm text-gray-600'>Hours Online</p>
                  </div>
                </div>
    </div>
  )
}

export default CaptainDetail
