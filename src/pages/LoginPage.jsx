import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email.includes("@" && ".com")) {
      setError('올바른 이메일 주소를 입력해주세요.');
      return;
    }
  };

  return (
    <div className="Login">
      <h2>이메일과 비밀번호를 입력해 주세요.</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        {/* <div id="emailError" className="error"></div> */}
        <div id="emailError" className="error">{error}</div>

        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleLogin}>확인</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
