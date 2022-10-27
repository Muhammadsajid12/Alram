// All selected needed element..
const PersonName = document.querySelector(".name");
const Time = document.querySelector(".time");
const show = document.querySelector(".show");
let PName;
let Ptime;

function Submithandler() {
  PName = PersonName.value;
  Ptime = Time.value;

  setTimeout(() => {
    SetTimeHandler();
  }, Ptime);
}

function SetTimeHandler() {
  // Constructor fn😎😎
  function CustomAlrm(Name, Ptime) {
    let value = null;
    let state = "Pending";

    function resolve(N) {
      state = "Resolve";
      value = N;
    }

    function reject(T, N) {
      console.log(T);
      if (T == "" || N == "") {
        state = "Reject";
        value = "You have to enter Second and Name value to set Alram";
      }
    }

    this.then = function (Scallback) {
      if (state === "Resolve") {
        Scallback(value);
      }
      return {};
    };

    this.catch = function (Fcallback) {
      if (state === "Reject") {
        Fcallback(value);
      }
    };

    resolve(Name);
    reject(Ptime, Name);
  }

  const prom = new CustomAlrm(PName, Ptime);

  prom.then((data) => {
    show.innerHTML = ` {WakeUp ${data}}🌅🌅    `;
  });

  prom.catch((data) => {
    show.innerHTML = `  ${data}⌚⌚    `;
  });
}
