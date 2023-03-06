import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../tab-projects/project.interface';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {map, shareReplay} from 'rxjs/operators';
import {Preferences} from '@capacitor/preferences';
import {User} from './user.interface';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  dataList: Observable<any[]>;

  likedProjects: string[];

  userId: string;

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(public afs: AngularFirestore) {
  }

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  async get(path: string) {
    const collection = this.afs.collection(path);

    this.dataList = collection.snapshotChanges().pipe(
      map((changes) =>
        changes.map((item) => {
          const data = item.payload.doc.data() as any;
          data.id = item.payload.doc.id;

          return data;
        })
      ),
      shareReplay(1)
    );
    return this.dataList;
  }

  // ----------------------------------------------------------------------------------------------

 // async likeProject(projectId: string, like: boolean) {
 //    const user = await this.getUser();
 //
 //    let likes: string[] = user.likedProjects ?? [];
 //
 //    if(likes.includes(projectId)) {
 //      const index = likes.indexOf(projectId);
 //       likes.splice(index, 1);
 //
 //       likes = likes.length === 0 ? [] : likes;
 //    } else {
 //      likes.push(projectId);
 //    }
 //
 //    await this.afs.doc('user/' + this.userId).update({likedProjects: likes});
 //
 //
 //  }

  // ----------------------------------------------------------------------------------------------


  async getUser(): Promise<User> {
    const user = await Preferences.get({key: 'user-id'});

    this.userId = user.value;
    if (!this.userId) {return;}

    const userPath = this.afs.doc('user/' + this.userId);

    const loadedUser = await userPath.get().toPromise();
    return loadedUser.data();
  }

  // ----------------------------------------------------------------------------------------------

  async likeProject(addLike: boolean, project: Project){
    const user = await Preferences.get({key: 'user-id'});

    const projectRef =  this.afs.firestore.doc('projects/' + project.id);

    await projectRef.get()
      .then(docSnapshot => {
        if (!docSnapshot.exists) {
          projectRef.set({
            title: project.title
          })
        }
      });

    if(addLike) {
      await projectRef.update({
        likes:    firebase.firestore.FieldValue.arrayUnion(user.value)
      });
    } else {
      await projectRef.update({
        likes:    firebase.firestore.FieldValue.arrayRemove(user.value)
      });
    }
  }

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////



  // ----------------------------------------------------------------------------------------------

  //#endregion
}


