import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icons',
  standalone: true
})
export class IconsPipe implements PipeTransform {


  transform(value: string) {
    const iconMap: { [key: string]: string } = {

      tired: '😴',
      like: '👍',
      happy: '😊',
      sad: '😢',
      Laughing: '🤣',
      love: '❤️',
      heart: '💖',
      brokenHeart: '💔',
      kissingHeart: '😘',
      wink: '😉',
      surprise: '😲',
      angry: '😡',
      thinking: '🤔',
      party: '🎉',
      clapping: '👏', 
      crying: '😭',
      starstruck: '🤩',
      fire: '🔥',
      heartEyes: '😍',
      blush: '😊', 
      kiss: '💋',
      lips: '💋',
      grinning: '😁',
      smug: '😏',
      sleepy: '😪', 
      cool: '😎',
      coolSmile: '😎',
      tearsOfJoy: '😂',
      peace: '✌️',
      winkHeart: '😉💖', 
      loveHeart: '❤️ ❤️ ❤️ ❤️',
      redHeart: '❤️',
      yellowHeart: '💛',
      blueHeart: '💙',
      purpleHeart: '💜', 
      greenHeart: '💚',
      blackHeart: '🖤',
      whiteHeart: '🤍',
      brownHeart: '🤎',
      sparkles: '✨',
      shiningStar: '🌟',
      crescentMoon: '🌙',
      rainbow: '🌈',
      sunflower: '🌻',
      rose: '🌹',
      cherryBlossom: '🌸',
      tulip: '🌷',
      hibiscus: '🌺',
      bouquet: '💐',
      web: '🌐',
      highHeeledShoes: '👠',
      lipsWithHeart: '💋💖',
      handshake: '🤝',
      ring: '💍',
      crown: '👑',
      gemStone: '💎',
      diamondShapeWithADotInside: '💠',
      shootingStar: '🌠', 
    };

    if(iconMap[value])//יש איקון מתאים למילה שנכנסה
    {
      return iconMap[value];
    }
    return '';
  }

  
}
