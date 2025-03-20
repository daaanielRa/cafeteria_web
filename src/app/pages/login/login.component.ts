import { Component, OnInit } from '@angular/core';
import { doc, DocumentData, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/connection';
import { FirestoreService } from '../../services/firestore.service';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  user: DocumentData | undefined;

  constructor(private firestoreService:FirestoreService){}

  async ngOnInit() {
    await this.firestoreService.getUser("8z8G40lzlaoxwTrCAYFD").then(usuario =>{
      this.user = usuario

      console.log(usuario);
      
    })
  }
  
}
