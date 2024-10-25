import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderPipe'
})
export class OrderPipePipe implements PipeTransform {

  transform(value: TrackModel[], args: string | null = null, sort: string = 'asc'): TrackModel[] {
    return []
  }

}
