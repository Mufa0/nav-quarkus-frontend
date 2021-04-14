import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpErrorHandler {
  handlError<T>(error: HttpErrorResponse): Observable<T> {
    console.log(error);
    return throwError(error.message);
  }
}
