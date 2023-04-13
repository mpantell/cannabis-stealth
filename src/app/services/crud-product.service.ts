import { Injectable } from '@angular/core';
import { Product } from 'src/models/product.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class CrudProductService {

  constructor(private firestore:AngularFirestore) { }

  createProduct(newProduct:Product):any {
    const db = this.firestore.collection('products');
    const now = firebase.firestore.Timestamp.fromDate(new Date());
    try{return db.add(newProduct)}catch{(error:any)=>{
      console.log(error);
    }}
   /* .then(() => {
      console.log('Product created successfully!');
    })
    .catch((error) => {
      console.log('Error saving product to database:', error);
      throw error;
    });*/
  }

  updateProduct(existingProduct:Product){
    //tbd
  }

  deleteProduct(existingProduct:Product){
    //tbd
  }

}
