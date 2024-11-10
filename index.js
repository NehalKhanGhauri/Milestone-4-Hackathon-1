var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var resumeDynamicResumeBuilder = "\n<h2><b> Editable Resume Builder </b></h2>\n<h3><b> Personal Information  </b></h3>\n<p><b> Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b> Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n<p><b> Mobile:</b><span contenteditable=\"true\"> ").concat(mobile, "</span> </p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">  ").concat(education, "</p>\n<h3>Work Experience</h3>\n<p contenteditable=\"true\"> ").concat(workExperience, "</p>\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n\n\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeDynamicResumeBuilder;
    }
    else {
        console.error('The resume display missing');
    }
});
