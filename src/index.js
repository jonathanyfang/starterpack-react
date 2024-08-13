import $ from 'jquery';
import './styles/style.scss';

window.onload = () => {
  let num = 0;
  setInterval(() => {
    num += 1;
    $('#main').html(`You've been on this page for ${num} seconds.`);
  }, 1000);
};
