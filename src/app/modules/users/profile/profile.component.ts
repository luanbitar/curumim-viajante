import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public data: any;

  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.data = this.db.collection('notes').valueChanges();
    console.log(this.data);

  }


}
