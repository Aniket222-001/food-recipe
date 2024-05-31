import TopNav from './TopNav'
import Featured from './Featured'
import Dilvery from './Dilvery'
import Toppicks from './Toppicks'
import Meal from './Meal';
import Categories from './Categories';
import Newslatter from './Newslatter';
import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="App">
      <TopNav/>
      <Featured/>
      <Dilvery/>
      <Toppicks/>
      <Meal/>
      <Categories/>
      <Newslatter/>
    </div>
    </div>
  )
}

export default Home
