
// this loads the study abroad student resource 
function studyAbroad(get, dir, id) {
    
    // send an ajax call to get the resources data.
    xhr(get, {
        path: dir
    }, id).done(function (json) {


        var abroadData = '';
        var lightboxData = '';

        abroadData += '<div class="inline col-lg-4">';
        abroadData += '<div class="well minor" data-featherlight="#studyAbroad"><span>' + json.studyAbroad.title + '</span></div>'

        lightboxData += '<div class="lightbox" id="studyAbroad"><div><h2 style="text-align-center;">' + json.studyAbroad.title + '</h2>';
        lightboxData += '<p>' + json.studyAbroad.description + '</p></div>';

        // attach the study abroad data on the featherlight modal
        $.each(json.studyAbroad.places, function () {

            lightboxData += '<div>';
            lightboxData += '<h3>' + this.nameOfPlace + '</h3>';
            lightboxData += '<p>' + this.description + '</p>';
            lightboxData += '</div>';


        })
        // close the featherlight div
        lightboxData += '</div>'
        lightboxData += '</div>'
        
        // append the study abroad div 
        $('#firstrow').append(abroadData);
        // attach the feather-light study abroad details
        $('#firstrow').append(lightboxData);
        
        // load the tutors and lab information{ parameters: the lab information json data}
        tutorAndLab(json.tutorsAndLabInformation);
        // load the form information{ parameters: the form information json data}
        forms(json.forms);

    });

}

// load the tutor and lab information in div and details in a featherlight plugin
function tutorAndLab(json) {

    var labData = '';
    var lightboxData = '';
    
    labData += '<div class="inline col-lg-4">';
    labData += '<div class="well minor" data-featherlight="#labData"><span>' + json.title + '</span></div>'

    // load the details of the tutor and lab information on the featherlight modal
    lightboxData += '<div class="lightbox" id="labData"><div><h2 style="text-align-center;">' + json.title + '</h2>';

    lightboxData += '<p>' + json.description + '</p>';

    lightboxData += '<a href="' + json.tutoringLabHoursLink + '">Tutoring&nbsp; and&nbsp; lab&nbsp; hours</a>';
    // append the labdata to the  div 
    $('#firstrow').append(labData);
    $('#firstrow').append(lightboxData);
}

// load the form links in a div and details in a featherlight plugin
function forms(json) {

    var formData = '';
    var lightBoxData = '';

    formData += '<div class="inline col-lg-4">';
    formData += '<div class="well minor" data-featherlight="#formData"><span>Forms</span></div>'
    // initialize the DOM elements for the featherlight plugin
    lightBoxData += '<div class="lightbox" id="formData">';
    lightBoxData += '<div style="display: grid;"><h3>Graduate Forms</h3>'
    // iterate throgh the graduate form links
    $.each(json.graduateForms, function () {
        lightBoxData += '<a href="' + this.href + '">' + this.formName + '</a>';

    });
    lightBoxData += '</div>';

    lightBoxData += '<div style="display:block;"><h3>Undergraduate Forms</h3>'
    
    // iterate through the undergraduate form links
    $.each(json.undergraduateForms, function () {

        lightBoxData += '<a href="' + this.href + '">' + this.formName + '</a>';

    });
    lightBoxData += '</div></div></div>';

    $('#firstrow').append(formData);
    // attach the featherlight DOM elements tothe HTML website
    $('#firstrow').append(lightBoxData);
}
