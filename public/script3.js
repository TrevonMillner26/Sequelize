async function macromeals() {
    const requestData = await fetch('/api/FullMeal');
    const macroData = await requestData.json();
    const arrayData = macroData.data;
    const targetTable = document.querySelector('.w10');
  
    arrayData.forEach((element) => {
      const appendElement = document.createElement('tr');
      appendElement.innerHTML = `
            <td>${element.macro_id}</td>
            <td>${element.meal_name}</td>
            <td>${element.calories}</td>
            <td>${element.carbs}</td>
            <td>${element.sodium}</td>
            <td>${element.protein}</td>
            <td>${element.fat}</td>
            <td>${element.cholesterol}</td>
        </tr>
    `;
      targetTable.append(appendElement);
    });
  }