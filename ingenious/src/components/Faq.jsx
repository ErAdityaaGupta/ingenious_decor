// import React from "react";

// const faqs = [
//   {
//     question: "What services do you offer?",
//     answer: "We offer full-service interior design...",
//   },
//   {
//     question: "How can I schedule a consultation?",
//     answer: "You can schedule a consultation by...",
//   },
//   // More questions here
// ];

// const FAQ = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">
//         Frequently Asked Questions
//       </h2>
//       {faqs.map((faq, index) => (
//         <div key={index} className="mb-2">
//           <h3 className="font-bold text-lg">{faq.question}</h3>
//           <p className="text-gray-600">{faq.answer}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FAQ;


import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the design philosophy of INDENIOUS DECOR AESTHETIC?",
      answer:
        "At INGENIOUS DECOR AESTHETIC, we believe that interior design should be a reflection of the client's personality and lifestyle. Our design philosophy is to create spaces that are both functional and aesthetically pleasing.",
    },
    {
      question:
        "What type of spaces does INGENIOUS DECOR AESTHETIC specialize in designing & delivering ?",
      answer:
        "INGENIOUS DECOR AESTHETIC specializes in designing residential spaces such as Villas, homes, apartments, and condos. We also work with commercial clients to design office spaces, restaurants, and retail stores.",
    },
    {
      question: "How long does the design & delivery process take ?",
      answer:
        "The design & delivery process varies depending on the scope of the project and the services required. Typically, the design process takes between 4-6 weeks from initial consultation to final approval of client. Delivery depends on size of unit. Typically a villa (3500+ square feet) takes 5 - 7 months.",
    },
    // {
    //   question: "What is the process to get started?",
    //   answer:
    //     "You can get started by booking a consultation with us. We’ll discuss your vision, budget, and timeline during the initial meeting.",
    // },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="w-full md:w-3/4 mx-auto text-left">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-lg font-semibold bg-white p-4 rounded-lg shadow-md focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-gray-50 rounded-b-lg px-60 leading-snug">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;