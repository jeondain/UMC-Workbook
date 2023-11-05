import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppWrapper = styled.div`
  display: flex;
`;

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

export const Image = styled.img`
  width: 173px;
  height: 250px;
`;

export const Poster = styled.div`
  margin: 5px;
`;

export const PosterOverview = styled.div`
  margin: 5px;
`;

export const TitleBox = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  padding: 5px;
  margin: 0;
  background-color: rgb(61, 61, 107);
  width: 94%;
  height: 60px;
  font-size: 12px;
  color: white;
  border-radius: 0.2em;
`;

export const VoteAverage = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Overview = styled.div`
  display: none;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 10px;
  color: white;
  position: absolute;
  height: 315px;
  width: 162px;
  padding: 5px;
  transform: translate(-6px, -330px);
  -ms-transform: translate(-6px, -330px);

  ${Poster}:hover & {
    cursor: pointer;
    display: flex;
  }
`;

export const Header = styled.header`
  display: flex;
  background-color: rgb(23, 23, 65);  
  padding: 5px;
  width: 100%;  
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin: 10px;
    margin-left: 30px;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }

  li {
    margin: 0 10px;
  }

  a {
    font-size: 15px;
    text-decoration: none;
    color: #fff;
  }
`;

export const LoginButton = styled(Link)`
  padding: 3px 10px;
  color: #000 !important;
  margin-left: 5px;
  background-color: #fff;
  border-radius: 0.7em;
`;
