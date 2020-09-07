import React, { useState } from 'react'

export default function AboutSection() {
  const [hover, setHover] = useState();
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="col-4 p-3 mb-2 bg-dark rounded">
      <p className="text-white">About</p>
      {
        editMode === 'LivesIn' ?
          <div className="col-12 my-3 bg-light d-flex align-items-center rounded" style={{ height: '30px' }}
            onMouseEnter={() => { setHover('LivesIn') }} onMouseLeave={() => { setHover(undefined) }}>
            <span className="mr-3" role="img" aria-label="house emoji">🏠</span>
            <input className="bg-light mx-auto" type="text" style={{ border: '0px solid black' }} value="Lives in Novi Sad" autoFocus />
            <span onClick={() => setEditMode(undefined)}>✔</span>
          </div> :
          <div className="col-12 my-3 bg-light d-flex align-items-center rounded" style={{ height: '30px' }}
            onMouseEnter={() => { setHover('LivesIn') }} onMouseLeave={() => { setHover(undefined) }}>
            <span className="mr-3" role="img" aria-label="house emoji">🏠</span>
            <span className="mx-auto">Lives in Novi Sad</span>
            {hover === 'LivesIn' ? <span onClick={() => { setEditMode('LivesIn') }}>✏</span> : <span className="invisible">✏</span>}
          </div>
      }

      {
        editMode === 'WorksAt' ?
          <div className="col-12 my-3 bg-light d-flex align-items-center rounded" style={{ height: '30px' }}
            onMouseEnter={() => { setHover('WorksAt') }} onMouseLeave={() => { setHover(undefined) }}>
            <span className="mr-3" role="img" aria-label="house emoji">🏢</span>
            <input className="bg-light mx-auto" type="text" style={{ border: '0px solid black' }} value="Works at Company name" autoFocus />
            <span onClick={() => setEditMode(undefined)}>✔</span>
          </div> :
          <div className="col-12 my-3 bg-light d-flex align-items-center rounded" style={{ height: '30px' }}
            onMouseEnter={() => { setHover('WorksAt') }} onMouseLeave={() => { setHover(undefined) }}>
            <span className="mr-3" role="img" aria-label="work building emoji">🏢</span>
            <span className="mx-auto">Works at Company name </span>
            {hover === 'WorksAt' ? <span onClick={() => { setEditMode('WorksAt') }}>✏</span> : <span className="invisible">✏</span>}
          </div>
      }

      <div className="col-12 my-3 bg-light d-flex align-items-center rounded" style={{ height: '30px' }}>
        <span className="mr-3" role="img" aria-label="heart emoji ">🧡</span>
        <span className="mx-auto">Followers 78</span>
      </div>
    </div>
  )
}
