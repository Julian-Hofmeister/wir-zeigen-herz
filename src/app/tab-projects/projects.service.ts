import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from './project.interface';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {map, shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  projectList: Observable<Project[]>;

  path = this.afs.collection('projects', (ref) => ref.orderBy('title'));

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(public afs: AngularFirestore) {}

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  getProjects() {
    this.projectList = this.path.snapshotChanges().pipe(
      map((changes) =>
        changes.map((item) => {
          const data = item.payload.doc.data() as Project;
          data.id = item.payload.doc.id;
          console.log('Project: ' + data);

          return data;
        })
      ),
      shareReplay(1)
    );
    return this.projectList;
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
