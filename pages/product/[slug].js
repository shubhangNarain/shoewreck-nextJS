import React from 'react'

import { Wrapper } from '@/components/Wrapper'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import { IoMdHeartEmpty } from 'react-icons/io'
import RelatedProducts from '@/components/RelatedProducts'



const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper>
            <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap[100px]'>
                {/* left column start */}
                <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full
                mx-auto lg:mx-0'>
                    <ProductDetailsCarousel/>
                </div>
                {/* left column end */}

                {/* right column start */}
                <div className='flex-[1] py-3'>
                     <div className='text-[34px] font-semibold mb-2'>
                        Jordan Retro 6 G
                     </div>

                     <div>
                        Men&apos;s Golf Shoes
                     </div>

                     <div className='text-lg font-semibold'>
                        MRP : 19,695.00
                     </div>

                     <div className='text-md font-medium text-black/[0/5]'>
                        incl. of taxes
                     </div>
                     <div className='text-md font-medium text-black/[0.5] mb-20'>
                        {`(Also includes all aplicable taxes)`}
                     </div>


                     <div className='mb-10'>
                        <div className='flex justify-between mb-2'>
                           <div className='text-md font-semibold'>
                              Select size
                           </div>
                           <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                              Select guide
                           </div>
                        </div>

                        <div className='grid grid-cols-3 gap-2'>
                           <div className='border rounded-md text-center py-3
                           font-medium hover:border-black cursor-pointer'>
                              UK 6
                           </div>

                           <div className='border rounded-md text-center py-3
                           font-medium hover:border-black cursor-pointer'>
                              UK 6.5
                           </div>
                           
                           <div className='border rounded-md text-center py-3
                           font-medium hover:border-black cursor-pointer'>
                              UK 7
                           </div>
                           
                           <div className='border rounded-md text-center py-3
                           font-medium hover:border-black cursor-pointer'>
                              UK 7.5
                           </div>
                           
                           <div className='border rounded-md text-center py-3
                           font-medium hover:border-black cursor-pointer'>
                              UK 8
                           </div>
                           
                           <div className='border rounded-md text-center py-3
                           font-medium hover:border-black cursor-pointer'>
                              UK 8.5
                           </div>
                           
                           <div className='border rounded-md text-center py-3
                           font-medium hover:border-black cursor-pointer'>
                              UK 9
                           </div>
                           
                           <div className='border rounded-md text-center py-3
                           font-medium hover:border-black cursor-pointer'>
                              UK 9.5
                           </div>
                           
                           <div className='border rounded-md text-center py-3
                           font-medium hover:border-black cursor-not-allowed opacity-50'>
                              UK 10
                           </div>

                           <div className='border rounded-md text-center py-3
                           font-medium hover:border-black cursor-not-allowed opacity-50'>
                              UK 10.5
                           </div>

                           <div className='border rounded-md text-center py-3
                           font-medium hover:border-black cursor-not-allowed opacity-50'>
                              UK 11
                           </div>

                        </div>

                           <div className='text-red-600 mt-1'>
                              Size selection is required
                           </div>

                           <button className='w-full py-4 rounded-full bg-black text-white
                           text-lg font-medium transition-transform active:scale-95 mb-3
                           hover:opacity-75'>
                              Add to cart
                           </button>

                           <button className='w-full py-4 rounded-full border border-black
                           text-lg font-medium transition-transform active:scale-95 flex
                           items-center justify-center gap-2 hover:opacity-75 mb-10'>
                              Add to Wishlist
                              <IoMdHeartEmpty size={20} />
                           </button>

                           <div>
                              <div className='text-lg font-bold mb-5'>
                                 Product Details
                              </div>
                              <div className='text-md mb-5'>
                              Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. With an iconic design that pairs perfectly with any 'fit, these kicks ensure you'll always be on point.
                              </div>
                           </div>
                     </div>

                </div>
                {/* right column end */}
            </div>

            <RelatedProducts/>
        </Wrapper>
    </div>
  )
}

export default ProductDetails