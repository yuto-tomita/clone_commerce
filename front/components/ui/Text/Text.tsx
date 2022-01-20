import { FC, ReactNode } from 'react'
import style from './Text.module.css'

type Variant = 'heading' | 'sectionHeading'

interface Props {
  variant?: Variant
  className?: string
  onClick?: <P>() => P
  children: ReactNode
}

const Text: FC<Props> = ({
  variant = 'heading',
  className = '',
  onClick,
  children
}) => {
  const getVariantClass: {
    [P in Variant]: string
  } = {
    heading: style.heading,
    sectionHeading: style.sectionHeading
  }

  return (
    <div
      onClick={onClick}
      className={`${className} ${getVariantClass[variant]}`}
    >
      {children}
    </div>
  )
}

export default Text
