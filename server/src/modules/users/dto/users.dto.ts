export class CreateUserDto {
	readonly email: string
	readonly password: string
	readonly name: string
	readonly gender: number
	readonly avatar_image?: string
	readonly profile_text?: string
}