

const Button = ({btnText , className}) => {
    return (
        <button className={`bg-[#262626] text-white font-bold cursor-pointer ${className}`}>{btnText}</button>
    )
}

export default Button