document.addEventListener("DOMContentLoaded", () => {
  const d = document,
    $ghost = d.querySelector(".svg__ghost"),
    $modal = d.querySelector(".modal"),
    $closeIcon = d.getElementById("modal-close-x"),
    $closeBtn = d.getElementById("modal-close-btn");

  let ghostAnimation = null,
    clickGhost = null;

  function showGhost() {
    if ($ghost.classList.contains("clicked")) return;

    const minDelay = 1000,
      maxDelay = 3000,
      randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    ghostAnimation = setTimeout(() => {
      $ghost.classList.add("active");
    }, randomDelay);
  }

  $ghost.addEventListener("mouseenter", () => {
    if (!$ghost.classList.contains("clicked")) {
      clickGhost = setTimeout(() => {
        $ghost.classList.remove("active");
      }, 125);
    }

    showGhost();
  });

  function openModal() {
    $modal.classList.add("show");
    clearTimeout(clickGhost);
  }

  function closeModal() {
    $modal.classList.remove("show");
    $ghost.classList.remove("active");
  }

  d.addEventListener("click", (e) => {
    if ($ghost.contains(e.target)) {
      $ghost.classList.add("clicked");
      clearTimeout(ghostAnimation);
      clearTimeout(clickGhost);
      openModal();
    }

    if ($closeIcon.contains(e.target) || $closeBtn.contains(e.target)) {
      closeModal();
    }
  });

  showGhost();
});
