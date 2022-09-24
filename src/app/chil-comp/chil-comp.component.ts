import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chil-comp',
  templateUrl: './chil-comp.component.html',
  styleUrls: ['./chil-comp.component.css']
})
export class ChilCompComponent implements OnInit {

  @Input() model: number[] = [];
  @Output() readyNotification = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.emit(), 5000);
  }

  emit(){
    this.readyNotification.emit("Houston we have a problem!.");
  }

}