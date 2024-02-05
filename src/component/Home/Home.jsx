import React from 'react'
import img1 from '../../assets/avataaars.svg'
import style from './home.module.css'
export default function Home() {
    return (
        <>
            <div className={`d-flex justify-content-center align-items-center flex-column py-5 ${style.bg}`}>

                <img width={300} src={img1} alt="" />
                <h3 className={`py-5 ${style.colorWhite} ${style.f42}`}>START FRAMEWORK</h3>
                <div className={`d-flex justify-content-center align-items-center`}>
                    <div className={`${style.icons} me-2`}></div>
                    <i className={`fa-solid fa-star fa-lg text-white`}></i>
                    <div className={`${style.icons} ms-2`}></div>
                </div>
                <h6 className={`text-white my-3`}>Graphic Artist - Web Designer - Illustrator</h6>


            </div>
        </>
    )
}
