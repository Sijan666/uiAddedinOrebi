

const Badge = ({badgeText ,className}) => {
    return (
        <p className={`bg-[#262626] text-white font-bold lg:py-2 py-1 px-4 lg:px-8 absolute top-5 left-5 text-base ${className}`}>{badgeText}</p>
    )
}

export default Badge