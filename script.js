const currentTheme = ui("mode");

const updateMockupImages = () => {
  const mockupImages = document.querySelectorAll("img.mockup");

  mockupImages.forEach((img) => {
    if (currentTheme === "dark") {
      img.src = img.getAttribute("data-dark");
    } else {
      img.src = img.getAttribute("data-light");
    }
  });
};

document.addEventListener("DOMContentLoaded", updateMockupImages);
