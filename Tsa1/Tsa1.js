function GreenTheme(){
    var colTwoTextColor = document.getElementsByClassName('resume-paper');
    var borderBottomColor = document.getElementsByClassName('resume-column-1-row');
    var firstColumnTitle = document.getElementsByClassName('column-title');
    var firstColumnInformationTitle = document.getElementsByClassName('column-info-container-1');
    var student = document.getElementsByClassName('resume-column-2-intro-name-subtitle');
    var secondColumnColor = document.getElementsByClassName('resume-column-2');
    var schoolTitle = document.getElementsByClassName('schools-title');
    var information = document.getElementsByClassName('Information');
    var profPic = document.getElementsByClassName('resume-column-1-row-pic');
    var svg = document.getElementsByTagName('svg');
    var name = document.getElementById('resume-column-2-intro-name');
    for(let el of colTwoTextColor){
        el.style.color = "rgb(7, 105, 7)";
    }
    for(let el of borderBottomColor){
        el.style.borderBottom = "1px solid rgb(194, 149, 15)";
        el.style.backgroundColor = "rgb(7, 105, 7)";
    }
    for(let el of firstColumnTitle){
        el.style.color = "rgb(194, 149, 15)";
    }
    for(let el of firstColumnInformationTitle ){
        el.style.color = "rgb(194, 149, 15)";
    }
    for(let el of student ){
        el.style.color = "rgb(194, 149, 15)";
    }
    for(let el of schoolTitle){
        el.style.color = "rgb(7, 105, 7)";
    }
    for(let el of svg){
        el.style.color = "rgb(194, 149, 15)";
    }
    for(let el of secondColumnColor){
        el.style.backgroundColor = "rgb(255, 255, 255)";
    }
    for(let el of information){
        el.style.color = "rgb(255, 255, 255)";
    }
    for(let el of profPic){
        el.style.border = "1px solid rgb(255, 255, 255)";
    }
    name.style.color = "rgb(7, 105, 7)";
}

function BlueTheme(){
    var colTwoTextColor = document.getElementsByClassName('resume-paper');
    var borderBottomColor = document.getElementsByClassName('resume-column-1-row');
    var firstColumnTitle = document.getElementsByClassName('column-title');
    var firstColumnInformationTitle = document.getElementsByClassName('column-info-container-1');
    var student = document.getElementsByClassName('resume-column-2-intro-name-subtitle');
    var schoolTitle = document.getElementsByClassName('schools-title');
    var secondColumnColor = document.getElementsByClassName('resume-column-2');
    var svg = document.getElementsByTagName('svg');
    var information = document.getElementsByClassName('Information');
    var profPic = document.getElementsByClassName('resume-column-1-row-pic');
    var name = document.getElementById('resume-column-2-intro-name');
    for(let el of colTwoTextColor){
        el.style.color = "rgb(255, 255, 255)";
    }
    for(let el of borderBottomColor){
        el.style.borderBottom = "1px solid rgb(13, 26, 100)";
        el.style.backgroundColor = "rgb(255, 255, 255)";
    }
    for(let el of firstColumnTitle){
        el.style.color = "rgb(194, 149, 15)";
    }
    for(let el of firstColumnInformationTitle ){
        el.style.color = "rgb(13, 26, 100)";
    }
    for(let el of student ){
        el.style.color = "rgb(194, 149, 15)";
    }
    for(let el of schoolTitle){
        el.style.color = "rgb(194, 149, 15)";
    }
    for(let el of secondColumnColor){
        el.style.backgroundColor = "rgb(13, 26, 100)";
    }
    for(let el of svg){
        el.style.color = "rgb(194, 149, 15)";
    }
    for(let el of information){
        el.style.color = "rgb(13, 26, 100)";
    }
    for(let el of profPic){
        el.style.border = "1px solid rgb(13, 26, 100)";
    }
    name.style.color = "rgb(255, 255, 255)";
}

function DefaultTheme(){
    var colTwoTextColor = document.getElementsByClassName('resume-paper');
    var borderBottomColor = document.getElementsByClassName('resume-column-1-row');
    var firstColumnTitle = document.getElementsByClassName('column-title');
    var firstColumnInformationTitle = document.getElementsByClassName('column-info-container-1');
    var student = document.getElementsByClassName('resume-column-2-intro-name-subtitle');
    var schoolTitle = document.getElementsByClassName('schools-title');
    var secondColumnColor = document.getElementsByClassName('resume-column-2');
    var svg = document.getElementsByTagName('svg');
    var information = document.getElementsByClassName('Information');
    var profPic = document.getElementsByClassName('resume-column-1-row-pic');
    var name = document.getElementById('resume-column-2-intro-name');
    for(let el of colTwoTextColor){
        el.style.color = "rgb(0, 0, 0)";
    }
    for(let el of borderBottomColor){
        el.style.borderBottom = "1px solid rgb(255, 255, 255)";
        el.style.backgroundColor = "rgb(44, 44, 44)";
    }
    for(let el of firstColumnTitle){
        el.style.color = "rgb(255, 255, 255)";
    }
    for(let el of firstColumnInformationTitle ){
        el.style.color = "rgb(128, 128, 248)";
    }
    for(let el of student ){
        el.style.color = "rgb(128, 128, 248)";
    }
    for(let el of schoolTitle){
        el.style.color = "rgb(128, 128, 248)";
    }
    for(let el of secondColumnColor){
        el.style.backgroundColor = "rgb(255, 255, 255)";
    }
    for(let el of svg){
        el.style.color = "rgb(128, 128, 248)";
    }
    for(let el of information){
        el.style.color = "rgb(255, 255, 255)";
    }
    for(let el of profPic){
        el.style.border = "1px solid rgb(255, 255, 255)";
    }
    name.style.color = "rgb(0, 0, 0)";
}