import { HttpClient } from "@angular/common/http";
import { Token } from "@angular/compiler";
import { inject } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

export const currentUser = (): { [key: string]: string } => {
    const cookieService = inject(CookieService);
    const token = cookieService.get('token') as string;

    return { email: "test@test.com", id: "1", role: "admin", token};
};
