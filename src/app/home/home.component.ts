import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public enteredText: string | undefined;

  constructor(private service: SharedService) {}
  onClick() {
    console.log(this.enteredText);
    this.service.raiseDataEventEmitter(this.enteredText);
  }
}
