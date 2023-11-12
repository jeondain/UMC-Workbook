import { useNavigate } from "react-router-dom"; 
import * as MS from "../Components/Movie/Movie.style";

function NotFound() {
    const navigate = useNavigate();
    return (
        <>
          <MS.NotFound>
            <div>
                <h2>해당 페이지를 찾지 못했습니다.</h2>
                <h4>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</h4>
            </div>
            <MS.MovetoMain>
                <h4 onClick={() => {navigate("/");}}>메인 페이지로 이동</h4>
            </MS.MovetoMain>
          </MS.NotFound>
        </>
    )
}

export default NotFound;