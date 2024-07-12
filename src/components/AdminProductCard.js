import React from 'react'

const AdminProductCard = ({
    data
}) => {
  return (
    <div>
         <div className='bg-white p-4 rounded'>
                <img src={data?.productImage[0]} alt="" width={100} height={100} />
                <h1>{data.productName}</h1>
              </div>
    </div>
  )
}

export default AdminProductCard