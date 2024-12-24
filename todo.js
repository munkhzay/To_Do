//taskbutton.heseg
function createTaskButton() {
  let _taskbutton = document.getElementsByClassName("taskbutton")[0];
  let _todocontent = document.getElementsByClassName("todocontent")[0];
  let _buttonresponsive =
    document.getElementsByClassName("buttonresponsive")[0];
  _buttonresponsive.style.display = "block";
  _todocontent.style.opacity = "0.3";
  _taskbutton.style.opacity = "0.3";
}
// subbutton.heseg

let _subbutton = document.getElementsByClassName("subbutton")[0];
let _card1 = document.getElementsByClassName("framecontainer")[0];
let _buttonresponsive = document.getElementsByClassName("buttonresponsive")[0];
let _todocontent = document.getElementsByClassName("todocontent")[0];
let _taskbutton = document.getElementsByClassName("taskbutton")[0];
let _frame1 = document.getElementById("frame1");
let _frame22 = document.getElementById("frame22");
let _frame3 = document.getElementById("frame3");
let _frame4 = document.getElementById("frame4");

let _editModel = document.getElementById("editModel");

function showEditModal() {
  _editModel.style.display = "block";
}

function hideEditModal() {
  _editModel.style.display = "none";
}

const submitEdit = () => {};

const submitTaskFunction = () => {
  let _cardParagraph = document.createElement("div");
  let innerbutton = document.createElement("button");
  innerbutton.setAttribute("class", "subbutton");
  innerbutton.innerText = "Submit";
  _editModel.appendChild(innerbutton);
  let _fname = document.getElementsByClassName("fname")[0].value;
  let paragraph = document.createElement("p");
  paragraph.setAttribute("id", `${Math.random() * 10}`);
  let _ = document.getElementById;
  paragraph.innerText = _fname;
  paragraph.setAttribute("class", "taskNmeParagrahp");
  _buttonresponsive.style.display = "none";
  _todocontent.style.opacity = "1";
  _taskbutton.style.opacity = "1";
  _cardParagraph.setAttribute("class", "cardparagraph");
  _cardParagraph.setAttribute("id", `${Math.random() * 10}`);
  _cardParagraph.appendChild(paragraph);
  //checkbox
  let _Checkbox = document.createElement("input");
  _Checkbox.setAttribute("type", "checkbox");
  _cardParagraph.appendChild(_Checkbox);

  //   _todocontent.push(_cardParagraph);
  //edit img
  let img = document.createElement("img");
  img.setAttribute("src", "todo.img/edit.png");
  img.setAttribute("class", "edit-img");
  _cardParagraph.appendChild(img);
  img.addEventListener("click", () => edittask(paragraph.id));
  const edittask = (id) => {
    _editModel.style.display = "block";
    function confirmEdit(id) {
      let paragraph = document.getElementById(id);
      let editname = document.getElementById("editid").value;
      paragraph.innerText = editname;
      _editModel.style.display = "none";
    }
    innerbutton.addEventListener("click", () => confirmEdit(id));
  };
  // //edit.hiih
  // img.addEventListener("click", () => edittask(_cardParagraph.id));
  // let _editsub = document.createElement("button");
  // const edittask = (id) => {
  //   let task = document
  //     .getElementById(id)
  //     .getElementsByClassName("taskNmeParagrahp")[0].innerText;

  //   console.log(task);
  // };

  // trash
  let img2 = document.createElement("img");
  img2.setAttribute("src", "todo.img/Frame.png");
  img2.setAttribute("class", "trash-img");
  img2.setAttribute("id", `${Math.random() * 10}`);
  _cardParagraph.appendChild(img2);
  //trashru.hiih.
  img2.addEventListener("click", () => trashtask(_cardParagraph.id));
  const trashtask = (id) => {
    console.log(id);
    let removetask = document.getElementById(id);
    removetask.remove();
  };
  // process bodlofo
  let _selectStatus = document.getElementsByClassName("selectStatus");
  let selectValue = _selectStatus[0].value;
  if (selectValue === "todo") {
    return _frame1.appendChild(_cardParagraph);
  } else if (selectValue === "inprogress") {
    return _frame22.appendChild(_cardParagraph);
  } else if (selectValue === "done") {
    return _frame3.appendChild(_cardParagraph);
  } else return _frame4.appendChild(_cardParagraph);
};
_subbutton.onclick = submitTaskFunction;
//edit.hih
// img.addEventListener("click", () => edittask(div.id));
// const edittask = () => {
//   console.log("sss");
//   let _fname = document.getElementsByClassName("_fname").value;
//   let _editsub = createElement("button");
// };
// let _cardParagraph = document.createElement("div");
// let img = document.createElement("img");
// img.setAttribute("src", "todo.img/edit.png");
// img.setAttribute("class", "edit-img");

// _cardParagraph.appendChild(img);
// img.addEventListener("click", () => edittask(_cardParagraph.id));
// const edittask = (id) => {
//   let _editsub = document.createElement("button");
//   console.log(_editsub);
//   _editsub.innerText("submit");
//   _cardParagraph.appendChild(_editsub);
// };
// img.onclick = _editsub;
// .getElementsByClassName("taskNmeParagrahp")[0].innerText
