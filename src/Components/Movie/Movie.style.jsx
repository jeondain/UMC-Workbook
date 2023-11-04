import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
`;

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

export const Image = styled.img`
  width: 170px;
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
