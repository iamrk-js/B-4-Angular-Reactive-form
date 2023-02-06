import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-promise-vs-obs',
  templateUrl: './promise-vs-obs.component.html',
  styleUrls: ['./promise-vs-obs.component.scss']
})
export class PromiseVsObsComponent implements OnInit, OnDestroy {
  mySubscription !: Subscription
  constructor() { }


  ngOnInit(): void {
    const promise = new Promise((resolve, reject) => {
      // console.log(`Promise is created and not consumed`);
      setTimeout(() => {
        resolve(`Promises are emmiting data for 1st time`);
      }, 1000)
      setTimeout(() => {
        resolve(`Promises are emmiting data for 2nd time`);
      }, 2000)
      setTimeout(() => {
        resolve(`Promises are emmiting data for 3rd time`);
      }, 3000)
    })

    promise.then(console.log);

    const obs: Observable<string> = new Observable(observer => {
      setTimeout(() => {
        observer.next(`Observable is emmiting data for 1st time and Subscribed by Angular`)
      }, 1000);

      setTimeout(() => {
        observer.next(`Observable is Subscribed by Angular`)
      }, 2000);

      setTimeout(() => {
        observer.next(`Observable is emmiting data for 3rd time Subscribed by React`)
      }, 3000);
    })

    this.mySubscription = obs.pipe(
      filter(data => data.toLowerCase().includes('angular')),
      map(data => `${data} and I love Angular !!!`)
    )
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe()
  }
}


// 1 Promises are egar and Observable are lazy

// 2 Promise emit data only once, Observable can emit data multiple times

//  3 In case of Obs we have to unsubscribe them, there is no need to unsubscribe Promises