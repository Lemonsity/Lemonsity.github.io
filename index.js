var i = 0;
var line = 0;
var txt = ["class Youzhang_Mark_Sun:", 
            "def __init__(self):", 
            "self.skills = []", 
            "self.skills.extend([\"Python\", \"Java\", \"MySQL\", \"Algorithms\"])", 
            "def about_me(self):", 
            "GitHub = \"GitHub\"",
            "Resume = \"Resume\""];
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
            if (line < 6) {
                line++;
            } 
            else {
                check = false;
            }
        }
        
    }
}
