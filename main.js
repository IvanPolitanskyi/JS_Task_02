var age = prompt('Введи, пожалуйста, свой возраст', 'Возраст');

let t1 = age % 10;
let t2 = age % 100;

    if (t1 == 1 && t2 != 11) {
       var wordForAge = ' год';
}    else if  (t1 >= 2 && t1 <= 4 && (t2 < 10 || t2 >= 20)) {
       var wordForAge = ' года';
}    else {
       var wordForAge = ' лет';
}

alert('Привет, юзер, тебе ' + age + wordForAge);