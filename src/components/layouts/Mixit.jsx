// import React, { useEffect, useRef, useState } from 'react';
// import mixitup from 'mixitup';
// import Container from '../Container';
// import { FaArrowRight } from "react-icons/fa";
// import Flex from '../Flex';
// import { IoGrid } from "react-icons/io5";
// import { CiGrid2H } from "react-icons/ci";
// import Product from '../Product';
// import axios from 'axios';

// const Shop = () => {
//     const containerRef = useRef(null);
//     const [allData, setAllData] = useState([]);
//     const [categories, setCategories] = useState([]); // ক্যাটাগরি রাখার জন্য স্টেট
//     const [loader, setLoader] = useState(true);

//     // 1. Data Fetching
//     useEffect(() => {
//         async function alldatas() {
//             try {
//                 let response = await axios.get("https://dummyjson.com/products");
//                 let products = response.data.products;
//                 setAllData(products);

//                 // API থেকে ইউনিক ক্যাটাগরিগুলো বের করা হচ্ছে
//                 let uniqueCategories = [...new Set(products.map(item => item.category))];
//                 setCategories(uniqueCategories);
//                 setLoader(false);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//                 setLoader(false);
//             }
//         }
//         alldatas();
//     }, []); // Empty dependency array [] দেওয়া জরুরি, নাহলে লুপে পড়ে যাবে

//     // 2. Mixitup Initialization
//     useEffect(() => {
//         let mixer = null;
//         if (containerRef.current && allData.length > 0) {
//             // আগে যদি কোনো mixer থাকে সেটা ধ্বংস (destroy) করে নতুন করে তৈরি করা
//             // React এর StrictMode এ ডবল রেন্ডারিং এড়াতে এটি ভালো প্র্যাকটিস
//             try {
//                 mixer = mixitup(containerRef.current, {
//                     selectors: {
//                         target: '.mix'
//                     },
//                     animation: {
//                         duration: 400,
//                     }
//                 });
//             } catch (err) {
//                 console.log("Mixitup error", err)
//             }
//         }
//         // Cleanup function
//         return () => {
//             if (mixer) {
//                 mixer.destroy();
//             }
//         };
//     }, [allData]); // যখন allData লোড হবে, তখন Mixitup রান করবে

//     return (
//         <>
//             <Container className={'py-[125px]'}>
//                 <h3 className="text-[39px] text-[#262626] font-bold block pb-5">Products</h3>
//                 <Flex className={'text-[12px] text-[#767676] gap-x-2'}>
//                     <p>Home</p>
//                     <FaArrowRight />
//                     <p>Products</p>
//                 </Flex>
//             </Container>

//             <Container>
//                 <Flex className={'justify-between items-start gap-x-4'}>
//                     {/* Sidebar / Filters */}
//                     <div className="sideBar w-[30%] pb-[30px]">
//                         <div className="category">
//                             <h4 className='text-[#262626] font-bold text-[20px] pb-[30px]'>Shop By Category</h4>
                            
//                             {/* "All" বাটন */}
//                             <button 
//                                 type="button" 
//                                 data-filter="all" 
//                                 className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-2.5 cursor-pointer hover:font-bold hover:text-black block w-full text-left'
//                             >
//                                 All Products
//                             </button>

//                             {/* ডাইনামিক ক্যাটাগরি বাটন */}
//                             {categories.map((cat, index) => (
//                                 <button
//                                     key={index}
//                                     type="button"
//                                     data-filter={`.${cat}`} // যেমন: .beauty
//                                     className='capitalize text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-2.5 cursor-pointer hover:font-bold hover:text-black block w-full text-left'
//                                 >
//                                     {cat}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Product Grid */}
//                     <div className="w-[70%]">
//                         <div className="firstLine flex gap-x-2 pb-[50px]">
//                             <IoGrid />
//                             <CiGrid2H />
//                         </div>

//                         {loader ? (
//                             <h2>Loading...</h2>
//                         ) : (
//                             <div className="pt-8 pb-20 w-full" ref={containerRef}>
//                                 <Flex className={'flex-wrap gap-x-4 gap-y-10'}>
//                                     {allData.map((item) => (
//                                         // এখানে "mix" ক্লাসের সাথে item.category যোগ করা হয়েছে
//                                         // যাতে বাটনের data-filter এর সাথে ম্যাচ করে
//                                         <div key={item.id} className={`mix ${item.category} w-[32%]`}>
//                                             <Product
//                                                 productImg={item.thumbnail}
//                                                 badgeText={item.stock} // Stock number দেখানো হবে
//                                                 productTitle={item.title}
//                                                 productPrice={item.price}
//                                             />
//                                         </div>
//                                     ))}
//                                 </Flex>
//                             </div>
//                         )}
//                     </div>
//                 </Flex>
//             </Container>
//         </>
//     )
// }

// export default Shop






















// import { useState } from "react";

// const SearchFilter = () => {
//   // ১. আমাদের কাছে থাকা সব নাম (Data)
//     const allNames = ["Rahim", "Karim", "Rafi", "Sujon", "Sakib", "Mina"];

//     // ২. ইউজার যা লিখছে তা ধরে রাখার মেমোরি (State)
//     const [searchText, setSearchText] = useState("");

//     // ৩. আসল ফিল্টার লজিক (The Magic Part)
//     // filter() একটা লুপের মতো সব নাম চেক করে
//     const result = allNames.filter((name) => 
//         name.toLowerCase().includes(searchText.toLowerCase())
//     );

//     return (
//         <div className="p-10">
//         <h2>Friend Search</h2>
        
//         {/* ইনপুট বক্স: ইউজার এখানে লিখবে */}
//         <input 
//             type="text" 
//             placeholder="Search name..." 
//             className="border p-2 rounded"
//             onChange={(e) => setSearchText(e.target.value)} // যা লিখবে তা state-এ যাবে
//         />

//         {/* রেজাল্ট দেখানো: আমরা filtered 'result' ম্যাপ করছি, 'allNames' না */}
//         <ul className="mt-5">
//             {result.map((name, index) => (
//             <li key={index} className="border p-2 my-1">
//                 {name}
//             </li>
//             ))}
//         </ul>
//         </div>
//     );
// };

// export default SearchFilter;