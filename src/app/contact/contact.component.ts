import { routeInAnimation } from './../shared/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    routeInAnimation
  ]
})
export class ContactComponent implements OnInit {

  @HostBinding('@routeInAnimation') routeAnimation = true;

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
