import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

if (localStorage.getItem(CURRENT_TIME)) {
  player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds));
}
