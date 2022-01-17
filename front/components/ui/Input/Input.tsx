import { FC, ReactNode } from 'react'

interface Props {
  placeholder: string
  bgColor: string
  icon?: ReactNode
}

const Input: FC<Props> = ({ placeholder, bgColor, icon }) => {
  return (
    <div>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className={`${bgColor} text-xs w-full focus:outline-none focus:border focus:border-blue-400 rounded-md border border-white px-7 py-2 relative`}
        />
      </div>
      <div className="absolute top-5 left-32">{icon}</div>
    </div>
  )
}

export default Input
