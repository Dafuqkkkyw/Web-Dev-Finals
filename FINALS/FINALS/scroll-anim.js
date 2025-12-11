document.addEventListener("scroll", () => {
    document.querySelectorAll(".section").forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 5) sec.classList.add("show");
    });
  });
  