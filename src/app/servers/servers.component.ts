import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowNewUserName = false;
  serverCreationStatus = "No server was created!";
  serverName = '';
  userName = '';
  userNameCreationStatus = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']
  detailsClicks = [];
  click = 0;


  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName() {
    this.userNameCreationStatus = 'User name: ' + this.userName + " was reset."
    this.userName = '';
  }
  
  recordDetailsClick() {
    this.detailsClicks.push(this.click);

    this.click = this.click + 1;
  }

  getBackgroundColor(detailsClick) {
    return detailsClick > 4 ? 'blue' : 'transparent';
  }

  getNumberStatus(detailsClick) {
    return detailsClick > 4;
  }
}
