import { Injectable } from '@angular/core';
import { fireSignIn } from 'src/firebase';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  isAuth = false;
  constructor() {}
  async signInUser(email: string, password: string) {
    await fireSignIn(email, password);
  }
}
