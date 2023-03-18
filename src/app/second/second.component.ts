import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
  public inputText: string | undefined;
  constructor(private service: SharedService) {}
  ngOnInit(): void {
    this.service.dataEmitter.subscribe((value) => {
      this.inputText = value;
    });
  }
}
