import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";
import { HttpClient, provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";

import * as moockRaw from "../../../data/user.json";
import { of } from "rxjs";

describe("AuthService", () => {
  let service: AuthService;
  let mockUser: any = (moockRaw as any).default;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), AuthService],
    });
    httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', ['post']);
    const routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
    const cookieSpy = jasmine.createSpyObj("CookieService", ["set"]);

    service = new AuthService(httpClientSpy, cookieSpy, routerSpy);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return an object with 'data' and 'tokenSession'",(done: DoneFn) => {
    
    // Arrange
    const user: any = mockUser.userOk;
    const mockResponse = {
      data: {},
      tokenSession: 'token'
    }

    httpClientSpy.post.and.returnValue(
      of(mockResponse)
    );

    // Act
    service.sendCredential(user.email, user.password)
    .subscribe(responseApi => {
      const getProperties = Object.keys(responseApi);
      expect(getProperties).toContain('data');
      expect(getProperties).toContain('tokenSession');
      done();
    })
  })
});
