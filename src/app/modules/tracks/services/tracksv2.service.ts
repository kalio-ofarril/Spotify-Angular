import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { TrackModel } from "@core/models/tracks.models";
import { CookieService } from "ngx-cookie-service";
import { catchError, map, mergeMap, Observable, of, tap } from "rxjs";
import { environment } from "src/environments/environment";

export const getAllTracks$ = (): Observable<any> => {
  const URL = environment.api;
  return inject(HttpClient)
    .get(`${URL}/tracks`)
    .pipe(
      map(({ data }: any) => {
        return data;
      })
    );
};

export const getAllRandom$ = (): Observable<any> => {
  const URL = environment.api;
  return inject(HttpClient)
    .get(`${URL}/tracks`)
    .pipe(
      mergeMap(({ data }: any) => skipById(data, 2)),
      tap((data) => console.log(data)),
      catchError((err) => {
        console.log("error", err);
        return of([]);
      })
    );
};

export const getCurrentUser = (): string => {
  const cookieService = inject(CookieService);
  return cookieService.get('token');
}

export const skipById = (
  listTracks: TrackModel[],
  id: number
): Promise<TrackModel[]> => {
  return new Promise((resolve, reject) => {
    const listTmp = listTracks.filter((a) => a._id != id);
    resolve(listTmp);
  });
};
