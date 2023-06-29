let input = document.getElementById("text");
let form = document.getElementById("form");
let msg = document.getElementById("msg");
let todos = document.getElementById("todos");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
  });

  let formValidation = () => {
    if (input.value === "") {
      msg.innerHTML = "Todo cannot be blank";
      console.log("failure");
    } else {
      console.log("successs");
      msg.innerHTML = "";
      acceptData();
    }
  };

let data = {};

let acceptData = () => {
  data["temp"] = input.value;
  console.log(data);
  createPost();
};

var cnt = 1;

let createPost = () => {
    todos.innerHTML += `
    <div class="post">
        ${cnt}.<p>${data.temp}&nbsp; &nbsp;</p>
        <button class="btn btn-danger btn-sm" onClick="deletePost(this)">delete</button>
    </div>
    `;
  input.value = "";
  cnt += 1;
};

let deletePost = (e) => {
    e.parentElement.remove();
    cnt -= 1;
  };