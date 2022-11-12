import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const currentTime = 'videoplayer-current-time';

if (localStorage.getItem(currentTime)) {
  player.setCurrentTime(localStorage.getItem(currentTime));
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.setItem(currentTime, JSON.stringify(data.seconds));
}
