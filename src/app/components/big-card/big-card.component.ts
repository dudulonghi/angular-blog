import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit{
  @Input()
  Id:string =  "0";
  @Input() 
  photoCover:string = '';
  @Input() 
  cardTitle:string = '';
  @Input() 
  cardDescription:string = '';

  constructor(){
  }
  ngOnInit(): void {
  }
}
