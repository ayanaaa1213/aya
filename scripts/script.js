/*
  Author: Аяна Мукасова
  File: script.js
  Date: 2025-11-03
*/

// Hamburger menu function
function menu() {
  const links = document.getElementById('nav-links');
  if (!links) return;
  if (links.style.display === 'block') {
    links.style.display = 'none';
  } else {
    links.style.display = 'block';
  }
}

// ===== FAQs support (global vars) =====
let ansBox = null;
let q1 = null, q2 = null, q3 = null, q4 = null;

document.addEventListener('DOMContentLoaded', function() {
  ansBox = document.getElementById('answer');
  q1 = document.getElementById('q1');
  q2 = document.getElementById('q2');
  q3 = document.getElementById('q3');
  q4 = document.getElementById('q4');
});

// ===== Answer functions =====
function ans1() {
  if (ansBox) ansBox.innerHTML = '<h3>What animals do you rescue?</h3><p>We rescue native wildlife: birds, small mammals, and reptiles. If you\'re unsure, contact us.</p>';
}
function ans2() {
  if (ansBox) ansBox.innerHTML = '<h3>Can I bring an injured animal directly?</h3><p>Please call first. We\'ll guide you to ensure your safety and the animal\'s well-being.</p>';
}
function ans3() {
  if (ansBox) ansBox.innerHTML = '<h3>How can I volunteer?</h3><p>Complete our online form and attend an orientation. Age and training requirements apply.</p>';
}
function ans4() {
  if (ansBox) ansBox.innerHTML = '<h3>How are donations used?</h3><p>Donations fund medical supplies, food, and rehabilitation equipment. Thank you for your support!</p>';
}
