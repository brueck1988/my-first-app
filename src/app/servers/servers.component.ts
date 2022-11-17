import { Component, OnInit } from '@angular/core';

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


  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName() {
    this.userNameCreationStatus = 'User name: ' + this.userName + " was reset."
    this.userName = '';
  }
}
