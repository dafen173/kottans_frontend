
const menubtn = document.getElementById('menubtn');
const dropchild = document.getElementById('dropchild');
menubtn.addEventListener("click", function(){
  dropchild.classList.toggle('open');
});  

let inst = [{id:'section1', 
			name:'6500 ANSI Lm на улице', 
			description:'Работает проектор типа HITACHI CP-WX8265 3LCD  Lamp  1280х800   WXGA 6500lm  3600уе на экран шириной 3 м.', 
			img:'img/first.png', 
			img2:'img/0697.png'},

			{id:'section2', 
			name:'Сшивка двух ультракороткофокусных проекторов', 
			description:'Работают два проектора типа OPTOMA X320UST	Lamp	1024x768	XGA	4000lm   1395уе (за 1шт). Видеосервер для сшивки изображений порядка 1500уе. С дистанции установки в 66 см получаем проекцию шириной 400 cм.', 
			img:'img/543.png', 
			img2:'img/'},

			{id:'section3', 
			name:'Спарка двух проекторов по 6500 ANSI Lm', 
			description:'Работает спарка из двух проекторов типа HITACHI CP-WX8265	3LCD	Lamp	1280х800   WXGA	6500lm	   3600уе (за 1шт) на фасад здания. Ширина проекции примерно 6 м.', 
			img:'img/sparka-proj.png', 
			img2:'img/sparka-proj-2.png'},

			{id:'section4', 
			name:'Видеостена на базе трех проекторов', 
			description:'Видеостена на базе трех проекторов. Проекторы от 1500 уе за шт. Видеосервер порядка 1800уе. Центральная проекция шириной 360см, фланговые проекции по 450 см шириной каждая.', 
			img:'img/videowall-proj.png', 
			img2:'img/videowall-proj2.png'}]


function fillContent (currentSect){
	let res = inst.filter( obj => {
  	return obj.id === currentSect.target.id
})
	document.querySelector(".headline").innerHTML = res[0].name
	document.querySelector(".container").innerHTML = res[0].description
	document.querySelector(".pic").src = res[0].img
	document.querySelector(".pic2").src = res[0].img2
}


const sect = document.querySelectorAll('.installations')
sect.forEach( function(elem) {
	elem.addEventListener('click', fillContent)
})







/*


const section2 = document.querySelector('#section2');
section2.addEventListener("click", function() {
	document.querySelector('.headline').innerHTML = inst[1].name;
	document.querySelector('.container').innerHTML = inst[1].description;
	document.querySelector('.pic').src = inst[1].img;
});  




function show() {
	
	let res = 'kjkjkjkjk';

	return res;

	document.querySelector('.container').innerHTML = res;
}


document.querySelector(".desc").innerHTML = result[0].description


function show() {
	const container = document.querySelector('.container');
	const fragment = document.createDocumentFragment(); 
	const newElement = document.createElement('p');
	newElement.innerText = 'This is paragraph number';
	fragment.appendChild(newElement);
	container.appendChild(fragment);

	section1.removeEventListener('click', show);
}

const section1 = document.getElementById('section1');
section1.addEventListener("click", show);  





*/


