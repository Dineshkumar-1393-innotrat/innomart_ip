// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const TermsAndConditions = () => {
//   const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
//   const [isAccepted, setIsAccepted] = useState(false);
//   const termsRef = useRef(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Get the redirect path from location state or default to signup
//   const redirectPath = location.state?.from || '/signup';

//   // Check if user has scrolled to the bottom
//   const handleScroll = () => {
//     if (termsRef.current) {
//       const { scrollTop, scrollHeight, clientHeight } = termsRef.current;
//       const scrolledToBottom = scrollTop + clientHeight >= scrollHeight - 10;
//       setIsScrolledToBottom(scrolledToBottom);
//     }
//   };

//   useEffect(() => {
//     const termsElement = termsRef.current;
//     if (termsElement) {
//       termsElement.addEventListener('scroll', handleScroll);
//       handleScroll();
//     }
//     return () => {
//       if (termsElement) {
//         termsElement.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);

//   const handleAcceptChange = (e) => {
//     setIsAccepted(e.target.checked);
//   };

//   const handleAccept = () => {
//     if (isAccepted) {
//       // Store acceptance in localStorage
//       localStorage.setItem('termsAccepted', 'true');
//       localStorage.setItem('termsAcceptedDate', new Date().toISOString());
      
//       // Navigate to the redirect path with state
//       navigate(redirectPath, { state: { termsAccepted: true } });
//     }
//   };

//   const handleDecline = () => {
//     // Navigate back or to home
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
//       <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//         {/* Header */}
//         <div className="mb-6">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
//           <p className="text-sm text-gray-600">
//             Innotrat Labs Private Limited
//           </p>
//           <p className="text-sm text-gray-600 mt-1">
//             Last Updated: November 13, 2025
//           </p>
//           <p className="text-sm text-gray-600 mt-2">
//             Please scroll through and read all terms carefully before accepting.
//           </p>
//         </div>

//         {/* Scrollable Terms Content */}
//         <div
//           ref={termsRef}
//           className="h-96 overflow-y-scroll border border-gray-300 rounded-lg p-6 mb-6 bg-gray-50 scroll-smooth"
//         >
//           <div className="prose max-w-none text-gray-700">
//             <p className="mb-4">
//               These Terms & Conditions ("Terms") of (a) use of our website{' '}
//               <a href="https://www.innotrat.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
//                 www.innotrat.com
//               </a>{' '}
//               ("Website"), or any products or services in connection with the Website/products ("Services") or (b) any modes of registrations or usage of products, including through SD cards, tablets or other storage/transmitting device are between Innotrat Labs Private Limited ("Company/We/Us/Our") and its users ("User/You/Your").
//             </p>

//             <p className="mb-4">
//               These Terms constitute an electronic record in accordance with the provisions of the Information Technology Act, 2000 and the Information Technology (Intermediaries guidelines) Rules, 2011 thereunder, as amended from time to time. Please read the Terms and the privacy policy of the Company ("Privacy Policy") with respect to registration with us, the use of the Application, Website, Services, and products carefully before using the Website, Services or products.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. Proprietary Information</h2>
//             <p className="mb-4">
//               Except as mentioned below, all information, content, material, trademarks, services marks, trade names, and trade secrets including but not limited to the software, text, images, graphics, video, script and audio, contained in the Website, Services and products are proprietary property of the Company ("Proprietary Information"). No Proprietary Information may be copied, downloaded, reproduced, modified, republished, uploaded, posted, transmitted or distributed in any way without obtaining prior written permission from the Company.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. Personal and Non-Commercial Use</h2>
//             <p className="mb-4">
//               Your use of our products, Website and Services is solely for Your personal and non-commercial use. Any use of the Website, Services or products or their contents other than for personal purposes is prohibited.
//             </p>

//             <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Restrictions:</h3>
//             <ul className="list-disc pl-6 mb-4 space-y-2">
//               <li>You may not decompile, reverse engineer, or disassemble the contents of our Website and/or Services/products or modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or software obtained from our Website and/or Services/products.</li>
//               <li>You will not use our website and/or any of our product/s or Service/s for commercial purposes of any kind, or advertise or sell any products, Services or domain names.</li>
//               <li>You shall not use the Website/our products and Services in any way that is unlawful or harms the Company or any other person or entity.</li>
//             </ul>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Prohibited Activities</h2>
//             <p className="mb-4">No User shall be permitted to perform any of the following prohibited activities while availing our Services:</p>
//             <ul className="list-disc pl-6 mb-4 space-y-2">
//               <li>Making available any content that is misleading, unlawful, harmful, threatening, abusive, tortious, defamatory, libelous, vulgar, obscene, child-pornographic, lewd, lascivious, profane, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.</li>
//               <li>Stalking, intimidating and/or harassing another and/or inciting other to commit violence.</li>
//               <li>Transmitting material that encourages anyone to commit a criminal offence, that results in civil liability or otherwise breaches any relevant laws, regulations, or code of practice.</li>
//               <li>Interfering with any other person's use or enjoyment of the Website/Services.</li>
//               <li>Making, transmitting or storing electronic copies of materials protected by copyright without the permission of the owner.</li>
//               <li>Impersonating any person or entity, or falsely stating or otherwise misrepresenting Your affiliation with a person or entity.</li>
//               <li>Transmitting any material that contains viruses, trojan horses, worms, spyware, time bombs, cancelbots, or other computer programming routines that may harm the services.</li>
//               <li>Intentionally or unintentionally interfering with or disrupting the services or violating any applicable laws related to the access to or use of the Website/Services/products.</li>
//             </ul>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">4. Content License</h2>
//             <p className="mb-4">
//               By submitting content on or through the Services (your "Material"), you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display and distribute such Material in any and all media or distribution methods.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">5. Disclaimer of Warranty</h2>
//             <p className="mb-4">
//               In the preparation of the Website/Services/products and contents therein, every effort has been made to offer the most current, correct, and clearly expressed information possible. Nevertheless, inadvertent errors may occur. Neither the Company nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on Website/Services/products for any particular purpose.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">6. Educational Content</h2>
//             <p className="mb-4">
//               Our Website provides Users with access to compiled educational information and related sources. Such information is provided on an As Is basis and We assume no liability for the accuracy or completeness or use or non obsolescence of such information. From time to time the Website may also include links to other websites. We have no responsibility for the content of the linked website(s).
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">7. No Guarantee of Results</h2>
//             <p className="mb-4">
//               The contents of the Services/products are developed on the concepts covered in the structured curriculum syllabus prescribed for students of various courses. Subscription to the usage of our Services/Website/products does not in any manner guarantee admission to any educational institutions or passing of any exams or achievement of any specified percentage of marks in any examinations.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">8. User Contributions</h2>
//             <p className="mb-4">
//               Some parts of the Services are interactive, and we encourage contributions by Users, which may or may not be subject to editorial control prior to being posted. The Company accepts no responsibility or liability for any material communicated by third parties in this way.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">9. Communication and Contact</h2>
//             <p className="mb-4">
//               The Company (including but not limited to its subsidiaries/affiliates) may, based on any form of access to the Services or Website or registrations through any source whatsoever, contact the User through sms, email and call. By registering yourself, you agree to make your contact details available to Our employees, associates, subsidiaries, affiliates and partners.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">10. Product Demonstration</h2>
//             <p className="mb-4">
//               While the Company may, based on the User's confirmation, facilitate the demonstration of its products at the location sought by the User, the User acknowledges that he/she has not been induced by any statements or representations of any person with respect to the quality or conditions of the products.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">11. Monitoring and Mentoring</h2>
//             <p className="mb-4">
//               Upon registration through any means whatsoever, the Company may contact You through the registered mobile number or e-mail to enable effective provision of Services. The Company shall have the right to monitor the download and usage of the Services/products.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">12. Personnel Quality</h2>
//             <p className="mb-4">
//               While the Company has made efforts to train the personnel engaged in the sales and services relating to its products to enable quality control, it makes no warranties or representations whatsoever regarding the quality and competence of such personnel.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">13. Service Access and Modification</h2>
//             <p className="mb-4">
//               Access to certain elements of the Services including doubt clearance, mentoring services etc may be subject to separate terms, conditions and fair usage policy. We reserve the right to extend, cancel, discontinue, prematurely withdraw or modify any of Our Services at Our discretion.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">14. Device Compatibility</h2>
//             <p className="mb-4">
//               The Company's products and / or Services, including the content, are compatible only with certain devices/tablets/instruments/hardware. The Company shall not be obligated to provide workable products and / or services for any instruments that are not recognized by the Company.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">15. Limitation of Liability</h2>
//             <p className="mb-4">
//               The Company shall have no responsibility for any loss or damage caused to tablet or any other hardware and / or software and/or instrument, including loss of data or effect on the processing speed, resulting from Your use of our products and Services.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">16. Referral Program</h2>
//             <p className="mb-4">
//               In order to encourage Customer Retention and Loyalty, Innotrat Labs Pvt. Ltd. encourages its Customers, Fintech Partners and other stakeholders to refer customers. Company at its option can pay referral bonus subject to applicable laws.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">17. Shipping and Delivery</h2>
//             <p className="mb-4">
//               You have to specify the address to which the shipment has to be made at the time of purchase. All product(s) shall be delivered directly to the address as specified at the point of ordering. Any inconsistencies in name or address will result in non-delivery of the product(s).
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">18. Hardware Manufacturer Warranty</h2>
//             <p className="mb-4">
//               You acknowledge that the Company is not the manufacturer of the instrument/medium/hardware and hence, any defect relating to the same shall be reported to the manufacturer whose details shall be specified on the packaging.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">19. Account Registration</h2>
//             <p className="mb-4">
//               In order to access the Services and to avail the use of the products, You shall be required to register yourself with the Services/products, and maintain an account. You will be required to furnish certain information and details.
//             </p>

//             <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Account Responsibilities:</h3>
//             <ul className="list-disc pl-6 mb-4 space-y-2">
//               <li>It is Your sole responsibility to ensure that the account information provided by You is accurate, complete and latest.</li>
//               <li>You shall be responsible for maintaining the confidentiality of the account information and for all activities that occur under Your account.</li>
//               <li>You acknowledge that Your ability to use Your account is dependent upon external factors such as internet service providers and internet network availability.</li>
//             </ul>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">20. Eligibility</h2>
//             <p className="mb-4">
//               Persons who are "competent/capable" of contracting within the meaning of the Indian Contract Act, 1872 shall be eligible to register for all Our products or Services. Persons who are minors, un-discharged insolvents etc. are not eligible to register for Our products or Services.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">21. Indemnification</h2>
//             <p className="mb-4">
//               You agree to defend, indemnify and hold harmless the Company, its officers, directors, employees and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from Your use of and access of the Website/Services.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">22. Limitation of Damages</h2>
//             <p className="mb-4">
//               In no event shall the Company, its officers, directors, employees, partners, or agents be liable to You or any third party for any special, incidental, indirect, consequential or punitive damages whatsoever.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">23. Injunctive Relief</h2>
//             <p className="mb-4">
//               In the event of Your breach of these Terms, You agree that the Company will be irreparably harmed and may not have an adequate remedy in money or damages.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">24. Violations and Consequences</h2>
//             <p className="mb-4">
//               Any violation by You of the terms of this Clause may result in immediate suspension or termination of Your Accounts apart from any legal remedy that the Company can avail.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">25. Governing Law and Jurisdiction</h2>
//             <p className="mb-4">
//               The Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Further, the Terms shall be subject to the exclusive jurisdiction of the competent courts located in Bangalore.
//             </p>

//             <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">26. Right to Modify</h2>
//             <p className="mb-4">
//               The Company has the right to change modify, suspend, or discontinue and/or eliminate any aspect(s), features or functionality of the Services as it deems fit at any time without notice. All prices are subject to change without notice.
//             </p>

//             <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
//               <p className="text-sm text-blue-900 font-semibold">
//                 You have reached the end of the Terms and Conditions. Please review the checkbox below to accept these terms.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         {!isScrolledToBottom && (
//           <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2">
//             <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//             <span className="text-sm text-yellow-800">Please scroll down to read all terms and conditions</span>
//           </div>
//         )}

//         {/* Accept checkbox */}
//         <div className="mb-6">
//           <label className="flex items-start gap-3 cursor-pointer group">
//             <input
//               type="checkbox"
//               checked={isAccepted}
//               onChange={handleAcceptChange}
//               disabled={!isScrolledToBottom}
//               className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
//             />
//             <span className={`text-sm ${!isScrolledToBottom ? 'text-gray-400' : 'text-gray-700'}`}>
//               I have read and agree to the Terms and Conditions of Innotrat Labs Private Limited
//             </span>
//           </label>
//         </div>

//         {/* Action buttons */}
//         <div className="flex gap-4 justify-end">
//           <button
//             onClick={handleDecline}
//             className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
//           >
//             Decline
//           </button>
//           <button
//             onClick={handleAccept}
//             disabled={!isAccepted}
//             className={`px-6 py-2.5 font-medium rounded-lg transition-colors ${
//               isAccepted
//                 ? 'bg-blue-600 text-white hover:bg-blue-700'
//                 : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//             }`}
//           >
//             Accept and Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsAndConditions;


// terms and conditions without checkbox and scroll detection
import React, { useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states immediately to prevent flash
      gsap.set(headerRef.current, { opacity: 1, y: 0 });
      gsap.set(contentRef.current, { opacity: 1, y: 0 });
      
      // Header fade in animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: 'power3.out'
      });

      // Content container fade in
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out'
      });

      // Animate each section on scroll
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          gsap.from(section, {
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: index * 0.05,
            ease: 'power2.out'
          });
        }
      });

      // Button animation
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 90%',
          },
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          ease: 'back.out(1.7)'
        });
      }
    });

    // Cleanup
    return () => ctx.revert();
  }, []);

  const handleBack = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => navigate(-1)
    });
  };

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Decorative animated blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
          {/* Header - Visible initially */}
          <div ref={headerRef} className="mb-10 pb-6 border-b-2 border-purple-300 opacity-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Terms and Conditions
              </h1>
            </div>
            <div className="ml-4 space-y-2">
              <p className="text-lg text-gray-800 font-semibold">
                Innotrat Labs Private Limited
              </p>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-sm text-gray-600">
                  Last Updated: November 13, 2025
                </p>
              </div>
            </div>
          </div>

          {/* Content - Visible initially */}
          <div ref={contentRef} className="space-y-8 opacity-100">
            {/* Introduction Sections */}
            <div ref={addToRefs} className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-base leading-relaxed text-gray-900">
                These Terms & Conditions ("Terms") of (a) use of our website{' '}
                <a 
                  href="https://www.innotrat.com" 
                  className="text-blue-600 hover:text-blue-800 underline font-semibold decoration-2 underline-offset-2 transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  www.innotrat.com
                </a>{' '}
                ("Website"), or any products or services in connection with the Website/products ("Services") or (b) any modes of registrations or usage of products, including through SD cards, tablets or other storage/transmitting device are between Innotrat Labs Private Limited ("Company/We/Us/Our") and its users ("User/You/Your").
              </p>
            </div>

            <div ref={addToRefs} className="p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-500 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-base leading-relaxed text-gray-900">
                These Terms constitute an electronic record in accordance with the provisions of the Information Technology Act, 2000 and the Information Technology (Intermediaries guidelines) Rules, 2011 thereunder, as amended from time to time.
              </p>
            </div>

            {/* Section 1 */}
            <div ref={addToRefs}>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold rounded-lg shadow-lg">
                  1
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Proprietary Information
                </h2>
              </div>
              <div className="ml-13 p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                <p className="text-base leading-relaxed text-gray-900">
                  Except as mentioned below, all information, content, material, trademarks, services marks, trade names, and trade secrets including but not limited to the software, text, images, graphics, video, script and audio, contained in the Website, Services and products are proprietary property of the Company ("Proprietary Information"). No Proprietary Information may be copied, downloaded, reproduced, modified, republished, uploaded, posted, transmitted or distributed in any way without obtaining prior written permission from the Company.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div ref={addToRefs}>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 text-white font-bold rounded-lg shadow-lg">
                  2
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Personal and Non-Commercial Use
                </h2>
              </div>
              <div className="ml-13 space-y-4">
                <div className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors duration-300">
                  <p className="text-base leading-relaxed text-gray-900">
                    Your use of our products, Website and Services is solely for Your personal and non-commercial use. Any use of the Website, Services or products or their contents other than for personal purposes is prohibited.
                  </p>
                </div>
                <div className="p-5 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-purple-600">⚠️</span>
                    Restrictions:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                      <span className="text-base text-gray-800">You may not decompile, reverse engineer, or disassemble the contents of our Website and/or Services/products or modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or software obtained from our Website and/or Services/products.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                      <span className="text-base text-gray-800">You will not use our website and/or any of our product/s or Service/s for commercial purposes of any kind, or advertise or sell any products, Services or domain names.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                      <span className="text-base text-gray-800">You shall not use the Website/our products and Services in any way that is unlawful or harms the Company or any other person or entity.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 - Prohibited Activities */}
            <div ref={addToRefs}>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 text-white font-bold rounded-lg shadow-lg">
                  3
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Prohibited Activities
                </h2>
              </div>
              <div className="ml-13 space-y-4">
                <div className="p-5 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-base leading-relaxed font-semibold text-red-900">
                    No User shall be permitted to perform any of the following prohibited activities while availing our Services:
                  </p>
                </div>
                <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                  <ul className="space-y-3">
                    {[
                      "Making available any content that is misleading, unlawful, harmful, threatening, abusive, tortious, defamatory, libelous, vulgar, obscene, child-pornographic, lewd, lascivious, profane, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.",
                      "Stalking, intimidating and/or harassing another and/or inciting other to commit violence.",
                      "Transmitting material that encourages anyone to commit a criminal offence, that results in civil liability or otherwise breaches any relevant laws, regulations, or code of practice.",
                      "Interfering with any other person's use or enjoyment of the Website/Services.",
                      "Making, transmitting or storing electronic copies of materials protected by copyright without the permission of the owner.",
                      "Impersonating any person or entity, or falsely stating or otherwise misrepresenting Your affiliation with a person or entity.",
                      "Transmitting any material that contains viruses, trojan horses, worms, spyware, time bombs, cancelbots, or other computer programming routines that may harm the services.",
                      "Intentionally or unintentionally interfering with or disrupting the services or violating any applicable laws related to the access to or use of the Website/Services/products."
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">{idx + 1}</span>
                        <span className="text-base text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Continue with all other sections - I'll abbreviate for brevity */}
            {[
              { num: 4, title: "Content License", content: "By submitting content on or through the Services (your \"Material\"), you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display and distribute such Material in any and all media or distribution methods." },
              { num: 5, title: "Disclaimer of Warranty", content: "In the preparation of the Website/Services/products and contents therein, every effort has been made to offer the most current, correct, and clearly expressed information possible. Nevertheless, inadvertent errors may occur. Neither the Company nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on Website/Services/products for any particular purpose." },
              { num: 6, title: "Educational Content", content: "Our Website provides Users with access to compiled educational information and related sources. Such information is provided on an As Is basis and We assume no liability for the accuracy or completeness or use or non obsolescence of such information. From time to time the Website may also include links to other websites. We have no responsibility for the content of the linked website(s)." },
              { num: 7, title: "No Guarantee of Results", content: "The contents of the Services/products are developed on the concepts covered in the structured curriculum syllabus prescribed for students of various courses. Subscription to the usage of our Services/Website/products does not in any manner guarantee admission to any educational institutions or passing of any exams or achievement of any specified percentage of marks in any examinations." },
              { num: 8, title: "User Contributions", content: "Some parts of the Services are interactive, and we encourage contributions by Users, which may or may not be subject to editorial control prior to being posted. The Company accepts no responsibility or liability for any material communicated by third parties in this way." },
              { num: 9, title: "Communication and Contact", content: "The Company (including but not limited to its subsidiaries/affiliates) may, based on any form of access to the Services or Website or registrations through any source whatsoever, contact the User through sms, email and call. By registering yourself, you agree to make your contact details available to Our employees, associates, subsidiaries, affiliates and partners." },
              { num: 10, title: "Product Demonstration", content: "While the Company may, based on the User's confirmation, facilitate the demonstration of its products at the location sought by the User, the User acknowledges that he/she has not been induced by any statements or representations of any person with respect to the quality or conditions of the products." },
              { num: 11, title: "Monitoring and Mentoring", content: "Upon registration through any means whatsoever, the Company may contact You through the registered mobile number or e-mail to enable effective provision of Services. The Company shall have the right to monitor the download and usage of the Services/products." },
              { num: 12, title: "Personnel Quality", content: "While the Company has made efforts to train the personnel engaged in the sales and services relating to its products to enable quality control, it makes no warranties or representations whatsoever regarding the quality and competence of such personnel." },
              { num: 13, title: "Service Access and Modification", content: "Access to certain elements of the Services including doubt clearance, mentoring services etc may be subject to separate terms, conditions and fair usage policy. We reserve the right to extend, cancel, discontinue, prematurely withdraw or modify any of Our Services at Our discretion." },
              { num: 14, title: "Device Compatibility", content: "The Company's products and / or Services, including the content, are compatible only with certain devices/tablets/instruments/hardware. The Company shall not be obligated to provide workable products and / or services for any instruments that are not recognized by the Company." },
              { num: 15, title: "Limitation of Liability", content: "The Company shall have no responsibility for any loss or damage caused to tablet or any other hardware and / or software and/or instrument, including loss of data or effect on the processing speed, resulting from Your use of our products and Services." },
              { num: 16, title: "Referral Program", content: "In order to encourage Customer Retention and Loyalty, Innotrat Labs Pvt. Ltd. encourages its Customers, Fintech Partners and other stakeholders to refer customers. Company at its option can pay referral bonus subject to applicable laws." },
              { num: 17, title: "Shipping and Delivery", content: "You have to specify the address to which the shipment has to be made at the time of purchase. All product(s) shall be delivered directly to the address as specified at the point of ordering. Any inconsistencies in name or address will result in non-delivery of the product(s)." },
              { num: 18, title: "Hardware Manufacturer Warranty", content: "You acknowledge that the Company is not the manufacturer of the instrument/medium/hardware and hence, any defect relating to the same shall be reported to the manufacturer whose details shall be specified on the packaging." },
              { num: 20, title: "Eligibility", content: "Persons who are \"competent/capable\" of contracting within the meaning of the Indian Contract Act, 1872 shall be eligible to register for all Our products or Services. Persons who are minors, un-discharged insolvents etc. are not eligible to register for Our products or Services." },
              { num: 21, title: "Indemnification", content: "You agree to defend, indemnify and hold harmless the Company, its officers, directors, employees and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from Your use of and access of the Website/Services." },
              { num: 22, title: "Limitation of Damages", content: "In no event shall the Company, its officers, directors, employees, partners, or agents be liable to You or any third party for any special, incidental, indirect, consequential or punitive damages whatsoever." },
              { num: 23, title: "Injunctive Relief", content: "In the event of Your breach of these Terms, You agree that the Company will be irreparably harmed and may not have an adequate remedy in money or damages." },
              { num: 24, title: "Violations and Consequences", content: "Any violation by You of the terms of this Clause may result in immediate suspension or termination of Your Accounts apart from any legal remedy that the Company can avail." },
              { num: 25, title: "Governing Law and Jurisdiction", content: "The Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Further, the Terms shall be subject to the exclusive jurisdiction of the competent courts located in Bangalore." },
              { num: 26, title: "Right to Modify", content: "The Company has the right to change modify, suspend, or discontinue and/or eliminate any aspect(s), features or functionality of the Services as it deems fit at any time without notice. All prices are subject to change without notice." }
            ].map((section, idx) => (
              <div key={section.num} ref={addToRefs}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg">
                    {section.num}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <div className="ml-13 p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                  <p className="text-base leading-relaxed text-gray-900">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}

            {/* Section 19 with sub-items */}
            <div ref={addToRefs}>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 text-white font-bold rounded-lg shadow-lg">
                  19
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Account Registration
                </h2>
              </div>
              <div className="ml-13 space-y-4">
                <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-base leading-relaxed text-gray-900">
                    In order to access the Services and to avail the use of the products, You shall be required to register yourself with the Services/products, and maintain an account. You will be required to furnish certain information and details.
                  </p>
                </div>
                <div className="p-5 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-blue-600">📋</span>
                    Account Responsibilities:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "It is Your sole responsibility to ensure that the account information provided by You is accurate, complete and latest.",
                      "You shall be responsible for maintaining the confidentiality of the account information and for all activities that occur under Your account.",
                      "You acknowledge that Your ability to use Your account is dependent upon external factors such as internet service providers and internet network availability."
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                        <span className="text-base text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Back Button */}
          <div ref={buttonRef} className="mt-12 pt-8 border-t-2 border-gray-200 flex justify-center">
            <button
              onClick={handleBack}
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-3">
                <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Previous Page
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for blob animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default TermsAndConditions;



