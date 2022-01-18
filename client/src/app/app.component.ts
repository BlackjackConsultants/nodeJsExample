import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get('http://localhost:3000').subscribe((d)=>{
      console.log(d);
    });
  }
}
