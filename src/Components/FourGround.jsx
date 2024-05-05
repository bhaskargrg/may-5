import React, { useRef, useState } from "react";
import Card from "./Card";

function FourGround() {
  const ref=useRef(null);
  const data = [
    {
      description: " Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" },
    },
    {
      description: " Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "blue" },
    },
    {
      description: " Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload  now", tagColor: "green" },
    },
  ];
  return (
    <div>
      <div ref={ref} className="h-full w-full flex gap-8  fixed z-[3] top-0 left-0">
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
}

export default FourGround;
