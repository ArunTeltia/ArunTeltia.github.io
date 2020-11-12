const profile = document.querySelector(".profilee");
const resume = document.querySelector(".resumee");
const projects = document.querySelector(".projectss");
const contact = document.querySelector(".contactt");
const profileWrapper = document.querySelector(".profile_wrapper");
const projectWrapper = document.querySelector(".projects_wrapper");
const contactWrapper = document.querySelector(".contact_wrapper");
const resumeWrapper = document.querySelector(".resume_wrapper");
const selfInfo = document.querySelector(".self-info");



profile.addEventListener('click',()=>{
    profile.classList.add("active");
    resume.classList.remove("active");
    projects.classList.remove("active");
    contact.classList.remove("active");
    profileWrapper.classList.remove("activated");
    contactWrapper.classList.remove("activated");
    resumeWrapper.classList.remove("activated");
    selfInfo.classList.remove("activated");
    projectWrapper.classList.remove("activated");
})

resume.addEventListener('click',()=>{
    profile.classList.remove("active");
    resume.classList.add("active");
    projects.classList.remove("active");
    contact.classList.remove("active");
    profileWrapper.classList.add("activated");
    contactWrapper.classList.remove("activated");
    resumeWrapper.classList.add("activated");
    selfInfo.classList.add("activated");
    projectWrapper.classList.remove("activated");
})
projects.addEventListener('click',()=>{
    profile.classList.remove("active");
    resume.classList.remove("active");
    projects.classList.add("active");
    contact.classList.remove("active");
    profileWrapper.classList.add("activated");
    contactWrapper.classList.remove("activated");
    resumeWrapper.classList.remove("activated");
    selfInfo.classList.add("activated");
    projectWrapper.classList.add("activated");
})
contact.addEventListener('click',()=>{
    profile.classList.remove("active");
    resume.classList.remove("active");
    projects.classList.remove("active");
    contact.classList.add("active");
    profileWrapper.classList.add("activated");
    contactWrapper.classList.add("activated");
    resumeWrapper.classList.remove("activated");
    selfInfo.classList.add("activated");
    projectWrapper.classList.remove("activated");
})
