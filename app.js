
const hours = document.querySelector('#hours');
const munite = document.querySelector('#munite');
const secend = document.querySelector('#secend');


const appm = document.querySelector('#appm');
const tarikh = document.querySelector('#date');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

const den = document.getElementById('den');




setInterval( function(){

    let date = new Date();

    let h =date.getHours();
    let m =date.getMinutes();
    let s =date.getSeconds();

    let dd = date.getDate();
    let mm = date.getMonth() +1;
    let yer = date.getFullYear();

    let din= date.getDay();

    den.innerHTML= week(din);

    let hour='';

    if( h==0 ){
        hour= 12;
    }else if( h > 0 && h <= 12){
        hour=h;
    }else{
        hour=h-12;
    }

    hours.innerHTML= hour < 10 ? '0' + hour : hour;
    munite.innerHTML=m < 10 ? '0' + m : m;
    secend.innerHTML=s < 10 ? '0' + s : s;

    

    tarikh.innerHTML=dd <10 ? '0' + dd : dd;
    month.innerHTML=mm < 10 ? '0' + mm : mm;
    year.innerHTML=yer;

    let pmm = '';

    if( h > 12){
        pmm = 'PM';
    }else{
        pmm ='AM';
    }

    appm.innerHTML=pmm;

}, 1000);



// counter-section
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const output = document.getElementById('out-put');

let counter = 0;

let somrat;
start.addEventListener('click', function () {

    somrat = setInterval(() => {
        output.innerHTML = counter;
        counter++; 
    }, 100);

    
});

stop.addEventListener('click', function () {

    clearInterval(somrat);
});

reset.addEventListener('click', function(){
    counter=0;
    output.innerHTML = counter;
    clearInterval(somrat);
})