import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FilterService {

  private emitFilterSource = new Subject<any>();
  changeEmitted = this.emitFilterSource.asObservable();

  emitFilter(filter: any) {
    this.emitFilterSource.next(filter);
  }
}
