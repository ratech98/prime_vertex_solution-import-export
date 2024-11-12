import React, { Component } from 'react';
import { render } from 'react-dom';

const Triangle = ({ w = '50', h = '30', direction = 'bottom', color = '#065796' }) => {
  const points = {
    top: [`${w / 2},0`, `0,${h}`, `${w},${h}`],
    right: [`0,0`, `0,${h}`, `${w},${h / 2}`],
    bottom: [`0,0`, `${w},0`, `${w / 2},${h}`],
    left: [`${w},0`, `${w},${h}`, `0,${h / 2}`],
  }

  return (
    <svg className='' width={w} height={h}>
      <polygon points={points[direction].join(' ')} fill={color} />
      Sorry, your browser does not support inline SVG.
    </svg>
    // <>
    //   <div className='bg-white border rounded-lg size-32'>
    //   </div>
    // </>
  )
}

export default Triangle
