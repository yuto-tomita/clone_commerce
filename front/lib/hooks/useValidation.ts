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

  return {
    required,
    isMail
  }
}
