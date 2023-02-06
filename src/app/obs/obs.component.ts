import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.scss']
})
export class ObsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let myInterval$ = new Observable((observer) => {
      let i = 0;
      setInterval(() => {
        observer.next(i);
        i++;
        if(i === 5){
          observer.complete()
        }
        // if(i === 13){
        //   observer.error(`No one use this Number!!!`)
        // }
      }, 1000)
    });

    myInterval$.subscribe(
      (res) => {console.log(res)}
    )
    // (err:string) => {
    //   console.log(err)
    // }

  }

}
