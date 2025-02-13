// Function to add experience entry
function addExperience() {
    const container = document.getElementById("experienceContainer");
    const div = document.createElement("div");
    div.classList.add("experience-entry");
    div.innerHTML = `
        <label>Workplace Name:</label>
        <input type="text" name="workplace[]" required>
        
        <label>Location:</label>
        <input type="text" name="location[]" required>
        
        <label>Role:</label>
        <input type="text" name="role[]" required>
        
        <label>Duration:</label>
        <input type="text" name="duration[]" placeholder="MM/YYYY - MM/YYYY" required>
        
        <label>Job Details:</label>
        <textarea name="details[]" required></textarea>

        <!-- Button Container for Add/Remove -->
        <div class="add-remove-btn-container">
            <button class="add-remove-btn remove-btn" type="button" onclick="removeEntry(this)">Remove</button>
        </div>
    `;
    container.appendChild(div);
}

// Function to add education entry
function addEducation() {
    const container = document.getElementById("educationContainer");
    const div = document.createElement("div");
    div.classList.add("education-entry");
    div.innerHTML = `
        <label>Institution Name:</label>
        <input type="text" name="institution[]" required>
        
        <label>Degree:</label>
        <input type="text" name="degree[]" required>
        
        <label>Duration:</label>
        <input type="text" name="edu_duration[]" placeholder="MM/YYYY - MM/YYYY" required>
        
        <div class="add-remove-btn-container">
            <button class="add-remove-btn remove-btn" type="button" onclick="removeEntry(this)">Remove</button>
        </div>
    `;
    container.appendChild(div);
}

// Function to add skill entry
function addSkill() {
    const container = document.getElementById("skillsContainer");
    const div = document.createElement("div");
    div.classList.add("skill-entry");
    div.innerHTML = `
        <label>Skill:</label>
        <input type="text" name="skill[]" required>
        
        <div class="add-remove-btn-container">
            <button class="add-remove-btn remove-btn" type="button" onclick="removeEntry(this)">Remove</button>
        </div>
    `;
    container.appendChild(div);
}

// Function to add certification entry
function addCertification() {
    const container = document.getElementById("certificationsContainer");
    const div = document.createElement("div");
    div.classList.add("certification-entry");
    div.innerHTML = `
        <label>Certification Name:</label>
        <input type="text" name="certification[]" required>
        
        <label>Issuing Organization:</label>
        <input type="text" name="organization[]" required>
        
        <label>Date Obtained:</label>
        <input type="text" name="cert_date[]" placeholder="MM/YYYY" required>
        
        <div class="add-remove-btn-container">
            <button class="add-remove-btn remove-btn" type="button" onclick="removeEntry(this)">Remove</button>
        </div>
    `;
    container.appendChild(div);
}

// Function to remove an entry (experience, education, skill, certification)
function removeEntry(button) {
    button.parentElement.parentElement.remove();
}

// Toggle dark mode function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
