window.onload = function () {
  var detailsSwitch = document.querySelector('.js-details-switch');
  var details = document.querySelectorAll('details');

  console.log('details: ' + details.length);
  console.log('h2: ' + document.querySelectorAll('h2').length);

  detailsSwitch.addEventListener('click', function () {
    if (detailsSwitch.textContent === 'Expand All') {
      detailsSwitch.textContent = 'Collapse All';
      details.forEach(function (detail) {
        detail.setAttribute('open', 'open');
      });
    }
    else {
      detailsSwitch.textContent = 'Expand All';
      details.forEach(function (detail) {
        detail.removeAttribute('open');
      });
    }
  }, false);
}
