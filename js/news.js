// this function is to get the news data 
function news(get,dir,id){
    // get the latest and old news using ajax
    xhr(get,{path:dir},id).done(function(json){
        
        
       var latestNewsData = '';
        
        latestNewsData += '<div class="inline col-lg-4" style="text-align:center;">';
        latestNewsData += '<h2>News Archive</h2>';
        
        latestNewsData += '<a href="#" data-featherlight="#latest" class="Orange" >Latest News</a>';
        
        // load the latest news data using the featherlight plugin
        var popUp1 ='<div class="lightbox" id="latest">';
        
        $.each(json.year,function(){
            
            popUp1 += '<h2 class="lead">'+this.title+'</h2>';
            popUp1 += '<h5>'+this.date+'</h5>';
            popUp1 += '<p>'+this.description+'</p>';
            
            
        });
        
        popUp1 += '</div>';
        
        
        $('#news').append(latestNewsData);
        $('#news').append(popUp1);
        
        
        
        var archiveNews = '';
        
        archiveNews += '<div class="inline col-lg-4" style="text-align:center;">';
        archiveNews += '<a href="#" data-featherlight="#archive" class="Orange" >Archived News</a>';
        
        // load the archived news data using the featherlight plugin
        var popUp2 ='<div class="lightbox" id="archive">';
        
        $.each(json.older,function(){
            
            popUp2 += '<div style="margin:5px;">'
            popUp2 += '<h2 class="lead">'+this.title+'</h2>';
            popUp2 += '<h5>'+this.date+'</h5>';
            popUp2 += '<p>'+this.description+'</p></div>';
            
        });
        
        $('#news').append(archiveNews);
        $('#news').append(popUp2);
        
    });
    
    
}