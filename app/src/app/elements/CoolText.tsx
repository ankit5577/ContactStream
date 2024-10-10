interface CoolTextProps {
  text: string
}

const CoolText: React.FC<CoolTextProps> = ({ text }) => {
  return (
    <p
      className='relative inline-block bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text font-[Poppins] text-4xl font-extrabold
        tracking-wide text-transparent after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full after:bg-gradient-to-r after:from-rose-400
        after:via-fuchsia-500 after:to-indigo-500 after:bg-[length:100%_4px] after:bg-bottom after:bg-no-repeat after:transition-[background-size]
        after:duration-500 hover:after:bg-[length:100%_100%]'
    >
      {text}
    </p>
  )
}

export default CoolText
