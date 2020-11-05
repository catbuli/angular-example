/*
 * @Description hero service
 * @Author Maobuli
 * @Date 2020-11-05 19:36:33
 * @LastEditors Maobuli
 * @LastEditTime 2020-11-05 19:54:54
 */
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor() { }

    getHeroes(): Observable<Hero[]> {
        return of(HEROES);
    }
}
