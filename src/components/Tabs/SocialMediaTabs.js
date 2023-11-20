import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const SocialMediaTabs = () => {
  const [activeTab, setActiveTab] = useState("facebook");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex w-full gap-4 justify-end bg-[black]">
      <div
        className={`cursor-pointer p-4 text-white ${
          activeTab === "facebook"
            ? " bg-black text-black translate-y-[-20px] rounded-[50%]"
            : ""
        }`}
        onClick={() => handleTabClick("facebook")}
      >
        {" "}
        <div
          className={` ${
            activeTab === "facebook" ? "bg-white" : ""
          } rounded-[50%] p-2`}
        >
          {" "}
          <FaFacebook size={activeTab === "facebook" ? 30 : 20} />{" "}
        </div>
      </div>
      <div
        className={`cursor-pointer p-4 text-white ${
          activeTab === "instagram"
            ? "bg-black text-black translate-y-[-20px] rounded-[50%]"
            : ""
        }`}
        onClick={() => handleTabClick("instagram")}
      >
        <div
          className={` ${
            activeTab === "instagram" ? "bg-white" : ""
          } rounded-[50%] p-2`}
        >
          <FaInstagram size={activeTab === "instagram" ? 30 : 20} />
        </div>
      </div>
      <div
        className={`cursor-pointer p-4 text-white ${
          activeTab === "tiktok"
            ? "bg-black text-black translate-y-[-20px] rounded-[50%]"
            : ""
        }`}
        onClick={() => handleTabClick("tiktok")}
      >
        <div
          className={` ${
            activeTab === "tiktok" ? "bg-white" : ""
          } rounded-[50%] p-2`}
        >
          {" "}
          <FaTiktok size={activeTab === "tiktok" ? 30 : 20} />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaTabs;
