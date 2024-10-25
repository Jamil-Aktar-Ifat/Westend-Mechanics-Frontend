import img from "../../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email);
  };
  return (
    <div className="my-20">
      <div className=" flex justify-between">
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card border rounded-none  w-1/2 p-20">
          <h2 className="text-center text-2xl">Login Now</h2>
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] text-white">Login</button>
            </div>
            <div className="text-center my-10">
              <p>Or Log in with</p>
              <div className="flex items-center justify-center my-3 gap-4 text-2xl">
                <FcGoogle></FcGoogle>
                <FaFacebook></FaFacebook>
                <FaLinkedin></FaLinkedin>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
