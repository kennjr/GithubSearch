import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/User';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    let testUser:User = {
      html_url:value.html_url,
      avatar_url:value.avatar_url,
      username:value.login,
      email:"user@emails.com",
      followers_count:20,
      following_count:12,
      public_repo_count:23
    }
    return testUser;
  }

}
