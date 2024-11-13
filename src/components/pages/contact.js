import IMAGE from "../images/image"
import ContactUs from "../properties/contactUs"

const Contact = () => {

    return (
      <>
        <div className="px-5">
          <div className="flex flex-col items-center justify-center pt-20">
            <div className="w-3/6">              
              <p className="text-3xl text-center font-extrabold py-3">Get in Touch</p>
              <p className="text-center text-gray-500 pb-3">Reach out to PRIME VERTEX SOLUTION for expet logistics and supply chain consultation.
                We are here to assist with all your shipping needs.
              </p>
            </div>
          </div>
          <div className="bg-blue-">
            <ContactUs/>
          </div>
        </div>
      </>
    ) 
  }  
  export default Contact