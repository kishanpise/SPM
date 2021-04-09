import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private http:HttpClient, private route:Router) { }

  ngOnInit() {
  }

  onaddProject(pro){
    console.log(pro.value);
    this.http.post('http://localhost:3000/Project',pro.value).subscribe((result)=>{
      console.log(result);
      this.route.navigate(['/list']);
    })
}
}
