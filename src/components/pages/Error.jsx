import Images from "../Images"
import error2 from '../../assets/error2.gif'
import Button from "../Button"
import { Link } from "react-router-dom"


const Error = () => {
    return (
        <div className="relative">
            <Images imgSrc={error2} className={'mx-auto mt-[100px]'}/>
            <div className="errorBtn text-center absolute left-[50%] -translate-x-[50%] bottom-[70px] ">
                <Link to={"/"}>
                <Button btnText={"Back to Homepage"} className={'cursor-pointer font-bold text-white bg-[#262626] border border-[#F0F0F0] rounded-lg py-4 px-5 hover:bg-transparent hover:border hover:border-[#7e7e7e] hover:text-[#262626] duration-300'}/>
                </Link>
            </div>
        </div>
    )
}

export default Error