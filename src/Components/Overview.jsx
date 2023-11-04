import React from 'react';
import * as MS from './Movie/Movie.style'

function Overview({ title, overview }) {
  return (
    <MS.PosterOverview>
      <MS.Overview>
        {title}
        <br /> <br />
        {overview}
      </MS.Overview>
    </MS.PosterOverview>
  )
}

export default Overview
