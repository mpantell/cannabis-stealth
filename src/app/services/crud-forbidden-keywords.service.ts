import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ForbiddenKeyword } from 'src/models/forbidden-keyword.model';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudForbiddenKeywordsService {

  private forbiddenKeywordsCollection: AngularFirestoreCollection<ForbiddenKeyword>;
  forbiddenKeywords: Observable<ForbiddenKeyword[]>;

  constructor(private firestore: AngularFirestore) {
    this.forbiddenKeywordsCollection = this.firestore.collection<ForbiddenKeyword>('forbidden-keywords');
    this.forbiddenKeywords = this.forbiddenKeywordsCollection.snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data() as ForbiddenKeyword;
            const id = action.payload.doc.id;
            return { ...data, id };
          });
        })
      );
  }


  getForbiddenKeywords(): Observable<ForbiddenKeyword[]> {
    return this.forbiddenKeywords;
  }

  getForbiddenKeyword(id: string): Observable<ForbiddenKeyword> {
    const keyword = this.firestore.collection('forbidden-keywords').doc(id);
    return keyword.valueChanges() as Observable<ForbiddenKeyword>;
  }

  updateForbiddenKeyword(forbiddenKeyword: ForbiddenKeyword): Observable<ForbiddenKeyword> {
    return new Observable<ForbiddenKeyword>(observer => {
      this.firestore.collection('forbidden-keywords').doc(forbiddenKeyword.id).update(forbiddenKeyword).then((docRef) => {
        console.log('Successfully updated keyword');
        observer.next(forbiddenKeyword);
        observer.complete();
      }).catch((error: any) => {
        console.log('Error: ' + console.error());
        observer.error(error);
      })
    });
  };

  addForbiddenKeyword(forbiddenKeyword: ForbiddenKeyword): Observable<ForbiddenKeyword> {
    return new Observable<ForbiddenKeyword>(observer => {
      this.forbiddenKeywordsCollection.add(forbiddenKeyword)
        .then(docRef => {
          console.log('After add:', forbiddenKeyword);
          forbiddenKeyword.id = docRef.id;
          observer.next(forbiddenKeyword);
          observer.complete();
        })
        .catch(error => observer.error(error));
    });
  }

  deleteForbiddenKeyword(forbiddenKeywordId: string): Observable<void> {
    return new Observable<void>(observer => {
      this.forbiddenKeywordsCollection.doc(forbiddenKeywordId).delete()
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch(error => observer.error(error));
    });
  }

}
