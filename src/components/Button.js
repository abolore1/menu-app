import React from 'react'

export default function Button({button,filter}) {
  return (
    <div>
      {
        button.map((type, i)=>{
          return <button  type="button" onClick={()=>filter(type)}>{type}</button>
        })
      }
    </div>
  )
}
