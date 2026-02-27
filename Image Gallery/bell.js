let car={
    carName:"BMW",
    model:"X5",
    year:2028,
    color:"black",
start: function(){
    return "car is starting";
    },                                                      
break: function(){
       return "car is breaking";
    },
"driving Speed": function(){
       return "car is driving at 240km/hr";
    },
}    
console.log(car);
console.log(car.start());
console.log(car["driving Speed"]());
console["log"](car.model);

function studentName(Fn,Ln){
   this.FirstName=Fn;
    this.LastName=Ln;
    this.FullName=function() {
        return this.FirstName + " " + this.LastName;
    }
}

var chaltu= new studentName("Chalatu","Beyene");
console.log(chaltu);

let x="Mekuanint";
console.log(x.length);

console.log(x.toUpperCase());
console.log(x.indexOf("n"));
console.log(x.slice(0,5));
console.log(x.replace("Mekuanint","Mekuanint Tewende"));
console.log(x.split(" "));

function letterchecker(a){
    var hiddenword="";
    for(i=0;i<=a.length;i++){
        var letter=a.charAt(i);
        if(letter!==letter.toUpperCase()){
            hiddenword=hiddenword+letter; 
        }
        console.log(letter);
        console.log(hiddenword);
           
    }
console.log(hiddenword);
    return hiddenword;
     
}

letterchecker("de%@#$&*1234fYIEXydeewfaBSDFBIFGBFVB");

function reverseString(arr1,arr2){
    if(!(Array.isArray(arr1) && Array.isArray(arr2))){
        return "Both arguments must be arrays.";}
        let arrsort1=arr1.sort((a,b)=>a-b);
        let arrsort2=arr2.sort((a,b)=>a-b);
        let arrsort1min=arrsort1[0];
        let arrsort2min=arrsort2[0];
        let arrsort1max=arrsort1[arrsort1.length-1];
        let arrsort2max=arrsort2[arrsort2.length-1];
     if(arrsort1min<=arrsort2min || arrsort1max>=arrsort2max){
    return "false";
    }else{
      return "true";
        }

}
console.log(reverseString([1,2,3],[4,5,6]));

let a=[1,7,3,4,5];

console.log(...a);
a.sort((a,b)=>a-b);
console.log(...a);
Math.min(...a);
Math.max(...a);
console.log(Math.min(...a));
console.log(Math.max(...a));

document.getElementById("one").className="red";

let element=document.getElementsByClassName("ee");
console.log(element);
element.item(0).className="red";

let mk=document.getElementsByTagName("li");
console.log(mk);
for(let i=0;i<mk.length;i++){
   selecteditem=mk[i];
   console.log(selecteditem.className);
}

let desse=document.querySelectorAll("li");
console.log(desse);;
for(let i=0;i<desse.length;i++){
}

desse[10].className="blue";

let tx=document.querySelectorAll("li");
console.log(tx);
tx[11].textContent="Mekuanint";

 let xxx=document.createElement("p");
xxx.textContent="This is a new paragraph.";
    document.body.appendChild(xxx);
xxx.setAttribute("class","Mekuanint");
let cc=document.createElement("img");
cc.setAttribute("src","C:\Users\Mehari\Desktop\personal_pro\Image Gallery\IMAge\bahir_dar.jpg")
document.body.appendChild(cc)

let mmm=document.getElementById("Mekuanint");
mmm.onclick=Mekuanint;


function Mekuanint(){
    alert("Hello, Mekuanint!");
}
