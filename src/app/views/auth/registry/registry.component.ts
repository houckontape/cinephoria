import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UsersService} from '../../../core/service/users.service';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-registry',
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgClass,
  ],
  templateUrl: './registry.component.html',
  styleUrl: './registry.component.css'
})
export class RegistryComponent {
  signupForm: FormGroup;
  successMessage: string | null = null;
  AlertMessage:string | null = null;

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.signupForm = this.fb.group({
        username: ['', Validators.required],
        userEmail: ['', [Validators.required,Validators.email]],
        userPassword: ['', [Validators.required, Validators.minLength(6)]],
      }
    );
  }



  onSubmit() {
    if (this.signupForm.valid) {
      // Appeler le service pour créer l'utilisateur
      this.usersService.createUser(this.signupForm.value).subscribe(
        (response) => {
          console.log(' Utilisateur créé avec succès !', response);
          // Réinitialiser le formulaire ou rediriger l'utilisateur, etc.
          this.successMessage =' Utilisateur créé avec succès';
          this.signupForm.reset();
        },
        (error) => {
          console.error(' Erreur lors de la création de l\'utilisateur :', error);
          // Gérer les erreurs, afficher un message d'erreur, etc.
          this.AlertMessage= ' Erreur lors de la création';

        }
      );


    } else {

      console.log("formulaire invalide");
    }
  }


}
