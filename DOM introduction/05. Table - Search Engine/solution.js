function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   function onClick() {
      let rowEl = Array.from(document.querySelectorAll('.container tbody tr'));
      let searchText = document.getElementById('searchField').value;
      
      rowEl.forEach(row => {
         row.className = '';
      })

      let filteredRows = rowEl.filter(row => {
         let values = Array.from(row.children);

         if (values.some(td => td.textContent.includes(searchText))) {
            row.className = 'select';
         }
      })

      searchText = '';
      }
   }
