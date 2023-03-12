//BMI by Zeshan Aziz

let button = document.getElementById("calButton");
let clrButton = document.getElementById("clearButton");

button.addEventListener("click", () => {
  const name = document.getElementById("nameText").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");

  const customer = [name, height, weight];
  console.log(customer);
  console.log(name);
  console.log(height);
  console.log(weight);

  let name_status = false,
    height_status = false,
    weight_status = false;

  if (name === "") {
    document.getElementById("name_error").innerHTML =
      "Please enter a valid Name";
  } else {
    document.getElementById("name_error").innerHTML = "";
    name_status = true;
  }

  if (height === "" || isNaN(height) || height <= 0) {
    document.getElementById("height_error").innerHTML =
      "Please enter a valid height";
  } else {
    document.getElementById("height_error").innerHTML = "";
    height_status = true;
  }

  if (weight === "" || isNaN(weight) || weight <= 0) {
    document.getElementById("weight_error").innerHTML =
      "Please enter a valid weight";
  } else {
    document.getElementById("weight_error").innerHTML = "";
    weight_status = true;
  }

  if (name_status && weight_status && height_status) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
      result.innerHTML = name + " You are under-weight : " + bmi;
    } else if (bmi >= 18.5 && bmi <= 25) {
      result.innerHTML = name + " Your BMI is normal : " + bmi;
    } else {
      result.innerHTML = name + " You are over-weight : " + bmi;
    }
  } else {
    alert("Error occurred, please check your values again.");
    result.innerHTML = "";
  }
});

clrButton.addEventListener("click", () => {
  console.log("clear button is pressed");

  document.getElementById("nameText").value = "";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  result.innerHTML = "";
});
