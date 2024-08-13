import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const user = { password: "12345", email: "anonymous@email.com" };

const Login = () => {
  const { setAuth, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email === email && user.password === password) {
      setAuth(formData);
      localStorage.setItem("user", JSON.stringify(formData));
      navigate("/admin");
    } else {
      setIsError(true);
    }
  };

  if (auth) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-red-800">
      <div className="w-[400px] h-[600px] bg-white rounded-lg p-4 flex justify-center items-center">
        <div>
          <h2 className="mb-5 text-3xl text-rose-800 text-center">Log In</h2>
          <form className="mx-auto flex flex-col " onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-xl mb-1" htmlFor="email">
                Email :
              </label>
              <input
                className="border border-gray-700 py-1 px-2 "
                id="email"
                placeholder="Enter Your Email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col my-4">
              <label className="text-xl mb-1" htmlFor="password">
                Password :
              </label>
              <input
                className="border border-gray-700 py-1 px-2 w-full"
                id="password"
                name="password"
                placeholder="Enter Your Password"
                minLength={5}
                type="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            {isError && (
              <p className="my-3 text-rose-800">
                Log in Failed. Password or Email Wrong.
              </p>
            )}
            <button className="text-lg bg-red-800 text-white py-1">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
