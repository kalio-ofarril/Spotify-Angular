import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api;

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  sendCredential(email: string, password: string): Observable<any> {
    const body = { email, password};
    return this.http.post(`${this.URL}/auth/login`,body)
    .pipe(
      tap( (responseOk: any) => {
        const {tokenSession, data} = responseOk;
        this.cookieService.set('token_service', tokenSession, 4, '/');
        this.router.navigate(['/']);
      })
    );
  }

  canActivate(): boolean {
    try{
      const token: boolean = this.cookieService.check('token_service');
      if(!token){
        this.router.navigate(['/','auth']);
      }
      return token;
    }catch(err){
      console.log("error on guard ", err)
      return false;
    }
  }

  getToken(): string {
    try{
      const token: string = this.cookieService.get('token_service');
      return token;
    }catch(err){
      return '';
    }
  }

  logout(): void {
    this.cookieService.delete('token_service', '/');
    this.router.navigate(['/auth']);
  }
}
