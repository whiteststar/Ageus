import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './api.service';
import { Persons } from './persons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'ageus2';

  myForm: FormGroup;
  persons: Persons[] = [];
  // tslint:disable-next-line: typedef
  getPersons() {
    this.api.getPersons()
    .subscribe(resp => {
      console.log(resp);
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);

      for (const data of resp.body) {
        this.persons.push(data);
      }
        console.log(this.persons);

      });
  }
  constructor(private api: ApiService) { console.log('hello')}

  ngOnInit(){
     this.myForm = new FormGroup({
           'name':new FormControl(null),
           'email':new FormControl(null)
      })

  }
};

