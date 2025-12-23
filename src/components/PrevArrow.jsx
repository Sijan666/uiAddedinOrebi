import { FaArrowAltCircleLeft } from "react-icons/fa";

const PrevArrow = (props) => {
    const { onClick } = props;

    return (
        <div className="absolute top-[50%] left-5 -translate-y-[120%] z-10 cursor-pointer" onClick={onClick}>
            <FaArrowAltCircleLeft className="text-4xl"/>
        </div>
    );
};

export default PrevArrow;
