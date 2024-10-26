import img from "../../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="my-20">
      <div className=" flex justify-between">
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card border rounded-none  w-1/2 p-20">
          <h2 className="text-center text-2xl">Signup Now</h2>
          <form onSubmit={handleSignup}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
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
                placeholder="Your Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] text-white">Signup</button>
            </div>
            <div className="text-center my-10">
              <p>Or Sign up with</p>
              <div className="flex items-center justify-center my-3 gap-4 text-2xl">
                <FcGoogle></FcGoogle>
                <FaFacebook></FaFacebook>
                <FaLinkedin></FaLinkedin>
              </div>
            </div>
            <p className="text-center">
              Already have an account?{" "}
              <Link className="text-orange-500 font-bold" to="/login">
                Login
              </Link>{" "}
              now
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
