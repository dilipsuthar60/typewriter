let box =document.querySelector('.box');
let s="dilip suthar hariwar";
let index=1;
const typeword=()=>{
    let new_word=s.slice(0,index);
    box.innerHTML=new_word;
    box.style.color='red';
    if(index>=s.length){
        index=1;
    }
    else{
        index++;
    }
    setTimeout(()=>{
        typeword();
    },500);
}

typeword();