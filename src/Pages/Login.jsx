import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import UseAuth from "../Hooks/UseAuth";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { userSingIn } = UseAuth();
  // const { userSingIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userSingIn(email, password)
      .then((results) => {
        const loggedInUser = results.user;
        console.log(loggedInUser);
        navigate(location?.state ? location.state : "/");
        // const user = { email };
        // //get access token
        // axios
        //   .post("https://car-doctor-server-flame-eight.vercel.app/jwt", user, { withCredentials: true })
        //   .then((res) => {
        //     console.log(res.data);
        //     if (res.data.success) {
        //       navigate(location?.state ? location.state : "/");
        //     }
        //   });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-10">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
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
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className=" my-4 text-center">
              New To Car Doctors
              <Link to={"/singUp"} className="text-orange-600 font-bold">
                {" "}
                Sing Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
