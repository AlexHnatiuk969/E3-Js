const inputNum = document.querySelector(".input_busqueda");
const inputBTN = document.querySelector(".input_boton");
const menu = document.querySelector(".btn__container");
const cartList = document.querySelector(".cartContainer");

let pizzas = [
  {
    id: 1,
    nombre: "Muzza",
    precio: 800,
  },
  {
    id: 2,
    nombre: "pepperoni",
    precio: 1000,
  },
  {
    id: 3,
    nombre: "verdura",
    precio: 500,
  },
  {
    id: 4,
    nombre: "Palmitos",
    precio: 1200,
  },
  {
    id: 5,
    nombre: "Italica",
    precio: 1400,
  },
  {
    id: 6,
    nombre: "Veggie",
    precio: 1200,
  },
];



inputBTN.addEventListener("click", buscarPizza);

function buscarPizza(e) {
  e.preventDefault();
  const pizzaID = inputNum.value;
  if (pizzaID === "") {
    showError("¡Ingresá un número!");
    return;
  }
  createHTML();
  inputNum.value = "";
}

function showError(error) {
  const msgError = document.createElement("p");
  msgError.textContent = error;
  msgError.classList.add("error");
  cartList.appendChild(msgError);
  setTimeout(() => {
    msgError.remove();
  }, 2000);
}

function createHTML() {
  cartList.innerHTML = "";
  if (pizzas.some((pizza) => pizza.id == inputNum.value)) {
    pizzas.forEach((pizza) => {
      if (pizza.id === inputNum.valueAsNumber) {
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const span = document.createElement("span");
        cartList.classList.add("cartList2");
        h2.innerHTML = `¡Eligiste la ${pizza.nombre}!`;
        h4.innerHTML = `sería $ ${pizza.precio}`;
        cartList.appendChild(h2);
        cartList.appendChild(h3);
        cartList.appendChild(h4);
        cartList.appendChild(span);
        span.classList.add("borrar");
        span.addEventListener("click", (e) => {
          const item = e.target.parentElement;
          cartList.innerHTML = "";
        });
      } else {
        return;
      }
    });
  } else {
    showError("No tenemos esa pizza :( , Disculpa las molestias");
    return;
  }
}

