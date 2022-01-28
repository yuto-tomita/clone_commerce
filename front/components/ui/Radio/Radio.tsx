import { FC, ChangeEvent } from 'react'

interface RadioButtonData {
  value: string | number
  text: string
}

interface Props {
  options: RadioButtonData[]
  className?: string
  onChange: (arg: null | number) => void
  defaultValue?: number | null
}

const Radio: FC<Props> = ({
  options,
  className = '',
  onChange,
  defaultValue = null
}) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value))
  }

  return (
    <div className={`${className}`}>
      {options.map((val) => {
        return (
          <div key={val.value} className="pr-4">
            <input
              type="radio"
              value={val.value}
              id={val.text}
              name={`${options.length}-${options[0].text}-${options[1].value}`}
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
