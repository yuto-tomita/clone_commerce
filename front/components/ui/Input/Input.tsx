import { FC, ReactNode, useState } from 'react'

type InputType = 'text' | 'password'

interface Props {
  placeholder: string
  bgColor: string
  icon?: ReactNode
  className?: string
  inputType?: InputType
}

const Input: FC<Props> = ({
  placeholder,
  bgColor = 'bg-gray-100',
  icon,
  className = '',
  inputType = 'text'
}) => {
  const [passwordOrText, setPasswordOrText] =
    useState<InputType>('password')

  const switchEyeIcon = (inputType: InputType) => {
    setPasswordOrText(inputType)
  }

  return (
    <div className="relative">
      <input
        type={passwordOrText}
        placeholder={placeholder}
        className={`${className} ${bgColor} text-xs focus:outline-none focus:border focus:border-blue-400 rounded-md border border-white px-7 py-3 relative`}
      />
      <div className="absolute top-3 left-8">{icon}</div>

      {inputType === 'password' ? (
        <div className="absolute top-3 right-4 h-2 text-gray-300">
          {passwordOrText === 'password' ? (
            // 目が開かれているアイコン
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={() => switchEyeIcon('text')}
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            // 目が閉じられているアイコン
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => switchEyeIcon('password')}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default Input
