function search() {
   let townArr = Array.from(document.querySelectorAll('ul li'));
   let searchText = document.getElementById('searchText').value;
   let counter = 0;

   for(let item of townArr){
      let text = item.textContent;

      if (text.includes(searchText)){
         item.style.textDecoration = "underline";
         item.style.fontWeight = "bold";
         counter += 1
      } else {
         item.style.textDecoration = 'none';
         item.style.fontWeight = '';
      }
   }

   document.getElementById("result").innerText = `${counter} matches found`;
}
