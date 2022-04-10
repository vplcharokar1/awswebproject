import React, { useState } from 'react'
import PropChild from './PropChild'

export default function () {
    
    const [brand,setBrand]=useState("this is from PropParent");

  return (
    <div>
             <PropChild brand={brand}/>
    </div>
  )
}
