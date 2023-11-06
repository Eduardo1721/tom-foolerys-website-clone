import React from 'react'
import './Box1.css'
import 'bootstrap/dist/css/bootstrap.css';


const Box1 = () => {
  return (
    <div className='boxImage'>
        <header className='flatbread'    
        style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://irepo.primecp.com/2015/08/230920/Fresh-Tomato-Flatbread_ExtraLarge1000_ID-1121632.jpg?v=1121632")`,
        backgroundPosition: "center center",
        }}>
        <img className='logo1'
        src='https://www.tomfoolerysbar.com/wp-content/uploads/2019/10/tf-logo-2.png'
        alt=''/>
         <div className='topImg'>
         <button type="button" class="btn btn-light"><a href="https://www.tomfoolerysbar.com/all-day-menu/">Order Now!</a></button>
         </div>
        </header>
                
    </div>
  )
}

export default Box1