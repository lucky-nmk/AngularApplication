import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-others',
  template: 'you entered: {{simpleInput}}',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnChanges {
@Input()
simpleInput: string;


ngOnChanges(changes: SimpleChanges) {

  for (let propertyName in changes) {
    let change = changes[propertyName];
    let current = JSON.stringify(change.previousValue);
    let previous = JSON.stringify(change.previousValue);
    console.log(propertyName+ ': currentValue'+ current + ', previousValue = ' + previous)

  }

}

}
