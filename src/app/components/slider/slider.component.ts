import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderC implements OnInit {
  
  @Input() nombre: String;
  @Input() tamano: String;
  
  constructor() { }

  ngOnInit(): void {
  }

}
