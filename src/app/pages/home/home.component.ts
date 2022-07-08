import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  text: string = '';
  count: number = 0;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000').subscribe((res: any) => {
      this.text = res.name;
    })
  }

  inc() {
    this.count += 1;
  }

  dec() {
    this.count -= 1;
  }
}
