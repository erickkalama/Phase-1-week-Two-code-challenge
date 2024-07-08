// JavaScript array to store shopping list items
let shoppingList = [];

// Function to update the shopping list table
function updateShoppingList() {
    const tableBody = document.querySelector('#shopping-list-table tbody');
    tableBody.innerHTML = '';

    shoppingList.forEach((item, index) => {
        const newRow = document.createElement('tr');

        const itemCell = document.createElement('td');
        itemCell.textContent = item;
        
        const purchasedCell = document.createElement('td');
        const purchasedCheckbox = document.createElement('input');
        purchasedCheckbox.type = 'checkbox';
        purchasedCheckbox.addEventListener('change', function() {
            if (this.checked) {
                newRow.classList.add('purchased');
            } else {
                newRow.classList.remove('purchased');
            }
        });

        purchasedCell.appendChild(purchasedCheckbox);
        newRow.appendChild(itemCell);
        newRow.appendChild(purchasedCell);
        tableBody.appendChild(newRow);
    });
}

// Event listener for adding items to the list
document.getElementById('shopping-list-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const itemInput = document.getElementById('item-input');
    const itemValue = itemInput.value.trim();

    if (itemValue) {
        shoppingList.push(itemValue);
        updateShoppingList();
        itemInput.value = '';
    }
});

// Event listener for clearing the list
document.getElementById('clear-list').addEventListener('click', function() {
    shoppingList = [];
    updateShoppingList();
});
