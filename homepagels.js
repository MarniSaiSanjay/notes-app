if (localStorage.getItem("numberofnotes")) { } // we use the name numberof as number of notes of user.
else {
    var initial = 0;
    localStorage.setItem("numberofnotes", initial);
    localStorage.setItem("listoftitles", '[]');//name given to colletion of titles i.e. list of titles-> titles ; '[]' -> empty array.
    localStorage.setItem("listofcontent", '[]');
}

function SAVE1() { 
    var savenotes = document.getElementById("notes");
    var savetitle = document.getElementById("title");
    if(savenotes.value!="" && savetitle.value!=""){
    var n = parseInt(localStorage.getItem("numberofnotes"));
    localStorage.setItem("numberofnotes", n + 1);// incrementing numberof by one.
    var oldlist = JSON.parse(localStorage.getItem("listoftitles"));
    oldlist.push(savetitle.value);
    localStorage.setItem("listoftitles", JSON.stringify(oldlist));
    var contentlist = JSON.parse(localStorage.getItem("listofcontent"));
    contentlist.push(savenotes.value);
    localStorage.setItem("listofcontent", JSON.stringify(contentlist));
    alert("Notes Saved");
    location.reload();
}
 else{
       alert(" Please enter both the fields.");
    }
}

function deleteall() {
    localStorage.clear();
    location.reload();
    alert("All Notes are deleted.")
}  

function titlechange() {
    var p = prompt("Enter serial number of the note.");
    if (p % 1 == 0) {
        var list = JSON.parse(localStorage.getItem("listoftitles")); // list is an array
        var pp = parseInt(p) - 1;
        if (pp < list.length && pp>=0) {
            var str = prompt("Enter New Title.");
            if (str.length > 0) {
                list[pp] = str;
                localStorage.setItem("listoftitles", JSON.stringify(list));
                location.reload();
            }
        } else if(pp%1==0) {
            alert("No notes found please check serial number entered.");
        }
    }
}
function deleteit() {
    var no = prompt("Enter serial number of the note.");
    var lt = JSON.parse(localStorage.getItem("listoftitles"));
    var lc = JSON.parse(localStorage.getItem("listofcontent"));
    var n = parseInt(localStorage.getItem("numberofnotes"));
    if (no.length > 0 ) {
        var i = parseInt(no) - 1; // i -> index 
        if(i<n && i>=0) {
        localStorage.setItem("numberofnotes", n - 1);
        lt.splice(i, 1);
        lc.splice(i, 1);
        localStorage.setItem("listoftitles", JSON.stringify(lt));
        localStorage.setItem("listofcontent", JSON.stringify(lc));
        location.reload();}
        else{
            alert("No notes found please check serial number entered.");
        }
    }
}

function print() {
    var nn = parseInt(localStorage.getItem("numberofnotes"));
    for (var i = 0; i < nn; i++) {
        var base = document.getElementById("base1");
        var el1 = document.createElement("div");// box
        var el2 = document.createElement("div");// title
        var el3 = document.createElement("button");// Open button
        el1.setAttribute("class","box");
        el2.setAttribute("class", "titleinbox");
        el3.setAttribute("class", "open");
        el3.innerHTML = "Open";
        el3.setAttribute("id", i); // i used in for loop 
        base.appendChild(el1);
        var lt = JSON.parse(localStorage.getItem("listoftitles"));
        var lc = JSON.parse(localStorage.getItem("listofcontent"));
        el2.innerHTML = (i + 1) + "." + lt[i];
        el1.appendChild(el2);
        el1.appendChild(el3);


        var el4 = document.createElement("div");
        el4.setAttribute("class", "opt");
        el4.setAttribute("id", "options" + i);
        var el5 = document.createElement("button");
        var el6 = document.createElement("button");
        var el7 = document.createElement("button");
        el5.innerHTML = "Close";
        el6.innerHTML = "Save";
        el7.innerHTML = "Copy";
        el5.setAttribute("class", "closeclose");
        el6.setAttribute("class", "savesave");
        el7.setAttribute("class", "copycopy");
        el4.appendChild(el5);
        el4.appendChild(el6);
        el4.appendChild(el7);
        el5.setAttribute("id", i);
        el6.setAttribute("id", i);
        el7.setAttribute("id", i);
        el1.appendChild(el4);
        var el8 = document.createElement("textarea");
        el8.setAttribute("class", "inputtext");
        el8.setAttribute("id", "in" + i);
        el8.innerHTML = lc[i];
        el1.appendChild(el8);
    }
}
print();
// we are giving click functionality to EVERY open button.
var btns = document.getElementsByClassName("open");
for(var k=0;k<btns.length;k++){
    var p = btns.item(k);// .item(i) is ith item of nodelist.
    p.addEventListener("click",openbook,false);
}
function openbook(e) {
    var select = parseInt(e.target.id);//  e.target.id; id of that open button we click. we gave id to open button as i 
    var ab = document.getElementById("options"+select); // options is el4 and el5,6,7 are in el4 so we only call el4.
    ab.style.display="block";
    var ab2 = document.getElementById("in"+select);//but el8 isn't in el4 (it is directly in el1) so we call this separately.
    ab2.style.display="flex";
}
// we are giving click functionality to EVERY close button.
// below is similar to 
// btnsclose.item(1).addEventListener("click",closebook,false); 
// btnsclose.item(2).addEventListener("click",closebook,false); and so on...for all 
// but we don't know how many notes a user make so  we make a var and use its length and then run the loop to 
// set the addEventListener to all buttons.
var btnsclose = document.getElementsByClassName("closeclose");
for(var k=0;k<btnsclose.length;k++){
    var p=btnsclose.item(k);
    p.addEventListener("click",closebook,false);
}
function closebook(e) {
    var select  = parseInt(e.target.id);
    var ab = document.getElementById("options"+select);
    ab.style.display="none";
    var ab2 = document.getElementById("in"+select);
    ab2.style.display="none";
}

var btnsave = document.getElementsByClassName("savesave");
for(var k=0;k<btnsave.length;k++){
    var p = btnsave.item(k);
    p.addEventListener("click",save,false);
}
function save(e) {
    var select = parseInt(e.target.id);
    var ab =document.getElementById("in"+select);
    var oldlist1=JSON.parse(localStorage.getItem("listofcontent"));
    var fn = ab.value;
    oldlist1[select]=fn;
    localStorage.setItem("listofcontent",JSON.stringify(oldlist1));
}

var btncopy = document.getElementsByClassName("copycopy");
for(var k=0;k<btncopy.length;k++){
    var p =btncopy.item(k);
    p.addEventListener("click",copynotes,false);
}
function copynotes(e) {
    var select = parseInt(e.target.id);
    var ab = document.getElementById("in"+select);
    ab.select();
    document.execCommand("copy");
}
