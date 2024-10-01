let fuelData = [];

document.getElementById('fuelForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const date = document.getElementById('date').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const price = parseFloat(document.getElementById('price').value);
    const odo = parseInt(document.getElementById('odo').value);

    const newEntry = { date, amount, price, odo };
    fuelData.push(newEntry);

    updateFuelTable();
    updateMonthlySpendings();
});

function updateFuelTable() {
    const tbody = document.querySelector('#fuelData tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < fuelData.length; i++) {
        const row = document.createElement('tr');
        const currentData = fuelData[i];

        let prevOdo = 0;
        let kmDriven = '';
        let avgConsumption = '';

        if (i > 0) {
            prevOdo = fuelData[i - 1].odo;
            kmDriven = currentData.odo - prevOdo;

            if (kmDriven > 0) {
                avgConsumption = ((currentData.amount / kmDriven) * 100).toFixed(2);
            }
        }

        row.innerHTML = `
            <td>${currentData.date}</td>
            <td>${currentData.amount.toFixed(2)} liter</td>
            <td>${currentData.price.toFixed(2)} Ft</td>
            <td>${currentData.odo} km</td>
            <td>${kmDriven ? kmDriven + ' km' : ''}</td>
            <td>${avgConsumption ? avgConsumption + ' l/100km' : ''}</td>
        `;
        tbody.appendChild(row);
    }
}

function updateMonthlySpendings() {
    const spendingsList = document.getElementById('spendingsList');
    spendingsList.innerHTML = '';

    const monthlySpendings = fuelData.reduce((acc, entry) => {
        const month = entry.date.slice(0, 7); // YYYY-MM formátum
        if (!acc[month]) acc[month] = 0;
        acc[month] += entry.price;
        return acc;
    }, {});

    for (const month in monthlySpendings) {
        const li = document.createElement('li');
        li.textContent = `${month}: ${monthlySpendings[month].toFixed(2)} Ft`;
        spendingsList.appendChild(li);
    }
}

document.getElementById('filter').addEventListener('click', function() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    const filteredData = fuelData.filter(entry => {
        return (!startDate || entry.date >= startDate) && (!endDate || entry.date <= endDate);
    });

    fuelData = filteredData;
    updateFuelTable();
});
