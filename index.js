var i = 0;
var line = 0;
var txt = ["class Youzhang_Mark_Sun:", "skills = List[]", "def __init__:", "skills = []", "skills.extend([\"Python\", \"Java\", \"MySQL\", \"Algorithms\"])", "def about_me():", "GitHub = \"GitHub\""];
var gitText = "GitHub"
var speed = 50;
var speedSpace = 500;
var speedLine = 1000;
var check = true;
var checkGit = false;

function typeWriter() {
    if (check) {
        
        if (i < txt[line].length) {
            document.getElementById(line + "").innerHTML += txt[line].charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        if (i == txt[line].length) {
            i = 0;
            if (line < 8) {
                line++;
            } 
            else {
                check = false;
            }
        }
        
    }
}
