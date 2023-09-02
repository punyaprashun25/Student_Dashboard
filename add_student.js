async function submitForm(e) {
  e.preventDefault();
  let form = document.forms.addStudent;
  let student = {
    name: form.name.value,
    roll_no: form.roll_no.value,
    email_id: form.email.value,
  };

  let url = "https://student-api-e0wq.onrender.com/students";

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  };
  let fetchRes = await fetch(url, options);
  let result = await fetchRes.json();
  console.log(result);

  // for redirect after adding student
  // location.replace("index.html");
}

let form = document.getElementById("addStudent");
form.addEventListener("submit", submitForm);
