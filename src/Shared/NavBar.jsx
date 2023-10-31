import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import UseAuth from "../Hooks/UseAuth";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = UseAuth;
  // const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((results) => {
        const user = results.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li>
              <NavLink to={"/add"}>About</NavLink>
            </li>

            <li>
              <NavLink to={"/booking"}>Bookings</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Link to={"/"}>
            <img className="w-[120px] h-[50px]" src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>

          <li>
            <NavLink to={"/add"}>About</NavLink>
          </li>

          <li>
            <NavLink to={"/booking"}>Bookings</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt={user?.displayName} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm  btn-ghost">
                  {user?.displayName}
                </button>
              </li>

              <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm  btn-ghost"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm  btn-ghost">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
