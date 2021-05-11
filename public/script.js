async function dining(){
  const requestData = await fetch('/api/dining');
  const diningData = await requestData.json();
  const arrayData = diningData.data;
  console.log(arrayData);
  console.table(diningData);
  const targetTable = document.querySelector('.table');



  arrayData.forEach((element) => {
    const appendElement = document.createElement('tr');
    appendElement.innerHTML = `
      <td>${element.hall_id}</td>
      <td>${element.hall_name}</td>
      <td>${element.hall_address}</td>
    </tr>
  `;
    targetTable.append(appendElement); 
  });
}

async function windowActions() {
  console.log('loaded window');
  const data = await dining();
  console.table(data);
}

window.onload = windowActions;