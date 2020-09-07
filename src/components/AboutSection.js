import React, { useState } from 'react'

export default function AboutSection() {
  const [hover, setHover] = useState();

  return (
    <div className="col-4 p-3 mb-2 bg-dark rounded">
      <p className="text-white">About</p>
      <div className="col-12 my-3 bg-light d-flex align-items-center rounded" style={{ height: '30px' }}
        onMouseEnter={() => { setHover('LivesIn') }} onMouseLeave={() => { setHover(undefined) }}>
        <span className="mr-3" role="img" aria-label="house emoji">🏠</span>
        <span className="mx-auto">Lives in Novi Sad</span>
        {hover === 'LivesIn' ? <span>✏</span> : ''}
      </div>
      <div className="col-12 my-3 bg-light d-flex align-items-center rounded" style={{ height: '30px' }}
        onMouseEnter={() => { setHover('WorksAt') }} onMouseLeave={() => { setHover(undefined) }}>
        <span className="mr-3" role="img" aria-label="work building emoji">🏢</span>
        <span className="mx-auto">Works at Company name </span>
        {hover === 'WorksAt' ? <span>✏</span> : ''}
      </div>
      <div className="col-12 my-3 bg-light d-flex align-items-center rounded" style={{ height: '30px' }}
        onMouseEnter={() => { setHover('Followers') }} onMouseLeave={() => { setHover(undefined) }}>
        <span className="mr-3" role="img" aria-label="heart emoji ">🧡</span>
        <span className="mx-auto">Followers 78</span>
        {hover === 'Followers' ? <span role="img" aria-label="pen emoji">✏</span> : ''}
      </div>
    </div>
  )
}
