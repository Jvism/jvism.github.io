function animation(scroll_value){

    // all
    const bgApp = document.querySelector(".bg-app");
    // 0
    const scrollIcon = document.querySelector(".scroll"); 
    const titleApp = document.querySelector(".title-app");
    const pageBeta = document.querySelector(".beta-page");
    // 1
    const aboutMe = document.querySelector(".brief-history");
    // 2
    const nameAboutMe = document.querySelector(".name-about-me");
    const photoAboutMe = document.querySelector(".photo-about-me");
    const dataAboutMe = document.querySelector(".my-data");
    const separatorAboutMe = document.querySelector(".separator");
    const titleStudiesAboutMe = document.querySelector(".title-studies");
    const studyAboutMe = document.querySelectorAll(".study");
    // 3
    const skills = document.querySelectorAll(".skill");
    const titleSkills = document.querySelector(".title-skills");
    const titleNextSkills = document.querySelector(".title-next-skills");
    const nextSkills = document.querySelectorAll(".icon-ns");

    if(scroll_value == 0){
        bgApp.setAttribute("style", "width: 50vw;");
        titleApp.setAttribute("style", "transform: translateX(0);");
        aboutMe.setAttribute("style", "transform: translateY(20%);");
        scrollIcon.setAttribute("style", "opacity: 1; transition-delay: 500ms;");
        
        pageBeta.setAttribute("style", "opacity: 1;");
    };

    if(scroll_value == 1){

        //provisorio
        pageBeta.setAttribute("style", "opacity: 0;");

        bgApp.setAttribute("style", "width: 100vw;");
        titleApp.setAttribute("style", "transform: translateX(70%);");
        aboutMe.setAttribute("style", "transform: translateY(0); transition-delay: 500ms; opacity: 1;");
        scrollIcon.setAttribute("style", "opacity: 0; transition-delay: 0ms;");

        // about me 
        nameAboutMe.setAttribute("style", "transform: translateX(-100%); opacity: 0;");
        photoAboutMe.setAttribute("style", "transform: translateX(100%); opacity: 0;");
        dataAboutMe.setAttribute("style", "transform: translateY(20%); opacity: 0;");
        separatorAboutMe.setAttribute("style", "width: 0%; opacity: 0;");
        titleStudiesAboutMe.setAttribute("style", "transform: translateX(-100%); opacity: 0;");

        studyAboutMe.forEach((study) => {
            study.setAttribute("style", "transform: translateX(100%); opacity: 0;");
        });
    };

    if(scroll_value == 2){
        bgApp.setAttribute("style", "width: 100vw; background: #F5F5F5;");
        titleApp.setAttribute("style", "transform: translate(70%, -110%);");
        aboutMe.setAttribute("style", "transform: translateX(-120%); opacity: 0;");
        skills.forEach(skill => {
            skill.setAttribute("style", "transform: translateY(10%); opacity: 0;");
        });
        titleSkills.setAttribute("style", "transform: translateX(-50%); opacity: 0;");
        titleNextSkills.setAttribute("style", "transform: translateX(-50%); opacity: 0;");
        nextSkills.forEach((skill,index) => {
            skill.setAttribute("style", "transform: translateY(20%); opacity: 0;")
        });

        // about me 
        nameAboutMe.setAttribute("style", "transform: translateX(0); opacity: 1; transition-delay: .5s;");
        photoAboutMe.setAttribute("style", "transform: translateX(0); opacity: 1; transition-delay: .5s;");
        dataAboutMe.setAttribute("style", "transform: translateY(0); opacity: 1; transition-delay: .5s;");
        separatorAboutMe.setAttribute("style", "width: 100%; opacity: 1; transition-delay: .4s;");
        titleStudiesAboutMe.setAttribute("style", "transform: translateX(0); opacity: 1; transition-delay: .7s;");

        studyAboutMe.forEach((study) => {
            study.setAttribute("style", "transform: translateX(0); opacity: 1; transition-delay: .7s;");
        });
    };

    if(scroll_value == 3){
        // about me 
        nameAboutMe.setAttribute("style", "transform: translateX(-100%); opacity: 0;");
        photoAboutMe.setAttribute("style", "transform: translateX(100%); opacity: 0;");
        dataAboutMe.setAttribute("style", "transform: translateY(20%); opacity: 0;");
        separatorAboutMe.setAttribute("style", "width: 0%; opacity: 0;");
        titleStudiesAboutMe.setAttribute("style", "transform: translateX(-100%); opacity: 0;");
        
        studyAboutMe.forEach((study) => {
            study.setAttribute("style", "transform: translateX(100%); opacity: 0;");
        });

        skills.forEach((skill,index) => {
            skill.setAttribute("style", "transform: translateY(0); opacity: 1;transition-delay:" + (500 + (150*index)) + "ms;")
        });
        titleSkills.setAttribute("style", "transform: translateX(0); opacity: 1;");
        titleNextSkills.setAttribute("style", "transform: translateX(0); opacity: 1; transition-delay: 1500ms;");
        nextSkills.forEach((skill,index) => {
            skill.setAttribute("style", "transform: translateY(0); opacity: 1;transition-delay:" + (1500 + (150*index)) + "ms;")
        });
    };

};