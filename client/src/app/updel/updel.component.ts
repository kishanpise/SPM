import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-updel',
  templateUrl: './updel.component.html',
  styleUrls: ['./updel.component.css']
})
export class UpdelComponent implements OnInit {
title;
pros;
pro;
cat;
team;
desc;
tech;
sdate;
edate;
  constructor(private http:HttpClient,private route:ActivatedRoute,private api:ApiService,private router:Router) { }

  ngOnInit() {
    let p = this.route.params.subscribe((params)=>{
      this.title=params.title;
    })
    this.api.onfetchPro(this.title,(result)=>{
      console.log(result[0]);
      this.pro=result[0];
     
      this.cat=this.pro.cat;
      console.log(this.cat)


      this.title= this.pro.title;
      this.cat=this.pro.cat;
      this.team=this.pro.team;
      this.desc=this.pro.desc;
      this.tech=this.pro.tech;
      this.sdate=this.pro.sdate;
      this.edate=this.pro.edate;
    })
    
  }


  onupdateProject(pro){
    console.log(pro.value.title);
    this.http.put('http://localhost:3000/Project/'+pro.value.title,pro.value).subscribe((result)=>{
      this.pros=result;
      console.log(result);
      this.router.navigate(['/list'])
    })
  }

  ondeleteProject(pro){
    console.log(pro.value.title);
      this.http.delete('http://localhost:3000/Project/'+pro.value.title).subscribe((result)=>{
        console.log(result);
        this.router.navigate(['/list'])
      });  
    }
  }

