import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

const CURRENT_TIME_KEY = localStorage.getItem('videoplayer-current-time');

if (CURRENT_TIME_KEY) {
  onSetCurrentVideoTime();
}

player.on('timeupdate', throttle(onGetCurrentVideoTime, 1000));

function onGetCurrentVideoTime(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

function onSetCurrentVideoTime() {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
