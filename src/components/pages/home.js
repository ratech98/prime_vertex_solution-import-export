/* eslint-disable react-hooks/rules-of-hooks */
import IMAGE from "../images/image"
import StarRating from "../properties/starRating"
import Triangle from "../properties/triangle"
import ContactUs from "../properties/contactUs"
import Aos from "aos"
import 'aos/dist/aos.css'
// import { BasisCurve } from "react-svg-curve"
// import '../../assets/PNGimages/imagye 16.png'
import CountUp from "react-countup"
import React, { useEffect, useRef, useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"


Aos.init()


const homePage = () => {

    const [startCount,setStartCount] = useState(false)
    const countRef = useRef(null)

    useEffect(()=>{
        const obser = new IntersectionObserver(
            (enter)=>{
                enter.forEach((ent)=>{
                    if(ent.isIntersecting){
                        setStartCount(true)
                        obser.unobserve(ent.target)
                    }
                })
            },
            {threshold: 0.5}
        )
        if(countRef.current){
            obser.observe(countRef.current)
        }
    })

    const myStyle ={
        background:`url(/computer.svg)`,
        backgroundPosition:'right',
        backgroundSize: 'fit', 
        // height: '500px',
        // Object: 'cover',
        backgroundRepeat:'no-repeat',
    }

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      

    
    return(
        <div id="Home" className="">

            {/* home top title page */}

            <div className="relative">
                <div className="h-screen brightness-50" style={{backgroundImage:`url(/image.png)`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                </div>
                <div className="absolute top-20 left-0 flex items-center justify-center h-full">
                    <div className="*:mb-5 md:w-10/12 flex flex-col px-3 text-white">
                        <div className=" font-bold text-5xl text-center">
                            Your Reliable Partner in Global Supply Chain Solutions
                        </div>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                                <path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"></path>
                            </svg> */}
                        <div className="font-medium text-xl hidden md:block">
                            At PRIME VERTEX SOLUTION, we specialize in optimizing your supply chain and logistics operations. Our expert team is dedicated to providing top-notch shipping consultation and service quotation agreements to enhance your business efficiency.
                        </div>
                        {/* <div className="flex items-center justify-center gap-3">
                            <button className="border text-white px-4 py-2 rounded-full shadow-[1px_2px_1px_1px_rgba(0,0,0,0.6)] bg-[#00999e] hover:bg-[#747474]">Get Started</button>
                            </div> */}
                    </div>
                </div>
            </div>

            {/* About us page */}

            <div id="aboutUs" className="bg-[#fff] px-5 pt-12">

                {/* about us */}

                <div className="flex items-center justify-center py-10">
                    <div className="">
                        <div ref={countRef} className="*:py-3 flex flex-col justify-center items-center text-[#003366]">
                            <div className="flex flex-col justify-center items-center w-9/12 mb-10">
                                <div className="font-semibold text-center text-3xl">
                                    About us
                                </div>
                                <p className="text-center">
                                    To redefine logistics through trusted partnerships, delivering solutions that combine reliability with forward-thinking innovation. 
                                    At PRIME VERTEX SOLUTION, we are dedicated to supporting our clients’ goals, streamlining their supply chains, and empowering their growth with every mile.
                                </p>
                                <div className="w-full flex justify-end">
                                    <button className="border text-white px-4 py-2 rounded-full shadow-[1px_2px_1px_1px_rgba(0,0,0,0.6)] bg-[#194775] hover:bg-[#00999e]">Read More</button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 *:bg-gray-300 *:rounded-lg *:px-3 *:pt-10 *:pb-3 gap-10">
                                <div className="">
                                    <div className="relative">
                                        <div className="absolute inset-0 w-full -top-20 flex items-center justify-center">
                                            <div className="bg-[#194775] size-16 rounded-full flex items-center justify-center">
                                                <img className="w-8" src={IMAGE?.shild} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-bold text-xl text-center pb-3">
                                        {startCount && <CountUp end={2023}  duration={3}/>} years
                                    </p>
                                    <p className="">
                                        With a focus on itergrity and innovation, we strive to exceed client expectations in every projec we undertake.
                                    </p>
                                </div>
                                <div className="">
                                    <div className="relative">
                                        <div className="absolute inset-0 w-full -top-20 flex items-center justify-center">
                                            <div className="bg-[#194775] size-16 rounded-full flex items-center justify-center">
                                                <img className="w-8" src={IMAGE?.shild} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-bold text-xl text-center pb-3">
                                        {startCount && <CountUp end={500}  duration={3}/>} years
                                    </p>
                                    <p className="">
                                        Our teamm is dedicated to fostering strong relatationships with our clients, ensuring that their 
                                        logistics needs are met whit precision and care.
                                    </p>
                                </div>
                                <div className="">
                                    <div className="relative">
                                        <div className="absolute inset-0 w-full -top-20 flex items-center justify-center">
                                            <div className="bg-[#194775] size-16 rounded-full flex items-center justify-center">
                                                <img className="w-8" src={IMAGE?.shild} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-bold text-xl text-center pb-3">
                                        {startCount && <CountUp end={200}  duration={3}/>} years
                                    </p>
                                    <p className="">
                                        We have successfully managed over 200 logistics projects, showcasing our expertise and commitment to 
                                        excellence.   
                                    </p>
                                </div>
                                <div className="">
                                    <div className="relative">
                                        <div className="absolute inset-0 w-full -top-20 flex items-center justify-center">
                                            <div className="bg-[#194775] size-16 rounded-full flex items-center justify-center">
                                                <img className="w-8" src={IMAGE?.shild} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-bold text-xl text-center pb-3">
                                        {startCount && <CountUp end={14}  duration={3}/>} years
                                    </p>
                                    <p className="">
                                        Our dedication has earned us numerous awards in the logistics sector, reflectiong our commitment to quality and service.    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our services */}

                <div className="bg-gradient-to-br from-[#0066CC] via-[#2677C9] via-[#004890] to-[#194775] text-white">
                    <div className="">
                        <p className="text-center font-bold text-5xl py-5">Our services</p>
                    </div>
                    <div className="">
        {/* <div className="h-48 w-fit border-r-4 border-dotted border-white"></div> */}
                        <div className="grid grid-cols-3 gap-8 px-8 py-16">
                            <div className=" p-5">
                                <div className="flex items-center justify-center">
                                    <div className="flex items-center justify-center bg-white rounded-full p-3">
                                        <img className="" src={IMAGE?.cloud} alt=""/>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <p className="font-semibold text-xl pb-3 pt-5">Freight forwarding</p>
                                        <div>
                                            "We know every shipment is more than just a package – it’s a promise. 
                                            Whether it’s by air, sea, or land, we’ll ensure it reaches where it needs to be, 
                                            on time and without worry." 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-5">
                                <div className="flex items-center justify-center">
                                    <div className="flex items-center justify-center bg-white rounded-full p-3">
                                        <img className="" src={IMAGE?.cloud} alt=""/>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <p className="font-semibold text-xl pb-3 pt-5">Warehousing</p>
                                        <div>
                                        "You can trust us with the security of your products. 
                                        Our facilities are more than just storage; they’re an extension of your business, 
                                        providing a safe space to grow and manage your inventory."
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-5">
                                <div className="flex items-center justify-center">
                                    <div className="flex items-center justify-center bg-white rounded-full p-3">
                                        <img className="" src={IMAGE?.cloud} alt=""/>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <p className="font-semibold text-xl pb-3 pt-5">Supply chain management</p>
                                        <div>
                                         "We believe that efficiency begins with care. 
                                        Every link in your supply chain is carefully managed to 
                                        create the best outcomes for you and your customers."
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-5">
                                <div className="flex items-center justify-center">
                                    <div className="flex items-center justify-center bg-white rounded-full p-3">
                                        <img className="" src={IMAGE?.cloud} alt=""/>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <p className="font-semibold text-xl pb-3 pt-5">Custom clearance</p>
                                        <div>
                                        "We take the stress out of customs with seamless support, 
                                        helping you avoid delays and navigate each requirement with ease." 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-5">
                                <div className="flex items-center justify-center">
                                    <div className="flex items-center justify-center bg-white rounded-full p-3">
                                        <img className="" src={IMAGE?.cloud} alt=""/>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-center">
                                        <p className="font-semibold text-xl pb-3 pt-5">Warehousing</p>
                                        <div>
                                            "You’re passionate about your business, and we’re passionate about helping it grow. 
                                            From order fulfillment to last-mile delivery, our team is here to support you every step of the way."
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-16">
                                <div className="flex border-2 cursor-pointer rounded-2xl w-full h-full items-center justify-center">
                                    <button className="flex items-center justify-center rounded-full p-3">
                                        <div>
                                            <p className="font-bold text-lg">For more details</p>
                                            <p>Click here</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Client rewiev */}

                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <div className="font-bold text-5xl text-[#003366] mt-20 pb-10">What are client says</div>
                    </div>
                    <div className="w-5/6">
                        <Carousel
                            responsive={responsive} 
                            infinite={true} 
                            autoPlay={true} 
                            // autoPlaySpeed={500} 
                            itemClass="carousel-item-padding-40-px px-5"
                            swipeable={false}
                            draggable={false}
                            showDots={false}
                            removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                            >
                            <article className="rounded-2xl bg-[#F1F8FF] p-5">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
                                    <div className="font-medium dark:text-white">
                                        <p className=''>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <h3 className="pt-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
                            </article>
                            <article className="rounded-2xl bg-[#F1F8FF] p-5">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
                                    <div className="font-medium dark:text-white">
                                        <p className=''>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <h3 className="pt-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
                            </article>
                            <article className="rounded-2xl bg-[#F1F8FF] p-5">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
                                    <div className="font-medium dark:text-white">
                                        <p className=''>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <h3 className="pt-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
                            </article>
                            <article className="rounded-2xl bg-[#F1F8FF] p-5">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
                                    <div className="font-medium dark:text-white">
                                        <p className=''>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <h3 className="pt-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
                            </article>
                            <article className="rounded-2xl bg-[#F1F8FF] p-5">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
                                    <div className="font-medium dark:text-white">
                                        <p className=''>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <h3 className="pt-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
                            </article>
                            <article className="rounded-2xl bg-[#F1F8FF] p-5">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
                                    <div className="font-medium dark:text-white">
                                        <p className=''>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <h3 className="pt-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
                            </article>
                            <article className="rounded-2xl bg-[#F1F8FF] p-5">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
                                    <div className="font-medium dark:text-white">
                                        <p className=''>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <h3 className="pt-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
                            </article>
                            <article className="rounded-2xl bg-[#F1F8FF] p-5">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
                                    <div className="font-medium dark:text-white">
                                        <p className=''>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <h3 className="pt-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
                            </article>
                            <article className="rounded-2xl bg-[#F1F8FF] p-5">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
                                    <div className="font-medium dark:text-white">
                                        <p className=''>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <h3 className="pt-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
                            </article>
                            <article className="rounded-2xl bg-[#F1F8FF] p-5">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
                                    <div className="font-medium dark:text-white">
                                        <p className=''>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <h3 className="pt-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
                            </article>
                            <article className="rounded-2xl bg-[#F1F8FF] p-5">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
                                    <div className="font-medium dark:text-white">
                                        <p className=''>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <h3 className="pt-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
                            </article>
                            <article className="rounded-2xl bg-[#F1F8FF] p-5">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
                                    <div className="font-medium dark:text-white">
                                        <p className=''>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <h3 className="pt-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
                            </article>
                            <article className="rounded-2xl bg-[#F1F8FF] p-5">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
                                    <div className="font-medium dark:text-white">
                                        <p className=''>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <h3 className="pt-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
                            </article>
                            <article className="rounded-2xl bg-[#F1F8FF] p-5">
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
                                    <div className="font-medium dark:text-white">
                                        <p className=''>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                    </svg>
                                </div>
                                <h3 className="pt-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
                            </article>
                        </Carousel>
                    </div>
                </div>



                {/* Industries */}

                <div className="bg-gradient-to-bl from-[#194775] via-[#004890] via-[#2677C9] to-[#0066CC] flex items-center justify-center my-10 py-10">
                    <div className="">
                        <div className="text-white">
                            <p className="font-bold text-5xl text-center py-5">Industries we serving</p>
                        </div>
                        <div className="grid grid-cols-4 text-[#2276C9] px-8 gap-5">
                            <div className="bg-white rounded-xl p-3">
                                <div>
                                    <img className="rounded-xl" src={IMAGE?.ITsolution} alt=""/>
                                </div>
                                <div>
                                    <div className="py-3 font-bold text-center text-2xl">Retail</div>
                                    <p className="text-center">
                                        We know every shipment is more than just a package it’s a promise. 
                                        Whether it’s by air, sea, or land, we’ll ensure it reaches where it needs to be, on time and without worry
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-3">
                                <div>
                                    <img className="rounded-xl" src={IMAGE?.ITsolution} alt=""/>
                                </div>
                                <div>
                                    <div className="py-3 font-bold text-center text-2xl">Healthcare</div>
                                    <p className="text-center">
                                        Delivering the essentials that matter for people's health and well-being.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-3">
                                <div>
                                    <img className="rounded-xl" src={IMAGE?.ITsolution} alt=""/>
                                </div>
                                <div>
                                    <div className="py-3 font-bold text-center text-2xl">Manufacturing</div>
                                    <p className="text-center">
                                        Supporting your production lines with timely, dependable logistics.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-3">
                                <div>
                                    <img className="rounded-xl" src={IMAGE?.ITsolution} alt=""/>
                                </div>
                                <div>
                                    <div className="py-3 font-bold text-center text-2xl">Automobile</div>
                                    <p className="text-center">
                                        Helping keep industries on the move with streamlined, dependable solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-between px-3">
                    <div data-aos="fade-up" className="lg:w-1/2 self-center">
                        <div className="text-5xl font-semibold text-center">
                        Request a Service Quote
                        </div>
                        <div className="py-10 ">
                            <div className="text-gray-500">
                                Get a detailed quotation for your logistics needs. 
                                Our Service Quotation Agreement ensures transparency and helps you budget effectively.
                                Streamine your logistics operations whit our expert guidance.
                            </div>
                            <div className="flex justify-center">
                                <button className="border text-white px-4 mt-3 py-2 rounded-full shadow-[1px_2px_1px_1px_rgba(0,0,0,0.6)] bg-[#00999e] hover:bg-[#747474]">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center hidden md:inline-block w-1/2">
                        <img className="" src={IMAGE?.ITsolution} alt=""/>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="p-5 w-1/2">
                        <div className="font-bold text-2xl py-3">Industries Served</div>
                        <ul className="list-disc list-inside text-gray-500 *:py-1">
                            <li><span className="font-semibold text-black">Retail: </span>Helping your products reach customers with care and speed, so you can build trust and loyalty.</li>
                            <li><span className="font-semibold text-black">Healthcare: </span>Delivering the essentials that matter for people’s health and well-being.</li>
                            <li><span className="font-semibold text-black">Manufacturing: </span>Supporting your production lines with timely, dependable logistics.</li>
                            <li><span className="font-semibold text-black">Automotive: </span>Helping keep industries on the move with streamlined, dependable solutions.</li>
                        </ul>
                    </div>
                    <div className="p-5 w-1/2">
                        <div className="font-bold text-2xl py-3">Testimonials</div>
                        <div className="text-gray-500 *:py-1">
                            <div>
                                PRIME VERTEX SOLUTION truly cares about our business. 
                                Every shipment is handled with such attention, and they make us feel valued every step of the way.
                            </div>
                            <div>
                                They’re more than just a logistics provider they’re a partner we can count on through thick and thin."
                            </div>
                        </div>
                    </div>
                </div>
                <div id="contact" className=" p-10 ">
                    <div className="">
                        <div className={``}>
                            <div className="">
                                <ContactUs/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default homePage