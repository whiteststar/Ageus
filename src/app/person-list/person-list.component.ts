import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Persons } from '../persons';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  @Input() persons: any =[];
  // @Input() persons =[
  //   {
  //     id: 1,
  //     name: "Alika",
  //     lastName: "Dangote",
  //     minor: false,
  //     resident: true,
  //     email:"aliko.dangote@argeus.be",
  //     nationalNumber: 89073116530
  //   },
  //   {
  //     id: 2,
  //     name: "Alika",
  //     lastName: "Dangote",
  //     minor: false,
  //     resident: true,
  //     email:"aliko.dangote@argeus.be",
  //     nationalNumber: 89073116530
  //   }

  // ];
  getPersons() {
    this.api.getPersons()
    .subscribe((resp: Persons[]) => {
      console.log(resp);
      this.persons = resp;
      console.log(this.persons);

      });
  }
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    console.log(this.persons);
  }

}
