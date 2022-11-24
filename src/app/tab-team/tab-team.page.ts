import { Component, OnInit } from '@angular/core';
import {TeamMember} from './team-member.interface';

@Component({
  selector: 'app-tab-team',
  templateUrl: './tab-team.page.html',
  styleUrls: ['./tab-team.page.scss'],
})
export class TabTeamPage implements OnInit {


  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  teamMembers: TeamMember[] = [
    {
      firstName: 'Vorname',
      lastName: 'Nachname',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua...',
      img: '/assets/imgs/teamMember.png',
      mail: 'email@test.de',
      phoneNumber: '+49 1234 56789012',
    }
  ];

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor()
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

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
