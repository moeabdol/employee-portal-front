import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl("", Validators.required),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", Validators.required),
      confirmation: new FormControl("", Validators.required)
    }, this.passwordMatchValidator);
  }

  passwordMatchValidator(fg: FormGroup): { [s: string]: boolean } {
    return fg.get("password").value === fg.get("confirmation").value ?
      null : { "mismatch": true };
  }

  onSubmit(): void {
    console.log(this.signupForm.value);
  }
}
