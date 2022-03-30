import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private emitPageChanged = new Subject();
  changeEmitted = this.emitPageChanged.asObservable();

  emitPage(page: any) {
    this.emitPageChanged.next(page);
  }
}
