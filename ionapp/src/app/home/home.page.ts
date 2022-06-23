import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  popular: Object[] = [];

  
constructor(private http: HttpClient) { }

ionViewWillEnter() {
  this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=7f9d1ce45ed96068abea613b03a3d31e').subscribe(response => {
      this.popular = response['results'];
      console.log(this.popular);
    });
  };

}

