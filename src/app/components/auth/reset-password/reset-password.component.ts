import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public frmSetNewPassword : FormGroup; 
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {

    this.frmSetNewPassword = this.formBuilder.group({
      password: this.formBuilder.control(null, [
          Validators.required,
          Validators.minLength(8),
          // Validators.maxLength(15),
      ]),
      confirmPassword: this.formBuilder.control(null, [
          Validators.required,
          Validators.minLength(8),
          // Validators.maxLength(15),
      ])
  });

  }

  onSubmit () {
    const password = this.frmSetNewPassword.get('password').value
    const confirmPassword = this.frmSetNewPassword.controls['confirmPassword'].value;
    if (password !== confirmPassword) return;
    
    const code = this.route.snapshot.queryParams['oobCode'];
    this.afAuth.auth
        .confirmPasswordReset(code, password)
      .then(() =>  {
        this.router.navigate(['auth'])
        console.log("Sucsess reset")
      })
      .catch(err => {
        // const errorMessage = FirebaseErrors.Parse(err.code); // check this helper class at the bottom
      });
  }
}

