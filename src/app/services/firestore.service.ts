import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getDoc,
  getDocFromServer,
  getDocs,
  getFirestore,
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private app = initializeApp(environment.firebaseConfig);
  private db = getFirestore(this.app);

  constructor() {}

  async getUser(uid: string){
    const userRef = doc(this.db, "usuarios", uid);
    const userSnapshot = await getDoc(userRef)

    return userSnapshot.data()
  }

  async getCollection(collectionName: string) {
    const colRef = collection(this.db, collectionName);
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map((doc) => doc.data());
  }
}
