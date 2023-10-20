import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
    email: string = ''
    password: string = ''
    passwordAgain: string = ''
    validationError: string = ''
  
  constructor(
    private RegistrationServiceService: RegistrationServiceService,
    private http : HttpClient
    ) {

  }

  onRegisterClick() {
    this.validationError = ''

    if (this.password === this.passwordAgain) {
      const registrationData = {
        email: this.email,
        password: this.password
      }

      this.http.post('http://localhost:8080/api/register', registrationData, { responseType: 'text' })
      .subscribe(
        response => {
          console.log('Succes', response)
        },
        error => {
          console.error('Error', error)
          this.validationError = 'Registration failed, please try again'
        }
      )
    } else {
      console.error('Passwords do not match')
    }

    if (
      this.RegistrationServiceService.validateEmail(this.email) &&
      this.RegistrationServiceService.validatePassword(this.password)
    ) {
      console.log('Success')
    } else {
      console.error('Invalid email or password')
    }
  }
}
