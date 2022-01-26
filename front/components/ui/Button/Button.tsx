import { FC, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'success' | 'danger'

interface Props {
  children?: ReactNode
  variant?: Variant
  className?: string
  onClick?: () => any
}

const Button: FC<Props> = ({
  children,
  variant = 'secondary',
  className = '',
  onClick
}) => {
  const getBorderColor: { [P in Variant]: string } = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    success: 'border-success',
    danger: 'border-danger'
  }

  const getBgColor: { [P in Variant]: string } = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    danger: 'bg-danger'
  }

  const handleOnClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      className={`block ${className} border ${getBorderColor[variant]} rounded-md p-2 text-white ${getBgColor[variant]}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  )
}

export default Button
