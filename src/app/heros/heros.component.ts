/*
 * @Description 
 * @Author Maobuli
 * @Date 2020-11-05 17:51:41
 * @LastEditors Maobuli
 * @LastEditTime 2020-11-05 18:44:53
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-heros',
    templateUrl: './heros.component.html',
    styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

    hero = {
        id: 1,
        name: 'Windstorm'
    }
    constructor() { }

    ngOnInit(): void {
    }

}
