import { useState } from 'react'
import Header from './Header'
import Basket from './Basket'
import background from './assets/backgroundangledbluewhite.png';





function App() {





 return (
   <>
   <img src={background} alt='' className='background'/>
   <div className='content'>
    <Header/>
    <Basket/>
   </div>
   </>
    );
}


export default App
