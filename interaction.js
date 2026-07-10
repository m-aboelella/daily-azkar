(() => {
  const counters = Array.from(document.querySelectorAll(".counter"));

  function syncCounter(button) {
    const heading = button.querySelector(".counter-heading");
    const action = button.querySelector(".counter-action");
    const value = button.querySelector(".counter-value");
    const isDone = button.classList.contains("done");

    heading.textContent = isDone ? "أحسنت" : "المتبقي";
    action.innerHTML = isDone
      ? '<span aria-hidden="true">✓</span> مكتمل'
      : '<span aria-hidden="true">☝</span> اضغط بعد كل مرة';

    if (!isDone) {
      button.setAttribute(
        "aria-label",
        `بعد قراءة الذكر، اضغط لإنقاص العداد. المتبقي ${value.textContent}`
      );
    }
  }

  counters.forEach((button, index) => {
    const heading = document.createElement("span");
    heading.className = "counter-heading";

    const action = document.createElement("span");
    action.className = "counter-action";

    button.prepend(heading);
    button.append(action);

    if (index === 0) {
      button.classList.add("counter-attention");
    }

    button.addEventListener("click", () => {
      button.classList.remove("counter-attention");
      syncCounter(button);
    });

    syncCounter(button);
  });

  document.getElementById("reset-counters")?.addEventListener("click", () => {
    counters.forEach(syncCounter);
  });
})();
