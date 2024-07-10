import React from 'react'
import ROLE from '../common/role'

const ChangeUserRole = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center'>
        <div className='mx-auto bg-white shadow-md p-4 w-full max-w-sm'>
            
            <h1 className='pb-4 text-lg font-medium'>Change User Role</h1>

            <p>Name: Swarup Das</p>
            <p>Email: swarup@gmail.com</p>

            <select>
                {
                    Object.values(ROLE).map(el => {
                        return(
                            <option>{el}</option>
                        )
                    })
                }

            </select>

        </div>
    </div>
  )
}

export default ChangeUserRole 