const addHomework = document.querySelector("#task");
const thingsToDo = document.querySelector("#thingsToDo");
const add = document.querySelector("#add");
const task = [
  { id: 1, nombre: "Comprar alimentos a los michis", checked: false },
  { id: 2, nombre: "Hacer el desafio", checked: false },
  { id: 3, nombre: "Alimentar a los michis", checked: false },
];
const amountTask = document.querySelector("#amountTask");
const done = document.querySelector("#done");
const tr = (e, i) => {
  const trs = `
  <tr class="line">
  <td>${i + 1}</td>
  <td>${e.nombre}</td>
  <td><input type="checkbox" id="check${i}" class="checks" onclick="filterInput(${i})" ></td>
  <td><button id="${i}" class="btn-delete" onclick="delete_task(${i})">x</button></td>
</tr>
`;
  return trs;
};
let show = () => {
  let html = "";
  task.forEach((e, i) => {
    html += tr(e, i);
    document.querySelector("#task").innerHTML = html;
  });
};
show();

const filterInput = (index) => {
  if (task[index].checked) {
    task[index].checked = false;
  } else {
    task[index].checked = true;
  }
  let filtrarCheck = task.filter((e, i) => {
    return document.querySelector(`#check${i}`).checked;
  });
  done.innerHTML = filtrarCheck.length;
};

add.addEventListener("click", () => {
  if (thingsToDo.value.length === 0) {
    alert("Debe llenar el cuadro de texto");
  } else {
    const newTask = thingsToDo.value;
    task.push({ id: 1, nombre: newTask });
    thingsToDo.value = "";
    let html = "";
    task.forEach((e, i) => {
      html += tr(e, i);
    });
    amountTask.innerHTML = task.length;
    addHomework.innerHTML = html;
  }
});
const delete_task = (index) => {
  if (document.querySelector(`#check${index}`).checked) {
    task.splice(index, 1);
    let html = "";
    task.forEach((e, i) => {
      html += tr(e, i);
    });
    amountTask.innerHTML = task.length;
    addHomework.innerHTML = html;
    listenTask();
  } else {
    alert("Debe checkear para poder eliminar");
  }
};
