import {Injectable} from '@angular/core';
import {Project} from './project.interface';
import {Observable, Subject} from 'rxjs';
import {FirebaseService} from '../shared/firebase.service';
import {User} from '../shared/user.interface';
import {map, shareReplay} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  selectedProject: Project ;

  projectList: Observable<Project[]>;



  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(public fsService: FirebaseService, public afs: AngularFirestore) {
  }

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  async getProjects() {
    const collection = this.afs.collection('projects');

    this.projectList = collection.snapshotChanges().pipe(
      map((changes) =>
        changes.map((item) => {
          const data = item.payload.doc.data() as Project;
          data.id = item.payload.doc.id;


          return data;
        })
      ),
      shareReplay(1)
    );
    return this.projectList;
  }

  // ----------------------------------------------------------------------------------------------

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  // ----------------------------------------------------------------------------------------------

  getSelectedProject(): Project {
    return this.selectedProject;
  }

  // ----------------------------------------------------------------------------------------------


  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////


  // ----------------------------------------------------------------------------------------------

  //#endregion
}
