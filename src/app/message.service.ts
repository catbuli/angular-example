/*
 * @Description Messgae service
 * @Author Maobuli
 * @Date 2020-11-06 12:04:12
 * @LastEditors Maobuli
 * @LastEditTime 2020-11-06 12:19:22
 */
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    messages: string[] = [];
    constructor() { }
    add(messgae: string) {
        this.messages.push(messgae);
    }
    clear() {
        this.messages = [];
    }
}
