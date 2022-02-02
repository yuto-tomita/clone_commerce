export const useValidation = () => {
  const required = (value: string) => {
    const regex = new RegExp(/^[0-9a-zA-Z.@]+$/, 'g')
    return regex.test(value)
  }

  const isMail = (value: string) => {
    const regex = new RegExp(
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
      'g'
    )
    return regex.test(value)
  }

  const isPass = (value: string) => {
    const regex = new RegExp(
      /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
      'g'
    )

    return regex.test(value)
  }

  // jsの仕様で0はfalseを返却する
  const isSelect = (value: number | null) => {
    return !!value
  }

  return {
    required,
    isMail,
    isPass,
    isSelect
  }
}
