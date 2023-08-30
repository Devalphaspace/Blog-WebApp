import React from "react";
import { Link } from "react-router-dom";
import {CiShare2} from 'react-icons/ci'

const BlogCard = ({ post, copyPostLink }) => {
  return (
    <>
      <div >
        <div className=" flex flex-col bg-white shadow-md h-[380px] min-w-[200px] rounded-md overflow-hidden hover:shadow-2xl">
          <Link to={`/blog-details/${post._id}`} className=" h-[280px]  overflow-hidden">
            {post.photo && (<img
              className="h-[280px] w-full object-cover hover:scale-105"
              src={post.photo.url}
              alt=""
            />)}
          </Link>
          <div className=" h-[230px] px-3 space-y-1 py-2 bg-white overflow-hidden">
            <div className=" flex justify-between ">
            <h2 className=" text-lg font-semibold overflow-hidden text-ellipsis whitespace-nowrap text-gray-800">
              {" "}
              {post.title}{" "}
            </h2>
            <button className=" text-sm flex items-center justify-center space-x-2 text-gray-800" onClick={() => copyPostLink(post._id)}>  <span className="text-gray-800 ">Share</span>
            <CiShare2/></button>
            </div>
            {post.categories.map((cat)=>(
              <span className="hidden">{cat.name}</span>
            ))}
            <div className=" flex text-sm font-medium items-center justify-between">
              <div className=" flex items-center space-x-2">
                <img
                  alt=""
                  className=" w-8 h-8 object-cover rounded-full border border-gray-500"
                  src="https://img.icons8.com/color/48/null/circled-user-male-skin-type-7--v1.png"
                />
                <p className="text-gray-800">{post.username}</p>
              </div>{" "}
              <span className="text-gray-800">{post.createdAt.slice(0,10)}</span>
            </div>
            <p className="overflow-hidden text-ellipsis text-gray-700">
              {post.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
