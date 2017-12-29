// this section is to load the data from the employment section of the api
function academics(get, dir, id) {

    xhr(get, {
        path: dir
    }, id).done(function (json) {

        // begin attaching the employment information for section with id="academics"
        var data = '';

        data += '<div class="jumbotron"><div><h2>' + json.introduction.title + '</h2></div>';
        data += '<div><h3 style="text-align:center">' + json.introduction.content[0].title + '</h3></div>';
        data += '<div><p>' + json.introduction.content[0].description + '</p></div>';
        data += '<div style="text-align: center">';
        
        // append the degree statistics
        $.each(json.degreeStatistics.statistics, function () {
            // begin column
            data += '<div class="well academics"><h3 class="Orange">' + this.value + '</h3>';
            data += '<h4>' + this.description + '</h4></div>';

        })
        
        
        data += '<div class="Orange"><h4>' + json.introduction.content[1].title + '</h4></div><hr style="width:20vw">';
        data += '<div><p>' + json.introduction.content[1].description + '</p></div>';

        // append the employers information
        data += '<div class="Orange"><h4>' + json.employers.title + '</h4></div>';
        data += '<div><span><hr style="width:20vw">';
        
        // append the employers name
        $.each(json.employers.employerNames, function () {

            data += '<h4  style="display:inline">' + this + '&nbsp;&nbsp;&nbsp;&nbsp;</h4>';
        })

        data += '</span></div>';

        // append the carreer info
        data += '<div class="Orange"><h4>' + json.careers.title + '</h4></div>';
        data += '<div><span><hr style="width:20vw">';

        $.each(json.careers.careerNames, function () {

            data += '<h4 style="display:inline">' + this + '&nbsp;&nbsp;&nbsp;&nbsp;</h4>';
        });

        data += '</span></div>';
        
        // append the data to the section with id="academics" using jquery
        $('#academics').append(data);

        
        // begin populating the co-op table and jobs table

        var jobData = '';

        jobData += '<div style="text-align:center;">';
        jobData += '<div><h5 style="font-family: Montserrat,sans-serif;">To view employment and coop history of our students, click below </h5></div>'
        
        
        // attach the title for both the coop table and the employment table
        jobData += '<div class="coopBox">'
        // begin attaching data for the featherlight modal plugin
        // this data will pop-up as a modal and display the data.
        jobData += '<div class="well" data-featherlight="#tableCoop"><p>' + json.coopTable.title + '</p></div></div>';
        jobData += '<div class="coopBox">'
        jobData += '<div class="well" data-featherlight="#tableProfEmp"><p>' + json.employmentTable.title + '</p></div></div>';

        var jobTable1 = '<div class="tablecss" id="tableCoop"><table><thead><tr><th>Degree</th><th>Employer</th><th>Location</th><th>Term</th></tr></thead><tbody>';
        
        // iterate throug the coop aaray and structure the data in a table
        $.each(json.coopTable.coopInformation, function () {

            jobTable1 += '<tr>'
            jobTable1 += '<td>' + this.degree + '</td>';
            jobTable1 += '<td>' + this.employer + '</td>';
            jobTable1 += '<td>' + this.city + '</td>';
            jobTable1 += '<td>' + this.term + '</td></tr>';


        });
        jobTable1 += '</tbody></div>';
        // enter professional employment
        
        // iterate throug the employment aaray and insert the data in a table
        var jobTable2 = '<div class="tablecss" id="tableProfEmp"><table><thead><tr><th>Degree</th><th>Employer</th><th>Location</th><th>Role</th><th>Start Date</th></tr></thead><tbody>';
        $.each(json.employmentTable.professionalEmploymentInformation, function () {

            jobTable2 += '<tr>'
            jobTable2 += '<td>' + this.degree + '</td>';
            jobTable2 += '<td>' + this.employer + '</td>';
            jobTable2 += '<td>' + this.city + '</td>';
            jobTable2 += '<td>' + this.title + '</td>';
            jobTable2 += '<td>' + this.startDate + '</td></tr>';


        });
        jobTable2 += '</tbody></div>';

        jobTable2 += '</div>';
        
        // attach all the job data and table information on the html
        $('#coop').append(jobData);
        $('#coop').append(jobTable1);
        $('#coop').append(jobTable2);

    });


}
