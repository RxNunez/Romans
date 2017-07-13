//Business Logic

function convert(num) {
var convertArray = [];
    if (num > 3999){
      alert("Please enter a smaller number!")
    } else if (num >= 1000){
      convertArray.push("M");
      convertArray += convert(num - 1000);
    } else if (num >= 900){
      convertArray.push("CM");
      convertArray += convert(num - 900);
    } else if (num >= 500){
      convertArray.push("D");
      convertArray += convert(num - 500);
    } else if (num >= 400){
      convertArray.push("CD");
      convertArray += convert(num - 400);
    } else if (num >= 100){
      convertArray.push("C");
    convertArray +=  convert(num - 100);
    } else if (num >= 90){
      convertArray.push("XC");
    convertArray += convert(num - 90);
    } else if (num >= 50){
      convertArray.push("L");
    convertArray +=  convert(num - 50);
    } else if (num >= 40){
      convertArray.push("XL");
    convertArray +=  convert(num - 40);
    } else if (num >= 10){
      convertArray.push("X");
    convertArray +=  convert(num - 10);
    } else if (num >= 9){
      convertArray.push("IX");
    convertArray +=  convert(num - 9);
    } else if (num >= 5){
      convertArray.push("V");
    convertArray +=  convert(num - 5);
    } else if (num >= 4){
      convertArray.push("IV");
  convertArray +=    convert(num - 4);
    }else if (num >= 1){
      convertArray.push("I");
    convertArray +=  convert(num - 1);
    }
    var output = convertArray.toString();
    return output;
  }
  //UI Logic
  $(function(){
  $("form#romannumerals").submit(function(event){
    event.preventDefault();
    var romanNumbers = parseInt($("input#numbers").val());
    var nums = convert(romanNumbers);
    $("#nums").text(nums);
  });
 });
