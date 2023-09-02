document.addEventListener("DOMContentLoaded", show);
async function show() {
  let url = "https://student-api-e0wq.onrender.com/students";
  let fetchStudents = await fetch(url);
  let result = await fetchStudents.json();
  let students = document.querySelector(".student");
  result.forEach((student) => {
    students.innerHTML += `
            <tr id="${student._id}">
                <th>${student.name}</th>
                <th>${student.roll_no}</th>
                <th>${student.email_id}
                </th>
                <th class="action">
                    <button class="delete">Delete</button>
                </th>
            </tr>
        `;
  });

  let del_btn = document.querySelectorAll(".delete");
  del_btn.forEach((btn) => {
    btn.addEventListener("click", async () => {
      let id = btn.parentElement.parentElement.id;
      let url = `https://student-api-e0wq.onrender.com/students/${id}`;

      let options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      };
      let fetchRes = await fetch(url, options);
      let result = await fetchRes.json();
      console.log(result);
      location.reload();
    });
  });
}
