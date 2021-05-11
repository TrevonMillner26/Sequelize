async function macromeals() {
    const requestdata = await fetch('/api/wholeMeal');
    const macrodata = await requestdata.json();
    const arraydata = macrodata.data;
    const targettable = document.querySelector('.w10');
  
    arraydata.forEach((element) => {
      const appendelement = document.createElement('tr');
      appendelement.innerHTML = `
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
      targettable.append(appendelement);
    });
  }