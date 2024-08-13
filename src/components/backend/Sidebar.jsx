import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-[300px] h-screen bg-gradient-to-r from-blue-700 to-blue-400">
      <div className="w-full flex justify-center">
        <img src={Logo} alt="" className="w-[80px] py-4" />
      </div>

      <ul>
        <li className="navlink">
          {" "}
          <Link to="/" className="text-white">
            Dashboard
          </Link>{" "}
        </li>
        <li className="navlink">
          {" "}
          <Link to="add-product" className="text-white">
            Add Product
          </Link>{" "}
        </li>
        <li className="navlink">
          {" "}
          <Link to="product-list" className="text-white">
            Product List
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
