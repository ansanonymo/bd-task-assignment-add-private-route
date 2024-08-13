import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, [products]);

  const deleteProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" })
      .then((res) => {
        if (res?.status == 200) {
          alert("Successfully Deleted.");
        } else {
          alert("Wrong.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-red-700">
            <th>Index</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((singleProduct, index) => (
            <tr key={singleProduct?.id}>
              <td>{index + 1}</td>
              <td>{singleProduct?.name}</td>
              <td>{singleProduct?.price} Tk.</td>
              <td>{singleProduct?.description}</td>
              <td>
                <img src={singleProduct.image} className="w-[60px]" alt="" />
              </td>
              <td>
                <div>
                  <button
                    onClick={() => deleteProduct(singleProduct?.id)}
                    className="px-4 py-2 outline-none text-white bg-red-800"
                  >
                    X
                  </button>
                  <Link
                    to={`/admin/edit-product/${singleProduct?.id}`}
                    className="px-4 py-2 outline-none text-white bg-blue-800"
                  >
                    Edit
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
