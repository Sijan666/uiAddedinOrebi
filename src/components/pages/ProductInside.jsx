import { FaArrowRight } from "react-icons/fa"
import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'


const ProductInside = () => {
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
        <div className="py-[60px]">
            <Container>
                <div className="pb-[50px]">
                    <Flex className={'justify-between gap-x-5'}>
                        <div className="w-1/2">
                            <Images imgSrc={p1} className={'w-full'}/>
                        </div>
                        <div className="w-1/2">
                            <Images imgSrc={p2} className={'w-full'}/>
                        </div>
                    </Flex>
                    <Flex className={'justify-between gap-x-5 mt-5'}>
                        <div className="w-1/2">
                            <Images imgSrc={p3} className={'w-full'}/>
                        </div>
                        <div className="w-1/2">
                            <Images imgSrc={p4} className={'w-full'}/>
                        </div>
                    </Flex>
                </div>
                <div className=""></div>
            </Container>
        </div>
        </>
    )
}

export default ProductInside