import React, { useEffect, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const imgs = [
  "https://ik.imagekit.io/imgkitt/lukas-blazek-GnvurwJsKaY-unsplash%20(2).jpg?updatedAt=1693388077367",
  "https://ik.imagekit.io/imgkitt/pexels-burst-373892.jpg?updatedAt=1693387983093",
  "https://ik.imagekit.io/imgkitt/pexels-kaboompics-com-6469.jpg?updatedAt=1693387983553",
  "https://ik.imagekit.io/imgkitt/pexels-markus-winkler-4057660.jpg?updatedAt=1693387982859",
];

const Hero = () => {
  const [randomImgSrc, setRandomImgSrc] = useState(
    imgs[Math.floor(Math.random() * imgs.length)]
  );
  const [authDetails, setAuthDetails] = useState(null);
  const auth = JSON.parse(localStorage.getItem("auth"));
  // console.log('ok');
  useEffect(() => {
    if (auth && auth.data && auth.data.others && !authDetails) {
      setAuthDetails(auth.data.others);
    }
  }, [auth, authDetails]); // Include 'authDetails' as a dependency

  console.log(authDetails);

  return (
    <div className="relative w-full h-[100vh] md:h-[650px] overflow-hidden bg-gray-400">
      <LazyLoad height={800} offsetVertical={500}>
        <img
          className="w-full h-[100vh] md:h-[800px] object-cover"
          src={randomImgSrc}
          alt=""
        />
      </LazyLoad>
      <div className="w-[90%] flex gap-5 flex-col items-center justify-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-[#202020] text-center ">
        <div className="flex gap-5 flex-col items-center justify-center backdrop-blur-md h-full border-2 border-white rounded-xl px-2 py-8">
          <div>
            {authDetails && (
              <h2 className=" text-white font-semibold text-3xl">
                Hi {authDetails && authDetails.username} ! 👋
              </h2>
            )}

            <h2 className="text-6xl md:text-4xl font-semibold text-white">
              Welcome To Blog
            </h2>
          </div>

          <p className="w-[40%] md:w-full text-center text-[1.4rem] md:text-[1.23rem] text-white">
            “ Awesome place to make oneself productive and entertained through
            daily updates. ”
          </p>
          <Link
            to="/post"
            className="w-fit flex items-center justify-center gap-2 p-3 rounded-3xl bg-white hover:bg-gray-100"
          >
            <BsFillPlusCircleFill size={25} />
            <p className="font-semibold">Create Post</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
