document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-target');

    document.querySelectorAll('.panel').forEach(panel => {
      if (panel.id === target) {
        panel.classList.toggle('visible');
      } else {
        panel.classList.remove('visible');
      }
    });
  });
});

// DỰ BÁO THỜI TIẾT //
async function fetchWeather() {
  const API_KEY = '7787f162c8017c9c97a8a9ac9c271644';
  const lat = 20.961;  // Hà Đông
  const lon = 105.768;
  const weatherInfo = document.getElementById('weather-info');

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=vi&appid=${API_KEY}`);
    const data = await res.json();

    const temp = Math.round(data.main.temp);
    const feels = Math.round(data.main.feels_like);
    const desc = data.weather[0].description;
    const wind = data.wind.speed;

    weatherInfo.innerHTML = `
      <strong>${desc.charAt(0).toUpperCase() + desc.slice(1)}</strong><br>
      Nhiệt độ: ${temp}°C<br>
      Cảm giác: ${feels}°C<br>
      Gió: ${wind} m/s
    `;
  } catch (e) {
    weatherInfo.innerText = 'Không thể tải dữ liệu thời tiết.';
    console.error(e);
  }
}

fetchWeather();
