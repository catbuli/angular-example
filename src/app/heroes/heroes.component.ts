/*
 * @Description 
 * @Author Maobuli
 * @Date 2020-11-05 17:51:41
 * @LastEditors Maobuli
 * @LastEditTime 2020-11-05 19:18:30
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes = HEROES;

    constructor() { }

    ngOnInit(): void {
    }
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}
