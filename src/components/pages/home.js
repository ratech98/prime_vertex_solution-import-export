import IMAGE from "../images/image"
import StarRating from "../properties/starRating"
import Triangle from "../properties/triangle"
import ContactUs from "../properties/contactUs"
import Aos from "aos"
import 'aos/dist/aos.css'
// import { BasisCurve } from "react-svg-curve"
import { Button, Carousel } from "@material-tailwind/react"
// import '../../assets/PNGimages/imagye 16.png'



Aos.init()


const homePage = () => {


    const myStyle ={
        background:`url(/computer.svg)`,
        backgroundPosition:'right',
        backgroundSize: 'fit', 
        // height: '500px',
        // Object: 'cover',
        backgroundRepeat:'no-repeat',
    }

    console.log('submittted');
    
    return(
        <div id="Home" className="">
            <div className="bg-red h-screen text-white flex items-center justify-center" style={{backgroundImage:`url(/background.png)`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                <div className="">
                    <div  className="*:mb-5 px-3">
                        <div className=" font-bold text-5xl text-center">
                            Your Gateway to Global Trade
                        </div>
                        <div className="text-center font-medium text-xl">
                            Connecting you with the world’s best suppliers and buyers
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-orange-700 px-5 py-2 rounded-md">Get Started</button>
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
                        <div className="*:py-3 flex flex-col justify-center items-center">
                            <div className="font-semibold text-center text-3xl">
                                About Us
                            </div>
                            <p className="text-gray-500 text-center">
                                With decades of experience in global trade, Prime Vertex Solutions provides unmatched expertise in logistics, customs clearance, and quality control.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mb-10 bg-[#E6F7FF] py-10 flex items-center justify-center">
                    <div className=" flex flex-col items-center justify-center w-10/12 2xl:w-6/12">
                        <div className="py-10 flex flex-col lg:flex-row gap-7 w-9/12">
                            <div className="bg-[#8CCBFF] w-fit flex justify-center p-5 rounded-full">
                                <img className="size-12 h-fit self-center" src={IMAGE?.global} alt=""/>
                            </div>
                            <div className="self-center ">
                                <div className="font-semibold text-xl mb-3">
                                    Global Logistics
                                </div>
                                <div className="text-gray-500 text-sm">
                                    Efficient global logistics ensuring smooth transportation and timely delivery of goods worldwide. We optimize routes and manage compliance at every step.
                                </div>
                            </div>
                        </div>
                        <div className="py-10 flex flex-col-reverse text-right lg:text-left lg:flex-row gap-7 w-9/12">
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
                        </div>
                    </div>
                </div>
                <div className="px-5">
                    <div className="text-5xl font-semibold text-center">
                        Why Choose Us
                    </div>
                    <div className="py-10">
                        <div className="flex flex-col md:flex-row justify-center items-center md:items-start  md:gap-10">
                            <div className="block max-w-[15rem] py-5 h-auto text-surface bg-transparent flex flex-col justify-between">
                                <div className="flex items-center justify-center py-5">
                                    <div className="bg-[#8CCBFF] flex justify-center p-5 rounded-full">
                                        <img className="size-12 self-center" src={IMAGE?.business} alt=""/>
                                    </div>
                                </div>
                                <div className="px-6 pb-5">
                                    <div className="">
                                        <p className="font-semibold text-center text-xl mb-5">Professional Experts</p>
                                        <p className="text-sm text-[#979797] text-center">
                                            Our team of seasoned professionals brings unmatched expertise and dedication to every project, ensuring exceptional results.                                        
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div  className="block max-w-[15rem] py-5 h-full text-surface flex flex-col justify-between">
                                <div className="flex items-center justify-center py-5">
                                <div className="bg-[#8CCBFF] flex justify-center p-5 rounded-full">
                                        <img className="size-12 self-center" src={IMAGE?.cloud} alt=""/>
                                    </div>
                                </div>
                                <div className="px-6 pb-5">
                                    <div className="">
                                        <p className="font-semibold text-center text-xl mb-5">Advanced Infrastructure Technology</p>
                                        <p className="text-sm text-[#979797] text-center">
                                            Our state-of-the-art facilities and cutting-edge technology ensure efficiency, reliability, and the highest quality standards in every service.                                        
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div  className="block max-w-[15rem] py-5 h-full text-surface flex flex-col justify-between">
                                <div className="flex items-center justify-center py-5">
                                <div className="bg-[#8CCBFF] flex justify-center p-5 rounded-full">
                                        <img className="size-12 self-center" src={IMAGE?.quality} alt=""/>
                                    </div>
                                </div>
                                <div className="px-6 pb-5">
                                    <div className="">
                                        <p className="font-semibold text-center text-xl mb-5">Robust Quality Control Systems</p>
                                        <p className="text-sm text-[#979797] text-center">
                                            Meet the highest standards with our comprehensive quality control systems, delivering unmatched reliability and excellence through rigorous checks and balances.                                        
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="contact" className="bg-[#0A6D9A] pt-10">
                    <div className="">
                        <div className={` py-10 px-5 bg-red-400`} style={myStyle}>
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