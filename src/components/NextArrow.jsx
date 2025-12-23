import { FaArrowAltCircleRight } from "react-icons/fa";



const NextArrow = (props) => {
    const { onClick } = props;

    return (
        <div className="absolute top-[50%] right-5 -translate-y-[120%] cursor-pointer" onClick={onClick}>
            <FaArrowAltCircleRight className="text-4xl" />
        </div>
    );
}

export default NextArrow 