function boxButton1() { showBox("box1"); }
function boxButton2() { showBox("box2"); }
function boxButton3() { showBox("box3"); }
function boxButton4() { showBox("box4"); }
function boxButton5() { showBox("box5"); }
function boxButton6() { showBox("box6"); }
function boxButton7() { showBox("box7"); }

function resetBoxes() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.opacity = "0";
        box.style.transform = "translateY(-1000px)";
    });
}

function showBox(boxClass) {
    resetBoxes();

    let box = document.getElementsByClassName(boxClass)[0];
    if (box) {
        box.style.opacity = "1";
        box.style.transform = "translateY(0px)";
    }
}

