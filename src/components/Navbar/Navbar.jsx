import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BlogLogo } from "../../assets";
import { BiSearch } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { SiBloglovin } from "react-icons/si";
import { toast } from "react-toastify";

const Navbar = ({ handleSearch }) => {
  const navigation = useNavigate();
  const [loginUser, setLoginUser] = useState(null);
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth && auth.data) {
      setLoginUser(auth.data);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setLoginUser(null);
    toast.success("Logout successfully", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    navigation("/login");
  };

  return (
    <>
      <div className=" fixed top-0 backdrop-blur-xl w-full  m-auto shadow-sm z-10">
        <div className="container m-auto h-[75px] md:h-[65px] flex items-center py-1">
          <div className="left flex-1 w-full flex items-center justify-start">
            <div className=" w-full h-[60px] overflow-hidden flex items-center justify-start">
              <Link to="/" className=" flex gap-2 items-center">
                {/* <img
                  className=" w-[70px] h-[70px] object-contain"
                  src={BlogLogo}
                  alt="logo"
                /> */}

                <SiBloglovin className="text-2xl md:text-xl text-gray-800" />
                <p className="logo font-bold text-3xl md:hidden text-gray-800">log.</p>
              </Link>
            </div>
          </div>
          <div className="center flex-[5] w-full flex items-center justify-center px-1">
            <div className=" w-[50%] md:w-full flex items-center p-1 px-2 gap-1 border border-gray-800 rounded-md">
              <BiSearch className=" text-2xl text-gray-800" />
              <input
                className=" w-full bg-transparent placeholder:text-gray-700 h-full text-black "
                type="search"
                placeholder="Search here..."
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="right flex-1">
            <div className="center flex-1 flex items-center justify-end">
              <div className="flex items-center gap-3">
                {loginUser ? (
                  <div title="profile" className="group relative">
                    <button className="flex items-center gap-2 md:gap-0">
                      <img
                        title={loginUser?.others?.username}
                        alt="photos"
                        className="w-8 h-8 object-cover rounded-full border border-gray-500 "
                        src={
                          loginUser &&
                          loginUser.others &&
                          loginUser.others.profilePic
                            ? loginUser.others.profilePic
                            : "https://img.icons8.com/color/48/null/circled-user-male-skin-type-7--v1.png"
                        }
                      />

                      {loginUser &&
                      loginUser.others &&
                      loginUser.others.username ? (
                        <p className="font-medium md:hidden text-gray-800">
                          {loginUser.others.username}
                        </p>
                      ) : (
                        <p className="font-medium text-gray-800">Unknown</p>
                      )}
                      <MdArrowDropDown className=" md:hidden text-gray-800" size={25} />
                    </button>
                    <nav
                      tabIndex="0"
                      className="border bg-white invisible border-gray-300 rounded w-fit absolute right-2 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1"
                    >
                      <ul className="py-1 space-y-3">
                        <li className=" w-full px-2">
                          <Link
                            className=" p-2 font-semibold text-gray-800"
                            title="profile"
                            to="/user-details"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className=" w-full px-2">
                          <Link
                            className=" p-2 font-semibold text-gray-800"
                            title="logout"
                            to="/login"
                            onClick={handleLogout}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                ) : (
                  <Link
                    className=" p-2 font-semibold"
                    title="login"
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
