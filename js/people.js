// this function is to load the faculty and staff informaton on the website
function people(get,dir,id){
    
    xhr(get,{path:dir},id).done(function(json){
        
        var data = '';
        facultyData = '';
        var count =0;
        
        // iterate through each faculty 
        $.each(json.faculty,function(){
           
            // this is initialize the row in HTML to put three faculties in a row
            if(count%3==0){
                
                data += '<div class="row justify-content-md-center">';
            }
            
            // initialize the faculty name
            data += '<div class="inline col-lg-4">';
            data += '<div class="well faculty" data-featherlight="#faculty' + count + '"><p>' + this.name + '</p><p>('+this.title+')</p></div>';
            data += '</div>';
            count +=1;
            if(count%3==0){
                
                data +='</div>';
            }
            // the details of the faculty are loaded on the featherlight plugin
            facultyData += '<div class="lightbox" id="faculty' + (count-1) + '">';
            facultyData += '<div><h1>'+this.name+'</h1><h2>'+this.title+'</h2></div>';
            facultyData += '<div><img src="'+this.imagePath+'"></div>';
            facultyData += '<div><p>'+this.website+'</p><p>'+this.phone+'</p><p>'+this.email+'</p></div>';
        });
        // append the faculty data to "faculty" section using JQuery
        $('#faculty').append(data);
        $('#faculty').append(facultyData);
      
        // begin staff code
        var staffData ='';
        var staffDetails ='';
        count =0;
        
        // iterate through all the staff members 
        $.each(json.staff,function(){
           
            if(count%3==0){
                
                staffData += '<div class="row justify-content-md-center">';
            }
            
            staffData += '<div class="inline col-lg-4">';
            staffData += '<div class="well faculty" data-featherlight="#staff' + count + '"><p>' + this.name + '</p><p>('+this.title+')</p></div>';
            staffData += '</div>';
            count +=1;
            if(count%3==0){
                
                staffData +='</div>';
            }
            // append the details of the staf members on the feather light plugin
            staffDetails += '<div class="lightbox" id="staff' + (count-1) + '">';
            staffDetails += '<div><h1>'+this.name+'</h1><h2>'+this.title+'</h2></div>';
            staffDetails += '<div><img src="'+this.imagePath+'"></div>';
            staffDetails += '<div><p>'+this.website+'</p><p>'+this.phone+'</p><p>'+this.email+'</p></div>';
        });
        
        $('#staff').append(staffData);
        $('#staff').append(staffDetails);
        
    })
    
}