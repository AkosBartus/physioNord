import { Injectable } from '@angular/core';
import { z } from 'zod'

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  validateEmail(email:string): boolean {
    const emailSchema = z.string().email()
    try {
      emailSchema.parse(email)
      return true
    } catch (error) {
      return false
    }
  }

  validatePassword(password: string): boolean {
    const passwordSchema = 
    z.string()
    .min(6, { message: 'The password must be minimum 6 caracters lenght'})
    .regex(/[A-Z]/, {
      message: 'The password must contains a Capital letter'
    })
    try {
      passwordSchema.parse(password)
      return true
    } catch (error) {
      return false
    }
  }

  constructor() { }
}
