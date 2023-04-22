export const scrollToSection = (goto) => {
  document.getElementById(goto).scrollIntoView({ behavior: "smooth" });
};
