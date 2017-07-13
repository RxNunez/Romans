//Business Logic
  var convertArray = []
function convert(num) {
  if (num > 3999){
    alert("Please enter a smaller number!")
  } else if (num >= 1){
    convertArray.push("I");
    convert(num - 1)
  } else if (num >= 4){
    convertArray.push("IV");
    convert(num - 4)
  } else if (num >= 5){
    convertArray.push("V");
    convert(num - 5)
  } else if (num >= 9){
    convertArray.push("IX");
    convert(num - 9)
  } else if (num >= 10){
    convertArray.push("X");
    convert(num - 10)
  } else if (num >= 40){
    convertArray.push("XL");
    convert(num - 40)
  } else if (num >= 50){
    convertArray.push("L");
    convert(num - 50)
  } else if (num >= 90){
    convertArray.push("XC");
    convert(num - 90)
  } else if (num >= 100){
    convertArray.push("C");
    convert(num - 100)
  } else if (num >= 400){
    convertArray.push("CD");
    convert(num - 400)
  } else if (num >= 500){
    convertArray.push("D");
    convert(num - 500)
  } else if (num >= 900){
    convertArray.push("CM");
    convert(num - 900)
  } else if (num >= 1000){
    convertArray.push("M");
    convert(num - 1000)
  }else {
    return false;
  }
