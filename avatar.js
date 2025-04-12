const faceSelect = document.getElementById('faces');
const eyesSelect = document.getElementById('eyes');
const accessorySelect = document.getElementById('accessory');

const avatarFace = document.getElementById('avatar-face');
const avatarEyes = document.getElementById('avatar-eyes');
const avatarAccessory = document.getElementById('avatar-accessory');

// Update avatar with selected options
function updateAvatar() {
  avatarFace.textContent = faceSelect.value;
  avatarEyes.textContent = eyesSelect.value;
  avatarAccessory.textContent = accessorySelect.value;
}

// Save selected avatar to localStorage
function saveAvatar() {
  localStorage.setItem('avatar-face', faceSelect.value);
  localStorage.setItem('avatar-eyes', eyesSelect.value);
  localStorage.setItem('avatar-accessory', accessorySelect.value);
}

// Trigger save when a user updates the avatar
faceSelect.addEventListener('change', () => {
  updateAvatar();
  saveAvatar();
});
eyesSelect.addEventListener('change', () => {
  updateAvatar();
  saveAvatar();
});
accessorySelect.addEventListener('change', () => {
  updateAvatar();
  saveAvatar();
});

// Initialize avatar with default or saved values
function initializeAvatar() {
  avatarFace.textContent = localStorage.getItem('avatar-face') || '😊';
  avatarEyes.textContent = localStorage.getItem('avatar-eyes') || '👀';
  avatarAccessory.textContent = localStorage.getItem('avatar-accessory') || '🎩';
}

// Initialize the avatar on page load
initializeAvatar();
