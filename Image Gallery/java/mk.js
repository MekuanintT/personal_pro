var x="Hi class";
console. log(x);

let CarName="BMW";
console. log(CarName);

const carprice="200000";
console. log(carprice)

let Discount=carprice*(10/100);
let tax=carprice*(5/100);
let finalprice=carprice-Discount+tax;
console. log(finalprice);

let First_Name="Mekuanint"
let Last_Name="Tewende"
let Full_Name=First_Name+" "+Last_Name
console. log(Full_Name)

let numb1=50
let numb2="40"
console. log(numb1!=numb2)

console. log(!false)
let maray=[200000, "200000", "Mekuanint", "Tewende"]
console. log(maray)
console. log(maray[2])
console. log(maray[0]*maray[1])

function Mekuanint() {
    console. log("Frontend Developer");
    console. log("Google");
    var num1=40;
    var num2=50;
    console. log(num1+num2);
}
Mekuanint();

function listofnums() {
    console. log(1);
    console. log(2);
    console. log(3);
    console. log(4); 
    console. log(5);
}
listofnums();

function selam(x) {
    console. log("Aster Beso betebetechi");
    console. log(x);
}
selam("segenet");
function add(a,b) {
    let ad=(a+b);
    console. log(a+b);
return ad;
}
add(10,20)

function laptopcalculater(laptopName,price,Discount){
    let tax=price*(10/100)
    let total=price-Discount+tax
    console. log(laptopName,"laptop price is $",total)
}
laptopcalculater("HP",1000,200)

function average(a,b){
    let av;
    av=add(a,b)/2;
    return av;
}

let k=average(4, 6);
console. log(k);
let abebe=(e,f)=>{
    return(e+f)

}
console. log(abebe(4,5))


var abela=(pass,score)=>{
if (score>=pass){
    console. log("congra man");
}else{console.log("chaw man")}}
abela(60,70)

var a=400;
var b=600;
resualt=(a == b)? "gooog" : "vall"
console. log(resualt)
DayName=(Day)=>{

let DayName;
switch(Day){
    case 1:
        DayName="Monday"
        break;
    case 2:
        DayName="tuesday"
        break;
    case 3:
        DayName="wensday"
        break;
    case 4:
        DayName="Thrusday"
        break;
    case 5:
        DayName="friday"
        break;
    default:
        DayName="invalied"    
}
console.log("DAY IS "+
    " "+DayName)
}
DayName(4)


function adder(a,b){
    if(isNaN(a) || isNaN(b)){
return "Please insert a number only";}

 return parseFloat(a)+parseFloat(b);
}
console.log(adder(a+b));
console. log(adder("34"+43));

football=(w,e,d)=>{
    if(isNaN(w)|| isNaN(e)|| isNaN(d)){
        return "please insert anumber";
    }
    reasult=(w*3+e*1+d*0)
    return reasult;
}
console. log(football(x,4,5));

for(i=7; i<=777;i=i+7){
    console.log("Hello")

}

let sg=[12,32,23,43,43]
for (i=0; sg.length;i++) {
    console.log(sg[i]);
}

console.log(sg.length)

for(i=0;i<sg.length;i++){console.log(sg.length)

}

function pages(start,end){
    for(i=start;i<=end;i++)
        console.log("page"+[i])
}
pages(10,1)







function passchecker(arr){
    for(i=0; i<arr.length;i++){
        if(arr[i]>=50){console.log("student "+i+" passed with "+arr[i]+" score");} 
        else{console.log("student "+i+" failed with "+arr[i]+" score");}
    }
}
passchecker([20,23,32,34,43,45,65,56,51,50,78,100,98,95])




























