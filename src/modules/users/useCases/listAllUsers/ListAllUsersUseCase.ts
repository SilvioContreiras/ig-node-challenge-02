import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    // execute({ user_id }: IRequest): User[] {
    //   this.usersRepository.list();
    // }

    execute({ user_id }: IRequest): User[] {
        // const users = this.usersRepository.list();

        const user = this.usersRepository.findById(user_id);

  
            if (!user.admin) {
                throw new Error(`user is not allowed to see all users`);
            }
            
            return this.usersRepository.list();
    }
}

export { ListAllUsersUseCase };
