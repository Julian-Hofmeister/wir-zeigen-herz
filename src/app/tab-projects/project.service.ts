import { Injectable } from '@angular/core';
import {Preferences} from "@capacitor/preferences";
import {Project} from "./project.interface";
import {FirebaseService} from "../shared/firebase.service";
import {ProjectsService} from "./projects.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private fsService: FirebaseService, private projectsService: ProjectsService)
  {
  }

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  likeProject(project: Project) {
    this.saveLike(!project.isLiked, project).then();

    this.fsService.likeProject(!project.isLiked, project).then()

    this.updateLikeCount(project);


  }
  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  async saveLike(addLike: boolean, project: Project) {
    await Preferences.set({
      key: project.title,
      value: addLike.toString(),
    });
  }

  // ----------------------------------------------------------------------------------------------

  updateLikeCount(project: Project){
    Preferences.get({ key: 'likedProjects' }).then(
      likedProjects => {
        let projects = JSON.parse(likedProjects.value);

       if(!project.isLiked) {
         const index = projects.indexOf(project.id);
         projects.splice(index, 1);
       } else {
         try{
           projects.push(project.id);
         } catch {
           projects = [project.id];
         }
       }


        Preferences.set({
          key: 'likedProjects',
          value: JSON.stringify(projects),
        });
      }
    );
  }
  //#endregion
}

