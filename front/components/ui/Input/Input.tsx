import { FC, ReactNode } from 'react'

interface Props {
  placeholder: string
  bgColor: string
  icon?: ReactNode
  className?: string
}

const Input: FC<Props> = ({
  placeholder,
  bgColor,
  icon,
  className
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className={`${className} ${bgColor} text-xs w-full focus:outline-none focus:border focus:border-blue-400 rounded-md border border-white px-7 py-3 relative`}
      />
      <div className="absolute top-3 left-8">{icon}</div>
    </div>
  )
}

export default Input
