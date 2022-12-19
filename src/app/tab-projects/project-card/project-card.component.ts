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
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  likeProject() {
     this.firebaseService.likeProject(this.project.id, !this.project.isLiked).then();

     this.project.isLiked = !this.project.isLiked;
  }

  // ----------------------------------------------------------------------------------------------

  openProjectPage() {
    this.projectService.selectProject(this.project);
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion

}

