let temp = [
    {morning:15,afternoon:30,evening:20},
    {morning:12,afternoon:28,evening:21},
    {morning:17,afternoon:27,evening:19},
    {morning:14,afternoon:26,evening:18},
    {morning:17,afternoon:28,evening:19},
    {morning:15,afternoon:30,evening:20},
    {morning:14,afternoon:31,evening:22},
]


let x =10;

 if ( x !==0 ){
     console.log('true');
 }else {
     console.log('wrong')
 }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число

 let time =+prompt()

if (time < 0 || time >=59) {
    console.log('invalid value')
}else if (time>=0 && time<=14) {
    console.log('the first part of an hour')
}else if (time>=0 && time<=14) {
    console.log('the second part of the hour')
}else if (time>=14 && time<=29){
     console.log('third part of an hour')
} else if (time>=29 && time <=44){
      console.log('a quarter of an hour')
} else if (time>=44 && time <=59)

//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day =+prompt();

if( 'day' >=0 && 'day' <=31){
} else if ('day' >=0 && 'day' <=10){
    console.log('first decade')

} else if ('day' >=10 && 'day'<=20){
    console.log('second decade')

}else if ('day' >=20 && 'day'<=31){
    console.log('third decade')}


// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week =prompt('schedule for the week');


switch (week){
    case 'first':
        console.log('monday');
        break;
    case 'second':
        console.log('tuesday');
        break;
    case 'third':
        console.log('wednesday');
        break;
    case 'fourth':
        console.log('thursday');
        break;
    case 'fifth':
        console.log('friday');
        break;
    case 'sixth':
        console.log('saturday');
        break;
    case 'seventh':
        console.log('sunday');
        break
}
// Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let a = 10;
let b =20;

 if (a>b) {
     console.log(a)
 }else{
    console.log(b)
}
 // інший спосіб

 let c =10>20 ? 10 : 20;
 console.log(c)
let d = 10 === 20  ? 10:20;
 console.log(d)


 // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
 //    буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x =null
if (x){
    console.log('if')
} else {
    console.log('else')
}
// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration>5){
    console.log('super')
}
if (coursesAndDurationArray[1].monthDuration>5){
    console.log('super')
}
if (coursesAndDurationArray[2].monthDuration>5){
    console.log('super')
}
if (coursesAndDurationArray[3].monthDuration>5){
    console.log('super')
}
if (coursesAndDurationArray[4].monthDuration>5){
    console.log('super')
}
if (coursesAndDurationArray[5].monthDuration>5){
    console.log('super')
}

