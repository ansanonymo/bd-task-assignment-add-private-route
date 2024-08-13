import React, { useState } from 'react'

const AddProduct = () => {

    const [productInfo, setProductInfo] = useState({
        name : "",
        price: "",
        description: "",
        image: ""
    })

    const hanndleState = (e) => {
        const {name, value} = e.target
        setProductInfo({...productInfo, [name] : value})
    }


    const saveProduct = () => {
        const obj = {...productInfo}
        fetch("http://localhost:3000/products", {method : "POST", body: JSON.stringify(obj)})
        .then(res => { 
            if(res?.status == 201)
            {
                alert("Successfully Created.")
                setProductInfo({
                    name : "",
                    price: "",
                    description: "",
                    image: ""
                })
            }else{
                alert("Something went wrong.")
            }
         })
        .catch(err => console.log(err))
    }

    
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
            <button onClick={saveProduct} className='px-5 py-3 bg-black text-white'>Save</button>
        </div>
    </div>
  )
}

export default AddProduct