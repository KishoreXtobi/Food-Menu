import Menu from './Menu'
import Title from './title'
import menu from './data'
import {useState} from 'react'
const App = () => {
  const [menuItems,setMenu] = useState(menu)

  return (
    <main>
      <section className='menu'>
        <Title text='Our Menu' />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
