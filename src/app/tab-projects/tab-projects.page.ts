import { Component, OnInit } from '@angular/core';
import {Project} from './project.interface';
import {Observable} from "rxjs";
import {ProjectsService} from "./projects.service";

@Component({
  selector: 'app-tab-projects',
  templateUrl: './tab-projects.page.html',
  styleUrls: ['./tab-projects.page.scss'],
})
export class TabProjectsPage implements OnInit {

  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  projects: Project[] = [
    {
      id: '11111',
      title: 'Weltweit Wälder Schützen',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua...',
      img: '/assets/imgs/forest.jpg',
    }
  ];

  loadedProjects$: Observable<Project[]>;

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private projectsService: ProjectsService)
  {
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit()
  {
    this.loadedProjects$ = this.projectsService.getProjects();
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
