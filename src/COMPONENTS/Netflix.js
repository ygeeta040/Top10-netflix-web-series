import React from 'react'
// import img1 from './Images/assign11.jpg';
import '../COMPONENTS/Netflix.css';
const Netflix = (props) => {
  return (
   <>
   <div className='container'>
   <div className='cards1'>
        <div className='card'>
            <img src={props.imgsrc} alt='mypics' className='card__img'/>
            <div className='card_info'>
                <span className='card_category'>{props.sname}</span>
                <h5 className='card_title'> {props.title}</h5>
                <a href={props.link} target="_blank">
                    <button className='btn btn-outline-primary mybtn'>Watch Now</button>
                </a>
            </div>
        </div>
    </div>
   </div>
    
    
   </>
    
  )
}

export default Netflix;