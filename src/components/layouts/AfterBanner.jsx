import Container from "../Container"
import Images from "../Images"
import afterBanner from '../../assets/afterBanner.png'

const AfterBanner = () => {
    return (
        <>
            <div className="">
                <Images imgSrc={afterBanner} className={'w-[70%] mx-auto'}/>
            </div>
        </>
    )
}

export default AfterBanner