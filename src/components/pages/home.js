/* eslint-disable react-hooks/rules-of-hooks */
import IMAGE from "../images/image"
import StarRating from "../properties/starRating"
import Triangle from "../properties/triangle"
import ContactUs from "../properties/contactUs"
import Aos from "aos"
import 'aos/dist/aos.css'
// import { BasisCurve } from "react-svg-curve"
import { Button, Carousel } from "@material-tailwind/react"
// import '../../assets/PNGimages/imagye 16.png'
import CountUp from "react-countup"
import React, { useEffect, useRef, useState } from "react"


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

    
    return(
        <div id="Home" className="">
            <div className="bg-red h-screen text-white flex items-center justify-center" style={{backgroundImage:`url(/background.png)`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                <div className="flex items-center justify-center">
                    <div  className="*:mb-5 w-4/6 flex flex-col px-3">
                        <div className=" font-bold text-5xl text-center">
                            Streamline Your Logistics with Us
                        </div>
                        <div className="text-center font-medium text-xl">
                            At PRIME VERTEX SOLUTION, we specialize in optimizing your supply chain and logistics operations. Our expert team is dedicated to providing top-notch shipping consultation and service quotation agreements to enhance your business efficiency.
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <button className="border text-white px-4 py-2 rounded-full shadow-[1px_2px_1px_1px_rgba(0,0,0,0.6)] bg-[#00999e] hover:bg-[#747474]">Get Started</button>
                            <button className="border text-white px-4 py-2 rounded-full shadow-[1px_2px_1px_1px_rgba(0,0,0,0.6)] bg-[#747474] hover:bg-[#00999e]">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="aboutUs" className="bg-[#F8F8F8] py- pt-12">
                <div className="flex items-center justify-center py-10">
                    <div className="grid grid-col-1 md:grid-cols-2 items-center justify-between w-11/12">
                        <div className="flex items-center justify-center hidden md:inline-block">
                            <img className="w-3/4" src={IMAGE?.ITsolution} alt=""/>
                        </div>
                        <div ref={countRef} className="*:py-3 flex flex-col justify-center items-center">
                            <div className="font-semibold text-center text-3xl">
                                About PRIME VERTEX SOLUTION
                            </div>
                            <p className="text-gray-500 text-center">
                                PRIME VETEX SOLUTION has been a leader in logistics since 2010,
                                committed to providing tailored solutions that enhance supply chain efficiency.
                                Our mission is to ensure timely deliverise and customer satisfaction through innovation practices. 
                            </p>
                            <p className="font-bold text-xl">
                                {startCount && <CountUp end={2023}  duration={3}/>} years
                            </p>
                            <p className="text-gray-500 text-center">
                                With a focus on itergrity and innovation, we strive to exceed client expectations in every projec we undertake.
                            </p>
                            <p className="font-bold text-xl">{startCount && <CountUp end={500}  duration={3}/>} clients</p>
                            <p className="text-gray-500 text-center">
                                Our teamm is dedicated to fostering strong relatationships with our clients, ensuring that their 
                                logistics needs are met whit precision and care,
                            </p>
                            <p className="font-bold text-xl">{startCount && <CountUp end={200}  duration={3}/>} projects</p>
                            <p className="text-gray-500 text-center">
                                We have successfully managed over 200 logistics projects, showcasing our expertise and commitment to 
                                excellence.   
                            </p>
                            <p className="font-bold text-xl">{startCount && <CountUp end={14}  duration={3}/>} awards</p>
                            <p className="text-gray-500 text-center">
                                Our dedication has earned us numerous awards in the logistics sector, reflectiong our commitment to quality and service.    
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mb-10 bg-[#E6F7FF] py-10 flex items-center justify-center">
                    <div className=" flex flex-col items-center justify-center w-10/12 2xl:w-6/12">
                        <div className="py-10 flex flex-col lg:flex-row gap-7 w-9/12">
                            <div className="self-center ">
                                <div className="font-semibold text-xl mb-3">
                                    Explore Our Comprehensive Logistics Services
                                </div>
                                <div className="text-gray-500 text-sm">
                                PRIME VERTEX SOLUTION offers a range of logistics and supply chain services designed to optimize your operations. 
                                From expert shipping consultation to transparent service quotation agreements, our solutions are tailored to meet your unique needs. 
                                Discover how our services can enhance your supply chain efficiency and responsiveness.
                                </div>
                            </div>
                        </div>
                        {/* <div className="py-10 flex flex-col-reverse text-right lg:text-left lg:flex-row gap-7 w-9/12">
                            <div className="self-center lg:w-3/4">
                                <div className="font-semibold text-xl mb-3">
                                Customs Clearance
                                </div>
                                <div className="text-gray-500 text-sm">
                                Streamlined customs clearance solutions ensuring regulatory compliance and minimizing delays. Our expertise simplifies international trade processes.                                
                                </div>
                            </div>
                            <div className="flex justify-end lg:w-1/4">
                                <div className="bg-[#8CCBFF] flex w-fit p-5 rounded-full">
                                    <img className="size-12 md:h-fit self-center " src={IMAGE?.police} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="py-10 flex flex-col lg:flex-row gap-7 w-9/12">
                            <div className="bg-[#8CCBFF] w-fit flex justify-center p-5 rounded-full">
                                <img className="size-12 h-fit self-center" src={IMAGE?.check} alt=""/>
                            </div>
                            <div className="self-center ">
                                <div className="font-semibold text-xl mb-3">
                                    Quality Assurance
                                </div>
                                <div className="text-gray-500 text-sm">
                                    Comprehensive quality control maintaining the highest standards for your products. Rigorous inspections ensure consistency and excellence.                                
                                </div>
                            </div>
                        </div> */}
                        <div data-aos="fade-up" className="flex gap-5">
                            <div className="block w-72 flex flex-col justify-between rounded-lg bg-white shadow-secondary-1">
                                <div className=" overflow-hidden bg-cover bg-no-repeat">
                                    <img
                                    className="rounded-t-lg h-52"
                                    src={IMAGE?.ITsolution}
                                    alt="" />
                                </div>
                                <div className="p-6 text-surface dark:text-white">
                                    <h5 className="mb-2 text-xl font-medium leading-tight">Expert Shipping Consultation</h5>
                                    <p className="mb-4 text-base">
                                        Receive tailored advice to aptimize your logistics strategy. Our experts analyze your processes to enhance efficiency and reduce costs.
                                    </p>
                                    <div className="flex justify-center">
                                        <button className="border text-white px-4 py-2 rounded-full shadow-[1px_2px_1px_1px_rgba(0,0,0,0.6)] bg-[#00999e] hover:bg-[#747474]">Learn more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="block w-72 flex flex-col justify-between rounded-lg bg-white shadow-secondary-1">
                                <div className="overflow-hidden bg-cover bg-no-repeat">
                                    <img
                                    className="rounded-t-lg h-52"
                                    src={IMAGE?.ITsolution}
                                    alt="" />
                                </div>
                                <div className="p-6 text-surface">
                                    <h5 className="mb-2 text-xl font-medium leading-tight">Transparent Service Quotation</h5>
                                    <p className="mb-4 text-base">
                                        Gain clarity on logistics costs with our comprehensive service quotation agreements. Avoid unexpested charges and streamline your budgeting process
                                    </p>
                                    <div className="flex justify-center">
                                        <button className="border text-white px-4 py-2 rounded-full shadow-[1px_2px_1px_1px_rgba(0,0,0,0.6)] bg-[#00999e] hover:bg-[#747474]">Learn more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-72 flex flex-col justify-between rounded-lg bg-white shadow-secondary-1">
                                <div className="overflow-hidden bg-cover bg-no-repeat">
                                    <img
                                    className="rounded-t-lg h-52"
                                    src={IMAGE?.ITsolution}
                                    alt="" />
                                </div>
                                <div className="p-6 text-surface">
                                    <h5 className="mb-2 text-xl font-medium leading-tight">Efficient Supply Chain Management</h5>
                                    <p className="mb-4 text-base">
                                        Streamline your operations from procurement to delivery: Our best practices ensure your supply chain is efficient and responsive.
                                    </p>
                                    <div className="flex justify-center items-t">
                                        <button className="border text-white px-4 py-2 rounded-full shadow-[1px_2px_1px_1px_rgba(0,0,0,0.6)] bg-[#00999e] hover:bg-[#747474]">Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center py-10">
                    <div className="grid grid-col-1 md:grid-cols-2 items-center justify-between w-11/12">
                        <div className="flex items-center justify-center hidden md:inline-block">
                            <img className="w-3/4" src={IMAGE?.ITsolution} alt=""/>
                        </div>
                        <div data-aos="fade-up" className="*:py-3 flex flex-col justify-center items-center">
                            <div className="font-semibold text-center text-3xl">
                                Expert Shipping Consultation Services
                            </div>
                            <p className="text-gray-500 text-center">
                                Our expert consultants provide tailored advice to optimize your logistics strategy. 
                                We analyze your current processes to identify cost-saving opportunities and enhance the efficiency 
                                of your shipping operations.
                            </p>
                            <div className="*:mb-2">
                                <div className="flex gap-3">
                                    <img className="self-center" src={IMAGE?.SmallArrow} alt=""/>
                                    <span>Receive tailord advice that fits your specific logistics needs.</span>
                                </div>
                                <div className="flex gap-3">
                                    <img className="self-center" src={IMAGE?.SmallArrow} alt=""/>
                                    <span>Identify cost saving opportunities in your supply chain.</span>
                                </div>
                                <div className="flex gap-3">
                                    <img className="self-center" src={IMAGE?.SmallArrow} alt=""/>
                                    <span>Enhance the efficiency of your shipping processes.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 px-8 py-10">
                    <div className="text-center">
                        <div className="text-3xl font-extrabold">Client Feedback</div>
                        <p><span className="font-bold">Hear from or satisfied clients. </span>Their experiences highlight our 
                            commitment to excellence in logistics.
                        </p>
                    </div>
<article className="border border-2 border-gray-600 p-5">
    <div className="flex items-center mb-4">
        <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
        <div className="font-medium dark:text-white">
            <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
    </div>
    <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
</article>
<article className="border border-2 border-gray-600 p-5">
    <div className="flex items-center mb-4">
        <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
        <div className="font-medium dark:text-white">
            <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
    </div>
    <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
</article>
<article className="border border-2 border-gray-600 p-5">
    <div className="flex items-center mb-4">
        <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
        <div className="font-medium dark:text-white">
            <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
    </div>
    <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
</article>
<article className="border border-2 border-gray-600 p-5">
    <div className="flex items-center mb-4">
        <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
        <div className="font-medium dark:text-white">
            <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
    </div>
    <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
</article>
<article className="border border-2 border-gray-600 p-5">
    <div className="flex items-center mb-4">
        <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
        <div className="font-medium dark:text-white">
            <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
    </div>
    <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
</article>
<article className="border border-2 border-gray-600 p-5">
    <div className="flex items-center mb-4">
        <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
        <div className="font-medium dark:text-white">
            <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
    </div>
    <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
</article>
<article className="border border-2 border-gray-600 p-5">
    <div className="flex items-center mb-4">
        <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
        <div className="font-medium dark:text-white">
            <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
    </div>
    <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
</article>
<article className="border border-2 border-gray-600 p-5">
    <div className="flex items-center mb-4">
        <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
        <div className="font-medium dark:text-white">
            <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
    </div>
    <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
</article>
<article className="border border-2 border-gray-600 p-5">
    <div className="flex items-center mb-4">
        <img className="w-10 h-10 me-4 rounded-full" src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt=""/>
        <div className="font-medium dark:text-white">
            <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">CEO of Tech innovations</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
    </div>
    <footer className="mb-5 mt-2 text-sm text-gray-500 dark:text-gray-400"><p>We trust PRIME VERTEX SOLUTION for all our logistics needs their expertise is unmatched.</p></footer>
</article>

                </div>
                <div className="px-5 flex justify-between">
                    <div data-aos="fade-up" className="w-1/2 self-center">
                        <div className="text-5xl font-semibold text-center">
                        Request a Service Quote
                        </div>
                        <div className="py-10">
                            <div className="">
                                Get a detailed quotation for your logistics needs. 
                                Our Service Quotation Agreement ensures transparency and helps you budget effectively.
                                Streamine your logistics operations whit our expert guidance.
                            </div>
                            <button className="border text-white px-4 py-2 rounded-full shadow-[1px_2px_1px_1px_rgba(0,0,0,0.6)] bg-[#00999e] hover:bg-[#747474]">Learn More</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center hidden md:inline-block w-1/2">
                        <img className="" src={IMAGE?.ITsolution} alt=""/>
                    </div>
                </div>
                <div id="contact" className="bg-gray-300 pt-10">
                    <div className="">
                        <div className={``}>
                            <div className="md:ml-20">
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