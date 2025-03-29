import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-manage-movies',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './manage-movies.component.html',
  styleUrl: './manage-movies.component.css'
})
export class ManageMoviesComponent {
  private formBuilder =inject(FormBuilder);

MovieForm = this.formBuilder.group({
  title: ['',Validators.required],
  synopsis: ['',Validators.required],
  poster: ['',Validators.required],
  genre: ['',Validators.required],
  note: ['',Validators.required],
  weLike: [''],
  duration: ['',Validators.required]
});

addMovie(){
  console.log(this.MovieForm.value);
}

}
