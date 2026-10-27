import { Service } from '@angular/core';
import { User } from '../../model/interfaces_user';

@Service()
export class UserService {
    users: User[] = [];
    user={} as User;

    constructor() {
        this.user={id:1, mail:"user1@gmail.com", passwd:"user1", name:"user", surname:"1"} as User
        this.users.push(this.user)
        this.user={id:2, mail:"user2@gmail.com", passwd:"user2", name:"user", surname:"2"} as User
        this.users.push(this.user)
        console.log(this.users);
    }

    validate(email:string, passwd:string) {
        for(let index = 0; index < this.users.length; index++) {
            if(this.users[index].mail == email && this.users[index].passwd == passwd) {
                return this.users[index]
            }
        }

        return {};
    }

    addUser(user:User) {
        this.users.push(user);
    }
}
