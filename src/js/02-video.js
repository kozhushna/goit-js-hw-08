import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const initPlayer = () => {
  let currentTime = localStorage.getItem(STORAGE_KEY);
  if (currentTime) {
    currentTime = parseFloat(currentTime);
    player.setCurrentTime(currentTime);
  }
};

initPlayer();

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('play', () => console.log('played the video!'));

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(STORAGE_KEY, data.seconds);
  }, 1000)
);
