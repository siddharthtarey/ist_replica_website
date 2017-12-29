function validate(ieSeven){
	
	var name = document.forms[0].elements[0];
	var email = document.forms[0].elements[1];
	var gender = document.forms[0].elements[2];
	
	if(name.value==""){
		
		var noFullName = document.createTextNode('*Required field');
		document.forms[0].insertBefore(noFullName,name);
		return false;
	}
	else if( email.value==""){
		var noEmail = document.createTextNode('*Required field');
		document.forms[0].insertBefore(noEmail,email);
		return false;
	}
	else if( gender.value==""){
		var noGender = document.createTextNode('*Required field');
		document.forms[0].insertBefore(noGender,gender[0]);
		return false;
	}
	
	else{
		if(ieSeven){
			
			
		}
		else{
			localStorage.setItem("fullName",name.value);
			localStorage.setItem("email",email.value);
			localStorage.setItem("gender",gender.value);
		}
		return true;
	}
	
}