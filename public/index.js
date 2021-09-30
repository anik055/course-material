const discipline = document.querySelector('#discipline');
const term = document.querySelector('#term');
const content = document.querySelector('#content');
const sections = document.querySelector('#sections');
const section = document.querySelector('#section');
const dis = document.querySelector('#dis');
const ter = document.querySelector('#ter');
const con = document.querySelector('#con');

section.addEventListener('click', ()=> {
    if(sections.classList.contains('block')){
        sections.classList.remove('block');
        sections.classList.add('hidden');
    }
})

dis.addEventListener('click', ()=>{
    discipline.classList.remove('block');
    discipline.classList.add('hidden');
    term.classList.remove('hidden');
    term.classList.add('block');
})

ter.addEventListener('click', ()=>{
    term.classList.remove('block');
    term.classList.add('hidden');
    sections.classList.remove('hidden');
    sections.classList.add('block');
})

section.addEventListener('click', ()=>{
    sections.classList.remove('block');
    sections.classList.add('hidden');
    content.classList.remove('hidden');
    content.classList.add('block');
})