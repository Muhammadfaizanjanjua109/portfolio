import Image from 'next/image'
import React from 'react'
import franchise from '../../assets/Images/Franchise/Franchising.jpg'
import OurBusinessImage from '../../assets/Images/Franchise/Our-Business-Image.jpg'
import OurFood from '../../assets/Images/Franchise/ourFood.jpg'
import OurPeopleImage from '../../assets/Images/Franchise/OurPeopleImage.jpg'
import Artboard1 from '../../assets/Images/Franchise/Artboard1.png'
import Artboard2 from '../../assets/Images/Franchise/Artboard2.png'
import Artboard3 from '../../assets/Images/Franchise/Artboard3.png'
import Artboard4 from '../../assets/Images/Franchise/Artboard4.png'
import Artboard5 from '../../assets/Images/Franchise/Artboard5.png'
import FranchiseEnquiryImage1 from '../../assets/Images/Franchise/FranchiseEnquiryImage1.jpg'
import Footer from '@/Components/Footer'
function page() {

  return (
 <>
 
 <section id="services" className="services-mf pt-5 route">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="title-box text-center">
          <h3 className="title-a">
            Services
          </h3>
          <p className="subtitle-a">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="line-mf"></div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><i className="bi bi-briefcase"></i></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">Web Design</h2>
            <p className="s-description text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
              provident vitae! Magni
              tempora perferendis eum non provident.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><i className="bi bi-card-checklist"></i></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">Web Development</h2>
            <p className="s-description text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
              provident vitae! Magni
              tempora perferendis eum non provident.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><i className="bi bi-bar-chart"></i></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">Photography</h2>
            <p className="s-description text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
              provident vitae! Magni
              tempora perferendis eum non provident.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><i className="bi bi-binoculars"></i></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">Responsive Design</h2>
            <p className="s-description text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
              provident vitae! Magni
              tempora perferendis eum non provident.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><i className="bi bi-brightness-high"></i></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">Graphic Design</h2>
            <p className="s-description text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
              provident vitae! Magni
              tempora perferendis eum non provident.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-box">
          <div className="service-ico">
            <span className="ico-circle"><i className="bi bi-calendar4-week"></i></span>
          </div>
          <div className="service-content">
            <h2 className="s-title">Marketing Services</h2>
            <p className="s-description text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
              provident vitae! Magni
              tempora perferendis eum non provident.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 </>


  )
}

export default page
