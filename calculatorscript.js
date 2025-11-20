document.getElementById("compareBtn").addEventListener("click", function () {
    // Grab user inputs
    const mileage = parseFloat(document.getElementById("mileage").value);
    const fuelCost = parseFloat(document.getElementById("fuelCost").value);
    const electricityCost = parseFloat(document.getElementById("electricityCost").value);

    // Validation: Check if inputs are filled
    if (isNaN(mileage) || isNaN(fuelCost) || isNaN(electricityCost)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    // 📊 Assumed constants (you can adjust these)
    const evInitial = 30000;
    const petrolInitial = 25000;
    const evMaint = 500;
    const petrolMaint = 1000;

    // 🧮 Calculate costs
    const evAnnual = mileage * electricityCost * 0.2;      // EV operating cost
    const petrolAnnual = mileage * fuelCost * 0.09;        // Petrol operating cost

    const evTotal = evInitial + (evAnnual * 5) + (evMaint * 5);
    const petrolTotal = petrolInitial + (petrolAnnual * 5) + (petrolMaint * 5);

    // 🟢 Update table cells
    document.getElementById("evInitial").textContent = `$${evInitial.toLocaleString()}`;
    document.getElementById("petrolInitial").textContent = `$${petrolInitial.toLocaleString()}`;
    document.getElementById("initialDiff").textContent = `$${(evInitial - petrolInitial).toLocaleString()}`;

    document.getElementById("evOperating").textContent = `$${evAnnual.toFixed(2)}`;
    document.getElementById("petrolOperating").textContent = `$${petrolAnnual.toFixed(2)}`;
    document.getElementById("operatingDiff").textContent = `$${(evAnnual - petrolAnnual).toFixed(2)}`;

    document.getElementById("evMaint").textContent = `$${evMaint.toLocaleString()}`;
    document.getElementById("petrolMaint").textContent = `$${petrolMaint.toLocaleString()}`;
    document.getElementById("maintDiff").textContent = `$${(evMaint - petrolMaint).toLocaleString()}`;

    document.getElementById("evTotal").textContent = `$${evTotal.toLocaleString()}`;
    document.getElementById("petrolTotal").textContent = `$${petrolTotal.toLocaleString()}`;
    document.getElementById("totalDiff").textContent = `$${(evTotal - petrolTotal).toLocaleString()}`;
});
