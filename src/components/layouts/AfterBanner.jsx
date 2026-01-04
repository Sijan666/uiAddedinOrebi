import { FaTruck } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import Flex from "../Flex";
import Container from "../Container";

const AfterBanner = () => {
    return (
    <>
        <div className="py-[22px] border-b border-b-[#F0F0F0] border-t border-t-[#F0F0F0] -mt-2">
            <Container>
                <Flex className={"justify-between"}>
                    <div className="">
                        <Flex>
                            <h4 className="lg:text-[26px] font-dmFont font-black text-black text-[15px]">
                            2
                            </h4>
                            <h5 className="font-dmFont font-normal lg:text-[16px] text-[#6D6D6D] lg:pl-[17px] pl-[11px] text-[15px]">
                            Two years warranty
                            </h5>
                        </Flex>
                    </div>
                    <div className="">
                        <Flex>
                            <h4 className="lg:text-[26px] font-dmFont font-black text-black text-[15px]">
                            <FaTruck />
                            </h4>
                            <h5 className="font-dmFont font-normal lg:text-[16px] text-[#6D6D6D] lg:pl-[17px] pl-[11px] text-[15px]">
                            Free shipping
                            </h5>
                        </Flex>
                    </div>
                    <div className="">
                        <Flex>
                            <h4 className="lg:text-[26px] font-dmFont font-black text-black text-[15px]">
                            <FaUndoAlt />
                            </h4>
                            <h5 className="font-dmFont font-normal lg:text-[16px] text-[#6D6D6D] lg:pl-[17px] pl-[11px] text-[15px]">
                            Return policy in 30 days
                            </h5>
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </div>
    </>
    );
};

export default AfterBanner;
