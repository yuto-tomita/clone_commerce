import { User } from "src/domain/entity";

export interface UserInterface {
	allUsers(id: string): Promise<User[]>
}