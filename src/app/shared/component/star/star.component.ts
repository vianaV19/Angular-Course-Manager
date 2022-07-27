import { Component, Input,  OnInit } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
  })

export class StarComponent implements  OnInit {

    @Input() rating!:number;

    _starWidth:number = 74;

    //calc stars rating 
    ngOnInit(){
        this._starWidth =  this._starWidth * this.rating  / 5 ;
    }

    get starWidth(){
        return this._starWidth;
    }

    //I don't know what this function do
    // ngOnChanges(changes: SimpleChanges): void {
    //     this.starWidth =  this.starWidth * this.rating / 5 ;
    // }
}