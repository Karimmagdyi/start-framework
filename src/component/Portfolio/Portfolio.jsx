import React, { useState } from 'react'
import style from './portfolio.module.css'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
export default function Portfolio() {
    let image=[img1,img2,img3,img1,img2,img3]
    
  let [modal,setModal]=useState(false)
  let [src,setSrc]=useState()
  function press(val){
    console.log(val);
    setModal(true)
    setSrc(val)
  }
  return (
    <>
    {modal && <div className={`${style.mainLayer} `}>
         <div className='w-100 h-100 position-absolute' onClick={()=>setModal(false)}></div>
         <img className='z-2' width={500}  src={src} alt=""/>
    </div>}
    <div className={`d-flex justify-content-center`}>
     <h3 className={`${style.colorWhite} ${style.f42} mt-3`}>Portfolio</h3>
    </div>
                <div className={`d-flex justify-content-center`}>
                    <div className={`${style.icons} me-2`}></div>
                    <i className={`fa-solid fa-star fa-lg ${style.colorWhite}`}></i>
                    <div className={`${style.icons} ms-2`}></div>
                </div>
                <div className="container">
                    <div className="row gy-5 mt-3 mb-5">
                     {image.map((val)=>{
                      return  <div className="col-md-4">
                            <div onClick={()=>press(val)} className={`${style.images}`}>
                                <div className={`${style.layer}`}>
                                <i class="fa-solid fa-plus fa-2xl"></i>
                                </div>
                                < img className={`w-100 rounded`} src={val} alt="" />
                            </div>
                        </div>
                       })}
                      
                    </div>
                </div>
      
    </>
  )
}
