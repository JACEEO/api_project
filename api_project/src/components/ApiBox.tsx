import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApiBox() {
  const [search, setSearch] = useState<string>(``);

  const navigate = useNavigate();

  const shop = async function f() {
    await axios
      .get(
        "/v1/search/shop", // 불러올 api 주소
        {
          params: { query: `${search}`, display: `100` }, // query는 필수값
          headers: {
            "X-Naver-Client-Id": `BpAfA0HR_c7OtzYKV8OC`,
            "X-Naver-Client-Secret": `zuopFHJBHc`,
          },
        }
      )
      .then((response) => {
        const item = response.data;

        navigate(`/navigate`, { state: { item } });
      });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center">
      <div className="translate-y-1/2 border-blue-500 border h-40 w-80 rounded-xl flex-col">
        <div className="flex justify-center items-center flex-col w-full">
          <div
            className="flex
           justify-center items-center p-5 font-bold text-2xl text-green-400"
          >
            Naver Shopping Search
          </div>
          <div className="flex">
            <form onSubmit={handlesubmit}>
              <input
                type="text"
                className="border border-blue-400 rounded-md"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button className="border w-14 rounded-lg m-2" onClick={shop}>
                검색
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
