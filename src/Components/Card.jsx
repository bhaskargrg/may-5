import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";
function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className=" relative w-60 h-80 bg-zinc-700 rounded-[44px] text-gray-50  py-10 px-8 overflow-hidden">
      <FaFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">
        {data.description}
      </p>
      <div className="footer absolute bottom-0 h-13  w-full  left-0">
        <div className="flex py-3 justify-between b  px-3 items-center mb-5">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 flex justify-center items-center rounded-full bg-zinc-600">
            {data.close ? (
              <RiCloseLine />
            ) : (
              <LuDownload color="#fff" size=".9em" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-4 flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        ) }
      </div>
    </motion.div>
  );
}

export default Card