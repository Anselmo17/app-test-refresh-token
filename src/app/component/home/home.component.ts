import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(){
    const urlFake = "https://jsonplaceholder.typicode.com/photos";
    this.http.get(urlFake)
      .subscribe((res: any) => {
        console.log("--------- Fotos ----------------", res);
      }, (error) => {
        // redirect
        this.router.navigate(['/']);
        const message = error?.message ? error?.message : 'Houve um erro ao logar.';
        console.log(message);
        alert(message)
      });
  }
}
