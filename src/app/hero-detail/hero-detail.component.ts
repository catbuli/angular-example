/*
 * @Description 
 * @Author Maobuli
 * @Date 2020-11-05 19:29:24
 * @LastEditors Maobuli
 * @LastEditTime 2020-11-05 19:35:15
 */
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    constructor() { }

    ngOnInit(): void {
    }
}
