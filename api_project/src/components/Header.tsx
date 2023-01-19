import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate(`/`);
  };

  const handleLogin = () => {
    navigate(`/login`);
  };

  return (
    <div className="border-2  border-blue-300 h-26 ">
      <div className="flex justify-between items-center">
        <div
          className="w-28 flex justify-center items-center m-4 cursor-pointer rounded-xl bg-blue-200"
          onClick={handleHome}
        >
          Home
        </div>

        <div className="flex-1 flex justify-end">
          <span className="pr-5 cursor-pointer" onClick={handleLogin}>
            Login
          </span>
          <span className="pr-5">Sign in</span>
        </div>
      </div>
    </div>
  );
}
