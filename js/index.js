// data.json simulation
const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": { "current": 5, "previous": 7 },
      "weekly": { "current": 32, "previous": 36 },
      "monthly": { "current": 103, "previous": 128 }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": { "current": 1, "previous": 2 },
      "weekly": { "current": 10, "previous": 8 },
      "monthly": { "current": 23, "previous": 29 }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": { "current": 0, "previous": 1 },
      "weekly": { "current": 4, "previous": 7 },
      "monthly": { "current": 13, "previous": 19 }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": { "current": 1, "previous": 1 },
      "weekly": { "current": 4, "previous": 5 },
      "monthly": { "current": 11, "previous": 18 }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": { "current": 1, "previous": 3 },
      "weekly": { "current": 5, "previous": 10 },
      "monthly": { "current": 21, "previous": 23 }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": { "current": 0, "previous": 1 },
      "weekly": { "current": 2, "previous": 2 },
      "monthly": { "current": 7, "previous": 11 }
    }
  }
];
// Ambil semua tombol time-option
const timeOptions = document.querySelectorAll('.time-option');

// Fungsi untuk menambahkan kelas 'active' ke tombol yang diklik
function handleTimeOptionClick(event) {
  // Hapus kelas 'active' dari semua tombol
  timeOptions.forEach(option => {
    option.classList.remove('active');
  });

  // Tambahkan kelas 'active' ke tombol yang diklik
  event.target.classList.add('active');

  // Ubah timeframe sesuai data dari tombol
  selectedTimeframe = event.target.dataset.time;
  displayCards(selectedTimeframe);
}

// Tambahkan event listener untuk setiap tombol
timeOptions.forEach(option => {
  option.addEventListener('click', handleTimeOptionClick);
});

// Aktifkan opsi 'weekly' secara default
document.querySelector('[data-time="weekly"]').classList.add('active');


// Select the activity cards container
const activityCardsContainer = document.querySelector('.activity-cards');

// Default to 'weekly'
let selectedTimeframe = 'weekly';

// Function to display activity cards
function displayCards(timeframe) {
  activityCardsContainer.innerHTML = '';

  data.forEach(activity => {
    const { title, timeframes, borderColor } = activity;
    const { current, previous } = timeframes[timeframe];

    const cardHTML = `
      <div class="card" style="border-top-color: ${borderColor}">
        <div class="card-header">
          <h3>${title}</h3>
          <span class="options-btn">...</span>
        </div>
        <div class="card-content">
          <div class="hours">${current}hrs</div>
          <div class="previous">Last Week - ${previous}hrs</div>
        </div>
      </div>
    `;

    // Insert the card into the container
    activityCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
  });
}

// Display the initial set of cards
displayCards(selectedTimeframe);

// Add event listeners to the time option buttons
document.querySelectorAll('.time-option').forEach(button => {
  button.addEventListener('click', (event) => {
    selectedTimeframe = event.target.dataset.time;
    displayCards(selectedTimeframe);
  });
});
