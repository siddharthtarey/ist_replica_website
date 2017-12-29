// this function fades in the <DIV element>
function fadeIn(dom,op,ieSeven){
	// set timeout used to gradually increase the opacity of the div element.
	var time =setTimeout(function(){
		// this is for IE 8
		if(document.all && !document.addEventListener){
			
			// fadeIn gets called recurively till opacity satisfies this condition
			if(op <= 0.99){
				// set the opacity for the current div
				dom.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + op*100 + ')';
				
				op = op +0.05;
				fadeIn(dom,op,ieSeven);
			
			}
			else{
				
				clearTimeout(time);
			}
			
		}
		// this is to control opacity of IE 7
		else if(ieSeven){
			// fadeIn gets called recurively till opacity satisfies this condition
			if(op <= 0.99){
			
				dom.style.filter = 'alpha(opacity=' + op*100 + ')';
				
				op = op +0.05;
				fadeIn(dom,op,ieSeven);
			
			}
			else{
				
				clearTimeout(time);
			}
			
		}
		// for all other browser this is done.
		else{
			
			if(dom.style.opacity <= 0.99){
				dom.style.opacity = op;
			
				op = op +0.05;
				fadeIn(dom,op,ieSeven);
			
			}
			else{
			
				clearTimeout(time);
			}
			
		}
		
		
	}, 50);

	
}

// this function fades-out a div and then removess the div from the HTML
function fadeOut(pparent,dom,op,ieSeven){
	
	var time =setTimeout(function(){
		// this part is to control opacity in IE 7
		if(ieSeven){
			// fadeOut gets called recurively till opacity satisfies this condition(i.e till the element dissapears)
			if(op >= 0.0){
			
				dom.style.filter = 'alpha(opacity=' + op*100 + ')';
			
				op = op -0.05;
				fadeOut(pparent,dom,op,ieSeven);
			
			}
			else{
				// remove the div once it complettely fades out
				pparent.removeChild(dom);
				
				clearTimeout(time);
			}
			
		}
		// this part is to control opacity in all other browsers
		else{
			
			if(op >= 0.0){
				dom.style.opacity = op;
			
				op = op -0.05;
				fadeOut(pparent,dom,op,ieSeven);
			
			}
			else{
				pparent.removeChild(dom);
				
				clearTimeout(time);
			}
			
			
		
		}
		
	}, 20);

	return true;
}

// this function is to fade-in the table div element
function fadeTable(dom,wd){
	// uses the setTimeout to gradually fade in the table
	var time =setTimeout(function(){
		// fades the table till it reaches this width
		if(wd <= 500){
			dom.style.width = wd+"px";
			// increase the width by 20px
			wd = wd +20;
			fadeTable(dom,wd);
			
		}
		else{
			
			clearTimeout(time);
		}
		
	}, 5);
	
}