import React, { useEffect, useState } from 'react'
import {Menu} from './Bace.js'

function Script() {
   const [filter, setFilter] = useState(Menu)
   const [filterbtn, setFilterbtn] = useState('All')

   useEffect(() => {             
      if(filterbtn === 'All'){
         setFilter(Menu)
         return
      } else{
         setFilter(Menu.filter(item => item.category === filterbtn))
      }
   }, [filterbtn])
  return (
    <div className='container'>
      <div className='d-flex flex-wrap justify-content-center gap-2 m-3'>
         <button onClick={() => setFilterbtn('All')}>All</button>
         <button onClick={() => setFilterbtn('breakfast')}>Breakfast</button>
         <button onClick={() => setFilterbtn('lunch')}>Lunch</button>
         <button onClick={() => setFilterbtn('shakes')}>Shakes</button>
         <button onClick={() => setFilterbtn('dinner')}>Dinner</button>
         </div>
         <div className='d-flex flex-wrap justify-content-around'>
            {filter.map(item =>
            <div key={item.id} className='card w-25 text-center mx-3 mt-4' style={{height: 300 }}>
               <img src={item.img} style={{width: '100%', height: '70%'}} alt="" />
               <p>${item.price}</p>
               <h3>{item.title}</h3>
            </div>   
               )}

      </div>

    </div>
  )
}

export default Script