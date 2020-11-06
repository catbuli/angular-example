/*
 * @Description 
 * @Author Maobuli
 * @Date 2020-11-06 12:03:26
 * @LastEditors Maobuli
 * @LastEditTime 2020-11-06 12:20:07
 */
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

    constructor(public messageService: MessageService) { }

    ngOnInit(): void {
    }

}
