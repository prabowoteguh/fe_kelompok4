const API_HISTORI = "https://api-kelompok4.prabowolabs.com/api/dataHistories";

const getdataHistories = () => {
  axios.get(API_HISTORI)
    .then((result) => {
      const tableBody = document.querySelector('#tablehistory tbody');
      let angkaMulai = 0;
      result.data.forEach((item) => { 
        var newRow = document.createElement('tr');

        var column1 = document.createElement('td');
        column1.textContent = angkaMulai += 1;
        newRow.appendChild(column1);

        var column2 = document.createElement('td');
        column2.textContent = item.id;
        newRow.appendChild(column2);

        var column3 = document.createElement('td');
        column3.textContent = item.item_id;
        newRow.appendChild(column3);

        var column4 = document.createElement('td');
        column4.textContent = item.amount;
        newRow.appendChild(column4);

        var column5 = document.createElement('td');
        column5.textContent = item.type;
        newRow.appendChild(column5);

        var column6 = document.createElement('td');
        column6.textContent = item.date;
        newRow.appendChild(column6);

        var colum7 = document.createElement('td');
        colum7.textContent = item.invoice_number;
        newRow.appendChild(colum7);

        var colum8 = document.createElement('td');
        colum8.textContent = item.name;
        newRow.appendChild(colum8);

        var colum9 = document.createElement('td');
        colum9.textContent = item.stock;
        newRow.appendChild(colum9);

        var colum10 = document.createElement('td');
        colum10.textContent = item.image;
        newRow.appendChild(colum10);

        var colum11 = document.createElement('td');
        colum11.textContent = item.price;
        newRow.appendChild(colum11);

        var colum12 = document.createElement('td');
        colum12.textContent = item.description;
        newRow.appendChild(colum12);

        tableBody.appendChild(newRow);
      });
    })
    .catch((error) => console.log('error', error));
};

getdataHistories();
