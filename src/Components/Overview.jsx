import React from 'react';

function Overview({ title, overview }) {
  return (
    <div className="poster-overview">
      <div className="overview">
        {title}
        <br /> <br />
        {overview}
      </div>
    </div>
  )
}

export default Overview
