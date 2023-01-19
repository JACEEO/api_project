import React from "react";
import { useLocation } from "react-router-dom";

export default function Navigate() {
  const location = useLocation();

  const shopping = location.state.item.items;

  console.log(shopping);
  return (
    <div className="pl-12">
      {shopping.map((e, idx) => {
        e.title = e.title.replace(/<b>/g, "");
        e.title = e.title.replace(/<\/b>/g, "");
        return (
          <div
            key={idx}
            className="inline-flex justify-center items-center flex-col-reverse p-4 "
          >
            <div className="w-40 font-thin">{e.title}</div>
            <a href={e.link} target="_blank">
              <img
                src={e.image}
                alt="naver"
                className="w-60 h-60 rounded-2xl border-2"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}
