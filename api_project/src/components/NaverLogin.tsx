import React from "react";
import { useLocation } from "react-router-dom";

export default function NaverLogin() {
  const location = useLocation();

  console.log(location.state);
  return <>{location.state}</>;
}
