import React from 'react'

const Items = ({ item }) => {
  return (
    <article className='menu-item'>
      <img src={item.img} alt={item.title} className='img' />
      <div className='item-info'>
        <header>
          <h4>{item.title}</h4>
          <h4 className='item-price'>${item.price}</h4>
        </header>
        <p className='item-text'>{item.desc}</p>
      </div>
    </article>
  )
}

export default Items