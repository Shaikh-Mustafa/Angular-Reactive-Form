import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {

  memberForm = new FormGroup({
firstName: new FormControl(),
lastName : new FormControl(),
mobile : new FormControl(),
phone : new FormControl(),
gmail : new FormControl(),
emirates : new FormControl,
address : new FormControl(),
nationality : new FormControl(),
package : new FormControl(),
dob : new FormControl(),
Activity : new FormControl(),
photo : new FormControl(),
photoId : new FormControl(),
Amount : new FormControl(),
vat : new FormControl(),
TotalVatAmount : new FormControl()
  }
)
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    window.alert("Please check the Console!!");
    // console log the form values after submitting..
    console.log(this.memberForm.value);
  }

}
