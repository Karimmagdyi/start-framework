import React from 'react'
import style from './contact.module.css'
export default function Contact() {
    return (
        <> <h3 className={`py-5 ${style.colorWhite} ${style.f42}`}>START FRAMEWORK</h3>
         <div className={`d-flex justify-content-center mb-4`}>
                    <div className={`${style.icons} me-2`}></div>
                    <i className={`fa-solid fa-star fa-lg ${style.colorWhite}`}></i>
                    <div className={`${style.icons} ms-2`}></div>
                </div>
            <div className="container">
                <div className={`d-flex justify-content-center align-items-center flex-column`}>
                    <div className="form-floating mb-3 w-75 mt-5">
                        <input type="text" className="form-control w-100" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">userName</label>
                    </div>
                    <div className="form-floating mb-3 w-75">
                        <input type="number" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">userAge</label>
                    </div>
                    <div className="form-floating mb-3 w-75 ">
                        <input type="email" className="form-control w-100" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">userEmail</label>
                    </div>
                    <div className="form-floating mb-3 w-75 ">
                        <input type="password" className="form-control w-100" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">userPassword</label>
                    </div>
                    <button className={`btn mb-5 mt-4 ${style.btnColor}`}>Send Message</button>
                </div>
            </div>



        </>
    )
}
