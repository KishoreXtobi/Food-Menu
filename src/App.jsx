import Menu from './Menu'
import Title from './title'
import menu from './data'
import { useState } from 'react'
import Categories from './Categories'

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenu] = useState(menu)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenu(menu)
      return
    }

    const newMenu = menu.filter((item) => item.category === category)
    setMenu(newMenu)
  }

  return (
    <main>
      <section className='menu'>
        <Title text='Our Menu' />
        <Categories item={allCategories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
