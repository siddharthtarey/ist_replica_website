// load the data on the website regarding the undergraduate minors
function minors(get, dir, id) {
    // make an ajax call to fetch the data of udergraduate minors
    xhr(get, {
        path: dir
    }, id).done(function (json) {

        count = 0;
        var minorData = '';
        var lightboxData = '';
        
        // iterate through every minors
        $.each(json.UgMinors, function () {

            // this if condition is to put minors in one row
            if (count % 3 == 0) {
                minorData += '<div class="row justify-content-md-center">';
            }

            minorData += '<div class="inline col-lg-4">';
            
            // initialize the div dom for the featherlight modal plugin
            minorData += '<div class="well minor" data-featherlight="#' + count + '" ><span>' + this.title + '</span></div>';

            minorData += '</div>';
            count += 1;
            // this if is to indicate the end of the row
            if (count % 3 == 0) {

                minorData += '</div>';
            }
            
            // attach data for the feather-light plugin
            lightboxData += '<div class="lightbox" id="' + (count-1) + '"><p>' + this.description + '</p>';
            lightboxData += '<h3 style="text-align:center">These are the list of courses:</h3>';
            lightboxData += '<ul>';
            $.each(this.courses,function(){
                
                lightboxData += '<li>'+this+'</li>';
                
            });
            lightboxData += '</ul></div>';

        });
        $('#minors').append(minorData);
        $('#minors').append(lightboxData);


    });

}
