import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nx-using-angular-spring-boot-lazy-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lazyForm.component.html',
  styleUrl: './lazyForm.component.scss',
})
export class LazyFormComponent /*implements OnInit*/{
  simpleForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    name: new FormControl("", [Validators.required]),
  });

  get name() {
    return this.simpleForm.get("name");
  }

  get email() {
    return this.simpleForm.get("email");
  }

  /*constructor() {}

  ngOnInit(): void {}*/

  getNameErrorMessage() {
    if (this.name?.hasError("required")) {
      return "You must enter a value";
    }

    return this.email?.hasError("email") ? "Not a valid email" : "";
  }

  getEmailErrorMessage() {
    if (this.email?.hasError("required")) {
      return "You must enter a value";
    }

    return this.email?.hasError("email") ? "Not a valid email" : "";
  }

  submitForm() {
    if (this.email?.invalid || this.name?.invalid) return;
    alert("Form submitted successfully");
  }
}
