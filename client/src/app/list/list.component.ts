import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pros;
  constructor(private http:HttpClient,private route:Router) {
    this.http.get('http://localhost:3000/Projects').subscribe((result)=>{
      console.log(result);
      this.pros= result;
    })
   }

  ngOnInit() {
  }

  onClick(p){
    console.log(p)
    this.route.navigate(['/update',p]);
  }

  go(){
    this.route.navigate(['/add'])
  }
}
