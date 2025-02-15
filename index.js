let nameFill = document.getElementById("name");
let table = document.getElementById("table");
let chooseDate = document.getElementById("datepicker-format");
let selectOption = document.getElementById("type-submit");
let form = document.getElementById("form");
let pending = document.getElementById("pending");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  var name = nameFill.value;
  var date = chooseDate.value;
  var select = selectOption.value;
  //   var button = pending

  var row = table.insertRow(0);
  row.insertCell(0).innerHTML = name;
  row.insertCell(1).innerHTML = date;
  row.insertCell(2).innerHTML = select;
  row.insertCell(3).innerHTML = `<button id="pending"
                  type="button"
                  onClick="changeButton(this)"
                  class="text-white bg-yellow-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Pending
                </button>`;
});

function changeButton(button) {
  if (button.innerText === "Pending") {
    button.innerText = "Completed";
    button.classList.remove("bg-yellow-500");
    button.classList.add("bg-green-500");
  } else if (button.innerHTML === "Completed") {
    button.innerText = "Pending";
    button.classList.remove("bg-green-500");
    button.classList.add("bg-yellow-500");
    
  }
}
