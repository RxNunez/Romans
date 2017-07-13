//Business Logic
$(function(){
var convertArray = []

function convert(num) {
  if (num > 3999){
    alert("Please enter a smaller number!")
  } else if (num >= 1000){
    convertArray.push("M");
    convert(num - 1000);
  } else if (num >= 900){
    convertArray.push("CM");
    convert(num - 900);
  } else if (num >= 500){
    convertArray.push("D");
    convert(num - 500);
  } else if (num >= 400){
    convertArray.push("CD");
    convert(num - 400);
  } else if (num >= 100){
    convertArray.push("C");
    convert(num - 100);
  } else if (num >= 90){
    convertArray.push("XC");
    convert(num - 90);
  } else if (num >= 50){
    convertArray.push("L");
    convert(num - 50);
  } else if (num >= 40){
    convertArray.push("XL");
    convert(num - 40);
  } else if (num >= 10){
    convertArray.push("X");
    convert(num - 10);
  } else if (num >= 9){
    convertArray.push("IX");
    convert(num - 9);
  } else if (num >= 5){
    convertArray.push("V");
    convert(num - 5);
  } else if (num >= 4){
    convertArray.push("IV");
    convert(num - 4);
  }else if (num >= 1){
    convertArray.push("I");
    convert(num - 1);
  }else {
    return false;
  }
  console.log(convertArray.toString());
}
  //UI Logic

  $("form#romannumerals").submit(function(event){
    event.preventDefault();
    var romanNumbers = parseInt($("input#numbers").val());
    var nums = convert(romanNumbers);
    // var join = convertArray.join("");
    // var string = convertArray.toString();
    $("#nums").text(convertArray.join("").toString());
  });
 });




//   / Frontend
// $("form").submit(function(event){
//   event.preventDefault();
//   inputNumber = parseInt($("#inputNumber").val());
//   convert(inputNumber);
//   $("#result").text(outputArray.join("").toString());
// });
