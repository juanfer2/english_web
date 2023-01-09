import { Subject } from 'rxjs';

export class SubjectManager {
  subject$ = new Subject();

  getSubject() {
    return this.subject$;
  }

  setSubject<T>(value: T) {
    this.subject$.next(value);
  }
}
