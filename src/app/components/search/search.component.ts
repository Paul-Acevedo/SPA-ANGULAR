import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../services/hersoes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search:any[]= [];

  constructor(private _activatedrouter:ActivatedRoute,
              private _heroesservice:HeroesService) {
     this._activatedrouter.params.subscribe(params=>{
        this.search = this._heroesservice.buscarHeroes(params['termino']);
     });
   }

  ngOnInit(): void {
  }

}
