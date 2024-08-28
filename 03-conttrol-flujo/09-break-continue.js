//brake: salir del loop
//continue: saltar 01 iteración, no las demas

let i = 0;
while (i<6){
    i++;
    if(i===2){continue;}
    console.log(i);
}
console.log('*********************');
i = 0
while (i<6){
    i++;
    if(i===2){break;}
    console.log(i);
}