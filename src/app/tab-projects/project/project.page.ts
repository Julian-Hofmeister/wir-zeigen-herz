import { Component, OnInit } from '@angular/core';
import {Project} from '../project.interface';
import {ProjectsService} from '../projects.service';
import {NavController} from '@ionic/angular';
import {FirebaseService} from '../../shared/firebase.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from "../project.service";
import {Preferences} from '@capacitor/preferences';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {

  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  project: Project;

  isLoading: boolean;

  project$: Observable<Project>;
  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    public projectsService: ProjectsService,
    public navCtrl: NavController,
    public fsService: FirebaseService,
    public activatedRoute: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

 async ngOnInit() {
    this.project = this.projectsService.getSelectedProject();

    if(!this.project){
      this.navCtrl.navigateBack('tabs/tab-projects').then();
    }

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

  onNavBack() {
    this.navCtrl.pop().then();
  }

  // ----------------------------------------------------------------------------------------------

  likeProject() {
     this.projectService.likeProject(this.project);
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

