import { Component, OnInit } from '@angular/core';
import datawheather from './file/wheatherData.json';
import {wheatherData} from './model/wheather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
  
  public datawheather:wheatherData[] = datawheather;

  searchValue: string | undefined;
  foundObject: any;

  onSubmit() {
    this.foundObject = this.datawheather.find(item => item.city === this.searchValue);
    return false;
  } 
  
}


