import { Text, Input, Radio, Button } from '@components/ui'
import style from '@styles/Signup.module.css'
import { RADIO_OPTION } from 'lib/constant/SignupPageConstant'
import { useState } from 'react'
import { useValidation } from 'lib/hooks/useValidation'

interface ValidationError {
  mail: string
  password: string
  userName: string
  gender: string
}

export default function Signup() {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [gender, setGender] = useState<null | number>(null)
  const [error, setError] = useState<ValidationError>({
    mail: '',
    password: '',
    userName: '',
    gender: ''
  })
  const { required, isMail, isPass } = useValidation()

  const submitToServer = () => {
    initialErrorState()

    signUpValidate()
  }

  const signUpValidate = () => {
    if (!required(mail)) {
      setError({ ...error, mail: 'メールアドレスを入力してください' })
    } else {
      if (!isMail(mail)) {
        // errorStateに複数の状態を保持するために関数型でStateに値を保存する
        setError((prevState) => {
          return {
            ...prevState,
            mail: 'メールアドレスの形式で入力してください'
          }
        })
      } else {
        setError((prevState) => {
          return {
            ...prevState,
            mail: ''
          }
        })
      }
    }

    if (!required(password)) {
      setError((prevState) => {
        return {
          ...prevState,
          password: 'パスワードを入力してください'
        }
      })
    } else {
      if (!isPass(password)) {
        setError((prevState) => {
          return {
            ...prevState,
            password: '半角英数字8文字以上で入力してください'
          }
        })
      } else {
        setError((prevState) => {
          return {
            ...prevState,
            password: ''
          }
        })
      }
    }

    if (!required(userName)) {
      setError((prevState) => {
        return {
          ...prevState,
          userName: 'ユーザー名を入力してください'
        }
      })
    } else {
      setError((prevState) => {
        return {
          ...prevState,
          userName: ''
        }
      })
    }
  }

  const initialErrorState = () => {
    setError((prevState) => {
      return {
        ...prevState,
        mail: '',
        password: '',
        userName: '',
        gender: ''
      }
    })
  }

  return (
    <div>
      {Object.values(error).map((val, key) => (
        <li key={key}>{val}</li>
      ))}
      <Text className="text-center" variant="sectionHeading">
        会員登録
      </Text>

      <div className="mx-auto w-2/4">
        <label>メールアドレス</label>
        <Input
          placeholder="メールアドレスを入力してください"
          bgColor="bg-white"
          className="mb-5"
          onChange={setMail}
          defaultValue={mail}
          error={error['mail']}
        />

        <label>パスワード</label>
        <Input
          placeholder=""
          bgColor="bg-white"
          inputType="password"
          className="mb-5"
          onChange={setPassword}
          defaultValue={password}
          error={error['password']}
        />

        <label>ユーザー名</label>
        <Input
          placeholder="このサイトで使用するユーザー名を使用してください"
          bgColor="bg-white"
          className="mb-5"
          onChange={setUserName}
          defaultValue={userName}
          error={error['userName']}
        />

        <label>性別</label>
        <Radio
          className="flex"
          options={RADIO_OPTION}
          onChange={setGender}
          defaultValue={gender}
        />

        <Button
          variant="primary"
          className="ml-auto"
          onClick={submitToServer}
        >
          送信
        </Button>
      </div>
    </div>
  )
}
