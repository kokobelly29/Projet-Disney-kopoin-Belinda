document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".question1, .question2, .question3, .question4");
  
    questions.forEach((question) => {
      const buttonPlus = question.querySelector("img");
      const answer = question.querySelector("div");
  
      answer.style.height = "0px";
      answer.style.overflow = "hidden";
      answer.style.transition = "height 0.5s ease-in-out";
  
      question.addEventListener("click", () => {
        answer.style.height = answer.style.height === "0px" ? `${answer.scrollHeight}px` : "0px";
        buttonPlus.style.transform = answer.style.height === "0px" ? "rotate(0deg)" : "rotate(45deg)";
      });
    });
  });