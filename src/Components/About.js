import Image from 'next/image'
import React from 'react'
// import imgagesA from '../assets/Images/About/CateringImage.jpg'
import imgagesA from '../assets/Images/About/about.jpg'
function About() {
  return (
 <>
<section id="about" className="about-mf sect-pt4 route">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="box-shadow-full">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-6 col-md-5">
                  <div className="about-img">
                    <Image src={imgagesA} className="img-fluid rounded b-shadow-a" alt="" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-7 d-flex justify-content-center align-items-center">
                  <div className="about-info">
                    <p><span className="title-s">Name: </span> <span style={{fontSize:'0.75rem'}}>Muhammad Faizan</span></p>
                    <p><span className="title-s">Profile: </span> <span style={{fontSize:'0.75rem'}}>Full stack developer</span></p>
                    <p><span className="title-s">Email: </span> <span style={{fontSize:'0.75rem'}}>muhammadfaizanjanjua109@gmail.com</span></p>
                    <p><span className="title-s">Phone: </span> <span style={{fontSize:'0.75rem'}}>(+92) 340-5966112</span></p>
                  </div>
                </div>
              </div>
           
            </div>
            <div className="col-md-6">
              <div className="about-me pt-4 pt-md-0">
                <div className="title-box-2">
                  <h5 className="title-left">
                    About me
                  </h5>
                </div>
                <p className="lead" style={{fontSize:'1rem'}}>
                As a skilled MERN (MongoDB, Express, React, Node.js) stack developer, 
                </p>
                <p className="lead" style={{fontSize:'1rem'}}>
                I specialize in crafting dynamic and full-stack web applications. With a passion for creating seamless user experiences, I leverage MongoDB for robust data storage, harness Express for efficient server-side logic, employ React for building responsive user interfaces, and rely on Node.js for a powerful server runtime. With the MERN stack,
                     </p>
                <p className="lead" style={{fontSize:'1rem'}}>
                I bring your web development projects to life, ensuring they're modern, interactive, and highly efficient. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 </>
  )
}

export default About
