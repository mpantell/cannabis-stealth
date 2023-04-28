import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentAsset } from 'src/models/content-asset.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudContentService {
  contentData$: Observable<ContentAsset[]> = new Observable<ContentAsset[]>();
  private contentAssetCollection: AngularFirestoreCollection<ContentAsset>;

  constructor(private firestore: AngularFirestore) {
    this.contentAssetCollection = this.firestore.collection<ContentAsset>('content-assets');
    //this.contentData$ = this.getContentAssets(this.contentAssetCollection);
  }

  createContentAsset(newContentAsset: ContentAsset): Promise<any> {
    const db = this.firestore.collection('content-assets');
    const now = new Date();
    newContentAsset['createdDate'] = newContentAsset.createdDate ? newContentAsset.createdDate : now;
    return db.add(newContentAsset).catch((error: any) => {
      console.log(error);
      throw error;
    });
  }

  updateContentAsset(existingContentAsset: ContentAsset): Promise<void> {
    const db = this.firestore.collection('content-assets');
    try {
      return db.doc(existingContentAsset.id).update(existingContentAsset);
    } catch (error) {
      console.error('Error updating content asset:', error);
      throw error;
    }
  }

  deleteProduct(existingProductId: string): Promise<void> {
    const db = this.firestore.collection('products');
    return db.doc(existingProductId).delete();
  }

  getContentAssets(productId?: string): Observable<ContentAsset[]> {
    const results = this.contentAssetCollection.snapshotChanges().pipe(
      map((actions: any): ContentAsset[] =>
        actions.map((a: any): ContentAsset | null => {
          const data = a.payload.doc.data() as  ContentAsset;
          const id = a.payload.doc.id;
          if (!productId || data.productId === productId) { // check if the contentAsset productId matches the supplied ID
            return { ...data, id: a.payload.doc.id } as ContentAsset;
          }
          return null; // return null for non-matching contentAssets
        }).filter((contentAsset: ContentAsset | null) => contentAsset) // filter out null values
      )
    );

    return results;
  }
  
  

  getContentAsset(id: string): Observable<ContentAsset> {
    const contentAsset = this.firestore.collection('content-assets').doc(id);
    return contentAsset.valueChanges() as Observable<ContentAsset>;
  }
}
