import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import SkeletonLoading from "../SkeletonLoading";
import { toast } from "react-toastify";

const PostLists = ({ posts }) => {
  

  const copyPostLink = (postId) => {
    const postLink = `${window.location.origin}/blog-details/${postId}`; // Modify this based on your route structure
    navigator.clipboard.writeText(postLink);

    toast.success("link copied to clipboard!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <div className="container m-auto w-[90%] lg:w-full mt-20">
      <div>
        <h3 className="text-[1.4rem] font-semibold uppercase text-gray-800">All Posts</h3>

        <div className="mt-5 w-full flex gap-5 md:flex-col-reverse">
        <div className="flex-[8] grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-8 px-3 md:p-0 border-r-2 md:border-r-0 border-gray-200">
            {posts.length > 0 ? (
              posts.map((data) => (
                <div key={data._id}>
                  <BlogCard
                    key={data._id}
                    post={data}
                    copyPostLink={copyPostLink}
                  />
                </div>
              ))
            ) : (
              // Render SkeletonLoading components while data is loading
              <>
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
              </>
            )}
          </div>

          <div className=" flex-[2] flex flex-col gap-5 p-3 bg-gray-50  md:hidden">
            <div className=" space-y-3 md:hidden">
              <h3 className=" uppercase text-center text-xl font-semibold text-gray-800">
                About us
              </h3>
              <img
                className=" w-fit object-cover"
                src="https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_960_720.jpg"
                alt=""
              />
              <p className=" text-justify text-gray-700">
              Welcome to our blog! Here you'll find a collection of informative articles, engaging stories, and expert insights on a wide range of topics. Explore our content and join the conversation as we share knowledge, inspiration, and practical advice. Get ready to be inspired, informed, and entertained!
              </p>
            </div>
            <div className=" space-y-3 md:hidden">
              <h3 className=" uppercase text-center text-xl font-semibold text-gray-800">
                follow us
              </h3>
              <div className=" flex items-center justify-center gap-3">
                <AiFillFacebook size={25} />
                <AiFillTwitterSquare size={25} />
                <FaInstagramSquare size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLists;
