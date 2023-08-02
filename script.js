let lists = document.getElementsByClassName('list'),
  rightBox = document.getElementById('right'),
  leftBox = document.getElementById('left');

for (list of lists) {
  list.addEventListener('dragstart', function (e) {
    let selected = e.target;
    // Select items to drag into right box
    rightBox.addEventListener('dragover', function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener('drop', function (e) {
      rightBox.appendChild(selected);
      selected = null;
    });

    // Select items to drag into left box
    leftBox.addEventListener('dragover', function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener('drop', function (e) {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}
