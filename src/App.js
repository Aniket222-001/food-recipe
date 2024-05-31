import TopNav from './components/TopNav'
import Featured from './components/Featured'
import Dilvery from './components/Dilvery'
import Toppicks from './components/Toppicks'
import Meal from './components/Meal';
import Categories from './components/Categories';
import Newslatter from './components/Newslatter';
import Pagedata from './components/Pagedata';
import {  Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Help from './components/Helpus';
import Myfav from './components/Myfav';
import Wallet from './components/Wallet';
import Dilv from './components/Dilv'

function App() {
  return (
    <div>
    
    <Routes>
      <Route path='/' element={
       <div className="App">
       <TopNav/>
       <Featured/>
       <Dilvery/>
       <Toppicks/>
       <Meal/>
       <Categories/>
       <Newslatter/>
        </div>
      }/>
      <Route path = "/Home" element={<Home/>}/>
      <Route path="Pagedata/:id" element={<Pagedata />}/>
      <Route path="/help" element={<Help/>}/>
      <Route path="/wallet" element={<Wallet/>}/>
      <Route path="/dilv" element={<Dilv/>}/>
      <Route path="/myfav" element={<Myfav/>}/>
    </Routes>
    </div>
  );
}

export default App;
