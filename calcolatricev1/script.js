let print = "";
function somma(){
    let tempNum1=document.getElementById("demo").value
    let tempNum2=document.getElementById("demo2").value
    let num1=parseFloat(tempNum1)
    let num2=parseFloat(tempNum2)
    print = num1+num2

}

function sottrazione(){
    let tempNum1=document.getElementById("demo").value
    let tempNum2=document.getElementById("demo2").value
    let num1=parseFloat(tempNum1)
    let num2=parseFloat(tempNum2)
    print = num1-num2

}

function moltiplicazione(){
    let tempNum1=document.getElementById("demo").value
    let tempNum2=document.getElementById("demo2").value
    let num1=parseFloat(tempNum1)
    let num2=parseFloat(tempNum2)
    print = num1*num2

}

function divisione(){
    let tempNum1=document.getElementById("demo").value
    let tempNum2=document.getElementById("demo2").value
    let num1=parseFloat(tempNum1)
    let num2=parseFloat(tempNum2)
    print = num1/num2

}

function uguale(){
    document.getElementById("dest").innerHTML=print
}