/*
 * @Description 
 * @Author Maobuli
 * @Date 2020-11-06 13:41:20
 * @LastEditors Maobuli
 * @LastEditTime 2020-11-06 13:43:11
 */
import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
    let service: InMemoryDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(InMemoryDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
