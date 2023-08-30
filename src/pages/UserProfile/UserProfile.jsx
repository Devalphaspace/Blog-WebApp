import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { RiImageEditLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { GrCheckmark } from "react-icons/gr";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import axios from "axios";

const UserProfile = () => {
  const [editable, setEditable] = useState(false);
  const [username, setUsername] = useState("");
  const [pic, setPic] = useState(null);

  const profileDetails = useSelector((state) => state.profile);
  console.log(profileDetails);

  useEffect(() => {
    setUsername(profileDetails?.others?.username);
  }, [profileDetails]);

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("profilePic", pic);

      const response = await axios.put(
        `http://localhost:8080/api/auth/update/${profileDetails?.others?._id}`,
        formData
      );

      if (response.status === 200) {
        console.log("Profile updated successfully");
        setEditable(false);
      } else {
        console.error("Failed to update profile");
      }
    } catch (err) {
      console.error("Error occurred while updating profile:", err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-[80vh]">
        <div className="container m-auto border py-4 w-[50%] md:w-[95%] mt-24 shadow-md">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold"> Hi, There! </h2>

              {editable ? (
                <GrCheckmark
                  onClick={handleUpdate}
                  title="Done"
                  className="cursor-pointer"
                />
              ) : (
                <FiEdit
                  onClick={() => setEditable(true)}
                  title="edit profile "
                  className="cursor-pointer"
                />
              )}
            </div>
            <div className="h-[140px] flex md:flex-col gap-6 w-full">
              <div className="relative w-[110px] min-h-[110px]">
                <img
                  alt=""
                  className="min-w-[110px] min-h-[110px] object-cover rounded-full border border-gray-300 cursor-pointer"
                  src={`${
                    pic
                      ? pic
                      : "https://img.icons8.com/color/96/null/circled-user-male-skin-type-7--v1.png"
                  }`}
                />
                <input
                  type="file"
                  name="pic"
                  onChange={(e) => setPic(e.target.files[0])}
                />
                <button
                  title="update image"
                  className={`${editable ? "block" : "hidden"} absolute bottom-0 right-0`}
                >
                  <RiImageEditLine />
                </button>
              </div>
              <div className="w-[80%]">
                <div className="flex gap-2 flex-col">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">
                      Name{" "}
                    </span>
                    {editable ? (
                      <input
                        required
                        type="text"
                        className="border-b-2 border-gray-400 bg-gray-50 w-full text-base font-medium"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    ) : (
                      <p className="text-base font-medium">
                        {profileDetails?.others?.username}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">
                      Email{" "}
                    </span>
                    <p className="text-base font-medium cursor-not-allowed">
                      {profileDetails.others.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
