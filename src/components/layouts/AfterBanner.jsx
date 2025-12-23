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
                            <h4 className="text-[26px] font-dmFont font-black text-black">
                            2
                            </h4>
                            <h5 className="font-dmFont font-normal text-[16px] text-[#6D6D6D] pl-[17px]">
                            Two years warranty
                            </h5>
                        </Flex>
                    </div>
                    <div className="">
                        <Flex>
                            <h4 className="text-[26px] font-dmFont font-black text-black">
                            <FaTruck />
                            </h4>
                            <h5 className="font-dmFont font-normal text-[16px] text-[#6D6D6D] pl-[17px]">
                            Free shipping
                            </h5>
                        </Flex>
                    </div>
                    <div className="">
                        <Flex>
                            <h4 className="text-[26px] font-dmFont font-black text-black">
                            <FaUndoAlt />
                            </h4>
                            <h5 className="font-dmFont font-normal text-[16px] text-[#6D6D6D] pl-[17px]">
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
