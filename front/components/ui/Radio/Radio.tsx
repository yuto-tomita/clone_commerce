import { FC } from 'react'

interface RadioButtonData {
  value: string | number
  text: string
}

interface Props {
  radioButtonData: RadioButtonData[]
  className?: string
}

const Radio: FC<Props> = ({ radioButtonData, className = '' }) => {
  return (
    <div className={`${className}`}>
      {radioButtonData.map((val) => {
        return (
          <div key={val.value} className="pr-4">
            <input type="radio" value={val.value} id={val.text} />
            <label className="pl-1" htmlFor={val.text}>
              {val.text}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default Radio
