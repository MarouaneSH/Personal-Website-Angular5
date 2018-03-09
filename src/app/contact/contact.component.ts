import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  NameFormControl = new FormControl('', [
    Validators.required,
  ]);

  textFormControl = new FormControl('', [
    Validators.required,
  ]);
  ngOnInit() {
  }

}
