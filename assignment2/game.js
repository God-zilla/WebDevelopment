/*
Assignment second term resit 19th August,2018.
University of Northampton.
Author: Bishownath Dhakal (18413644) 
Tutor: Ganesh Khatri
Start Date: 19th August, 2018
Deadline: 26th August, 2018
Horse Racing Game using javascript
*/ 

var upLength= [];//creating the variable up length as positionTop globally.
var soob_Sound= new Audio('ghoda.mp3');//creating the variable soob_sound for sound globally.
var aniDuration;//creating the variable aniDuration as interval globally.
var totalPesos=100;//creating the variable total fund globally.
var insertedPesos;//creating the variable amount inserted globally.
var id;//creating the variable id globally.
var soob= 0;//creating the variable soob globally.

function sHorseDown(){//function is created.



// console.log("bush1:"+document.getElementsByClassName('bush jump1')[0].offsetTop);//finding the position for the bush 1.
// console.log("bush2:"+document.getElementsByClassName('bush jump2')[0].offsetTop);//finding the position for the bush 2.
// console.log("bush3:"+document.getElementsByClassName('bush jump3')[0].offsetTop);//finding the position for the bush 3.
// console.log("bush4:"+document.getElementsByClassName('bush jump4')[0].offsetTop);//finding the position for the bush 4.
// console.log("bush5:"+document.getElementsByClassName('bush jump5')[0].offsetTop);//finding the position for the bush 5.
// console.log("bush6:"+document.getElementsByClassName('bush jump6')[0].offsetTop);//finding the position for the bush 6.



var finishLne=document.getElementById("finishline").offsetTop;//getting the finish line from the id
var fern1=document.getElementsByClassName("bush jump1")[0].offsetTop;//the first bush is got from the class name
var fern2=document.getElementsByClassName("bush jump2")[0].offsetTop;//the second bush is got from the class name
var fern3=document.getElementsByClassName("bush jump3")[0].offsetTop;//the third bush is got from the class name
var fern4=document.getElementsByClassName("bush jump4")[0].offsetTop;//the fourth bush is got from the class name
var fern5=document.getElementsByClassName("bush jump5")[0].offsetTop;//the fifth bush is got from the class name
var fern6=document.getElementsByClassName("bush jump6")[0].offsetTop;//the sixth bush is got from the class name

var ghodey= document.getElementsByClassName('horse');//getting the horse id from the class name

for(var h=0;h<ghodey.length;h++){//loop is created for all the horses to run in the scroll track with the scroller
upLength[h]= ghodey[h].offsetTop;//the horses are moving in downward direction and the positionTop is being increasing accordingly.


if((ghodey[h].offsetTop>(fern1-20)) && (ghodey[h].offsetTop<(fern1+40)))
{//the horses jump over the bushes when the horses position is greater than or lower than the calculated offset.
	
	ghodey[h].style.top=upLength[h]+ Math.ceil(Math.random()*8) + 'px';//the horses runs towards the downward direction randomly

ghodey[h].className= 'horse jump runDown';//the horses jump over the bushes
ghodey[h].style.top=upLength[h]+ Math.ceil(Math.random()*8) + 'px';//the horses runs towards the downward direction randomly
}


//
if ((ghodey[h].offsetTop>(fern2-20)) && (ghodey[h].offsetTop<(fern2+40)))
{//the horses moves in downward direction unless the bush comes in front where it jumps over the bushes
ghodey[h].style.top=upLength[h]+ Math.ceil(Math.random()*8) + 'px';//all the horses runs into downward direction

ghodey[h].className= 'horse jump runDown';//horses jumps over the bushes
ghodey[h].style.top=upLength[h]+ Math.ceil(Math.random()*8) + 'px';//after the jump horses again runs into the same direction with same speed
}

	

if ((ghodey[h].offsetTop>(fern3-20)) && (ghodey[h].offsetTop<(fern3+40)))
{//the horses moves in downward direction unless the bush comes in front where it jumps over the bushes
ghodey[h].style.top=upLength[h]+ Math.ceil(Math.random()*8) + 'px';//all the horses runs into downward direction

ghodey[h].className= 'horse jump runDown';//horses jumps over the bushes
ghodey[h].style.top=upLength[h]+ Math.ceil(Math.random()*8) + 'px';	//after the jump horses again runs into the same direction with same speed
}

if ((ghodey[h].offsetTop>(fern4-20)) && (ghodey[h].offsetTop<(fern4+40)))
{//the horses moves in downward direction unless the bush comes in front where it jumps over the bushes
ghodey[h].style.top=upLength[h]+ Math.ceil(Math.random()*8) + 'px';//all the horses runs into downward direction

ghodey[h].className= 'horse jump runDown';//horses jumps over the bushes
ghodey[h].style.top=upLength[h]+ Math.ceil(Math.random()*8) + 'px';//after the jump horses again runs into the same direction with same speed	
}



if ((ghodey[h].offsetTop>(fern5-20)) && (ghodey[h].offsetTop<(fern5+40)))
{//the horses moves in downward direction unless the bush comes in front where it jumps over the bushes
ghodey[h].style.top=upLength[h]+ Math.ceil(Math.random()*8) + 'px';//all the horses runs into downward direction

ghodey[h].className= 'horse jump runDown';//horses jumps over the bushes
ghodey[h].style.top=upLength[h]+ Math.ceil(Math.random()*8) + 'px';	//after the jump horses again runs into the same direction with same speed
}



if ((ghodey[h].offsetTop>(fern6-20)) && (ghodey[h].offsetTop<(fern6+40)))
{//the horses moves in downward direction unless the bush comes in front where it jumps over the bushes
ghodey[h].style.top=upLength[h]+ Math.ceil(Math.random()*8) + 'px';//all the horses runs into downward direction

ghodey[h].className= 'horse jump runDown';//horses jumps over the bushes
ghodey[h].style.top=upLength[h]+ Math.ceil(Math.random()*8) + 'px';	//after the jump horses again runs into the same direction with same speed
}


//




if(ghodey[h].offsetTop<(finishLne+60)){//condition is applied

	ghodey[h].className= 'horse jump runDown';// if there is bush then the horse jumps over it 

ghodey[h].className= 'horse runDown';// horse run down in scroller track
ghodey[h].style.top= upLength[h] + Math.ceil(Math.random()*8) + 'px';//the speed is calculated randomly






}
else{
	ghodey[h].className= 'horse standDown';// after reaching the finishing line horse stop and stand in stand down position.
	soob_Sound.pause(); //music is paused after reaching the finishing line.
		
}
}
}

function begin(){//function is created

insertedPesos=document.getElementById('amount').value;//the inserted amount value is get from the id 

if(insertedPesos>totalPesos ){//condition is created when the inserted amount is more than the total amount 
	alert("Specify the valid amount");//alert message is created
}
else if(totalPesos<=0){//condition for the total pesos when it is less than zero
alert("No Pesos Left");//alert message pops up
}
else if(insertedPesos<=0){// condition for the inserted amount less than zero
alert("Enter more than 0 .")//alert message pops up

}

else{
	totalPesos-=insertedPesos;//when the inserted amount is placed then the total amount gets subtract .
	document.getElementById('funds').innerHTML=totalPesos;//fund is got from the ID

	document.getElementById("start").disabled=true;//start button gets disabled
	aniDuration=setInterval(sHorseDown,20);//the interval is set
	scrollTrack();//the function is called
	clearRes();//function is called
	soob_Sound.play();


	document.getElementById("confirm").style.background="#f60018";//background color is set.
	document.getElementById("confirm").disabled=true;//the bush position 'set' is disabled.

	for(var t=1;t<7;t++){//loop is created
	document.getElementById("bush"+t).disabled=true;//after clicking the set the position for the bush cannot be changed.


	}
}
}

//



//head of the riders gets cleared from result board
function clearRes(){// function is created
	soob= 1;
	for (var k = 0; k <4; k++) {//for loop method is used 
		var res= document.getElementsByClassName('horse' + (k+1));//the horse class name is taken and added to the loop for the result
		if(res.length >0)//if condition for the result on the result board
		{
			res[0].parentNode.removeChild(res[0]);//remove the child of the parent node.
		}
	}
}



function Winner()//function is created
{
	var winner= tr[1].childNodes[3].className;
	if(winner== betHorse)//if condition is added
	{
		alert('OH! you win');// alert message pops up
		totalPesos +=insertedPesos;// total fund is added to the inserted fund when the selected horse wins
		document.getElementById('funds').innerHTML= totalPesos;//the total fund if get from the ID


	}
	else
	{
		alert('Sorry! Try next time.');//alert message pops up
	
	}
}




function soobPos()//function is created
{
	var pos= [-0.01, 0.06, 0.03, 0.08];//position is set 
	var usedPos= [];//array is set for the used position


	for(var a=1; a<5; a++)//loop is created
	{
		var repitition= true;//boolean value is used for the repitition variable
		var posRan;//variable is created
		while(repitition)//while loop is created
		{
			posRan= Math.floor(Math.random()* 5);//math floor is used for the random position of the horses
			
			var used= false;//boolean variable is set to false.
			for(var b=4; b<=usedPos.length; b++)//for loop is created
			{
				if(usedPos[b]== posRan)//used position equals to random position
			{
				used= true;// boole	an value is set to true.
			}
		}
		if( used=== false)//boolean is set to false in if condition
		{
			usedPos.push(posRan);//random position is created for the horses
			repitition= false;//boolean value is set to false.
		}
	}
    document.getElementById('horse' + a).style.top = window.innerHeight * pos[posRan] + 'px';//the three horses change its direction in px 
document.getElementById('horse' + b).style.top = 9 + 'vh';//the three horses change its direction according to the vertical height

document.getElementById('horse' + a).style.zIndex = 999 + posRan;//horse random position is set to absulute.

}

}


//



function scrollTrack() {//function is created.
   setInterval(function() {//interval is created
var scroller = document.getElementById('scroll');//variable is created and get the element from the id scroll.
scroller.scrollTop = scroller.scrollTop + 1;
}, 5);//the scroller is scrolled from the top in the speed of the 12 milli-second
   
}

function customize(){//function is created.
	var finalChoose=document.getElementById("confirm");//the finalChoose get the  element by ID
finalChoose.addEventListener('click',recreate);//when the set button is clicked then it performs the action event and the bushes recreates themselves according to the position.
}

function recreate(){//function is created.

for(var t=1;t<7;t++){//loop is created
	document.getElementsByClassName("jump"+t)[0].style.marginTop=document.getElementById("bush"+t).value +"vh";//whenever the certain value is placed into the bushes and click on set then the bushes changes its position with respect to the value.
}

}
 
function gunStart(){//function is created.
	var gunShot=document.getElementById("start");//the element is get from the id
  gunShot.addEventListener('click',begin);//add event listener is used when click

 customize();//customize function is called.
 OverFlow();//OverFlow function is called.
 soobPos();//soobPos function is called.
 




}

function OverFlow(){//function is created
	var shW =document.getElementById("Show");//show button is created
	shW.addEventListener('click',function seen() {//event listener is added the show button after click
		document.getElementById("scroll").style.overflow="scroll";//when the show button is pressed then the scroller is seen and can be scrolled up and down. 

	});

	var hdE =document.getElementById("Hide");//hide button is created
	hdE.addEventListener('click',function seen() {//event listener is added after the hide button after click
		document.getElementById("scroll").style.overflow="hidden";//when the hide button is pressed then the scroller gets hide

	});9

}

document.addEventListener('DOMContentLoaded', gunStart);//adding the event listener for the gunstart function using DOMContentLoaded.