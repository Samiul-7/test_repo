import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/image'

const ExploreMenu = ({catagory,setCatagory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Our menu</h1>
      {/* <p className='explore-menu-text'>Chooes from a varitey of categories of our farm fresh goodies!!!</p> */}
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCatagory(prev=>prev===item.menu_name?"ALL":item.menu_name)} key={index}className='explore-menu-list-item'>
                    <p className='box'>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
