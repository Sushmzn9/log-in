const googleBtn = document.querySelector(".google");
const linkedinBtn = document.querySelector(".linkedin");
const githubBtn = document.querySelector(".github");

googleBtn.addEventListener("click", () => {
  alert("Signing in with Google");
});

linkedinBtn.addEventListener("click", () => {
  alert("Signing in with LinkedIn");
});

githubBtn.addEventListener("click", () => {
  alert("Signing in with GitHub");
});
const signupLink = document.querySelector(".signup a");

signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Create new account clicked!");
});

const jobLinks = document.querySelectorAll("td:first-child a");

jobLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    window.open(link.href, "_blank");
  });
});
