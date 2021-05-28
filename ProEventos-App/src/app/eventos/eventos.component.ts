import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [
    {
      tema: 'Angular',
      local: 'BH'
    },
    {
      tema: '.NET',
      local: 'RJ'
    },
    {
      tema: 'Vue',
      local: 'SP'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
