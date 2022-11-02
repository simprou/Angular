import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 
  @Input() data1:any;
  data2:any;

  @Output() fun = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}