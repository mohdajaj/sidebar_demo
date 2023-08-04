import { AfterViewInit, Component, ElementRef, OnInit, ViewChild,HostListener  } from '@angular/core';

@Component({
  selector: 'app-sideBar',
  templateUrl: './sideBar.component.html',
  styleUrls: ['./sideBar.component.css']
})
export class SideBarComponent implements OnInit {
  classApplied = false;
  CollapsMenutext=false;
  isMobile=false;
  menuHeight=0;
  screenHeight: number=0;
  screenWidth: number=0;
  constructor() { 
   
  }

  ngOnInit(): void {
  }
  toggleMenu(){
     this.classApplied = !this.classApplied;
     if(!this.isMobile)
      this.CollapsMenutext=!this.CollapsMenutext;
  }



}
