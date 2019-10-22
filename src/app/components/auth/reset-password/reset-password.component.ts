import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as firebase from "firebase/app";
import { ActivatedRoute, Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { CustomValidators } from "../custom-validators";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.css"]
})
export class ResetPasswordComponent implements OnInit {
  public frmSetNewPassword: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.frmSetNewPassword = this.formBuilder.group({
      password: this.formBuilder.control(null, [
        Validators.compose([
          Validators.required,
          CustomValidators.patternValidator(/\d/, {
            hasNumber: true
          }),
          CustomValidators.patternValidator(/[A-Z]/, {
            hasCapitalCase: true
          }),
          CustomValidators.patternValidator(/[a-z]/, {
            hasSmallCase: true
          }),
          CustomValidators.patternValidator(
            /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
            {
              hasSpecialCharacters: true
            }
          ),
          Validators.minLength(8)
        ])
      ]),
      confirmPassword: this.formBuilder.control(null, [
        Validators.compose([Validators.required])
      ]),
      validator: CustomValidators.passwordMatchValidator
    });
  }

  onSubmit() {
    const password = this.frmSetNewPassword.get("password").value;
    const confirmPassword = this.frmSetNewPassword.controls["confirmPassword"]
      .value;

    const code = this.route.snapshot.queryParams["oobCode"];
    this.afAuth.auth
      .confirmPasswordReset(code, password)
      .then(() => {
        this.router.navigate(["auth"]);
      })
      .catch(err => {
        // const errorMessage = firebase.FirebaseErrors.Parse(err.code);
        console.log("Something is wrong");
      });
  }
}
