const forms = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElements = document.getElementById ('resume-display') as HTMLDivElement

forms.addEventListener('submit' , (event: Event) =>{ event
event.preventDefault();

const name= (document.getElementById('name') as HTMLInputElement).value
const email= (document.getElementById('email') as HTMLInputElement).value
const mobile= (document.getElementById('mobile') as HTMLInputElement).value
const education= (document.getElementById('education') as HTMLTextAreaElement).value
const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value
const skills= (document.getElementById('skills') as HTMLTextAreaElement).value

const resumeDynamicResumeBuilder=`
<h2><b> Editable Resume Builder </b></h2>
<h3><b> Personal Information  </b></h3>
<p><b> Name:</b> <span contenteditable="true">${name}</span></p>
<p><b> Email:</b><span contenteditable="true"> ${email}</span></p>
<p><b> Mobile:</b><span contenteditable="true"> ${mobile}</span> </p>

<h3>Education</h3>
<p contenteditable="true">  ${education}</p>
<h3>Work Experience</h3>
<p contenteditable="true"> ${workExperience}</p>
<h3>Skills</h3>
<p contenteditable="true">${skills}</p>


`;
if (resumeDisplayElement){resumeDisplayElement.innerHTML=resumeDynamicResumeBuilder}
else {console.error ('The resume display missing' );}

});

