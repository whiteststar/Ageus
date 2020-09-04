import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
  @Input() persons: any;


  constructor() { }

  ngOnInit(): void {
    console.log(this.persons);
  }

}
