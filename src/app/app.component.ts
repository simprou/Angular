import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  @ViewChild('input1')
  input1:ElementRef;

  @ViewChild('input2')
  input2:ElementRef;

  input3:any;

  @ViewChild(ChildComponent)
  child!:ChildComponent;


  name = 'Angular ' + VERSION.major;
  dataPassed = '';

  passData(name2:any)
  {
   // this.dataPassed=name1;
    
    if (this.input2.nativeElement.value == name2)
        this.child.data2=name2;  
    
        this.input1.nativeElement.value = "Thank You";
        this.input2.nativeElement.value = "Very Much";
  }

}
