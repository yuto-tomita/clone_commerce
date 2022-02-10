import { Text, Input, Radio, Button } from '@components/ui'
import {
  RADIO_OPTION,
  RADIO_VALUES_ENUM
} from 'lib/constant/SignupPageConstant'
import { useState, useEffect } from 'react'
import { useValidation } from 'lib/hooks/useValidation'
import { useAddUserMutation } from '../store/features/users/usersSlice'

interface ValidationError {
  email: string
  password: string
  name: string
  gender: string
}

export default function Signup() {
  const [email, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setUserName] = useState('')
  const [gender, setGender] = useState<null | RADIO_VALUES_ENUM>(null)
  const [error, setError] = useState<ValidationError>({
    email: '',
    password: '',
    name: '',
    gender: ''
  })
  const { required, isMail, isPass, isSelect } = useValidation()
  const [addUser] = useAddUserMutation()

  useEffect(() => {
    if (
      !Object.values(error).some((val) => val.length) &&
      typeof gender === 'number'
    ) {
      addUser({
        email,
        password,
        name,
        gender
      })
        .unwrap()
        .catch((error) => console.log(error))
    }
  }, [error])

  const submitToServer = () => {
    initialErrorState()

    signUpValidate()
  }

  const initialErrorState = () => {
    setError((prevState) => {
      return {
        ...prevState,
        email: '',
        password: '',
        name: '',
        gender: ''
      }
    })
  }

  const signUpValidate = () => {
    if (!required(email)) {
      setError((prevState) => {
        return {
          ...prevState,
          email: 'メールアドレスを入力してください'
        }
      })
    } else {
      if (!isMail(email)) {
        // errorStateに複数の状態を保持するために関数型でStateに値を保存する
        setError((prevState) => {
          return {
            ...prevState,
            email: 'メールアドレスの形式で入力してください'
          }
        })
      } else {
        setError((prevState) => {
          return {
            ...prevState,
            email: ''
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

    if (!required(name)) {
      setError((prevState) => {
        return {
          ...prevState,
          name: 'ユーザー名を入力してください'
        }
      })
    } else {
      setError((prevState) => {
        return {
          ...prevState,
          name: ''
        }
      })
    }

    if (!isSelect(gender)) {
      setError((prevState) => {
        return {
          ...prevState,
          gender: '性別を選択してください'
        }
      })
    } else {
      setError((prevState) => {
        return {
          ...prevState,
          gender: ''
        }
      })
    }
  }

  return (
    <>
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
          defaultValue={email}
          error={error['email']}
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
          defaultValue={name}
          error={error['name']}
        />

        <label>性別</label>
        <Radio
          className="flex"
          options={RADIO_OPTION}
          onChange={setGender}
          defaultValue={gender}
          error={error['gender']}
        />

        <Button
          variant="primary"
          className="ml-auto"
          onClick={submitToServer}
        >
          送信
        </Button>
      </div>
    </>
  )
}
