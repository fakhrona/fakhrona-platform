function showTab(id) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}
