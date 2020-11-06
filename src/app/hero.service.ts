/*
 * @Description hero service
 * @Author Maobuli
 * @Date 2020-11-05 19:36:33
 * @LastEditors Maobuli
 * @LastEditTime 2020-11-06 12:18:53
 */
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(private messsageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
        this.messsageService.add("HeroService: fetched heroes");
        return of(HEROES);
    }
}
