import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {

    }

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzRRT8jh_EY8jXu2vu3YLyMy5mSa3ep8Y', {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(catchError(errorRes => {
            let errorMessage = 'An unkown error occurred';
            if (!errorRes.error || !errorRes.error.error) {
                return throwError(errorMessage);
            }
          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'An account already exists with this email address';
          }
          return throwError(errorMessage);
        }));
    }
}