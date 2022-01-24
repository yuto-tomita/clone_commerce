import { FC, ChangeEvent } from 'react'

interface RadioButtonData {
  value: string | number
  text: string
}

interface Props {
  radioButtonData: RadioButtonData[]
  className?: string
  onChange: (arg: null | number) => any
  defaultValue?: number | null
}

const Radio: FC<Props> = ({
  radioButtonData,
  className = '',
  onChange,
  defaultValue = null
}) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value))
  }

  return (
    <div className={`${className}`}>
      {radioButtonData.map((val) => {
        return (
          <div key={val.value} className="pr-4">
            <input
              type="radio"
              value={val.value}
              id={val.text}
              name={`${radioButtonData.length}-${radioButtonData[0].text}-${radioButtonData[1]}.id`}
              onChange={(e) => handleOnChange(e)}
              checked={defaultValue === val.value}
            />
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
