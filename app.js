  // Job Listings

  const jobForm = document.getElementById('job-form');
  const jobTitle = document.getElementById('job-title');
  const jobDescription = document.getElementById('job-description');
  const jobLink = document.getElementById('job-link');
  const jobStatus = document.getElementById('job-status');
  const jobList = document.getElementById('job-list');

  let jobs = [];

  // Save job listing
  function saveJob(event) {
    event.preventDefault();

    if (jobTitle.value.trim() === '' || jobDescription.value.trim() === '' || jobLink.value.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    const job = {
      id: Date.now(),
      title: jobTitle.value,
      description: jobDescription.value,
      link: jobLink.value,
      status: jobStatus.value,
    };

    jobs.push(job);

    jobForm.reset();
    displayJobs();
  }

  // Display job listings
  function displayJobs() {
    jobList.innerHTML = '';

    jobs.forEach(job => {
      const jobItem = document.createElement('li');
      jobItem.classList.add('job-item');
      jobItem.innerHTML = `
        <div class="job-title">${job.title}</div>
        <div class="job-description">${job.description}</div>
        <div class="job-link"><a href="${job.link}" target="_blank">${job.link}</a></div>
        <div class="job-status">${job.status}</div>
        <div class="job-buttons">
          <button class="edit-btn" data-id="${job.id}">Edit</button>
          <button class="delete-btn" data-id="${job.id}">Delete</button>
        </div>
      `;
      jobList.appendChild(jobItem);

      // Add event listeners for edit and delete buttons
      const editBtn = jobItem.querySelector('.edit-btn');
      const deleteBtn = jobItem.querySelector('.delete-btn');
      editBtn.addEventListener('click', editJob);
      deleteBtn.addEventListener('click', deleteJob);
    });

    // Update dashboard
    updateDashboard();
  }

  // Edit job listing
  function editJob(event) {
    const jobId = parseInt(event.target.dataset.id);
    const job = jobs.find(job => job.id === jobId);

    jobTitle.value = job.title;
    jobDescription.value = job.description;
    jobLink.value = job.link;
    jobStatus.value = job.status;

    // Remove job from array
    jobs = jobs.filter(job => job.id !== jobId);

    displayJobs();
  }

  // Delete job listing
  function deleteJob(event) {
    const jobId = parseInt(event.target.dataset.id);

    // Remove job from array
    jobs = jobs.filter(job => job.id !== jobId);

    displayJobs();
  }

  // Dashboard

  const dashboardSaved = document.getElementById('dashboard-saved');
  const dashboardApplied = document.getElementById('dashboard-applied');
  const dashboardPending = document.getElementById('dashboard-pending');
  const dashboardDenied = document.getElementById('dashboard-denied');

  function updateDashboard() {
    const savedJobs = jobs.filter(job => job.status === 'Saved');
    const appliedJobs = jobs.filter(job => job.status === 'Applied');
    const pendingJobs = jobs.filter(job => job.status === 'Pending');
    const deniedJobs = jobs.filter(job => job.status === 'Denied');

    dashboardSaved.textContent = savedJobs.length;
    dashboardApplied.textContent = appliedJobs.length;
    dashboardPending.textContent = pendingJobs.length;
    dashboardDenied.textContent = deniedJobs.length;
  }

  // User Profile

  const profileForm = document.getElementById('profile-form');
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById ('email-input');
  const educationInput = document.getElementById('education-input');
  const aboutInput = document.getElementById('about-input');
  const skillsInput = document.getElementById('skills-input');
  const experienceInput = document.getElementById('experience-input');
  const contactInput = document.getElementById('contact-input');
  
  const userProfile = {
  name: '',
  email: '',
  education: '',
  about: '',
  skills: '',
  experience: '',
  contact: '',
  };
  
  // Save user profile
  function saveProfile(event) {
  event.preventDefault()
  userProfile.name = nameInput.value;
userProfile.email = emailInput.value;
userProfile.education = educationInput.value;
userProfile.about = aboutInput.value;
userProfile.skills = skillsInput.value;
userProfile.experience = experienceInput.value;
userProfile.contact = contactInput.value;

profileForm.reset();
displayProfile();




  }
  // Display user profile
function displayProfile() {
    const nameElement = document.getElementById('profile-name');
    const emailElement = document.getElementById('profile-email');
    const educationElement = document.getElementById('profile-education');
    const aboutElement = document.getElementById('profile-about');
    const skillsElement = document.getElementById('profile-skills');
    const experienceElement = document.getElementById('profile-experience');
    const contactElement = document.getElementById('profile-contact');
    nameElement.textContent = userProfile.name;
emailElement.textContent = userProfile.email;
educationElement.textContent = userProfile.education;
aboutElement.textContent = userProfile.about;
skillsElement.textContent = userProfile.skills;
experienceElement.textContent = userProfile.experience;
contactElement.textContent = userProfile.contact; 
const educationInput = document.getElementById('education-input');
const aboutInput = document.getElementById('about-input');
const skillsInput = document.getElementById('skills-input');
const experienceInput = document.getElementById('experience-input');
const contactInput = document.getElementById('contact-input');

const userProfile = {
name: '',
email: '',
education: '',
about: '',
skills: '',
experience: '',
contact: '',
};

// Save user profile
function saveProfile(event) {
event.preventDefault();
userProfile.name = nameInput.value;
userProfile.email = emailInput.value;
userProfile.education = educationInput.value;
userProfile.about = aboutInput.value;
userProfile.skills = skillsInput.value;
userProfile.experience = experienceInput.value;
userProfile.contact = contactInput.value;

profileForm.reset();
displayProfile();
}

// Display user profile
function displayProfile() {
const nameElement = document.getElementById('profile-name');
const emailElement = document.getElementById('profile-email');
const educationElement = document.getElementById('profile-education');
const aboutElement = document.getElementById('profile-about');
const skillsElement = document.getElementById('profile-skills');
const experienceElement = document.getElementById('profile-experience');
const contactElement = document.getElementById('profile-contact');
nameElement.textContent = userProfile.name;
emailElement.textContent = userProfile.email;
educationElement.textContent = userProfile.education;
aboutElement.textContent = userProfile.about;
skillsElement.textContent = userProfile.skills;
experienceElement.textContent = userProfile.experience;
contactElement.textContent = userProfile.contact;
}

// Add event listeners for forms
jobForm.addEventListener('submit', saveJob);
profileForm.addEventListener('submit', saveProfile);

// Initial display
displayJobs();
displayProfile();
}