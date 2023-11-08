import Image from 'next/image'
import React from 'react'
import Souvlakia_01 from '../../assets/Images/foodImages/Souvlakia_01.jpg'
import Chips_01 from '../../assets/Images/foodImages/Chips_01.jpg';
import ClubSandwhiches_01 from '../../assets/Images/foodImages/Club-Sandwhiches_01.jpg'
import Dessers from '../../assets/Images/foodImages/Dessers.jpg'
import Salads from '../../assets/Images/foodImages/Salads.jpg'
import Skewers_01 from '../../assets/Images/foodImages/Skewers_01.jpg'
import TakeHomePacks from '../../assets/Images/foodImages/Take-Home-Packs.jpg'
import Sides_01 from '../../assets/Images/foodImages/Sides_01.jpg'
import ValueRange_Image05 from '../../assets/Images/foodImages/Value-Range_Image05.jpg'
import motorcycle from '../../assets/Images/motorcycle.png'
import waiter from '../../assets/Images/waiter.png'
import Footer from '@/Components/Footer';
import Link from 'next/link';
// import { useRouter } from 'next/router';
function Menu() {
const cardsData = [
  {
    name:'SOUVLAKIA',
    price:'From only $9.90',
    image:Souvlakia_01
  },

  {
    name:'Chips',
    price:'From only $9.90',
    image:Chips_01
  },
  {
    name:'Club Sanwhiches',
    price:'From only $9.90',
    image:ClubSandwhiches_01
  },
  {
    name:'Desserts',
    price:'From only $9.90',
    image:Dessers
  },
  {
    name:'Salads',
    price:'From only $9.90',
    image:Salads
  },
  {
    name:'Skewers',
    price:'From only $9.90',
    image:Skewers_01
  },
  {
    name:'Take Home Packs',
    price:'From only $9.90',
    image:TakeHomePacks
  },
  {
    name:'Sides',
    price:'From only $9.90',
    image:Sides_01
  },
  {
    name:'Value Range',
    price:'From only $9.90',
    image:ValueRange_Image05
  },
]
  return (
    <div>
   <div className='bg-headings'>
<h1 className='fw-bold text-center p-4'>OUR MENU</h1>
   </div>




   <div className='mt-4'>
    <div className='container-fluid d-flex  flex-wrap justify-content-center '>
{cardsData.map((index,li)=>{
  return ( < > <div key={li}  className="card me-2 mb-4 shadowCard" style={{width:'22rem'}}>
  <Image src={index.image}  className="card-img-top w-100 h-100" alt="..." />
  <div className="card-body">
    <h4 className="card-title fw-bold">{index.name}</h4>
    <p>{index.price}</p>
    <Link   href="[details]" as={`Menu/${index.name}`}  className="fw-bold" style={{color:'#e37826'}}>Learn More</Link>
  </div>
</div></>)
})}

    </div>
   </div>
   <div className='chooseDiliveryMainDiv d-flex justify-content-center align-items-center bg-darkBlue'>
    <div className=' w-30 p-4 text-light d-flex justify-content-center align-items-center flex-column'>
  
    <h1 className='fw-bolder'>ORDER YOUR GREEK FAVOURITES NOW</h1>
<div className='d-flex mt-4'>
  ِ<div className='d-flex flex-column me-5'>
<Image src={motorcycle} alt='motorcycle'  width={100} />
    <button className='btn btn-light text-accent-orange  mt-2'>Dilivery</button>
  </div>
  ِ<div className='d-flex flex-column e-5'>
<Image src={waiter} alt='waiter' width={100} />
    <button className='btn btn-light text-accent-orange mt-2'>Pick Up</button>
  </div>
  ِ<div></div>
</div>
    </div>
   </div>
<div className='container-fluid footerbg m-0'>
<Footer />
</div>
    </div>
  )
}

export default Menu
