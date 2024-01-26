// import React, { useRef, useState } from "react";
// import Layout from "../../components/Layout/Layout";
// import { toast } from "react-toastify";
// import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import Loader from "../../components/Loader";

// const Signup = () => {
//   const [phone, setPhone] = useState("");
//   const [verifyForm, setVerifyForm] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
//   const inputRefs = [useRef(), useRef(), useRef(), useRef()];
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const user = {
//       phone,
//     };

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API}/api/v1/auth/sendotp`,
//         user
//       );

//       setTimeout(() => {
//         setLoading(false);
//       }, 200);

//       if (response.data.success) {
//         toast.success(response.data.message);
//         setVerifyForm(true);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//       setTimeout(() => {
//         setLoading(false);
//       }, 200);
//     }
//   };

//   const handleSubmitOtp = async (otp) => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API}/api/v1/auth/login`,
//         {
//           phone,
//           otp,
//         }
//       );

//       setTimeout(() => {
//         setLoading(false);
//       }, 200);

//       if (response.data.success) {
//         toast.success(response.data.message);
//         // setTimeout(() => {
//         //   navigate("/login");
//         // }, 1000);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//       setTimeout(() => {
//         setLoading(false);
//       }, 200);
//     }
//   };

//   const handleChange = (index, value) => {
//     const newVerificationCode = [...verificationCode];
//     newVerificationCode[index] = value;
//     setVerificationCode(newVerificationCode);

//     if (value !== "" && index === 3) {
//       handleSubmitOtp(verificationCode.join("") + value);
//     }

//     // Focus on the next input if the value is not empty
//     if (value !== "" && index < inputRefs.length - 1) {
//       inputRefs[index + 1].current.focus();
//     }
//   };

//   const handleKeyDown = (index, event) => {
//     const newVerificationCode = [...verificationCode];
//     newVerificationCode[index] = "";

//     // Handle Backspace key press
//     if (event.key === "Backspace" && index > 0) {
//       event.preventDefault();
//       inputRefs[index - 1].current.focus();
//       newVerificationCode[index - 1] = "";
//     }

//     setVerificationCode(newVerificationCode);
//   };

//   return (
//     <>
//       <Loader loading={loading} />

//       <Layout title="Signup | SSN">
//         <section className="signup-form ">
//           {/* Section: Design Block */}
//           <section className="background-radial-gradient overflow-hidden">
//             <div className="container-fluid px-4 py-5 px-md-5 text-center text-lg-start my-5">
//               <div className="align-items-center mb-5 d-flex">
//                 <div
//                   className="mb-5 mb-lg-0 reg-text"
//                   style={{ zIndex: 10, maxWidth: "50%" }}
//                 >
//                   <h1
//                     className="my-5 display-5 fw-bold ls-tight"
//                     style={{ color: "hsl(218, 81%, 95%)" }}
//                   >
//                     The best offer <br />
//                     <span style={{ color: "hsl(218, 81%, 75%)" }}>
//                       for your business
//                     </span>
//                   </h1>
//                   <p
//                     className="mb-4 opacity-70"
//                     style={{ color: "hsl(218, 81%, 85%)" }}
//                   >
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Temporibus, expedita iusto veniam atque, magni tempora
//                     mollitia dolorum consequatur nulla, neque debitis eos
//                     reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
//                   </p>
//                 </div>
//                 <div className="mb-5 mb-lg-0 position-relative">
//                   <div
//                     id="radius-shape-1"
//                     className="position-absolute rounded-circle shadow-5-strong"
//                   />
//                   <div
//                     id="radius-shape-2"
//                     className="position-absolute shadow-5-strong"
//                   />
//                   <div className="card bg-glass">
//                     <div className="card-body px-4 py-5 px-md-5">
//                       {verifyForm ? (
//                         <div className="d-flex justify-content-center align-items-center container">
//                           <div className="card py-5 px-3">
//                             <h5 className="m-0">Mobile phone verification</h5>
//                             <span className="mobile-text">
//                               Enter the code we just send on your mobile phone{" "}
//                               <b className="text-danger">+91 {phone}</b>
//                             </span>
//                             <div className="d-flex flex-row mt-5">
//                               {inputRefs.map((ref, index) => (
//                                 <input
//                                   key={index}
//                                   type="number"
//                                   className="form-control"
//                                   value={verificationCode[index]}
//                                   onChange={(e) =>
//                                     handleChange(index, e.target.value)
//                                   }
//                                   onKeyDown={(e) => handleKeyDown(index, e)}
//                                   ref={ref}
//                                 />
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       ) : (
//                         <form onSubmit={handleSubmit}>
//                           {/* Phone Number input */}
//                           <div className="form-outline mb-4 form-floating">
//                             <input
//                               type="text"
//                               id="phone"
//                               className="form-control form-control-lg"
//                               placeholder="Enter a valid phone number"
//                               value={phone}
//                               onChange={(e) => setPhone(e.target.value)}
//                             />
//                             <label className="form-label" htmlFor="phone">
//                               Phone number
//                             </label>
//                           </div>
//                           {/* Submit button */}
//                           <button
//                             type="submit"
//                             className="btn btn-primary btn-block mb-4"
//                           >
//                             Sign up
//                           </button>
//                         </form>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//           {/* Section: Design Block */}
//         </section>
//       </Layout>
//     </>
//   );
// };

// export default Signup;
