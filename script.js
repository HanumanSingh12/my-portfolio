const projectData = {
  "pranika": {
    title: "Pranika Group Portfolio",
    meta: "WordPress Development / Corporate Website",
    liveUrl: "#", // Replace with real URL when ready
    challenge: "The client needed a highly professional corporate website that loads ultra-fast while showcasing detailed heavy corporate portfolios and dynamic legal/business consultation frameworks without feeling cluttered.",
    approach: "Designed a clean grid layout using custom WordPress elements, performance-tuned through advanced image caching, lazy loading, and asset minification. Avoided heavy bloated multi-purpose themes.",
    outcome: "Achieved a 95+ score on Google PageSpeed Insights, enhanced user navigation by 40%, and structured scalable pathways for upcoming subsidiaries."
  },

  "lms": {
    title: "Learning Management System (LMS)",
    meta: "WordPress / WooCommerce / TutorLMS",
    liveUrl: "#", // Replace with real URL when ready
    challenge: "Developing a robust e-learning system with live course modules, student quizzes, dynamic video buffering restriction, and integrated regional e-commerce payment gateways.",
    approach: "Leveraged the seamless integration of TutorLMS with custom Elementor layouts. Handled subscription triggers via customized WooCommerce workflows and added secured checkout parameters.",
    outcome: "Successfully launched the platform supporting 2000+ active students with minimal server overhead and completely streamlined course enrollment flows."
  },
   
  "ladies-party-wear": {
    title: "Ladies Party Wear System",
    meta: "WordPress / WooCommerce / Ecommerce",
    liveUrl: "https://fastbuyee.com",
    challenge: "Creating a visually appealing e-commerce platform for showcasing and selling ladies' party wear, with a focus on user experience and mobile responsiveness.",
    approach: "Utilized a responsive design approach with custom WordPress themes and WooCommerce functionality. Implemented advanced filtering and sorting options to enhance product discovery.",
    outcome: "Generated a 30% increase in conversion rates and improved overall user satisfaction with the streamlined shopping experience."
  }
};

// Handles opening the dynamic live external site cleanly
function openLiveSite(key) {
  const data = projectData[key];
  if(data && data.liveUrl && data.liveUrl !== "#") {
    window.open(data.liveUrl, '_blank');
  } else {
    alert("Live site link will be available soon!");
  }
}

function openProjectModal(key) {
  const data = projectData[key];
  if(!data) return;
  
  document.getElementById('modalTitle').innerText = data.title;
  document.getElementById('modalMeta').innerText = data.meta;
  document.getElementById('modalChallenge').innerText = data.challenge;
  document.getElementById('modalApproach').innerText = data.approach;
  document.getElementById('modalOutcome').innerText = data.outcome;
  
  document.getElementById('projectModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = '';
}

window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target == modal) {
    closeModal();
  }
}