import IMAGE from "../images/image"
import '../../index.css'
import { Link } from "react-router-dom"

const OurServices = () => {


    return(
        <>
            <div className="bg-gradient-to-br from-[#0066CC] via-[#2677C9] via-[#004890] to-[#194775] text-white">
                <div className="flex flex-col items-center py-5 pt-16">
                    <div className="font-semibold text-center text-5xl pb-3">
                        Our services
                    </div>
                    <div className="w-[218px] h-2 bg-[#fff] rounded full"></div>
                </div>


                <div className="">

                    <div className="flex hidden xl:block flex-col items-center justify-center gap-8 px-8 py-16">
                        <div className="flex gap-2">

                            <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="flip-card w-10/12 p-5 h-96 bg-red-200">
                                <div className="flip-card-inner flex items-center justify-center">
                                    <div className="flip-card-front  flex flex-col items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center justify-center bg-white rounded-full p-3">
                                        <img className="w-16" src={IMAGE?.freight_frow} alt=""/>
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
                                    <div className="flip-card-back flex items-center justify-center ">
                                        <Link to={'/services'} className="flex border-2 cursor-pointer rounded-2xl w-3/4 h-3/4 items-center justify-center hover:bg hover:ease-in duration-700">
                                            <button className="flex items-center justify-center rounded-full">
                                                <div>
                                                    <p className="font-bold text-lg">For more details</p>
                                                    <p>Click here</p>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="h-3/4 w-fit border-r-[1px] opacity-50 border-dotted border-3 border-white"></div>
                            </div>
                                {/* <div style={{border:'2px dotted #747474', borderStyle:'dotted', border:'50,50', width:'100%',height:'100px'}}>kasdlfk</div> */}


                            <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="flip-card w-10/12 p-5 h-96 bg-red-200">
                                <div className="flip-card-inner flex items-center justify-center">
                                    <div className="flip-card-front  flex flex-col items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center justify-center bg-white rounded-full p-3">
                                        <img className="w-16" src={IMAGE?.warehouse} alt=""/>
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
                                    <div className="flip-card-back flex items-center justify-center ">
                                        <Link to={'/services'} className="flex border-2 cursor-pointer rounded-2xl w-3/4 h-3/4 items-center justify-center hover:bg hover:ease-in duration-700">
                                            <button className="flex items-center justify-center rounded-full">
                                                <div>
                                                    <p className="font-bold text-lg">For more details</p>
                                                    <p>Click here</p>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            <div className="flex items-center">
                                <div className="h-3/4 w-fit border-r-[1px] opacity-50 border-dotted border-3 border-white"></div>
                            </div>

                            <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="flip-card w-10/12 p-5 h-96 bg-red-200">
                                <div className="flip-card-inner flex items-center justify-center">
                                    <div className="flip-card-front  flex flex-col items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center justify-center bg-white rounded-full p-3">
                                        <img className="w-16" src={IMAGE?.supply_chain} alt=""/>
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
                                    <div className="flip-card-back flex items-center justify-center ">
                                        <Link to={'/services'} className="flex border-2 cursor-pointer rounded-2xl w-3/4 h-3/4 items-center justify-center hover:bg hover:ease-in duration-700">
                                            <button className="flex items-center justify-center rounded-full">
                                                <div>
                                                    <p className="font-bold text-lg">For more details</p>
                                                    <p>Click here</p>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex">

                            <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="flip-card w-10/12 p-5 h-96 bg-red-200">
                                <div className="flip-card-inner flex items-center justify-center">
                                    <div className="flip-card-front  flex flex-col items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center justify-center bg-white rounded-full p-3">
                                        <img className="w-16" src={IMAGE?.custom_clearance} alt=""/>
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
                                    <div className="flip-card-back flex items-center justify-center ">
                                        <Link to={'/services'} className="flex border-2 cursor-pointer rounded-2xl w-3/4 h-3/4 items-center justify-center hover:bg hover:ease-in duration-700">
                                            <button className="flex items-center justify-center rounded-full">
                                                <div>
                                                    <p className="font-bold text-lg">For more details</p>
                                                    <p>Click here</p>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="h-3/4 w-fit border-r-[1px] opacity-50 border-dotted border-3 border-white"></div>
                            </div>

                            <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="flip-card w-10/12 p-5 h-96 bg-red-200">
                                <div className="flip-card-inner flex items-center justify-center">
                                    <div className="flip-card-front  flex flex-col items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center justify-center bg-white rounded-full p-3">
                                                <img className="w-16" src={IMAGE?.warehouseing} alt=""/>
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
                                    <div className="flip-card-back flex items-center justify-center ">
                                        <Link to={'/services'} className="flex border-2 cursor-pointer rounded-2xl w-3/4 h-3/4 items-center justify-center hover:bg hover:ease-in duration-700">
                                            <button className="flex items-center justify-center rounded-full">
                                                <div>
                                                    <p className="font-bold text-lg">For more details</p>
                                                    <p>Click here</p>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            <div className="flex items-center">
                                <div className="h-3/4 w-fit border-r-[1px] opacity-50 border-dotted border-3 border-white"></div>
                            </div>
                            <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="w-10/12 p-5 flex items-center justify-center">
                                <Link to={'/services'} className="flex border-2 cursor-pointer rounded-2xl w-3/4 h-full items-center justify-center hover:bg hover:ease-in duration-700">
                                    <button className="flex items-center justify-center rounded-full">
                                        <div>
                                            <p className="font-bold text-lg">For more details</p>
                                            <p>Click here</p>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="flex hidden md:block xl:hidden flex-col items-center justify-center gap-8 px-8 py-16">
                        <div className="flex gap-2">

                            <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="flip-card w-10/12 p-5 h-96 bg-red-200">
                                <div className="flip-card-inner flex items-center justify-center">
                                    <div className="flip-card-front  flex flex-col items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center justify-center bg-white rounded-full p-3">
                                        <img className="w-16" src={IMAGE?.freight_frow} alt=""/>
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
                                    <div className="flip-card-back flex items-center justify-center ">
                                        <Link to={'/services'} className="flex border-2 cursor-pointer rounded-2xl w-3/4 h-3/4 items-center justify-center hover:bg hover:ease-in duration-700">
                                            <button className="flex items-center justify-center rounded-full">
                                                <div>
                                                    <p className="font-bold text-lg">For more details</p>
                                                    <p>Click here</p>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            <div className="flex items-center">
                                <div className="h-3/4 w-fit border-r-[1px] opacity-50 border-dotted border-3 border-white"></div>
                            </div>

                            <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="flip-card w-10/12 p-5 h-96 bg-red-200">
                                <div className="flip-card-inner flex items-center justify-center">
                                    <div className="flip-card-front  flex flex-col items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center justify-center bg-white rounded-full p-3">
                                        <img className="w-16" src={IMAGE?.warehouse} alt=""/>
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
                                    <div className="flip-card-back flex items-center justify-center ">
                                        <Link to={'/services'} className="flex border-2 cursor-pointer rounded-2xl w-3/4 h-3/4 items-center justify-center hover:bg hover:ease-in duration-700">
                                            <button className="flex items-center justify-center rounded-full">
                                                <div>
                                                    <p className="font-bold text-lg">For more details</p>
                                                    <p>Click here</p>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex gap-2">

                            <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="flip-card w-10/12 p-5 h-96 bg-red-200">
                                <div className="flip-card-inner flex items-center justify-center">
                                    <div className="flip-card-front  flex flex-col items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center justify-center bg-white rounded-full p-3">
                                        <img className="w-16" src={IMAGE?.supply_chain} alt=""/>
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
                                    <div className="flip-card-back flex items-center justify-center ">
                                        <Link to={'/services'} className="flex border-2 cursor-pointer rounded-2xl w-3/4 h-3/4 items-center justify-center hover:bg hover:ease-in duration-700">
                                            <button className="flex items-center justify-center rounded-full">
                                                <div>
                                                    <p className="font-bold text-lg">For more details</p>
                                                    <p>Click here</p>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="h-3/4 w-fit border-r-[1px] opacity-50 border-dotted border-3 border-white"></div>
                            </div>

                            <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="flip-card w-10/12 p-5 h-96 bg-red-200">
                                <div className="flip-card-inner flex items-center justify-center">
                                    <div className="flip-card-front  flex flex-col items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center justify-center bg-white rounded-full p-3">
                                        <img className="w-16" src={IMAGE?.custom_clearance} alt=""/>
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
                                    <div className="flip-card-back flex items-center justify-center ">
                                        <Link to={'/services'} className="flex border-2 cursor-pointer rounded-2xl w-3/4 h-3/4 items-center justify-center hover:bg hover:ease-in duration-700">
                                            <button className="flex items-center justify-center rounded-full">
                                                <div>
                                                    <p className="font-bold text-lg">For more details</p>
                                                    <p>Click here</p>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex">
                            
                            <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="flip-card w-10/12 p-5 h-96 bg-red-200">
                                <div className="flip-card-inner flex items-center justify-center">
                                    <div className="flip-card-front  flex flex-col items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center justify-center bg-white rounded-full p-3">
                                                <img className="w-16" src={IMAGE?.warehouseing} alt=""/>
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
                                    <div className="flip-card-back flex items-center justify-center ">
                                        <Link to={'/services'} className="flex border-2 cursor-pointer rounded-2xl w-3/4 h-3/4 items-center justify-center hover:bg hover:ease-in duration-700">
                                            <button className="flex items-center justify-center rounded-full">
                                                <div>
                                                    <p className="font-bold text-lg">For more details</p>
                                                    <p>Click here</p>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="h-3/4 w-fit border-r-[1px] opacity-50 border-dotted border-3 border-white"></div>
                            </div>
                            <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="w-10/12 p-5 flex items-center justify-center">
                                <Link to={'/services'} className="flex border-2 cursor-pointer rounded-2xl w-3/4 h-full items-center justify-center">
                                    <button className="flex items-center justify-center rounded-full">
                                        <div>
                                            <p className="font-bold text-lg">For more details</p>
                                            <p>Click here</p>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col md:hidden items-center justify-center gap-8 px-8 py-16">
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="w-10/12">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center justify-center bg-white rounded-full p-3">
                                    <img className="w-16" src={IMAGE?.freight_frow} alt=""/>
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
                            <div className="flex items-center justify-center">
                                <div className="w-3/4 border-b-[2px] border-dotted border-white pt-10"></div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="w-10/12">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center justify-center bg-white rounded-full p-3">
                                    <img className="w-16" src={IMAGE?.warehouse} alt=""/>
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
                            <div className="flex items-center justify-center">
                                <div className="w-3/4 border-b-[2px] border-dotted border-white pt-10"></div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="w-10/12">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center justify-center bg-white rounded-full p-3">
                                    <img className="w-16" src={IMAGE?.supply_chain} alt=""/>
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
                            <div className="flex items-center justify-center">
                                <div className="w-3/4 border-b-[2px] border-dotted border-white pt-10"></div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="w-10/12">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center justify-center bg-white rounded-full p-3">
                                    <img className="w-16" src={IMAGE?.custom_clearance} alt=""/>
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
                            <div className="flex items-center justify-center">
                                <div className="w-3/4 border-b-[2px] border-dotted border-white pt-10"></div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="w-10/12 ">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center justify-center bg-white rounded-full p-3">
                                    <img className="w-16" src={IMAGE?.warehouseing} alt=""/>
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
                            <div className="flex items-center justify-center">
                                <div className="w-3/4 border-b-[2px] border-dotted border-white pt-10"></div>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50" className="w-10/12 flex items-center justify-center">
                            <Link to={'/services'} className="flex border-2 cursor-pointer rounded-2xl w-3/4 h-full items-center justify-center">
                                <button className="flex items-center justify-center rounded-full p-4">
                                    <div>
                                        <p className="font-bold text-lg ">For more details</p>
                                        <p className="pt-3">Click here</p>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurServices