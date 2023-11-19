import { useNavigate } from "react-router-dom"; 

function NotFound() {
    const navigate = useNavigate();
    return (
        <>
          <div className="NotFound">
            <div>
                <h2>해당 페이지를 찾지 못했습니다.</h2>
                <h4>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</h4>
            </div>
            <div className="MovetoMain">
                <h4 onClick={() => {navigate("/");}}>메인 페이지로 이동</h4>
            </div>
          </div>
        </>
    )
}

export default NotFound;