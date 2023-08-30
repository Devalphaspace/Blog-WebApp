import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import PostLists from "../../components/PostLists/PostLists";
import Navbar from "./../../components/Navbar/Navbar";
import axios from "axios";
import { useLocation} from 'react-router-dom';
import { APIURL } from "../../utlis/api";

const HomePage = () => {

  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${APIURL}/api/posts${search}`);
      setPosts(res.data.reverse())
    };
    fetchPosts()
  }, [search, searchQuery]);

  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <div className="w-full ">
        <Hero />
        <PostLists posts={filteredPosts} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
