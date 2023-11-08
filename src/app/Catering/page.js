import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import Image from 'next/image'
import React from 'react'
import cateringImage from '../../assets/Images/CateringImage.jpg'
import authentic from '../../assets/Images/authentic.svg'
import hamburgerorange from '../../assets/Images/hamburger-orange.svg'
import confettiorange from '../../assets/Images/confetti-orange.svg'
import clocheorange from '../../assets/Images/cloche-orange.svg'
import Souvlakia_01 from '../../assets/Images/foodImages/Souvlakia_01.jpg'
import Chips_01 from '../../assets/Images/foodImages/Chips_01.jpg';
import ClubSandwhiches_01 from '../../assets/Images/foodImages/Club-Sandwhiches_01.jpg'
import Dessers from '../../assets/Images/foodImages/Dessers.jpg'
import Salads from '../../assets/Images/foodImages/Salads.jpg'
import Skewers_01 from '../../assets/Images/foodImages/Skewers_01.jpg'
import TakeHomePacks from '../../assets/Images/foodImages/Take-Home-Packs.jpg'
import Sides_01 from '../../assets/Images/foodImages/Sides_01.jpg'
import ValueRange_Image05 from '../../assets/Images/foodImages/Value-Range_Image05.jpg'

function page() {
  const cardsData = [
    {
      name: 'SOUVLAKIA',
      price: 'From only $9.90',
      image: Souvlakia_01
    },

    {
      name: 'Chips',
      price: 'From only $9.90',
      image: Chips_01
    },
    {
      name: 'Club Sanwhiches',
      price: 'From only $9.90',
      image: ClubSandwhiches_01
    },
    {
      name: 'Desserts',
      price: 'From only $9.90',
      image: Dessers
    },
    {
      name: 'Salads',
      price: 'From only $9.90',
      image: Salads
    },
    {
      name: 'Skewers',
      price: 'From only $9.90',
      image: Skewers_01
    },
    {
      name: 'Take Home Packs',
      price: 'From only $9.90',
      image: TakeHomePacks
    },
    {
      name: 'Sides',
      price: 'From only $9.90',
      image: Sides_01
    },
    {
      name: 'Value Range',
      price: 'From only $9.90',
      image: ValueRange_Image05
    },
  ]
  return (
    <div>






      <div className='container mb-4'>





        <div className='row justify-content-center align-items-center'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='CateringTop mb-4'>
              <div className='d-flex justify-content-start align-items-center'>
                <p className='IndieFont m-0 fw-bold'>Let us bring the taste of Greece to your next event</p>

              </div>
            </div>


            <h1 className='CatoringHeading fw-bold'>
              CATERING FOR EVERY OCCASION
            </h1>

            <p className='tommy'>Our fresh and flavorful ingredients, combined with our expert cooking techniques, guarantee that your guests will be wowed by the taste and quality of our food.</p>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>


            <Image src={cateringImage} alt='Catering Image' style={{ borderRadius: '5px 5px 5px 5px' }} className='w-100 h-100' />
          </div>

        </div>

      </div>

      <div className='bg-cateringCata'>
        <div className='container'>
          <div className='row p-5'>
            <div className='col-lg-3 col-md-3 col-sm-12'>
              <div className='d-flex flex-column align-items-center'>
                <Image src={authentic} alt='authentic' width={50} />
                <p style={{ fontWeight: '400' }}>Authentic Greek food made with fresh, high-quality ingredients</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-3 col-sm-12'>
              <div className='d-flex flex-column align-items-center'>
                <Image src={hamburgerorange} alt='authentic' width={50} />
                <p style={{ fontWeight: '400' }}>Customisable menu to fit your event&apos;s needs and preferences</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-12'>
              <div className='d-flex flex-column align-items-center'>
                <Image src={confettiorange} alt='authentic' width={50} />
                <p style={{ fontWeight: '400' }}>Professional catering team that will take care of delivery, setup, and more</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-12'>
              <div className='d-flex flex-column align-items-center'>
                <Image src={clocheorange} alt='authentic' width={50} />
                <p style={{ fontWeight: '400' }}>Perfect for a variety of events, from weddings and corporate events to private parties</p>
              </div>
            </div>

          </div>
        </div>
      </div>



      <div className='p-5'>
        <h1 className='fw-bold text-center'>OUR MENU</h1>
      </div>









      <div className='container'>
        <div className='row'>
          {cardsData.map((index, li) => {
            return (
              <>
                <div className='col-lg-3 col-md-3 col-sm-6' key={li}>

                  <div className="card me-2 mb-4 shadowCard"  >
                    <Image src={index.image} className="card-img-top" style={{ height: '100%' }} alt="..." />
                    <div className="card-body">
                      <h4 className="card-title fw-bold">{index.name}</h4>
                      <p>{index.price}</p>
                      <a href="#" className="fw-bold" style={{ color: '#e37826' }}>Learn More</a>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div className='container-fluid footerbg m-0'>
        <Footer />
      </div>
    </div>
  )
}

export default page
