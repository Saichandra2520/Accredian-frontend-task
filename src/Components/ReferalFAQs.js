import React from 'react';
import FaqSidebar from "./FaqSidebar";

const ReferalFAQs = () => {
  return (
    <section className="faqs">
          <div className="faqs-heading-text">
            <h2>Frequently Asked <span style={{ color:'#1A73E8', fontWeight:'500'}} >Questions</span></h2>
          </div>
          <div className="faq-wrapper">
            <div className="faq-left">
              <FaqSidebar />
            </div>
            <div className="faq-right">
              <h6>Do I need to have prior Product Management and Project Management experience to enroll in the program?</h6>              
              <p>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
              suitable for individuals from any field of work.</p>
              <h6>What is the minimum system configuration required?</h6>
            </div>
          </div>
          
      </section>
  )
}

export default ReferalFAQs