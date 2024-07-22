document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
      avatar: document.getElementById("avatar").value,
    };

    fetch("http://localhost:3000/user/postUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  });

let getAllUser = document.getElementById("getAllUser");
getAllUser.addEventListener("click", () => {
  fetch("http://localhost:3000/user/allUser  ", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })

    .catch((error) => console.error("Error:", error));
});
