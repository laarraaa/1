var month= prompt()
var date= +prompt()
var month1= month.toLowerCase()
if((month1 === 'january' && date>19 && date<32) || (month1==='february' && date<20 && date>0)){
    alert('Водолей')
}else if((month1 === 'february' && date>=21 && date<30) || (month1==='march' && date<=20 && date>0)){
    alert('Рыбы')
}else if((month1 === 'march' && date>=21 && date<32) || (month1==='april' && date<=20 && date>0)){
    alert('Овен')
}else if((month1 === 'april' && date>=21 && date<31) || (month1==='may' && date<=20 && date>0)){
    alert('Телец')
}else if((month1 === 'may' && date>=21 && date<32) || (month1==='june' && date<=21 && date>0)){
    alert('Близнецы')
}else if((month1 === 'june' && date>=22 && date<31) || (month1==='july' && date<=22 && date>0)){
    alert('Рак')
}else if((month1 === 'july' && date>=23 && date<32) || (month1==='august' && date<=23 && date>0)){
    alert('Лев')
}else if((month1 === 'august' && date>=24 && date<32) || (month1==='september' && date<=23 && date>0)){
    alert('Дева')
}else if((month1 === 'september' && date>=24 && date<31) || (month1==='october' && date<=23 && date>0)){
    alert('Весы')
}else if((month1 === 'october' && date>=24 && date<32) || (month1==='november' && date<=22 && date>0)){
    alert('Скорпион')
}else if((month1 === 'november' && date>=23 && date<31) || (month1==='december' && date<=21 && date>0)){
    alert('Стрелец')
}else if((month1 === 'december' && date>=22 && date<31) || (month1==='january' && date<=20 && date>0)){
    alert('Козерог')
} else{
    alert('error')
}