
var getX=document.getElementById("x");
var getY=document.getElementById("y");
var result=document.getElementById("percentageresult");
var changequestion=document.getElementById("changequestion");
var forms=document.getElementsByTagName("form");










// function check(){
// 	if ( !getX.value  || !getY.value  ) {
// 		alert("Errors in one or more fields");
// 	} else {
// 		var x=parseFloat(getX.value);
// 		var y=parseFloat(getY.value);
// 	}
// }

// function resetQuestion(id){

// 	for (var i = 0; i < forms.length; i++) {
// 		forms[i].style.display="none";
// 	}
// 	document.getElementById(id).style.display="block";
	
// 	}

// var formselect;
// function activatechangequestion(){
// 	var getQuestionNumber= parseInt(changequestion.value);
// 	switch(getQuestionNumber){
// 	    case 1:
// 	       	resetQuestion("question1");
// 	       	formselect=document.getElementById("question1");
// 	    	break;

// 	    case 2:
// 	        resetQuestion("question2");
// 	        formselect=document.getElementById("question2"); 
// 	    	break;

// 	    case 3:
// 	        resetQuestion("question3");
// 	        formselect=forms[3];
// 	    	break;

// 	    case 4:
// 	        resetQuestion("question4");
// 	        formselect=forms[4];
// 	    	break;

// 	    case 5:
// 	        resetQuestion("question5"); 
// 	        formselect=forms[5];
// 	    	break;
// 	}
// 	console.log(formselect);
// 	formselect.addEventListener('submit', function(event){
		
// 		if ( !getX.value  || !getY.value  ) {
// 		alert("Errors in one or more fields");
// 		} 
// 		else {
// 			var x=parseFloat(getX.value);
// 			var y=parseFloat(getY.value);
		
			
// 			if (formselect === form[1]) {
// 				var formula= ( (y/100) * x );
// 				result.innerText="Answer: "+ formula;
// 				console.log(true);
// 			}
// 			else{
// 				console.log(false);
// 			}

// 		}
// 			event.preventDefault();
// 		});

// }



