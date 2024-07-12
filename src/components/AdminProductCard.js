import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";

const AdminProductCard = ({ data, fetchdata }) => {

  const [editProduct, setEditProduct] = useState(false)

  return (
      <div className="bg-white p-4 rounded">
        <img src={data?.productImage[0]} alt="" width={100} height={100} />
        <h1>{data.productName}</h1>

        <div className="w-fit ml-auto p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer" onClick={()=>setEditProduct(true)}>
          <MdModeEditOutline />
        </div>

        {
          editProduct && (
            <AdminEditProduct productData={data} onClose={() => setEditProduct(false)} fetchdata={fetchdata}/>
          )
        }

        
      </div>
  );
};

export default AdminProductCard;
