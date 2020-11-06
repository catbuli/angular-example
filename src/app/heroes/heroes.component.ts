/*
 * @Description 
 * @Author Maobuli
 * @Date 2020-11-05 17:51:41
 * @LastEditors Maobuli
 * @LastEditTime 2020-11-06 13:25:11
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];

    constructor(private heroService: HeroService, private messageService: MessageService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }
}
