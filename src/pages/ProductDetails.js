import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SummaryApi from '../common'

const ProductDetails = () => {

  const [data,setData] = useState({
    productName : "",
    brandName : "",
    category : "",
    productImage : [],
    description : "",
    price : "",
    sellingPrice : ""
  })

  const params = useParams()
  const [loading,setLoading] = useState(true)
  const productImageListLoading = new Array(4).fill(null)
  const [activeImage,setActiveImage] = useState("")

  const fetchProductDetails = async()=>{
    setLoading(true)
    const response = await fetch(SummaryApi.productDetails.url,{
      method : SummaryApi.productDetails.method,
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify({
        productId : params?.id
      })
    })
    setLoading(false)
    const dataReponse = await response.json()

    setData(dataReponse?.data)
    setActiveImage(dataReponse?.data?.productImage[0])

  }

  console.log("data",data)

  useEffect(()=>{
    fetchProductDetails()
  },[])

  // console.log("Product Details Data" , data)

  const handleMouseEnterProduct = (imageURL) => {
    setActiveImage(imageURL);
  }

  return (
    <div className='container mx-auto p-4'>

      <div className='min-h-[200px] h-96 flex flex-col lg:flex-row gap-4'>

          {/* Product Image */}
        <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>

          <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200'>
            <img src={activeImage} alt=""  className='h-full w-full object-scale-down mix-blend-multiply'/>

          </div>
            <div className='h-full'>
              {
                loading ? (
                  <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                    {
                      productImageListLoading.map(el => {
                        return(
                          <div className='h-20 w-20 bg-slate-200 rounded animate-pulse' key={"loadingImage"}>

                          </div>
                        )
                      })
                    }

                  </div>
                ) : (
                  <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                    {
                      data?.productImage?.map((imgURL, index) => {
                        return(
                          <div className='h-20 w-20 bg-slate-200 rounded p-1' key={imgURL}>
                            <img src={imgURL} alt="" className='w-full h-full object-scale-down mix-blend-multiply cursor-pointer' onMouseEnter={()=>handleMouseEnterProduct(imgURL)} onclick={()=>handleMouseEnterProduct(imgURL)}/>

                          </div>
                        )
                      })
                    }

                  </div>
                )
              }

            </div>
        </div>
        {/* Product details */}
        <div>

        </div>
      </div>

    </div>
  )
}

export default ProductDetails