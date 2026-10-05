(() => {
  const section = document.getElementById("publications");
  if (!section) return;
  const controls = section.querySelector(".publication-controls");
  const buttons = [...controls.querySelectorAll("button")];
  const entries = [...section.querySelectorAll("#publication-list li")];
  const count = section.querySelector("#publication-count");
  const filter = (selection) => {
    let visible = 0;
    entries.forEach((entry) => {
      const paper = entry.querySelector("[data-selected]");
      entry.hidden = selection === "selected" && paper?.dataset.selected !== "true";
      if (!entry.hidden) visible += 1;
    });
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.publicationFilter === selection));
    });
    count.textContent = `${visible} of ${entries.length} papers.`;
  };
  buttons.forEach((button) => button.addEventListener("click", () => filter(button.dataset.publicationFilter)));
  filter("selected");
  controls.hidden = false;
})();
