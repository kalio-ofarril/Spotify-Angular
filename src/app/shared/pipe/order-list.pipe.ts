import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: any[], args: string | null = null, sort: string = 'asc'): TrackModel[] {
    try{
      if(args === null){
        return value;
      }else{
        const tempList = value.sort((a, b) => {
          if (a[args] > b[args]) {
            return 1;
          }
          if (a[args] < b[args]) {
            return -1;
          }
          return 0;
        });
      
        return sort === 'asc' ? tempList : tempList.reverse();
      }
    } catch (e) {
      console.log(e);
      return value;
    }
  }

}
