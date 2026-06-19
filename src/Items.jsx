import React from 'react'

const Items = ({ item }) => {
  return (
    <article className='menu-item'>
      <img src={item.img} alt={item.title} className='img' />
      <div className='item-info'>
        <header>
          <h5>{item.title}</h5>
          <h5 className='item-price'>${item.price}</h5>
        </header>
        <p className='item-text'>{item.desc}</p>
      </div>
    </article>
  )
}

export default Items