import React from 'react'
import style from'./Footer.module.css'
export default function Footer() {
  return (
    <>
      <div className={`${style.bg} ${style.colorWhite} text-center`}>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="location py-5">
                        <h3>LOCATION</h3>
                        <h4>2215 John Daniel Drive</h4>
                        <h5>Clark, MO 65243</h5>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="location py-5">
                        <h3>AROUND THE WEB</h3>
                        <div className=''>
                        <i className={`fa-brands fa-facebook fa-xl mx-2  ${style.i}`}></i>
                        <i className={`fa-brands fa-twitter fa-xl mx-2 ${style.i}`}></i>
                        <i className={`fa-brands fa-linkedin fa-xl mx-2 ${style.i}`}></i>
                        <i className={`fa-solid fa-globe fa-xl mx-2 ${style.i}`}></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="location py-5">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
