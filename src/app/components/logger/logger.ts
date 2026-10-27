import { Component, inject, model} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user_service/user-service';
import { User } from '../../model/interfaces_user';

@Component({
  imports: [FormsModule],
  selector: 'app-logger',
  styleUrl: './logger.css',
  templateUrl: './logger.html',
})

export class Logger {
  mail = model<string>()
  passwd = model<string>()

  userService=inject(UserService)

  loginarse() {
    // alert('email: '+this.mail() + ', password: ' +this.passwd());
    let user = this.userService.validate(this.mail() as string, this.passwd() as string) as User
    console.debug(user)
    if(Object.keys(user).length == 0) {
      console.log("usuario no vàlido")
    } else {
      console.log("usuario valido")
    }

    //user={id:3, mail:"user3@gmail.com", passwd:"user3", name:"user", surname:"3"}
    //this.userService.addUser(user)

    //console.log(this.userService.users)
  }
}
