//Вывести таблицу 10×10, заполненную числами от 1 до 100 (таблица создана через js)
let table = document.createElement('table');
function showTable (tableName) {
    document.querySelector('body').appendChild(tableName);
    tableName.createTBody();
    const n = 10;
    let value = 0;
    for (let l = 0; l < n; l++) {
        let rowTable = tableName.insertRow();
        for (let i = 0; i < n; i++) {
            let elementTable = document.createElement('td');
            rowTable.appendChild(elementTable);
            value ++;
            elementTable.innerHTML = `${value}`;
        }
    }
}
showTable(table);


