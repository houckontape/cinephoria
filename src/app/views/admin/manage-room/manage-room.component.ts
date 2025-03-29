import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-manage-room',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './manage-room.component.html',
  styleUrl: './manage-room.component.css'
})
export class ManageRoomComponent {

}
