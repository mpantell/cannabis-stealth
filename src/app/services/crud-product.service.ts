import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudProductService {
  productData$: Observable<Product[]>;
  private productCollection: AngularFirestoreCollection<Product>;

  constructor(private firestore: AngularFirestore) { 
    this.productCollection = this.firestore.collection<Product>('products');
    this.productData$ = this.getProducts(this.productCollection);
  }

  createProduct(newProduct: Product): Promise<any> {
    const db = this.firestore.collection('products');
    const now = firebase.firestore.Timestamp.fromDate(new Date());
    return db.add(newProduct).catch((error:any) => {
      console.log(error);
      throw error;
    });
  }

  updateProduct(existingProduct: Product): Promise<void> {
    const db = this.firestore.collection('products');
    try {
      return db.doc(existingProduct.id).update(existingProduct);
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  }

  deleteProduct(existingProductId: string): Promise<void> {
    const db = this.firestore.collection('products');
    return db.doc(existingProductId).delete();
  }

  getProducts(productCollection: AngularFirestoreCollection<Product>): Observable<Product[]> {
    return productCollection.snapshotChanges().pipe(
      map((actions: any): Product[] =>
        actions.map((a: any): Product => {
          const data = a.payload.doc.data() as Product;
          const id = a.payload.doc.id;
          return {...data, id: a.payload.doc.id } as Product;
        }))
    );
  }

  getProduct(id:string):Observable<Product> {
    const product = this.firestore.collection('products').doc(id);
    return product.valueChanges() as Observable<Product>;
  }
}
