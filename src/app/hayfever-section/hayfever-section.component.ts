import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-hayfever-section',
  templateUrl: './hayfever-section.component.html',
  styleUrls: ['./hayfever-section.component.css']
})
export class HayfeverSectionComponent {

  rates: any[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  hayfeverEntryControl = new FormControl('')
  onSubmit() {
    console.log(this.hayfeverEntryControl.value);
  }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.rates = result?.data?.rates;
        this.loading = result.loading;
        this.error = result.error;
      });
  }

}
