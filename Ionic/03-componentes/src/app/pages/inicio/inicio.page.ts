import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'flame-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'cube-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'water-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'earth-outline',
      name: 'Buttons',
      redirectTo: '/botones'
    },
    {
      icon: 'football-outline',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar-outline',
      name: 'Date-Time',
      redirectTo: '/date-time'
    },
    {
      icon: 'attach-outline',
      name: 'Fabs',
      redirectTo: '/fab'
    },
    {
      icon: 'apps-outline',
      name: 'Grid',
      redirectTo: '/grid'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
