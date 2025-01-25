import React from 'react'
import list from '../assets/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';


function FreeBooks() {
    const filterFreeBooks = list.filter((data) => data.category === 'Free');

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-3xl container mx-auto md:px-20 px-4'>
                <h1 className='text-xl font-bold pt-4 pb-2'>Free Offered Courses</h1>
                <p className=''>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, maxime, minima nulla labore magnam harum aperiam id earum, sit laborum error cum corporis dolore. Ipsam odit expedita nisi excepturi voluptatem?
                </p>

                <div className="">
                    <Slider {...settings}>
                        {
                            filterFreeBooks.map((item)=>(
                                <Cards item={item} key={item.id}/>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeBooks