
l = [];
const txt1 = document.getElementById("f_name")
const btn1 = document.getElementById("btn1")
const out1 = document.getElementById('output1')

function store() {
    out1.innerHTML = txt1.value;
    console.log(txt1.value)
    l.push(txt1.value)
    console.log(l)
}

function out(){
    
}

btn1.addEventListener('click', out)

document.getElementById("demo").innerHTML = l