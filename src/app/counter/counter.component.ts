import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class CounterComponent implements OnInit {

  constructor() { }

  @Input() count: number; 
  @Output() incevent  = new EventEmitter();
  @Output() decevent = new EventEmitter();

  ngOnInit() {
  }

  inc(){

    this.count = ++this.count
    this.incevent.emit(this.count);
  }
  dec(){
    this.count = --this.count
    this.decevent.emit(this.count);
  }

}
