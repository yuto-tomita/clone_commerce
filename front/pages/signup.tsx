import { Text, Input, Radio, Button } from '@components/ui'
import style from '@styles/Signup.module.css'
import { RADIO_OPTION } from 'lib/constant/SignupPageConstant'
import { useState } from 'react'

export default function Signup() {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [gender, setGender] = useState<null | number>(null)

  return (
    <div>
      <Text className="text-center" variant="sectionHeading">
        会員登録
      </Text>

      <div className="mx-auto w-2/4">
        <label>メールアドレス</label>
        <Input
          placeholder="メールアドレスを入力してください"
          bgColor="bg-white"
          className={style.signupFormInputStyle}
          onChange={setMail}
          defaultValue={mail}
        />

        <label>パスワード</label>
        <Input
          placeholder=""
          bgColor="bg-white"
          inputType="password"
          className={style.signupFormInputStyle}
          onChange={setPassword}
          defaultValue={password}
        />

        <label>ユーザー名</label>
        <Input
          placeholder="このサイトで使用するユーザー名を使用してください"
          bgColor="bg-white"
          className={style.signupFormInputStyle}
          onChange={setUserName}
          defaultValue={userName}
        />

        <label>性別</label>
        <Radio
          className="flex"
          radioButtonData={RADIO_OPTION}
          onChange={setGender}
          defaultValue={gender}
        />

        <Button variant="primary" className="ml-auto">
          送信
        </Button>
      </div>
    </div>
  )
}
