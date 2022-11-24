function solve() {
  let example = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let exampleArr = example.split(' ');
  let res = '';


  switch (convention) {
    case 'Camel Case':
      exampleArr.forEach((el, ind) => {
        if (ind === 0) {
          return res += el.toLowerCase();
        }
        return res += el[0].toUpperCase() + el.substring(1)
      })
      break;
    case 'Pascal Case':
      exampleArr.forEach((el, ind) => {
        el = el.toLowerCase();
        res += el[0].toUpperCase() + el.substring(1)
      })
      break;
    default: res = 'Error!'
  }
  document.getElementById('result').textContent = res;
}