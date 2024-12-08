import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icons',
  standalone: true
})
export class IconsPipe implements PipeTransform {


  transform(value: string) {
    const iconMap: { [key: string]: string } = {
      happy: '../assets/Icons/happy.gif',
      sleep: 'assets/Icons/sleep.gif',
      surprised: 'assets/Icons/surprised.gif',
      wink: "assets/Icons/wink.gif"
    };

    if(iconMap[value])//יש איקון מתאים למילה שנכנסה
    {
      debugger
      return iconMap[value];
    }
    return '';
  }

  
}
