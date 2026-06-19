import React from 'react'
import Items from './Items'

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((item) => (
        <Items key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Menu