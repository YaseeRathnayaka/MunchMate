import React from 'react'
import list from '../../../data/Data'
import Cards from '../Cards/Cards'
import '../MenuPage/MenuPage.css'

const MenuPage = () => {
  return (
    <section>
        {
            list.map((item) => (
                <Cards item={item} />
            ))
        }
    </section>
  )
}

export default MenuPage
