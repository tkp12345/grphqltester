import { useRef } from 'react';
import { Observable, Subject } from 'rxjs';

type EventRef<T> = readonly [(value: T) => void, Observable<T>];

export const useReactiveEvent = <T>() => {
  const eventRef = useRef<EventRef<T> | null>(null);

  if (!eventRef.current) {
    const subject = new Subject<T>();
    const callback = (value: T) => subject.next(value);
    const observable = subject.asObservable();

    eventRef.current = [callback, observable] as const;
  }

  return eventRef.current;
};
