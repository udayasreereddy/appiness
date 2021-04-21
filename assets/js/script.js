var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var doctorsObject = JSON.parse(xhr.responseText);

        var container = document.querySelector(".cardContainer");
        for (var i = 0; i < doctorsObject.docters.length; i += 1) {

            var doctorDepartment = ' <h4 class="doctorDepartment">';
            doctorDepartment += doctorsObject.docters[i].departmentName;
            doctorDepartment += '</h4>';

            var doctorName = ' <h4 class="card-title doctorName">';
            doctorName += doctorsObject.docters[i].name;
            doctorName += '</h4> ';


            var doctorPhoto = '<div class=""><div class="">'
            doctorPhoto += '  <img class="img-responsive img-circle" src="assets/images/gallery/';
            doctorPhoto += doctorsObject.docters[i].imgUrl;
            doctorPhoto += '"></div></div>';

            var doctorInfo = ' <div class="doctorInfo">';
            doctorInfo += doctorsObject.docters[i].information;
            doctorInfo += '</div>';

            var doctorExperienceInfo = ' <div class="doctorExperienceInfo">';
            doctorExperienceInfo += doctorsObject.docters[i].experienceInfo;
            doctorExperienceInfo += '</div>';

            var doctorMoreInfo = ' <div class="doctorMoreInfo"> Know More';
            doctorMoreInfo += '</div> </div>';

            container.innerHTML += '<div class="card col-sm-12 col-md-6 justify-content-center text-center"><div class="card-header">' +
                doctorDepartment + doctorPhoto + doctorName + doctorInfo + doctorExperienceInfo + doctorMoreInfo + '</div></div>';
        }
    }
};
xhr.open('GET', 'assets/js/data.json');
xhr.send();