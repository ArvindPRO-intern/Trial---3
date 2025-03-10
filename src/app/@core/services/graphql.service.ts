import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  getUsers() {
    return this.apollo.watchQuery({
      query: gql`
        query {
          users {
            id
            name
            email
          }
        }
      `,
    }).valueChanges;
  }
}