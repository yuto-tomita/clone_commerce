import { ApiProperty } from '@nestjs/swagger'
import { GenderEnum } from '../entity/users.entity'
import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator'

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'メールアドレスを入力してください' })
  @IsEmail({ message: 'メールアドレスの形式で入力してください' })
  email: string

  @ApiProperty()
  @IsNotEmpty({ message: 'パスワードを入力してください' })
  password: string

  @ApiProperty()
  @IsNotEmpty({ message: '名前を入力してください' })
  readonly name: string

  @ApiProperty({ enum: GenderEnum })
  @IsNotEmpty({ message: '性別を選択してください' })
  @IsEnum(GenderEnum, { message: '選択されている値が不正です' })
  readonly gender: GenderEnum

  @ApiProperty()
  readonly avatar_image?: string

  @ApiProperty()
  readonly profile_text?: string
}
