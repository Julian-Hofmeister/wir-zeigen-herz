import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../project.interface';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../projects.service';
import {FirebaseService} from '../../shared/firebase.service';
import {Preferences} from '@capacitor/preferences';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {

  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  @Input() project: Project;

  @Output() likeEvent = new EventEmitter<boolean>();

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    public projectsService: ProjectsService,
    public projectService: ProjectService,
    public firebaseService: FirebaseService
  ) {
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
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
    this.projectsService.selectProject(this.project);
  }

  // ----------------------------------------------------------------------------------------------

  likeProject() {
    this.projectService.likeProject(this.project);
    this.project.isLiked = !this.project.isLiked;
    this.likeEvent.emit(!this.project.isLiked);
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion

}

