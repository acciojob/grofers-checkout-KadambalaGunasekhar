const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	// Select all price elements
    const prices = document.querySelectorAll(".price");

    let total = 0;

    // Calculate total price
    prices.forEach((price) => {
        total += Number(price.textContent);
    });

    // Create a new table row
    const tr = document.createElement("tr");

    // Create a single cell
    const td = document.createElement("td");

    // Set total price
    td.textContent = "Total Price: Rs " + total;

    // Make the cell span both columns
    td.colSpan = 2;

    // Append cell to row
    tr.appendChild(td);

    // Append row to table
    document.querySelector("table").appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);

