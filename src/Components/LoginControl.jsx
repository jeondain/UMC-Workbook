import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginControl = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const handleToggleClick = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    navigate(isLogin ? '/' : '/Login');
  };

  return (
    <div>
      {isLogin ? (
        <div>
          <button className="LoginButton" onClick={handleToggleClick}>로그아웃</button>
          환영합니다!
        </div>
      ) : (
        <div>
          <button className="LoginButton" onClick={handleToggleClick}>로그인</button>
          로그인 해주세요!
        </div>
      )}
    </div>
  );
}


export default LoginControl;


//// this.state 사용
// import React, { Component } from 'react';
// import * as MS from './Movie/Movie.style'

// class LoginControl extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLogin: true,
//     };
//   }

//   handleToggleClick = () => {
//     this.setState((prevState) => ({
//         isLogin: !prevState.isLogin,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         {this.state.isLogin ? (
//           <div>
//             <MS.LoginButton onClick={this.handleToggleClick}>로그아웃</MS.LoginButton>
//             환영합니다!
//           </div>
//         ) : (
//           <div>
//             <MS.LoginButton onClick={this.handleToggleClick}>로그인</MS.LoginButton>
//             로그인 해주세요!
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default LoginControl;
