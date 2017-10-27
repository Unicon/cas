/**
 * Created by tschmidt on 2/15/17.
 */
import {Injectable} from '@angular/core';
import {DiffEntry} from '../../domain/diff-entry';
import {Service} from '../service';
import {Http} from '@angular/http';
import {AbstractRegisteredService} from '../../domain/registered-service';

@Injectable()
export class ChangesService extends Service {

  constructor(protected http: Http) {
    super(http);
  }

  getChanges(branch: String): Promise<DiffEntry[]> {
    return this.get<DiffEntry[]>('changes?branch=' + branch);
  }

  viewDiff(oldId: String, newId: String): Promise<String> {
    const data = [oldId, newId];
    return this.post<String>('viewDiff', data);
  }

  getChange(change: String): Promise<AbstractRegisteredService> {
    return this.get<AbstractRegisteredService>('viewChange?id=' + change);
  }

}
