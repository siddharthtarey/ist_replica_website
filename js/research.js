// this function is load the research related information on the website
function research(get,dir,id){
    // fetch the research data using ajax from '/research/'
    xhr(get,{path:dir},id).done(function(json){
        
        
        // iterate research by iterest areas
        $.each(json.byInterestArea,function(){
            var interestArea ='';    
            
            if (count % 3 == 0) {
                interestArea += '<div class="row justify-content-md-center">';
            }
            
            // some areas have space in them, replace teh space with no space to ease the access of the json 
            var idname = this.areaName.replace(" ","");
            interestArea += '<div class="inline col-lg-4"><div class="well researchInterest" data-featherlight="#'+idname+'"><h4>'+this.areaName+'</h4></div></div>';
            
            if (count % 3 == 0) {
                interestArea += '</div>';
            }
            // insert the research article information on a featherlight plugin
            var data = '<div class="lightbox" id='+idname+'><ul>';
            
            $.each(this.citations,function(){
                
                data += '<li>'+this+'</li>';
                
                
            });
            
            
            data += '</ul></div>';
            // append the research information on the HTML DOM
            $('#researchInterest').append(interestArea);
            $('#researchInterest').append(data);
              
        });
        
        // iterate the data by faculty name 
        
        $.each(json.byFaculty,function(){
            var interestArea ='';    
            
            if (count % 3 == 0) {
                interestArea += '<div class="row justify-content-md-center">';
            }
            
            var idname = this.facultyName.replace(" ","");
            interestArea += '<div class="inline col-lg-4"><div class="well researchInterest" data-featherlight="#'+idname+'"><h4>'+this.facultyName+'</h4></div></div>';
            
            if (count % 3 == 0) {
                interestArea += '</div>';
            }
            // append the faculty research on a lightbox
            var data = '<div class="lightbox" id='+idname+'><ul>';
            
            $.each(this.citations,function(){
                
                data += '<li>'+this+'</li>';
                
                
            });
            
            
            data += '</ul></div>';
            
            $('#researchFaculty').append(interestArea);
            $('#researchFaculty').append(data);
              
        });
        
        
    });
}