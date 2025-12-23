import Container from '../Container'
import { FaArrowRight } from "react-icons/fa";
import Flex from '../Flex';
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";

import best3 from '../../assets/best3.png'
import so3 from '../../assets/so3.png'
import so2 from '../../assets/so2.png'
import so1 from '../../assets/so1.png'
import watch from '../../assets/watch.png'
import best4 from '../../assets/best4.png'
import so4 from '../../assets/so4.png'
import about2 from '../../assets/about2.png'
import n1 from '../../assets/n1.jpg'

import { useEffect } from "react";

import Product from '../Product';

const Shop = () => {

useEffect(() => {
    let catOne = document.getElementById("catOne");
    let catTwo = document.getElementById("catTwo");
    let catThree = document.getElementById("catThree");
    let catFour = document.getElementById("catFour");

    let productOne = document.getElementById("productOne");
    let productTwo = document.getElementById("productTwo");
    let productThree = document.getElementById("productThree");
    let productFour = document.getElementById("productFour");
    let productFive = document.getElementById("productFive");
    let productSix = document.getElementById("productSix");
    let productSeven = document.getElementById("productSeven");
    let productEight = document.getElementById("productEight");
    let productNine = document.getElementById("productNine");
    let productTen = document.getElementById("productTen");
    let productEleven = document.getElementById("productEleven");
    let productTwelve = document.getElementById("productTwelve");



    if (catOne) {
        catOne.addEventListener("click", () => {
            if (catOne) {
                productOne.removeAttribute('Hidden')
                productTwo.removeAttribute('Hidden')
                productThree.removeAttribute('Hidden')

                productFour.setAttribute('Hidden' , true)
                productFive.setAttribute('Hidden' , true)
                productSix.setAttribute('Hidden' , true)
                productSeven.setAttribute('Hidden' , true)
                productEight.setAttribute('Hidden' , true)
                productNine.setAttribute('Hidden' , true)
                productTen.setAttribute('Hidden' , true)
                productEleven.setAttribute('Hidden' , true)
                productTwelve.setAttribute('Hidden' , true)
            }
        });
    }
    if (catTwo) {
        catTwo.addEventListener("click", () => {
            if (catTwo) {
                productOne.setAttribute('Hidden' , true)
                productTwo.setAttribute('Hidden' , true)
                productThree.setAttribute('Hidden' , true)

                productFour.removeAttribute('Hidden')
                productFive.removeAttribute('Hidden')
                productSix.removeAttribute('Hidden')

                productSeven.setAttribute('Hidden' , true)
                productEight.setAttribute('Hidden' , true)
                productNine.setAttribute('Hidden' , true)
                productTen.setAttribute('Hidden' , true)
                productEleven.setAttribute('Hidden' , true)
                productTwelve.setAttribute('Hidden' , true)
            }
        });
    }
    if (catThree) {
        catThree.addEventListener("click", () => {
            if (catThree) {
                productOne.setAttribute('Hidden' , true)
                productTwo.setAttribute('Hidden' , true)
                productThree.setAttribute('Hidden' , true)
                productFour.setAttribute('Hidden' , true)
                productFive.setAttribute('Hidden' , true)
                productSix.setAttribute('Hidden' , true)

                productSeven.removeAttribute('Hidden')
                productEight.removeAttribute('Hidden')
                productNine.removeAttribute('Hidden')

                productTen.setAttribute('Hidden' , true)
                productEleven.setAttribute('Hidden' , true)
                productTwelve.setAttribute('Hidden' , true)
            }
        });
    }
    if (catFour) {
        catFour.addEventListener("click", () => {
            if (catThree) {
                productOne.setAttribute('Hidden' , true)
                productTwo.setAttribute('Hidden' , true)
                productThree.setAttribute('Hidden' , true)
                productFour.setAttribute('Hidden' , true)
                productFive.setAttribute('Hidden' , true)
                productSix.setAttribute('Hidden' , true)

                productSeven.setAttribute('Hidden' , true)
                productEight.setAttribute('Hidden' , true)
                productNine.setAttribute('Hidden' , true)

                productTen.setAttribute('Hidden' , true)
                productEleven.setAttribute('Hidden' , true)
                productTwelve.setAttribute('Hidden' , true)
            }
        });
    }
}); 

    return (
        <>
        <Container className={'py-[125px]'}>
            <h3 className="text-[39px] text-[#262626] font-bold block pb-5">Products</h3>
            <Flex className={'text-[12px] text-[#767676] gap-x-2'}>
                <p>Home</p>
                <FaArrowRight />
                <p>Products</p>
            </Flex>
        </Container>
        <Container>
            <Flex className={'justify-between items-start gap-x-4'}>
                <div className="sideBar w-[30%] pb-[30px]">
                    <div className="category">
                        <h4 className='text-[#262626] font-bold text-[20px] pb-[30px]'>Shop By Category</h4>
                        <p className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer' id='catOne'>Category 1</p>
                        <p className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer' id='catTwo'>Category 2</p>
                        <p className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer' id='catThree'>Category 3</p>
                        <p className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer' id='catFour'>Category 4</p>
                        <p className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer' id='catFive'>Category 5</p>
                    </div>
                    <div className="category pt-[30px]">
                        <h4 className='text-[#262626] font-bold text-[20px] pb-[30px]'>Shop By Brand</h4>
                        <p className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer' id='brandOne'>Brand 1</p>
                        <p className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer' id='brandTwo'>Brand 2</p>
                        <p className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer' id='brandThree'>Brand 3</p>
                        <p className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer' id='brandFour'>Brand 4</p>
                        <p className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer' id='brandFive'>Brand 5</p>
                    </div>
                    <div className="category pt-[30px]">
                        <h4 className='text-[#262626] font-bold text-[20px] pb-[30px]'>Shop By Price</h4>
                        <p className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer' id='priceOne'>$0.00 - $9.99</p>
                        <p className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer' id='priceTwo'>$10.00 - $19.99</p>
                        <p className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer' id='priceThree'>$20.00 - $29.99</p>
                        <p className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer' id='priceFour'>$30.00 - $39.99</p>
                        <p className='text-[#767676] text-base border-b border-[#F0F0F0] pb-[22px] my-[30px] cursor-pointer' id='priceFive'>$40.00 - $69.99</p>
                    </div>
                </div>
                <div className="w-[70%]">
                    <div className="firstLine flex gap-x-2 pb-[50px]">
                        <IoGrid />
                        <CiGrid2H />
                    </div>
                    <div className="">
                        <div className="pt-8 pb-20">
                            <Container>
                                <Flex className={' items-center gap-x-4'}>
                                    <div className="w-1/3" id='productOne'>
                                        <Product productImg={best3} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                                    </div>
                                    <div className="w-1/3" id='productTwo'>
                                        <Product productImg={so3} badgeText={'-10%'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                                    </div>
                                    <div className="w-1/3" id='productThree'>
                                        <Product productImg={so2} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                                    </div>
                                </Flex>
                                <Flex className={" items-center pt-[50px] gap-x-4"}>
                                    <div className="w-1/3" id='productFour'>
                                        <Product productImg={so1} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                                    </div>
                                    <div className="w-1/3" id='productFive'>
                                        <Product productImg={watch} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                                    </div>
                                    <div className="w-1/3" id='productSix'>
                                        <Product productImg={best4} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                                    </div>
                                </Flex>
                                <Flex className={" items-center pt-[50px] gap-x-4"}>
                                    <div className="w-1/3" id='productSeven'>
                                        <Product productImg={so4} badgeText={'-10%'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                                    </div>
                                    <div className="w-1/3" id='productEight'>
                                        <Product productImg={so2} badgeText={'-15%'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                                    </div>
                                    <div className="w-1/3" id='productNine'>
                                        <Product productImg={so1} badgeText={'-10%'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                                    </div>
                                </Flex>
                                <Flex className={" items-center pt-[50px] gap-x-4"}>
                                    <div className="w-1/3" id='productTen'>
                                        <Product productImg={about2} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                                    </div>
                                    <div className="w-1/3" id='productEleven'>
                                        <Product productImg={n1} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                                    </div>
                                    <div className="w-1/3" id='productTwelve'>
                                        <Product productImg={so4} badgeText={'New'} productTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                                    </div>
                                </Flex>
                            </Container>
                        </div>
                    </div>
                </div>
            </Flex>
        </Container>
        </>
    )
}

export default Shop