import React, { useState } from 'react'

export default function ProfilePicture() {
  const [hover, setHover] = useState(false);
  return (
    <div className="bg-light rounded mt-auto p-2" style={{ minHeight: '220px', width: '240px' }}
      onMouseEnter={() => { setHover(true) }}
      onMouseLeave={() => { setHover(false) }}>
      {
        hover ?
          <span
            className="border border-warning rounded d-flex align-items-center justify-content-center ml-auto"
            style={{ height: '35px', width: '35px' }}>✏</span> :
          ''
      }
    </div>
  )
}
