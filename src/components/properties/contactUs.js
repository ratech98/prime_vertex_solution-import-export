// import { Form } from "react-router-dom"
import { Checkbox } from "@material-tailwind/react";
import IMAGE from "../images/image"
// import { EmailJSResponseStatus } from "emailjs-com";
import emailjs from '@emailjs/browser';


const SERVICE_ID = "";
const TEMPLATE_ID = "";
const PUBLIC_KEY = "";


const ContactUs = () => {
    console.log('submited');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('target value',e.target.value);
        
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((res)=>{
            console.log('response value',res);
            alert('Message Send Successfully')
        })
        .catch((err)=>{
            console.log('error value',err);
            
            alert('Something went wrong!')
        })
        e.target.reset()
    }
    return(
        <>
            <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 flex flex-col items-center justify-center">
                    <div className="">
                        <div className="text-[#000] font-semibold text-3xl mb-1">Get in Touch</div>
                    </div>
                    <div className="text-gray-600 lg:w-4/6 pb-5 text-md">
                        We are here to assist you! Reach out for any inquiries regarding our logistics services.
                    </div>
                    <div className="text-sm text-gray-600 flex flex-col gap-3">
                        <div  data-aos="fade-right" className="flex gap-3">
                            <img className="" src={IMAGE?.SmallArrow} alt=""/>
                            <span className="self-center">info@primevertexsolution.com</span>
                        </div>
                        <div data-aos="fade-right" className="flex gap-3">
                            <img className="" src={IMAGE?.SmallArrow} alt=""/>
                            <span className="self-center">(1212) 829382 98239</span>
                        </div>
                        <div data-aos="fade-right" className="flex gap-3">
                            <img className="" src={IMAGE?.SmallArrow} alt=""/>
                            <span className="self-center">123 Logistics Avs, Supply City, SC 283983</span>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className=" ">
                        <form className="py-5" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 text-orange-400 md:grid-cols-1 gap-5 mb-5">
                                <div className="flex flex-col">
                                    <label>Name</label>
                                    <input className="px-5 py-2 rounded-full w-full focus:outline-none bg-transparent border border-black placeholder:text-gray-500 " id="name" name="name" type="type" placeholder="Your Name" autoFocu required/>
                                </div>
                                <div className="flex flex-col">
                                    <lable>Email</lable>
                                    <input className="px-5 py-2 rounded-full w-full focus:outline-none bg-transparent border border-black placeholder:text-gray-500" id="email" name="email" type="email" placeholder="Mail Address" required/>
                                </div>
                            </div>
                            <div className="flex flex-col text-orange-400 mb-5">
                                <label>Message</label>
                                <textarea rows={3} name="message" id="message" className="px-5 bg-transparent border border border-black placeholder:text-gray-500 py-2 resize-none rounded-lg w-full focus:outline-none" type="type" placeholder="Your Message"/>
                            </div>
                            <div className="flex gap-3 py-2 text-orange-400">
                                <Checkbox/>
                                <p className="self-center">I accept the Terms</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="text-white rounded-full  font-semibold flex px-4 py-2 rounded-full shadow-[1px_2px_1px_1px_rgba(0,0,0,0.4)] bg-[#00999e] hover:bg-[#747474]" type="submit" placeholder="Your Message">
                                    Submit
                                    <div className="self-center">
                                        <img className="w-7 ml-3" src={IMAGE?.RightLongArrow} alt=""/>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs 