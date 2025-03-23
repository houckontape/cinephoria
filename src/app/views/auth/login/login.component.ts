import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass} from '@angular/common';
import {AuthService} from '../../../core/service/auth.service';
import {UsersService} from '../../../core/service/users.service';




@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    NgClass,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'Cinephoria';
  loginForm:FormGroup;


  constructor(private fb: FormBuilder, private authService: AuthService,private router: Router,private userService: UsersService,
  ) {
    this.loginForm = this.fb.group({
        userEmail: ['', [Validators.required,Validators.email]],
        userPassword: ['', [Validators.required, Validators.minLength(6)]],
      }
    );
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if(this.loginForm.valid){
      this.authService.auth(this.loginForm.value).subscribe(
        (response) => {
          console.log(' Utilisateur identifier avec succès !', response);
          this.userService.setUser(response);
          // Réinitialiser le formulaire ou rediriger l'utilisateur, etc.
          this.router.navigate(['/profil']);
        },
        (error) => {
          console.error(' Erreur lors de l\'identification de l\'utilisateur :', error);
          // Gérer les erreurs, afficher un message d'erreur, etc.


        }
      )
    }
  }

}
