import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  public signupForm:    FormGroup;
  public username:      FormControl;
  public email:         FormControl;
  public password:      FormControl;
  public confirmation:  FormControl;

  constructor() { }

  ngOnInit() {
    this.username = new FormControl("", Validators.required);
    this.email = new FormControl("", [
      Validators.required,
      Validators.email
    ]);
    this.password = new FormControl("", Validators.required);
    this.confirmation = new FormControl("", Validators.required);

    this.signupForm = new FormGroup({
      username: this.username,
      email: this.email,
      password: this.password,
      confirmation: this.confirmation
    });
  }

  onSubmit(): void {
    console.log(this.signupForm.value);
  }
}
