import React from 'react'
import "./Section5.css";
import ReactPlayer from 'react-player'

const Secrtion5=()=> {
  return (
  
    <div className='Section5'>
     <h2>You can<br/> find me on <br/> These <br/>Platforms...</h2>
      <div className='center'>
          <ReactPlayer url={'https://www.youtube.com/watch?v=BDPQHx8qSco&t=2s'} controls={true} width="100%" />
         <p><a href="https://www.youtube.com/@chatterjeeravi"><li className='view' >Check my youtube channel</li></a></p>
      </div>
      <div className= 'right'>
        <a href="https://www.linkedin.com/in/ravichatterjee/"> <button className=' btn1' >Linkedln</button></a>
         <button className='btn'>Facebook</button>
        <p className='view'>view more</p>
     </div>
    </div>
   
  )
}

export default Secrtion5
