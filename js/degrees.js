// this function loads the graduate and undergraduate information 
function degrees(get, dir, id) {

    // get the ajax data for graduate and undergraduate degrees from '/degrees/'
    xhr(get, {
        path: dir
    }, id).done(function (json) {

        // this is the initialization for the navigation tabs for the easytabs plugins
        var tabContent = '<div id="tab-container" class="tab-container">';
        tabContent += '<ul class="nav nav-tabs nav-justified">';
        tabContent += '<li class="active"><a href="#tabs1-undergraduate">Undergraduate</a></li>';
        tabContent += '<li><a href="#tabs1-graduate">Graduate</a></li></ul>';

        tabContent += '<div class="panel-container">';

        tabContent += '<div id="tabs1-undergraduate">';

        // initialize the div for the accordian plugin
        // the accordian contains details of the undergraduate degree 
        tabContent += '<div class="panel panel-default" id="accordian1">';

        // iterate through all the undergraduate degrees using Jquery
        $.each(json.undergraduate, function () {
            tabContent += '<div class="panel-heading"><h4>' + this.title + '</h4></div>';
            tabContent += '<div class="panel-body"><p>' + this.description + '</p>';
            tabContent += '<ul>';

            // iterate through all the concentrations to be attached 
            $.each(this.concentrations, function () {

                tabContent += '<li>' + this + '</li>';
            });
            tabContent += '</ul></div>';

        });
        tabContent += '</div></div>';

        // initialize the second tab for the easy tab plugin
        tabContent += '<div id="tabs1-graduate">';

        // initialize the div for the second accordian
        // the accordian contains details of the undergraduate degree 
        tabContent += '<div id="accordian2">';

        // iterate through all the graduate degrees
        $.each(json.graduate, function () {

            // if concentrations for the graduate degree is available, execute this
            if (this.concentrations) {
                tabContent += '<div class="panel-heading"><h4>' + this.title + '</h4></div>';
                tabContent += '<div class="panel-body"><p>' + this.description + '</p>';
                tabContent += '<ul>';
                $.each(this.concentrations, function () {

                    tabContent += '<li>' + this + '</li>';
                });

            }
            // if concentration for the degree is not available, execute this
            else {
                tabContent += '<div class="panel-heading"><h4>' + this.degreeName + '</h4></div>';
                tabContent += '<div class="panel-body">';
                tabContent += '<ul>';
                $.each(this.availableCertificates, function () {

                    tabContent += '<li>' + this + '</li>';
                })

            }

            tabContent += '</ul></div>';

        });

        tabContent += '</div></div></div>';
        // attach content to the section using jquery
        $("#degrees").append(tabContent);
        // initialize the easy tabs 
        $('#tab-container').easytabs();

        // iitalize the accordian plugin for specified divs
        $('#accordian1').accordion({
            heightStyle: "content"
        });
        $('#accordian2').accordion({
            heightStyle: "content"
        });
    });

}
