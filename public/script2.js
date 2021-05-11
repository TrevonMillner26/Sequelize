async function macromeals() {
    const requestData = await fetch('/api/fullMeal');
    const macroData = await requestData.json();
    const arrayData = macroData.data;
    console.log(arrayData);
    console.table(macroData);
    const targetTable = document.querySelector('.w10');
    
    arrayData.forEach((element) => {
      console.log(element.macro_id);
      console.log(element.meal_id);
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

  function randInt(max) {
    return Math.floor(Math.random() * max);
  }
  function randMeals(data) {
    const random_meals = [];
    for (i = 0; i < 10; i++) {
      const current_random_meal = randInt(data.length - 1);
      random_meals.push(data[current_random_meal]);
      data.splice(current_random_meal, 1);
    }
    return random_meals;
  }
  
  async function mealDataPoints(macros){
    macro_meal_data.dataPoints.push({label: meal_data.meal_name, y: element.macros});
  }
  
  
  
    data.forEach((element) => {
      console.log(element.hall_name);
      console.log(element.hall_address);
      console.log(element.hall_id);
      const appendItem = document.createElement('tr');
      appendItem.innerHTML = `<td>${element.hall_id}</td><td>${element.hall_name}</td><td>${element.hall_address}</td>`;
      table.append(appendItem);
    });
  
    const randMealList = randMeals(api_data);
  
    for (i = 0; i < randMealList.length; i++) {
      element = randMealList[i];
      const nameRequest = await fetch(`/api/meals/${element.meal_id}`);
      const titleData = await nameRequest.json();
      console.log(titleData);
  
      const chart = new CanvasJS.Chart('chartContainer', {
        title: {
          text: 'Meal Macro Information'
        },
        data: macro_data
      });
      chart.render();
    }
    
    async function windowActions() {
      await dataHandler();
      await macrosData();
    }
    
    window.onload = windowActions;