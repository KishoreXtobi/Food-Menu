import React from 'react'

const Categories = ({item, filterItems}) => {
  return (
    <div className='btn-container'>
        {item.map((category)=>{
            return <button type='button' className='btn' key={category} onClick={()=>filterItems(category)}>{category}</button>
        })}
            </div>
  )
}

export default Categories