document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.numberdiv h3');
    const speed = 2500;
    let maxTarget = 0;
    let completedCounters = 0;
  
  
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target-02');
      if (target > maxTarget) {
        maxTarget = target;
      }
    });
  
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target-02');
      const increment = target / speed;
  
      const updateCount = () => {
        let count = +counter.innerText;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, speed / maxTarget);
        } else {
          counter.innerText = target;
          completedCounters++;
  
          if (completedCounters === counters.length) {
  
          }
        }
      };
  
      counter.innerText = '0';
      updateCount();
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.numberdiv h3');
    const speed = 2700;
    let maxTarget = 0;
    let completedCounters = 0;
  
  
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target-03');
      if (target > maxTarget) {
        maxTarget = target;
      }
    });
  
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target-03');
      const increment = target / speed;
  
      const updateCount = () => {
        let count = +counter.innerText;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, speed / maxTarget);
        } else {
          counter.innerText = target;
          completedCounters++;
  
  
          if (completedCounters === counters.length) {
  
          }
        }
      };
  
      counter.innerText = '0';
      updateCount();
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.numberdiv h3');
    const speed = 1000;
    let maxTarget = 0;
    let completedCounters = 0;
  
    // Find the maximum target value to determine when all counters should stop
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      if (target > maxTarget) {
        maxTarget = target;
      }
    });
  
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const increment = target / speed;
  
      const updateCount = () => {
        let count = +counter.innerText;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, speed / maxTarget);
        } else {
          counter.innerText = target;
          completedCounters++;
  
          // Check if all counters have completed
          if (completedCounters === counters.length) {
            // console.log("All counters have finished counting.");
            // Optionally, you can trigger additional actions here
          }
        }
      };
  
      counter.innerText = '0';
      updateCount();
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.numberdiv h3');
    const speed = 600;
    let maxTarget = 0;
    let completedCounters = 0;
  
    // Find the maximum target value to determine when all counters should stop
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target-01');
      if (target > maxTarget) {
        maxTarget = target;
      }
    });
  
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target-01');
      const increment = target / speed;
  
      const updateCount = () => {
        let count = +counter.innerText;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, speed / maxTarget);
        } else {
          counter.innerText = target;
          completedCounters++;
  
          // Check if all counters have completed
          if (completedCounters === counters.length) {
            // console.log("All counters have finished counting.");
            // Optionally, you can trigger additional actions here
          }
        }
      };
  
      counter.innerText = '0';
      updateCount();
    });
  });
// ====================== question section==================
const questions = document.querySelectorAll('.first-question1');
const answers = document.querySelectorAll('.first-question2');

questions.forEach((question, index) => {
  question.addEventListener('click', function () {
    const answer =  [index];
    if (answer.classList.contains('show')) {
      answer.classList.remove('show');
    } else {
      answers.forEach(ans => ans.classList.remove('show'));
      answer.classList.add('show');
    }
  });
}); 
// ==================pop-up-form==============
function showPopup() {
  const popup = document.getElementById('popup1');
  popup.style.display = 'flex';
  popup.classList.add('show');
}

function closePopup() {
  const popup = document.getElementById('popup1'); 
  popup.classList.remove('show');
  setTimeout(() => {
    popup.style.display = 'none'; 
  }, 300);
} 
//  console.log(Date())
setTimeout(showPopup, 10000);