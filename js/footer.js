// this function appends data for the footer section
function footer(get, dir, id) {
    // get the footer data from the api
    xhr(get, {
        path: dir
    }, id).done(function (json) {

        data = '';
        // attach the sociial media information extracted from the api.
        data += '<div><div><h2 class="lead Orange" style="text-align:center;">' + json.social.title + '</h2></div>';
        data += '<div><h4 style="text-align:center">' + json.social.tweet + '<h4></div>';
        data += '<div><p style="text-align:center">' + json.social.by + '</p></div>';
        data += '<hr style="width:20vw">';
        data += '<div  style="text-align:center;"><a href="' + json.social.facebook + '" class="fa fa-facebook"></a>'
        data += '<a href="' + json.social.twitter + '" class="fa fa-twitter"></a></div></div>'

        linkData = '';

        linkData += '<div id ="news" class="row justify-content-md-center linkBackground"><div class="inline col-lg-4" style="display:inline;text-align:center;">';
        
        // attach the links of forms, etc to the div by iterating through the array
        $.each(json.quickLinks, function () {

            linkData += '<a href="' + this.href + '" class="Orange" style="display:block;">' + this.title + '</a>';

        })
        linkData += '</div>';
        // attach the copy rights data.
        linkData += '<div class="inline col-lg-4 copy">';
        linkData += json.copyright.html;
        linkData += '</div></div>';
        
        // attach the social media and form data on the footer section using Jquery
        $('#footer').append(data);
        $('#footer').append(linkData);


    })

}
