// выполнение js после формирования DOM
window.addEventListener('DOMContentLoaded', function() {

    'use strict';

let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

    //скрываем все табы кроме выбраного
    function hideTabContent(a) {
        for(let i = a ; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }        
    }          

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

     //проверяем на какой таб был клик
    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {             
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //======TIMER======

    let deadline = '2019-09-23';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),           //parse - переводим в милисекунды
        seconds = Math.floor((t/1000) % 60),                            //flore - получаем только целые числа
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }    
    };


    setClock('timer', deadline);
});