import { Component, OnInit } from '@angular/core';
import {TeamMember} from './team-member.interface';
import {Observable} from 'rxjs';
import {FirebaseService} from '../shared/firebase.service';
import {team} from './team-data';

@Component({
  selector: 'app-tab-team',
  templateUrl: './tab-team.page.html',
  styleUrls: ['./tab-team.page.scss'],
})
export class TabTeamPage implements OnInit {


  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  loadedMembers$: Observable<TeamMember[]>;

  members: TeamMember[] = team;


  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(public fsService: FirebaseService)
  {
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  async ngOnInit()
  {
    this.loadedMembers$ = await this.fsService.get('team') as Observable<TeamMember[]>;
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
