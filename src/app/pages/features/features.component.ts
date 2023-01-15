import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(){
    const urlFake = "https://jsonplaceholder.typicode.com/users";
    this.http.get(urlFake)
      .subscribe((res: any) => {
        console.log("--------- Usuarios ----------------", res);
      }, (error) => {
        // redirect
        this.router.navigate(['/']);
        const message = error?.message ? error?.message : 'Houve um erro ao logar.';
        console.log(message);
        alert(message)
      });
  }

}
