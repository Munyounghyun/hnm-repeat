import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  setAuth(false);

  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };
  const handlePw = (e) => {
    setPassword(e.target.value);
  };

  const goMain = () => {
    if (id == "admin" && password == "1234") {
      setAuth(true);
      navigate("/");
    } else {
      alert("로그인 실패");
    }
  };

  const goLogin = (e) => {
    if (e.key == "Enter") {
      goMain();
    }
  };
  return (
    <div className="login">
      <div className="login_wrap">
        <h2>로그인</h2>
        <div className="login_form">
          <div className="input_div">
            <input
              type="id"
              className="id_input"
              placeholder="아이디"
              value={id}
              onChange={handleId}
            />
          </div>
          <div className="input_div">
            <input
              type="password"
              className="pwd_input"
              placeholder="비밀번호"
              value={password}
              onChange={handlePw}
              onKeyPress={goLogin}
            />
          </div>
          <button className="login_btn" onClick={goMain}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
