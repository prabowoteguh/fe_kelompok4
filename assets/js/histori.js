const API_HISTORI = "https://api-kelompok4.prabowolabs.com/api/dataHistories";
const datas = response.body;
const getdataHistories = () => {

  axios.get(API_HISTORI)
    .then((response) => {

      const tableBody = document.querySelector('#tablehistory tbody');
      let angkaMulai = 0;

      datas.forEach((item) => { 
        var newRow = document.createElement('tr');

        var column1 = document.createElement('th');
        column1.textContent = angkaMulai += 1;
        newRow.appendChild(column1);

        var column2 = document.createElement('th');
        column2.textContent = item.amount;
        newRow.appendChild(column2);

        var column3 = document.createElement('th');
        column3.textContent = item.date;
        newRow.appendChild(column3);

        var column4 = document.createElement('th');
        column4.textContent = item.description;
        newRow.appendChild(column4);

        var column5 = document.createElement('th');
        column5.textContent = item.id;
        newRow.appendChild(column5);

        var column6 = document.createElement('th');
        column6.textContent = item.image;
        newRow.appendChild(column6);

        var colum7 = document.createElement('th');
        colum7.textContent = item.invoice_number;
        newRow.appendChild(colum7);

        var colum8 = document.createElement('th');
        colum8.textContent = item.item_id;
        newRow.appendChild(colum8);

        var colum9 = document.createElement('th');
        colum9.textContent = item.name;
        newRow.appendChild(colum9);

        var colum10 = document.createElement('th');
        colum10.textContent = item.price;
        newRow.appendChild(colum10);

        var colum11 = document.createElement('th');
        colum11.textContent = item.stock;
        newRow.appendChild(colum11);

        var colum12 = document.createElement('th');
        colum12.textContent = item.type;
        newRow.appendChild(colum12);

        tableBody.appendChild(newRow);
      });
    })
    .catch((error) => console.log('error', error));
};

getdataHistories();
