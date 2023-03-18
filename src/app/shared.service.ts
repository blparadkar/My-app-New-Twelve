import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public dataEmitter = new Subject<string>();

  constructor(private service: SharedService) {}

  raiseDataEventEmitter(data: any) {
    this.dataEmitter.next(data);
  }
}
