import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

export const sessionGuardFunctional = (): boolean => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  try {
    const token: boolean = cookieService.check("token_service");
    if (!token) {
      router.navigate(["/", "auth"]);
    }
    return token;
  } catch (err) {
    console.log("error on guard ", err);
    return false;
  }
};
