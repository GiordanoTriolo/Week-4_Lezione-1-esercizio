let data = new Date();

document.getElementById('americandate').innerHTML=(data.getMonth()+1)+ '-' +  (data.getDate()) + '-' + (data.getFullYear());
document.getElementById('fulldata').innerHTML= (data.getDate()) + '-' + (data.getMonth()+1) + '-' + (data.getFullYear());
document.getElementById('giorno').innerHTML=getday(data.getDay());
document.getElementById('mese').innerHTML=getmese(data.getMonth());
document.getElementById('anno').innerHTML=data.getFullYear();

function getday(giorno){
    let g = '';
    switch(giorno){
        case 1: g = 'Lunedì'; break;
        case 2: g = 'Martedì'; break;
        case 3: g = 'Mercoledì'; break;
        case 4: g = 'Giovedì'; break;
        case 5: g = 'Venerdì'; break;
        case 6: g = 'Sabato'; break;
        case 7: g = 'Domenica'; break;
    }
    return g;
}
function getmese(mese){
    let m = '';
    switch(mese){
        case 0: m = 'Gennaio'; break;
        case 1: m = 'Febbraio'; break;
        case 2: m = 'Marzo'; break;
        case 3: m = 'Aprile'; break;
        case 4: m = 'Maggio'; break;
        case 5: m = 'Giugno'; break;
        case 6: m = 'Luglio'; break;
        case 7: m = 'Agosto'; break;
        case 8: m = 'Settembre'; break;
        case 9: m = 'Ottobre'; break;
        case 10: m = 'Novembre'; break;
        case 11: m = 'Dicembre'; break;
    }
    return m;
}


function orario(){
    let data = new Date();
    let sec= data.getSeconds();
    let min= data.getMinutes();
    let hour= data.getHours();

    document.getElementById('display').innerHTML= hour + ' - ' + min + ' - ' + sec;
}
setInterval(orario, 1000);




let cron_hour = 0;
let cron_min = 0;
let cron_sec = 0;
let timer;
cron_print();

function cron_set(){
    cron_sec++;
    if(cron_sec == 60){
        cron_sec = 0;
        cron_min++;
        if(cron_min == 60){
            cron_hour++;
            cron_min = 0;
        }
    }
    cron_print();
}

function cron_print(){
    document.getElementById('cronometro').innerHTML= (cron_hour < 10 ? '0' + cron_hour : cron_hour)
                                                     + ':' + (cron_min < 10 ? '0' + cron_min : cron_min)
                                                     + ':' + (cron_sec < 10 ? '0' + cron_sec : cron_sec);
}

function start(){
    timer = setInterval(cron_set, 1000);
}

function stop(){
    clearInterval(timer);
}

function reset(){
    stop();
    cron_hour = 0;
    cron_min = 0;
    cron_sec = 0;
    cron_print();
}
