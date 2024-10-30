import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})

export class SmallCardComponent implements OnInit {

  @Input()
  Id:string = "1";

  @Input()
  photoSmall:string = '';

  @Input()
  textDescription:string ='';

  constructor() { }

  ngOnInit(): void {
    
  }
}
