//Task No 1//
document.write("<h1>Task # 1</h1>");
document.write("Result");
document.write("</br>");
a=(10);
document.write(`The Value of a is ${a}`);
document.write("</br>");
document.write("------------------------------------------");
document.write("</br>");
document.write(`The Value of ++a is :${++a}`);
document.write("</br>");
document.write(`Now the value of a is :${a}`);
document.write("</br>");
document.write("</br>");
document.write(`The value of a++ is :${a}`);
document.write("</br>");
document.write(`Now the value of a is :${++a}`);
document.write("</br>");
document.write("</br>");
document.write(`The value of a-- is :${--a}`);
document.write("</br>");
document.write(`Now the value of a is :${a}`);
document.write("</br>");
document.write("</br>");
document.write(` The value of a-- is :${a--}`);
document.write("</br>");
document.write(`Now the value of a is :${a}`);
document.write("</br>");
//Task No 2//
document.write("<h1>Task # 2</h1>");
var b=(2);
var c=(1);
var result=(--b - --c + ++b + b--); // 1 - 0 + 2 + 2//
document.write(`B is ${b}`);
document.write("</br>");
document.write(`C is ${c}`);
document.write("</br>");
document.write(`Result is ${result}`);
//Task No 3-4//
document.write("<h1>Task # 3-4</h1>");
var username=prompt('Enter Your Name');
document.write(username);
//Task No 5//
document.write("<h1>Task # 5</h1>");
var table=prompt("Enter a Number for a Table",5) ;
var one     =(table * 1);
var two     =(table * 2);
var three   =(table * 3);
var four    =(table * 4);
var five    =(table * 5);
var six     =(table * 6);
var seven   =(table * 7);
var eight   =(table * 8);
var nine    =(table * 9);
var ten     =(table * 10);
document.write("</br>");
document.write(`${table} x 1 = ${one}`);
document.write("</br>");
document.write(`${table} x 2 = ${two}`);
document.write("</br>");
document.write(`${table} x 3 = ${three}`);
document.write("</br>");
document.write(`${table} x 4 = ${four}`);
document.write("</br>");
document.write(`${table} x 5 = ${five}`);
document.write("</br>");
document.write(`${table} x 6 = ${six}`);
document.write("</br>");
document.write(`${table} x 7 = ${seven}`);
document.write("</br>");
document.write(`${table} x 8 = ${eight}`);
document.write("</br>");
document.write(`${table} x 9 = ${nine}`);
document.write("</br>");
document.write(`${table} x 10 = ${ten}`);
document.write("</br>");
//Task No 6//
document.write("<h1>Task # 6</h1>");
var english=(100);
var math=(100);
var urdu=(100);
var totalmarks=(english + math + urdu );
var obtanone=(54);
var obtantwo=(48);
var percentageenglish=((obtanone / totalmarks*100));
var percentagemath=((obtanone / totalmarks*100));
var percentageurdu=((obtantwo / totalmarks*100));
document.write("<h3> Subject TotalMarks Obtained Marks Percentage</h3>");
document.write(`<h3> Eglish   ${totalmarks} ${obtanone} ${percentageenglish} %</h3>`)
document.write(`<h3> Math  ${totalmarks} ${obtanone} ${percentagemath} %</h3>`)
document.write(`<h3> Math  ${totalmarks} ${obtantwo} ${percentageurdu} %</h3>`)
