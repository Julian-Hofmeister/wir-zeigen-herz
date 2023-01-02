import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../project.interface';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../projects.service';
import {FirebaseService} from '../../shared/firebase.service';
import {Preferences} from '@capacitor/preferences';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {

  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  @Input() project: Project;

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(public projectService: ProjectsService, public firebaseService: FirebaseService)
  {
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit()
  {
    Preferences.get({key: this.project.title}).then(
      value => {
        this.project.isLiked = value.value === "true";
      }
    );
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////


  openProjectPage() {
    this.projectService.selectProject(this.project);
  }

  // ----------------------------------------------------------------------------------------------

  likeProject() {
    this.saveLike(!this.project.isLiked).then();

    this.firebaseService.likeProject(!this.project.isLiked, this.project).then()

    this.project.isLiked = !this.project.isLiked;
  }


  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  async saveLike(addLike: boolean) {
    await Preferences.set({
      key: this.project.title,
      value: addLike.toString(),
    });
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

}

