
import Container from '../Container'
import Flex from '../Flex'
import { HugeiconsIcon } from '@hugeicons/react'
import { MenuTwoLineIcon } from '@hugeicons/core-free-icons'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SearchBar = () => {
    return (
        <>
        <div className="bg-[#F5F5F3] border border-t-[#979797] border-b-[#979797]">
            <Container className={'py-6'}>
                <Flex className={'justify-between items-center'}>
                    <div className="iconText flex items-center">
                        <HugeiconsIcon icon={MenuTwoLineIcon} color='text-[#262626]' strokeWidth={3}/>
                        <h3 className='pl-3 text-[14px] text-[#262626]'>Shop by Category</h3>
                    </div>
                    <div className="searchBar">
                        <div className="flex justify-between items-center bg-white border-gray-300 px-5 py-5 w-[600px]">
                            <input type="text" placeholder="Search Products" className="outline-none placeholder:text-gray-400 text-[#C4C4C4] w-[80%]"/>
                            <button className="cursor-pointer"><FaSearch /></button>
                        </div>
                    </div>
                    <div className="icons flex gap-x-2">
                        <Link to={'/login'}>
                            <FaUser />
                        </Link>
                        <Link to={'/'}>
                            <GoTriangleDown />
                        </Link>
                        <Link to={'/'}>
                            <FaShoppingCart />
                        </Link>
                    </div>
                </Flex>
            </Container>
        </div>
        </>
    )
}

export default SearchBar