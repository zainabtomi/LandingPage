/**
 * Define Global Variables
 */
const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * Helper Function: Create a new navigation list item for each section
 */
function createList(section) {
  const newList = document.createElement("li");
  newList.innerHTML = `<a href="#${section.getAttribute("id")}" class="menu__link">
    ${section.getAttribute("data-nav")}</a>`;
  return newList;
}

/**
 * Build the navigation menu
 */
function createNav(navList, sections) {
  for (let section of sections) {
    const secList = createList(section);
    navList.appendChild(secList);
  }
}
createNav(navList, sections);

/**
 * Add smooth scroll functionality to all nav links using vanilla JavaScript
 */
const navLinks = document.querySelectorAll(".menu__link");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute("href"));
    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

/**
 * Highlight active section and corresponding nav link using Intersection Observer API
 */
function activeWhenScroll(sections, navLinks) {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.63
  };

  sections.forEach((section, index) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks[index].classList.add("active");
          section.classList.add("your-active-class");
        } else {
          navLinks[index].classList.remove("active");
          section.className = "";
        }
      });
    }, options);
    observer.observe(section);
  });
}
activeWhenScroll(sections, navLinks);

