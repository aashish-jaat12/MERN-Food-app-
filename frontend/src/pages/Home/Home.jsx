import React, { useState } from 'react'
import Hader from '../../Components/Hader/Hader'
import Menu from '../../Components/Menu/Menu'
import FoodDisplay from '../../Components/fooddisplay/FoodDisplay'

function Home() {
  const [category, setcategory] = useState("All")
  return (
    <div>
      <Hader/>
      <Menu category={category}  setcategory={setcategory} />
<FoodDisplay  category={category} />

    </div>
  )
}

export default Home
