import React, { useState } from 'react'
import ProfilePicture from './ProfilePicture'

export default function ImageSection() {
  const [hover, setHover] = useState(false);
  return (
    <div className="my-2 p-3 col-12 bg-dark d-flex flex-column rounded" style={{ height: '400px ' }}
      onMouseEnter={() => { setHover(true) }}
      onMouseLeave={() => { setHover(false) }}>
      {
        hover ?
          <span
            className="border border-warning rounded d-flex align-items-center justify-content-center ml-auto"
            style={{ height: '35px', width: '35px' }}>✏</span> :
          ''
      }
      <ProfilePicture></ProfilePicture>
    </div>
  )
}
