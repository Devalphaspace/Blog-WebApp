import React, {  useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginImage } from "../../assets";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../utlis/api";
import { useDispatch } from "react-redux";
import { setProfileDetails } from "../../redux/slice/profileSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const userRef = useRef();
  const passwordRef = useRef();
  const navigation = useNavigate();

  // form submit:
  const handleSubmitt = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${APIURL}/api/auth/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      localStorage.setItem("auth", JSON.stringify({ data }));
      dispatch(setProfileDetails(data)); // Dispatch the action to set profile details
      navigation("/");
      toast.success("Login successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
      console.log("Profile Details:", data);
    } catch (error) {
      toast.error("Invalid", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
      console.log(error);
    }
  };

  // useEffect(() => {
  //   console.log(profileDetails);
  // }, [profileDetails]);

  return (
    <div className=" flex items-center justify-center w-full h-screen bg-gray-100">
      {/* auth card */}
      <div className=" flex overflow-hidden bg-white w-[50rem] h-[550px] md:h-[100%] rounded-xl shadow-lg md:flex-col-reverse">
        {/* left */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col md:flex-col-reverse items-center justify-between gap-5 w-[250px]">
            <img src={LoginImage} alt="" />
            <Link className=" underline" to="/register">
              Create an account
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="flex-1 flex items-center justify-center">
          <div className=" flex flex-col gap-8">
            <h3 className=" text-4xl font-semibold">Sign in</h3>
            <form
              onSubmit={handleSubmitt}
              action="submit"
              className=" flex flex-col gap-6"
            >
              <div className=" flex items-center space-x-4 border-b-[1px] border-black py-2">
                <MdEmail />
                <input
                  type="text"
                  name="text"
                  placeholder="Username"
                  ref={userRef}
                  required
                />
              </div>
              <div className=" flex items-center space-x-4 border-b-[1px] border-black py-2">
                <FaLock />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </div>
              <button
                type="submit"
                className=" bg-black w-fit py-2 px-4 text-white text-base rounded-md"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
