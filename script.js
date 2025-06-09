// ========== 1. بيانات الأماكن ==========
const places = [
  { name: "زووبا", location: [31.2396, 30.0491], type: "restaurant", color: "#00FF00", url: "https://www.zoobaeats.com/", menu: "zooba_menu.pdf", image: "https://i.ibb.co/7dZH1VjJ/unnamed.webp" },
  { name: "كشري أبو طارق", location: [31.2400, 30.0510], type: "restaurant", color: "#00FF00", url: "https://abu-tarek.com/", image: "https://i.ibb.co/4wQ472FD/unnamed-1.webp" },
  { name: "تبولة", location: [31.2425, 30.0505], type: "restaurant", color: "#00FF00", url: "https://maps.app.goo.gl/Qif94sgmxkof5KwX9", image: "https://i.ibb.co/B2FyRYXD/18eb5d7d-3adc-49d9-8b6c-9a9692a1df72-lg.jpg" },
  { name: "فلفلة", location: [31.2380, 30.0520], type: "restaurant", color: "#00FF00", url: "https://felfela.com", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
  { name: "نعمة", location: [31.2410, 30.0490], type: "restaurant", color: "#00FF00", url: "https://na3ma.com", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" },
  { name: "سوق العصر", location: [31.2375, 30.0515], type: "restaurant", color: "#00FF00", url: "https://soqal3asr.com", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
  { name: "بليند", location: [31.2415, 30.0500], type: "restaurant", color: "#00FF00", url: "https://blend.com", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" },
  { name: "حجوجه", location: [31.2420, 30.0495], type: "restaurant", color: "#00FF00", url: "https://hajouja.com", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
  { name: "ظاظا", location: [31.2405, 30.0515], type: "restaurant", color: "#00FF00", url: "https://zaza.com", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" },
  { name: "صبحي كابر", location: [31.2390, 30.0505], type: "restaurant", color: "#00FF00", url: "https://sobhykaber.com", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
  { name: "فرحات", location: [31.2385, 30.0525], type: "restaurant", color: "#00FF00", url: "https://farahat.com", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" },
  { name: "السدة", location: [31.2410, 30.0530], type: "restaurant", color: "#00FF00", url: "https://alsada.com", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
  { name: "قهوة", location: [31.2431, 30.0512], type: "cafe", color: "#FFA500", url: "https://qahwa.com", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },
  { name: "قهوة الفيشاوي", location: [31.2600, 30.0475], type: "cafe", color: "#FFA500", url: "https://elfishawy.com", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },
  { name: "كوستا", location: [31.2450, 30.0530], type: "cafe", color: "#FFA500", url: "https://costa.com", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },
  { name: "سيموندس", location: [31.2405, 30.0500], type: "cafe", color: "#FFA500", url: "https://simonds.com", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },
  { name: "بيت ورد", location: [31.2420, 30.0520], type: "cafe", color: "#FFA500", url: "https://beitward.com", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },
  { name: "فيولا", location: [31.2415, 30.0510], type: "cafe", color: "#FFA500", url: "https://viola.com", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },
  { name: "ذا روف", location: [31.2430, 30.0505], type: "cafe", color: "#FFA500", url: "https://theroof.com", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },
  { name: "Cairo Jazz Club", location: [31.2108, 30.0626], type: "nightlife", color: "#FF0000", url: "https://cairojazzclub.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "The Tap", location: [31.2150, 30.0600], type: "nightlife", color: "#FF0000", url: "https://thetap.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "Stage One", location: [31.2200, 30.0580], type: "nightlife", color: "#FF0000", url: "https://stageone.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "Gu Bar", location: [31.2250, 30.0550], type: "nightlife", color: "#FF0000", url: "https://gubar.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "سبين", location: [31.2120, 30.0610], type: "nightlife", color: "#FF0000", url: "https://spin.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "إيكو", location: [31.2130, 30.0605], type: "nightlife", color: "#FF0000", url: "https://eco.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "توباز", location: [31.2140, 30.0595], type: "nightlife", color: "#FF0000", url: "https://topaz.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "كاش", location: [31.2155, 30.0585], type: "nightlife", color: "#FF0000", url: "https://cash.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "فوكس", location: [31.2160, 30.0575], type: "nightlife", color: "#FF0000", url: "https://fox.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "كوزمو", location: [31.2170, 30.0565], type: "nightlife", color: "#FF0000", url: "https://cosmo.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "ستديج", location: [31.2180, 30.0555], type: "nightlife", color: "#FF0000", url: "https://stage.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "أوبال", location: [31.2190, 30.0545], type: "nightlife", color: "#FF0000", url: "https://opal.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "إكس أو", location: [31.2200, 30.0535], type: "nightlife", color: "#FF0000", url: "https://xo.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "كاي", location: [31.2210, 30.0525], type: "nightlife", color: "#FF0000", url: "https://kai.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "أوفيد", location: [31.2220, 30.0515], type: "nightlife", color: "#FF0000", url: "https://ofid.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "جراود شيراتون", location: [31.2230, 30.0505], type: "nightlife", color: "#FF0000", url: "https://crowdsheraton.com", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { name: "الأهرامات", location: [31.1342, 29.9792], type: "tourist", color: "#FFD700", url: "https://www.tripadvisor.com/Attraction_Review-g294202-d308847", image: "https://i.ibb.co/j1Td5Rr/94a8c96e916653f9a948442bba9c3a24.jpg" },
  { name: "خان الخليلي", location: [31.2622, 30.0478], type: "tourist", color: "#FFD700", url: "https://www.tripadvisor.com/Attraction_Review-g294201-d308844", image: "https://images.unsplash.com/photo-1602774897447-16c7273db418" },
  { name: "المتحف المصري", location: [31.2336, 30.0481], type: "tourist", color: "#FFD700", url: "https://www.tripadvisor.com/Attraction_Review-g294201-d308838", image: "https://images.unsplash.com/photo-1591117207239-99a08b78ebb7" },
  { name: "برج القاهرة", location: [31.2243, 30.0460], type: "tourist", color: "#FFD700", url: "https://www.tripadvisor.com/Attraction_Review-g294201-d308846", image: "https://images.unsplash.com/photo-1619687817846-4a497 rim4" },
  { name: "حديقة الأزهر", location: [31.2630, 30.0571], type: "tourist", color: "#FFD700", url: "https://www.tripadvisor.com/Attraction_Review-g294201-d308845", image: "https://images.unsplash.com/photo-1589301066999-4a0b3d9c4d9b" },
  { name: "قلعة صلاح الدين", location: [31.2551, 30.0293], type: "tourist", color: "#FFD700", url: "https://www.tripadvisor.com/Attraction_Review-g294201-d308843", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { name: "المتحف المصري الكبير", location: [31.1330, 29.9780], type: "tourist", color: "#FFD700", url: "https://www.tripadvisor.com/Attraction_Review-g294201-d308850", image: "https://images.unsplash.com/photo-1591117207239-99a08b78ebb7" },
  { name: "متحف الحضارة", location: [31.1310, 30.0600], type: "tourist", color: "#FFD700", url: "https://www.tripadvisor.com/Attraction_Review-g294201-d308851", image: "https://images.unsplash.com/photo-1591117207239-99a08b78ebb7" },
  { name: "كازان", location: [31.2400, 30.0540], type: "lounge", color: "#800080", url: "https://kazan.com", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b" },
  { name: "ذا لندن", location: [31.2410, 30.0535], type: "lounge", color: "#800080", url: "https://thelondon.com", image: "https://images.unsplash.com/photo-1514933651103-005eec06 naps4b" },
  { name: "ليمون تري", location: [31.2420, 30.0530], type: "lounge", color: "#800080", url: "https://lemontree.com", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b" },
  { name: "ماكسيم", location: [31.2430, 30.0525], type: "lounge", color: "#800080", url: "https://maxim.com", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b" },
  { name: "يخت النيل", location: [31.2300, 30.0450], type: "nile_cruise", color: "#0000FF", url: "https://nileyacht.com", image: "https://images.unsplash.com/photo-1516426122075-c23e6d15a7f2" },
  { name: "يخت القناطر الخيرية", location: [31.2290, 30.0460], type: "nile_cruise", color: "#0000FF", url: "https://qanateryacht.com", image: "https://images.unsplash.com/photo-1516426122075-c23e6d15a7f2" }
];

// ========== 2. بيانات السيارات ==========
const cars = {
  economy: [
    { name: "Nissan Sentra", price: 2000, details: "4 ركاب، اقتصادية", image: "https://i.ibb.co/XkFdWJXm/NEGRO.png" },
    { name: "Kia Cerato", price: 2000, details: "4 ركاب، مريحة", image: "https://i.ibb.co/qYq20YpG/179042585764e2903a7bf1d914259454-600-0.png" },
    { name: "Hyundai Elantra", price: 2000, details: "4 ركاب، موفرة", image: "https://i.ibb.co/q38Gjg92/hyundai-elantra-cn7-large.png" },
    { name: "Toyota Corolla", price: 2000, details: "4 ركاب، متينة", image: "https://i.ibb.co/jkrCQHwg/Black-1170x395.png" },
    { name: "Nissan Sunny", price: 1500, details: "4 ركاب، شبابية", image: "https://i.ibb.co/vCWphnhW/NISSAN-1-2-201526470-jpg-ximg-l-12-m-smart.png" }
  ],
  luxury: [
    { name: "Mercedes-Maybach", price: 15000, details: "5 ركاب، فخمة", image: "https://i.ibb.co/60vWGzBf/mercedes-maybach-s-class-Xanh-Nautic.png" },
    { name: "Mercedes J-Class", price: 25000, details: "5 ركاب، فخمة", image: "https://i.ibb.co/22Dr634/2025-mercedes-benz-classe-g-eq-1-580e-ext-032-051.png" },
    { name: "Mercedes C-Class", price: 7500, details: "5 ركاب، فخمة", image: "https://i.ibb.co/hkcxB1n/INTRO-24-MB-C-Class.png" },
    { name: "Mercedes viano ", price: 10000, details: "7 ركاب، عائلية", image: "https://i.ibb.co/bM457kFS/16406944194361.png" },
    { name: "Jeep", price: 5000, details: "5 ركاب، أمان عالي", image: "https://i.ibb.co/NdW5tR37/2025-jeep-grand-cherokee-4-overland-032-pw7.png" },
    { name: "Range Rover", price: 20000, details: "5 ركاب، فاخرة جدًا", image: "https://i.ibb.co/h1HPV1JC/model2.png" }
  ]
};

// ========== 3. خريطة Mapbox ==========
mapboxgl.accessToken = 'pk.eyJ1IjoiYWhtYXR5YTAwIiwiYSI6ImNtYWJxbTFoNDExNXEyanIwa2xxcmJwdWoifQ.0WU0DyTqRl9TjV-Go2O2LA';
let map, markers = [];
function initMap() {
  map = new mapboxgl.Map({
    container: 'map-container',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [31.2357, 30.0444],
    zoom: 12
  });
  addMarkers(places);
}
function addMarkers(filteredPlaces) {
  if (!map) return;
  if (markers.length) markers.forEach(m => m.remove());
  markers = [];
  filteredPlaces.forEach(place => {
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.background = place.color || '#FFD700';
    el.style.width = '18px';
    el.style.height = '18px';
    el.style.borderRadius = '50%';
    el.style.border = '2px solid #fff';
    el.style.cursor = 'pointer';
    const marker = new mapboxgl.Marker(el)
      .setLngLat([place.location[1], place.location[0]])
      .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div style="text-align:right">
          <img src="${place.image}" alt="${place.name}" style="width:100px;border-radius:8px;margin-bottom:5px">
          <h4>${place.name}</h4>
          <a href="${place.url}" target="_blank">الموقع</a>
        </div>
      `))
      .addTo(map);
    markers.push(marker);
  });
}
window.filterPlaces = function(type) {
  const filtered = type ? places.filter(p => p.type === type) : places;
  addMarkers(filtered);
  renderPlacesList(filtered);
};
function renderPlacesList(filteredPlaces) {
  const list = document.getElementById('places-list');
  if (!list) return;
  list.innerHTML = '';
  filteredPlaces.forEach(place => {
    const div = document.createElement('div');
    div.className = 'place-item';
    div.innerHTML = `<img src="${place.image}" alt="${place.name}" loading="lazy"><span>${place.name}</span>`;
    div.onclick = () => {
      map.flyTo({ center: [place.location[1], place.location[0]], zoom: 15 });
    };
    list.appendChild(div);
  });
}

// ========== 4. بحث الأماكن ==========
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('map-container')) {
    initMap();
    renderPlacesList(places);
    // بحث الأماكن
    const placePicker = document.getElementById('place-picker');
    if (placePicker) {
      placePicker.addEventListener('input', function() {
        const val = this.value.trim();
        const filtered = places.filter(p => p.name.includes(val));
        addMarkers(filtered);
        renderPlacesList(filtered);
      });
    }
  }
});

// ========== 5. حجز السيارات ==========
let selectedCar = null;
function renderCarGrid() {
  const grid = document.getElementById('car-grid');
  if (!grid) return;
  grid.innerHTML = '';
  [...cars.economy, ...cars.luxury].forEach((car, idx) => {
    const div = document.createElement('div');
    div.className = 'car-card' + (selectedCar === idx ? ' selected' : '');
    div.innerHTML = `
      <img src="${car.image}" alt="${car.name}" loading="lazy">
      <h4>${car.name}</h4>
      <p>${car.details}</p>
      <div class="price">${car.price} جنيه/يوم</div>
    `;
    div.onclick = () => {
      selectedCar = idx;
      renderCarGrid();
      calculateTotalPrice();
    };
    grid.appendChild(div);
  });
}
function calculateTotalPrice() {
  const priceDiv = document.getElementById('total-price');
  if (!priceDiv) return;
  const carsArr = [...cars.economy, ...cars.luxury];
  const car = carsArr[selectedCar ?? 0];
  const start = document.getElementById('start-date')?.value;
  const end = document.getElementById('end-date')?.value;
  let daysCount = 1;
  if (start && end) {
    const d1 = new Date(start), d2 = new Date(end);
    daysCount = Math.max(1, Math.ceil((d2 - d1) / (1000*60*60*24)));
  }
  priceDiv.textContent = `السعر الإجمالي: ${car.price * daysCount} جنيه`;
}
document.addEventListener('DOMContentLoaded', function() {
  renderCarGrid();
  selectedCar = 0;
  calculateTotalPrice();
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('input', calculateTotalPrice);
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      Toastify({ text: "تم إرسال الحجز بنجاح!", duration: 2500, style: {background: "#FFD700", color: "#121212"} }).showToast();
      bookingForm.reset();
      selectedCar = 0;
      renderCarGrid();
      calculateTotalPrice();
    });
  }
  document.getElementById('start-date')?.addEventListener('change', calculateTotalPrice);
  document.getElementById('end-date')?.addEventListener('change', calculateTotalPrice);
});

// ========== 6. جدول الرحلة ==========
const days = ['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
const times = ['صباحًا','ظهرًا','مساءً'];
function renderScheduleTable() {
  const table = document.getElementById('schedule-table');
  if (!table) return;
  let html = '<tr><th>اليوم</th>';
  times.forEach(t => html += `<th>${t}</th>`);
  html += '</tr>';
  days.forEach(day => {
    html += `<tr><td>${day}</td>`;
    times.forEach(t => {
      html += `<td><select><option value="">اختر مكان</option>`;
      places.forEach(p => {
        html += `<option value="${p.name}">${p.name}</option>`;
      });
      html += `</select></td>`;
    });
    html += '</tr>';
  });
  table.innerHTML = html;
}
window.saveCalendar = function() {
  Toastify({ text: "تم حفظ البرنامج!", duration: 2000, style: {background: "#FFD700", color: "#121212"} }).showToast();
};
window.generatePDF = function() {
  Toastify({ text: "تحميل PDF غير مفعل في هذا الديمو.", duration: 2000, style: {background: "#FFD700", color: "#121212"} }).showToast();
};
document.addEventListener('DOMContentLoaded', function() {
  renderScheduleTable();
});

// ========== 7. معرض الصور ==========
const galleryImages = [
  {src: "https://i.ibb.co/j1Td5Rr/94a8c96e916653f9a948442bba9c3a24.jpg", caption: "الأهرامات"},
  {src: "https://images.unsplash.com/photo-1602774897447-16c7273db418", caption: "خان الخليلي"},
  {src: "https://images.unsplash.com/photo-1591117207239-99a08b78ebb7", caption: "المتحف المصري"},
  {src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819", caption: "سهرات القاهرة"},
  {src: "https://images.unsplash.com/photo-1516426122075-c23e6d15a7f2", caption: "رحلات نيلية"}
];
function renderGallery() {
  const wrapper = document.querySelector('.gallery-slider .swiper-wrapper');
  if (!wrapper) return;
  galleryImages.forEach(img => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `<img src="${img.src}" alt="${img.caption}" loading="lazy"><span>${img.caption}</span>`;
    wrapper.appendChild(slide);
  });
  if (window.Swiper) {
    new Swiper('.gallery-slider', {
      loop: true,
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      pagination: { el: '.swiper-pagination', clickable: true }
    });
  }
}
document.addEventListener('DOMContentLoaded', renderGallery);

// ========== 8. زر التنقل للأقسام ==========
window.scrollToSection = function(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({behavior: "smooth"});
};
