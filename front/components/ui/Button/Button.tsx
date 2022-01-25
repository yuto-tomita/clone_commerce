import { FC, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'success' | 'danger'

interface Props {
  children?: ReactNode
  variant?: Variant
  className?: string
}

const Button: FC<Props> = ({
  children,
  variant = 'secondary',
  className = ''
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
  return (
    <button
      className={`block ${className} border ${getBorderColor[variant]} p-2 rounded-md text-white ${getBgColor[variant]}`}
    >
      {children}
    </button>
  )
}

export default Button
