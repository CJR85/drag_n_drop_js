let lists = document.getElementsByClassName('list'),
  rightBox = document.getElementById('right'),
  leftBox = document.getElementById('left');

for (list of lists) {
  list.addEventListener('dragstart', function (e) {
    let selected = e.target;

    rightBox.addEventListener('dragover', function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener('drop', function (e) {
      rightBox.appendChild(selected);
      selected = null;
    });
  });
}
