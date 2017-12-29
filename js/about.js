// this function is used to get information of the about section
function about(get,dir,id){
    
    // make an ajax call to get the 'about' section from api
    xhr(get,{path:dir},id).done(function(json){
        
        var data =''
        
        data += '<div class="jumbotron"><h2 class="display-3">THE INFORMATION SCIENCES &amp; TECHNOLOGIES @ <span class="Orange">RIT</span></h2>';
        // attach the title of the about section
        data += '<p style="text-align:center;font-style: italic;" class="Orange">'+json.title+'</p>'
        data += '<div class="row"><div class="inline col-md-6">';
        // attach the description
        data += '<p class="lead">'+json.description+'</p></div>';
        
        data += '<div class="inline col-md-6"><blockquote class="blockquote text-right">';
        // load the quote 
        data += '<p>'+json.quote+'</p>';
        data += '<footer class="blockquote-footer">'+json.quoteAuthor+'</footer>'
        data += '</blockquote></div></div></div>';
        
        
        $('#about').append(data);
        
    })
    
    
}