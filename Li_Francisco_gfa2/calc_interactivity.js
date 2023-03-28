//variable declarations
let num_1;
let num_2;
let remainder;
let final_answer;

//when "+" (addition) operator is selected:
document.getElementById("add_btn").onclick = function addition() {
    //prints operation in place of blank between the number textboxes
    document.getElementById("oprtn_blank").textContent = '+';
    //datatype conversions from string to float
    num_1 = parseFloat(document.getElementById("num1").value);
    num_2 = parseFloat(document.getElementById("num2").value);
    //actual operation
    final_answer = (num_1 + num_2);
    //prints variable "final_answer" in place of blank beside the equals sign
    document.getElementById("answer_blank").textContent = final_answer;
    //Answer in short sentence form beside the "Answer: " label
    document.getElementById("ans_area").innerHTML = "The sum of " + num_1 + " and " + num_2 + " is " + final_answer + ".";
};
//when "-" (subtraction) operator is selected:
document.getElementById("sub_btn").onclick = function subtraction() {
    //prints operation in place of blank between the number textboxes
    document.getElementById("oprtn_blank").textContent = '-';
    num_1 = parseFloat(document.getElementById("num1").value);
    num_2 = parseFloat(document.getElementById("num2").value);
    final_answer = (num_1 - num_2);
    document.getElementById("answer_blank").textContent = final_answer;
    document.getElementById("ans_area").innerHTML = "The difference of " + num_1 + " and " + num_2 + " is " + final_answer + ".";
};
//when "x" (multiplication) operator is selected:
document.getElementById("multi_btn").onclick = function multiplication() {
    //prints operation in place of blank between the number textboxes
    document.getElementById("oprtn_blank").textContent = 'x';
    num_1 = parseFloat(document.getElementById("num1").value);
    num_2 = parseFloat(document.getElementById("num2").value);
    final_answer = (num_1 * num_2);
    document.getElementById("answer_blank").textContent = final_answer;
    document.getElementById("ans_area").innerHTML = "The product of " + num_1 + " and " + num_2 + " is " + final_answer + ".";
};
//when "÷%" (division with remainder) operator is selected:
document.getElementById("divrem_btn").onclick = function divremain() {
    //prints operation in place of blank between the number textboxes
    document.getElementById("oprtn_blank").textContent = '÷';
    num_1 = parseFloat(document.getElementById("num1").value);
    num_2 = parseFloat(document.getElementById("num2").value);
    remainder = (num_1 % num_2);
    final_answer = (num_1 - remainder);
    final_answer = (final_answer / num_2);
    //if remainder > 0:
    if (remainder > 0) {
        document.getElementById("answer_blank").textContent = final_answer + " r. " + remainder;
        document.getElementById("ans_area").innerHTML = "The quotient of " + num_1 + " and " + num_2 + " is " + final_answer + " with a remainder of " + remainder + ".";
    }
    //if remainder = 0:
    else {
        document.getElementById("answer_blank").textContent = final_answer;
        document.getElementById("ans_area").innerHTML = "The quotient of " + num_1 + " and " + num_2 + " is " + final_answer + ".";
    }
};
//when "÷." (division with decimals) operator is selected:
document.getElementById("divdec_btn").onclick = function divdecimal() {
    //prints operation in place of blank between the number textboxes
    document.getElementById("oprtn_blank").textContent = '÷';
    num_1 = parseFloat(document.getElementById("num1").value);
    num_2 = parseFloat(document.getElementById("num2").value);
    final_answer = (num_1 / num_2);
    document.getElementById("answer_blank").textContent = final_answer;
    document.getElementById("ans_area").innerHTML = "The quotient of " + num_1 + " and " + num_2 + " is " + final_answer + ".";
};