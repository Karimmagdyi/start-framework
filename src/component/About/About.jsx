import React from 'react'
import style from './about.module.css'
export default function About() {
    return (
        <>    
        <div className={` ${style.bg}`} >
        <div className={`container`}>
            <div className={`d-flex justify-content-center align-items-center flex-column py-5`}>

                <h3 className={`py-5 ${style.colorWhite} ${style.f42}`}>ABOUT COMPONENT</h3>
                <div className={`d-flex justify-content-center align-items-center`}>
                    <div className={`${style.icons} me-2`}></div>
                    <i className={`fa-solid fa-star fa-lg text-white`}></i>
                    <div className={`${style.icons} ms-2`}></div>
                </div>
                <div className={`d-flex justify-content-center align-items-center px-3 `} >
                    <p className={`text-white my-3`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p className={`text-white my-3`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>


            </div>
        </div>
        </div>
       

        </>
    )
}
