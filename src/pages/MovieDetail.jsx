import React from 'react';
import { useLocation, useParams } from 'react-router-dom'

function MovieDetail() {
	//url로 넘겨 받은 title
    const { title } = useParams(); 
		
	//네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
	//이미지, 별점 등의 모든 정보들
    const { state } = useLocation();
    console.log(title);
    console.log(state);

    return (
		<div>
            <img src={`https://image.tmdb.org/t/p/w1280/${state.poster_path}`} alt={title} width="200px"/>
            {title}
        </div>
    )
}

export default MovieDetail;