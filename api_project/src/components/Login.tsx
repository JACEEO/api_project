import axios from "axios";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function Login() {
  const [id, setId] = useState<string>(``);
  const [pw, setPw] = useState<string>(``);
  //   const navigator = useNavigate();

  const handelId = (e: any) => {
    setId(e.target.value);
  };

  const handelPw = (e: any) => {
    setPw(e.target.value);
  };

  const user = { id: id, pw: pw };

  const getLogin = async () => {
    const result = await axios({
      method: "GET",
      url: "/login",
    });

    console.log(result.data.includes(user));

    for (let i = 0; i < result.data.length; i++) {
      if (JSON.stringify(result.data[i]) === JSON.stringify(user)) {
        alert(`login`);
        break;
      }
    }
  };

  const getNaver = async () => {
    await axios
      .get("/oauth2.0/authorize", {
        params: {
          response_type: "code",
          client_id: process.env.REACT_CLIENT_ID,
          redirect_uri: "http://localhost:3000/login",
          state: "test",
          //   grant_type: "authorization_code",
          //   client_id: "G3o7iaJqjyfiqLPNur40",
          //   client_secret: "5mQcnWEl34",
          //   code: { code },
          //   state: "test",
        }, // query는 필수값
      })
      .then((response) => {
        // navigator(`/login/naverlogin`, { state: response.data });
        console.log(response);
      });
  };
  const url =
    "https://nid.naver.com/oauth2.0/authorize?client_id=G3o7iaJqjyfiqLPNur40&response_type=code&redirect_uri=http://localhost:3000/login";

  return (
    <div className="flex justify-center items-center">
      <div className="h-80">
        <div className="flex justify-between items-center flex-col">
          <div className="p-10 text-2xl">Login</div>
          <div className="flex flex-col w-80">
            <input
              type="text"
              value={id}
              onChange={handelId}
              className="border-2 p-3 my-3 text-sm rounded-md"
              placeholder="아이디를 입력해주세요"
            />
            <input
              type="password"
              value={pw}
              onChange={handelPw}
              className="border-2 p-3 my-3 text-sm rounded-md"
              placeholder="패스워드를 입력해주세요"
            />
          </div>
          <div className="flex justify-end items-center w-80">
            <span className="text-xs">아이디 찾기 </span>
            <span className="text-xs"> | </span>
            <span className="text-xs">패스워드 찾기 </span>
          </div>
          <div className="flex flex-col w-80">
            <button
              onClick={getLogin}
              className=" bg-purple-800 text-white p-3 my-3 rounded-md"
            >
              로그인
            </button>
            <button className="border border-purple-400 text-purple-800 p-3 rounded-md">
              회원가입
            </button>
            <a href={url} target="_blank">
              <button
                onClick={getNaver}
                formTarget="_blank"
                className="border border-green-400 text-green-800 my-3 p-3 rounded-md"
              >
                Naver
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
