import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const EditProduct = () => {

    const {id} = useParams()
   

    const [productInfo, setProductInfo] = useState({
        name : "",
        price: "",
        description: "",
        image: ""
    })

    const getProductById = () => {
        fetch(`http://localhost:3000/products/${id}`).then(res => res.json())
        .then(data => {
            console.log("data", data)
            setProductInfo({
                name : data?.name,
                price: data?.price,
                description: data?.description,
                image: data?.image
            })
        }).catch(err => console.log(err))
    }

    const hanndleState = (e) => {
        const {name, value} = e.target
        setProductInfo({...productInfo, [name] : value})
    }

    const updateProduct = () => {
        const obj = {...productInfo}
        fetch(`http://localhost:3000/products/${id}`, {method: "PUT", body: JSON.stringify(obj)})
        .then(res => {
            if(res?.status == 200)
            {
                alert("Successfully Updated.")
            }else{
                alert("Wrong.")
            }
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getProductById()
    },[])
  return (
    <div>
        <div className='flex flex-col'>
            <label htmlFor="">Product Name</label>
            <input value={productInfo?.name} name='name' className='input-field' type="text" onChange={hanndleState} />
        </div>

        <div className='flex flex-col'>
            <label htmlFor="">Product Price</label>
            <input value={productInfo?.price} name='price' className='input-field' type="text" onChange={hanndleState} />
        </div>

        <div className='flex flex-col'>
            <label htmlFor="">Product Description</label>
            <textarea value={productInfo?.description} name='description' onChange={hanndleState} className='outline-none border border-slate-300 px-2'></textarea>
        </div>

        <div className='flex flex-col'>
            <label htmlFor="">Product Image</label>
            <input value={productInfo?.image} name='image' onChange={hanndleState} className='input-field' type="text" />
        </div>

        <div className='mt-2'>
            <button onClick={updateProduct} className='px-5 py-3 bg-black text-white'>Update</button>
        </div>
    </div>
  )
}

export default EditProduct