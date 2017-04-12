import {Pipe, PipeTransform} from '@angular/core';
import {Players} from './players';


@Pipe({
  name: "position",
  pure: false
})


export class PositionPipe implements PipeTransform {
  transform(input: Players[], desiredPosition) {
    var output: Players[] = [];
    if(desiredPosition === "defense") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "defense") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPosition === "middle") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "middle") {
          output.push(input[i]);
        }
      }
      return output;
    }else if (desiredPosition === "forward") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "forward") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
