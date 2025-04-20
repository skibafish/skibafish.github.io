fetch('https://sites.google.com/view/drive-u-7-home/')
  .then(res => res.text())
  .then(text => console.log(text));
