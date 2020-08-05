import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/hersoes.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];
  constructor(private _heroesService:HeroesService,
              private router:Router) {

   }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx){
    this.router.navigate( ['/heroe',idx] );
    console.log(idx);
  }
  
}
