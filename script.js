const data = [
  {
    "id": "9e70",
    "sl_no": "1",
    "sales_purchase": "Others",
    "date": "01-Dec-23",
    "party_name": "Maintainace",
    "details": "Blade Loha",
    "weight": "",
    "manpower": "",
    "material": "",
    "freight": "",
    "maintainance": "1,600 ",
    "sales": "5",
    "payment_received": "1000",
    "amount_paid": "1,500 ",
    "balance": "",
    "createdAt": "2024-04-16"
  },
  {
    "id": "476d",
    "sl_no": "2",
    "sales_purchase": "Others",
    "date": "24-Dec-23",
    "party_name": "Maintainace",
    "details": "Mintu Welding",
    "weight": "",
    "manpower": "",
    "material": "",
    "freight": "",
    "maintainance": "1,500 ",
    "sales": "",
    "payment_received": "",
    "amount_paid": "1,500 ",
    "balance": "",
    "createdAt": "2024-04-16"
  },
  {
    "id": "d615",
    "sl_no": "6",
    "sales_purchase": "Purchase",
    "date": "02-Dec-23",
    "party_name": "Azizul New town",
    "details": "New Town 1230-7% @ 8",
    "weight": "1140",
    "manpower": "",
    "material": "",
    "freight": "",
    "maintainance": "9,120 ",
    "sales": "10",
    "payment_received": "",
    "amount_paid": "4,000 ",
    "balance": "5,120 ",
    "createdAt": "2024-04-16"
  },
  {
    "id": "a9dc",
    "sl_no": "4",
    "sales_purchase": "Purchase",
    "date": "02-Dec-23",
    "party_name": "Azizul New town",
    "details": "New Town 1230-7% @ 8",
    "weight": "1140",
    "manpower": "",
    "material": "",
    "freight": "",
    "maintainance": "9,120 ",
    "sales": "",
    "payment_received": "",
    "amount_paid": "4,000 ",
    "balance": "5,120 ",
    "createdAt": "2024-04-16"
  },
  {
    "id": "695b",
    "sl_no": "5",
    "sales_purchase": "sales",
    "date": "06-Dec-23",
    "party_name": "Milan Shiva packging",
    "details": "Sales",
    "weight": "640",
    "manpower": "",
    "material": "",
    "freight": "",
    "maintainance": "16,000 ",
    "sales": "",
    "payment_received": "40,000 ",
    "amount_paid": "4,000 ",
    "balance": "5,120 ",
    "createdAt": "2024-04-16"
  },
  {
    "sl_no": "9",
    "sales_purchase": "sales",
    "date": "06-Dec-23",
    "party_name": "Milan Shiva packging",
    "details": "Sales",
    "weight": "640",
    "manpower": "",
    "material": "",
    "freight": "",
    "maintainance": "",
    "sales": " 16,000 ",
    "payment_received": " 40,000 ",
    "amount_paid": "2000",
    "balance": "1000",
    "createdAt": "2024-04-20",
    "id": "KqOtHPN"
  },
  {
    "sl_no": "10",
    "sales_purchase": "sales",
    "date": "08-Dec-23",
    "party_name": "Milan Shiva packging",
    "details": "Sales",
    "weight": "860",
    "manpower": "",
    "material": "",
    "freight": "",
    "maintainance": "",
    "sales": " 21,500 ",
    "payment_received": " 12,000 ",
    "amount_paid": "",
    "balance": "",
    "id": "DRAjHlg"
  },
  {
    "sl_no": "11",
    "sales_purchase": "1",
    "date": "0001-01-01",
    "party_name": "1",
    "details": "1",
    "weight": "1",
    "manpower": "1",
    "material": "1",
    "freight": "1",
    "maintainance": "1",
    "sales": "1",
    "payment_received": "1",
    "amount_paid": "1",
    "balance": "1",
    "createdAt": "2024-05-25",
    "id": "asrjfhuju"
  },
  {
    "sl_no": "12",
    "sales_purchase": "2",
    "date": "2024-05-25",
    "party_name": "2",
    "details": "2",
    "weight": "2",
    "manpower": "2",
    "material": "2",
    "freight": "2",
    "maintainance": "2",
    "sales": "2",
    "payment_received": "2",
    "amount_paid": "2",
    "balance": "2",
    "createdAt": "2024-05-25",
    "id": "uxmthiz50"
  },
  {
    "sl_no": "13",
    "sales_purchase": "10",
    "date": "2024-05-24",
    "party_name": "10",
    "details": "1",
    "weight": "1",
    "manpower": "1",
    "material": "1",
    "freight": "1",
    "maintainance": "1",
    "sales": "1",
    "payment_received": "11",
    "amount_paid": "100",
    "balance": "100",
    "createdAt": "2024-05-27",
    "id": "7pa35cvt8"
  }
  ];
  
  const entryForm = document.getElementById('entry-form');
  const entriesTableBody = document.querySelector('#entries-table tbody');
  
  // Function to render the entries table
  function renderEntries() {
    entriesTableBody.innerHTML = '';
    data.forEach(entry => {
      const row = document.createElement('tr');
      for (const key in entry) {
        const cell = document.createElement('td');
        cell.textContent = entry[key];
        row.appendChild(cell);
      }
      const actionsCell = document.createElement('td');
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.className = 'action-btn';
      editButton.onclick = () => editEntry(entry.id);
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'action-btn';
      deleteButton.onclick = () => deleteEntry(entry.id);
      actionsCell.appendChild(editButton);
      actionsCell.appendChild(deleteButton);
      row.appendChild(actionsCell);
      entriesTableBody.appendChild(row);
    });
  }
  
  // Function to create a new entry or update an existing one
  function createOrUpdateEntry(event) {
    event.preventDefault();
    const entry = {
      id: entryForm['entry-id'].value || Date.now().toString(),
      sl_no: entryForm['sl_no'].value,
      sales_purchase: entryForm['sales_purchase'].value,
      date: entryForm['date'].value,
      party_name: entryForm['party_name'].value,
      details: entryForm['details'].value,
      weight: entryForm['weight'].value,
      manpower: entryForm['manpower'].value,
      material: entryForm['material'].value,
      freight: entryForm['freight'].value,
      maintainance: entryForm['maintainance'].value,
      sales: entryForm['sales'].value,
      payment_received: entryForm['payment_received'].value,
      amount_paid: entryForm['amount_paid'].value,
      balance: entryForm['balance'].value,
      createdAt: new Date().toISOString().split('T')[0]
    };
  
    const existingEntryIndex = data.findIndex(e => e.id === entry.id);
    if (existingEntryIndex >= 0) {
      data[existingEntryIndex] = entry;
    } else {
      data.push(entry);
    }
  
    entryForm.reset();
    renderEntries();
  }
  
  // Function to edit an entry
  function editEntry(id) {
    const entry = data.find(e => e.id === id);
    for (const key in entry) {
      if (entryForm[key]) {
        entryForm[key].value = entry[key];
      }
    }
    entryForm['entry-id'].value = id;
  }
  
  // Function to delete an entry
  function deleteEntry(id) {
    const index = data.findIndex(e => e.id === id);
    if (index >= 0) {
      data.splice(index, 1);
    }
    renderEntries();
  }
  
  // Initial render
  entryForm.addEventListener('submit', createOrUpdateEntry);
  renderEntries();
  