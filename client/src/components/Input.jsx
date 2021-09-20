import React from 'react'

export default function Input() {
  return (
    <div>
      <input
        type="text"
        value={props.itemName}
        onChange={(e) => props.setItemName(e.target.value)}
      />
    </div>
  )
}
