import React from "react";
import { FaYoutube, FaLinkedin, FaGithub, FaLink } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Connection = () => {
  const Items = [
    { name: "Gitub", icon: <FaGithub /> },
    {
      name: "X",
      icon: <FaXTwitter />,
    },
    {
      name: "Youtube",
      icon: <FaYoutube />,
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <div className="flex p-4 ml-2 flex-col ">
      <div className="flex flex-row gap-2 text-xl font-bold ">
        <FaLink />
        <span>Connect</span>
      </div>
      <div className="flex text-primary/60 flex-col mt-4 gap-2">
        {Items.map((item) => (
          <div key={item.name} className="items-center flex flex-row gap-2">
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connection;
