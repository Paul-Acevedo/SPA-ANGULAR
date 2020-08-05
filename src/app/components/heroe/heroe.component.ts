import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; //activated router
import {HeroesService} from '../../services/hersoes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any={};

  constructor(private _activateroute:ActivatedRoute,
              private _heroeservice:HeroesService) { 
  
   //recibir parametros
    this._activateroute.params.subscribe( params =>{
       console.log(params['id']);
       this.heroe=this._heroeservice.getHeroe(params['id']);
       console.log(this.heroe);
    });
    

  }

  ngOnInit(): void {
  }


  //recibir
}
