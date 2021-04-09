import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private http:HttpClient) { }

  ngOnInit() {
  }

  onAddStudent(stu){
    console.log(stu.value);
    this.http.post('http://localhost:3000/Student',stu.value).subscribe((result)=>{
      console.log(result);
    })

  }

}
