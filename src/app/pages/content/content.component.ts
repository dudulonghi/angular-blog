import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{


  ContentTitle: string = ''; 

  image: string = ''; 
  contentDescription: string = '';
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
        this.id = value.get("id");
        this.setValuesToComponent(this.id); 
    });
}

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id )[0]
      console.log(result)
      this.ContentTitle = result.title
      this.contentDescription = result.description
      this.image = result.photoCover
  }
} 
