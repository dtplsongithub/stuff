function convert(input) {
  if (input.includes(2) || input.includes(3) || input.includes(4) || input.includes(5) || input.includes(6) || input.includes(7) || input.includes(8) || input.includes(9)){
    alert("Your number might have contain some invalid numbers such as 2-9. Please enter a binary number with only 0 and 1. ")
} else {
  var output_= parseInt(input , 2);
  output.innerHTML = output_;
}
} 