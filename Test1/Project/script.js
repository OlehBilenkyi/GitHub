// Функция для получения параметров из URL
function getParamsFromURL() {
  const params = new URLSearchParams(window.location.search);

  // Извлекаем необходимые параметры
  const rateTrackerTypeId = params.get("rateTrackerTypeId");
  const loanOfficerId = params.get("loanOfficerId");
  const email = decodeURIComponent(params.get("email"));
  const firstName = params.get("firstName");
  const lastName = params.get("lastName");
  const creditScore = params.get("creditScore");
  const loanAmount = params.get("loanAmount");
  const loanPurpose = params.get("loanPurpose");
  const appraisedValue = params.get("appraisedValue");
  const state = params.get("state");

  // Пример заполнения полей на странице
  if (firstName && lastName) {
    document.getElementById(
      "clientName"
    ).innerText = `${firstName} ${lastName}`;
  }
  if (email) {
    document.getElementById("clientEmail").innerText = email;
  }
  if (creditScore) {
    document.getElementById("creditScore").innerText = creditScore;
  }
  if (loanAmount) {
    document.getElementById("loanAmount").innerText = `$${parseFloat(
      loanAmount
    ).toLocaleString()}`;
  }
  if (appraisedValue) {
    document.getElementById("appraisedValue").innerText = `$${parseFloat(
      appraisedValue
    ).toLocaleString()}`;
  }
  if (state) {
    document.getElementById("state").innerText = state;
  }
}

// Вызываем функцию при загрузке страницы
window.onload = getParamsFromURL;
