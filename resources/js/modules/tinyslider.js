

// https://github.com/ganlanyuan/tiny-slider'
import {tns} from 'tiny-slider/src/tiny-slider.js';
import consoleHello from './consoleHello';

const tinyslider = () => {

    // tiny-slider
    if(document.getElementsByClassName("tiny-carousel").length > 0) {
        consoleHello(" load tiny-carousel");

        var cssId = 'tinyCss';  // Load Css only once.
        if (!document.getElementById(cssId))
        {
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.id   = cssId;
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css';
            link.media = 'all';
            head.appendChild(link);
        }

        var slider = tns({
            container: '.tiny-carousel',
            items: 1,
            slideBy: 'page',
            autoplay: false,
            controls: false,
            nav: false
        });
        document.querySelector('.next-button').onclick = function () {
            slider.goTo('next');
        };
        document.querySelector('.prev-button').onclick = function () {
            slider.goTo('prev');
        };
    }
    

}

export default tinyslider;