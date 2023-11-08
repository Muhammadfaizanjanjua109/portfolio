import Image from 'next/image'
import React from 'react'
import Souvlakia_01 from '../../../assets/Images/foodImages/Souvlakia_01.jpg'
import motorcycle from '../../../assets/Images/motorcycle.png'
import waiter from '../../../assets/Images/waiter.png'
import Footer from '@/Components/Footer'
function page() {
    return (
        <div>
            <div className='p-5 mt-2 mb-2 headingBg'>
                <h1 className='fw-bolder text-center text-darkblue'>OUR MENU</h1>
            </div>



            <div className='container p-5'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <Image src={Souvlakia_01} alt='10' style={{ borderRadius: ' 5px 5px 5px 5px' }} />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h2 className='fw-bold mb-3'>
                            SOUVLAKIA</h2>

                        <p>Experience the taste of Greece with our tender and flavorful Souvlakia! Made with marinated meat, fresh veggies, and aromatic herbs. Served with warm pita bread and your choice of sauce, they’re a satisfying and delicious meal for any time of day.</p>


                        <div>
                            <div class=" d-flex justify-content-between  mb-3">
                                <span class="tommy color-orange fw-bold" style={{ maxWidth: '80%', fontSize: '18px' }}>
                                    Make it a Combo						</span>
                                <span class="elementor-price-list-separator align-self-center"></span>
                                <span class=" tommy fw-bold color-orange">+ $5.90</span>
                            </div>


                            <div class=" d-flex justify-content-between  mb-3">
                                <span class="tommy color-orange fw-bold" style={{ maxWidth: '80%', fontSize: '18px' }}>
                                    Make it a Combo						</span>
                                <span class="elementor-price-list-separator align-self-center"></span>
                                <span class=" tommy fw-bold color-orange">+ $5.90</span>
                            </div>




                            <div class=" d-flex justify-content-between  mb-3">
                                <span class="tommy color-orange fw-bold" style={{ maxWidth: '80%', fontSize: '18px' }}>
                                    Make it a Combo						</span>
                                <span class="elementor-price-list-separator align-self-center"></span>
                                <span class=" tommy fw-bold color-orange">+ $5.90</span>
                            </div>



                            <div class=" d-flex justify-content-between  mb-3">
                                <span class="tommy color-orange fw-bold" style={{ maxWidth: '80%', fontSize: '18px' }}>
                                    Make it a Combo						</span>
                                <span class="elementor-price-list-separator align-self-center"></span>
                                <span class=" tommy fw-bold color-orange">+ $5.90</span>
                            </div>
                        </div>



                    </div>
                </div>
            </div>


            <div className='bg-cateringCata mb-4'>
                <div className='container p-4'>
                    <h3 className='text-center fw-bold'>OPTIONS</h3>

                    <div className='row mt-5 justify-content-center'>

                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='d-flex  d-flex justify-content-center'>

                                <li class="elementor-price-list-item mb-4">
                                    <div class="elementor-price-list-text">
                                        <div class="elementor-price-list-header">
                                            <span class="elementor-price-list-title">
                                                Chicken						</span>
                                            <span class="elementor-price-list-separator Details align-self-center"></span>
                                            <span class="elementor-price-list-price">$9.90</span>
                                        </div>
                                        <p class="elementor-price-list-description">
                                            Tzatziki | Tomato | Onion | Chips						</p>
                                    </div>
                                </li>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='d-flex  d-flex justify-content-center'>

                                <li class="elementor-price-list-item mb-4">
                                    <div class="elementor-price-list-text">
                                        <div class="elementor-price-list-header">
                                            <span class="elementor-price-list-title">
                                                Chicken						</span>
                                            <span class="elementor-price-list-separator Details align-self-center"></span>
                                            <span class="elementor-price-list-price">$9.90</span>
                                        </div>
                                        <p class="elementor-price-list-description">
                                            Tzatziki | Tomato | Onion | Chips						</p>
                                    </div>
                                </li>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='d-flex  d-flex justify-content-center'>

                                <li class="elementor-price-list-item mb-4">
                                    <div class="elementor-price-list-text">
                                        <div class="elementor-price-list-header">
                                            <span class="elementor-price-list-title">
                                                Chicken						</span>
                                            <span class="elementor-price-list-separator Details align-self-center "></span>
                                            <span class="elementor-price-list-price">$9.90</span>
                                        </div>
                                        <p class="elementor-price-list-description">
                                            Tzatziki | Tomato | Onion | Chips						</p>
                                    </div>
                                </li>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 '>
                            <div className='d-flex  d-flex justify-content-center'>

                                <li class="elementor-price-list-item mb-4">
                                    <div class="elementor-price-list-text">
                                        <div class="elementor-price-list-header">
                                            <span class="elementor-price-list-title">
                                                Chicken						</span>
                                            <span class="elementor-price-list-separator Details align-self-center" ></span>
                                            <span class="elementor-price-list-price">$9.90</span>
                                        </div>
                                        <p class="elementor-price-list-description">
                                            Tzatziki | Tomato | Onion | Chips						</p>
                                    </div>
                                </li>

                            </div>
                        </div>

                    </div>
                </div>
            </div>





            <div className='chooseDiliveryMainDiv d-flex justify-content-center align-items-center bg-darkBlue '>
    <div className=' w-30 p-4 text-light'>
  
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

export default page
