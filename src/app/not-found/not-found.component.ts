import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit{
  
  @Input() visible:boolean=false;
  @Input() notFoundMessage:string = "No results found !!";
  @Input() resetLinkText:string = "Reset";
  @Input() resetLinkRoute:string = '/home';
  constructor(){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
