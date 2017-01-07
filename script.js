window.onload = function () {
  var detailsSwitch = document.querySelector('.js-details-switch');
  var details = document.querySelectorAll('details');

  detailsSwitch.addEventListener('click', function () {
    console.log(detailsSwitch);
    console.log(detailsSwitch.textContent);
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
