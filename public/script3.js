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

  function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
  }
  
  function getRandomMeals(meal_name) {
    const random_meals = [];
    for (i = 0; i < 10; i++) {
      const current_random_meal = getRandomInteger(meal_name.length - 1);
      random_meals.push(meal_name[current_random_meal]);
      meal_name.splice(current_random_meal, 1);
    }
    return random_meals;
  }

  async function dataMacros() {
    const request = await fetch('/api/macros');
    const api_whole = await request.json();
    const {data} = api_whole;
    const macro_meal_data = [
      {
        type: 'stackedBar',
        name: 'Calories',
        showInLegend: 'true',
        dataPoints: []
      },
  
      {
        type: 'stackedBar',
        name: 'Serving Size',
        showInLegend: 'true',
        dataPoints: []
      },
      {
        type: 'stackedBar',
        name: 'Cholesterol',
        showInLegend: 'true',
        dataPoints: []
      },
      {
        type: 'stackedBar',
        name: 'Sodium',
        showInLegend: 'true',
        dataPoints: []
      },
      {
        type: 'stackedBar',
        name: 'Carbs',
        showInLegend: 'true',
        dataPoints: []
      },
      {
        type: 'stackedBar',
        name: 'Protein',
        showInLegend: 'true',
        dataPoints: []
      },
      {
        type: 'stackedBar',
        name: 'Fat',
        showInLegend: 'true',
        dataPoints: []
      }
    ];

    console.log(macro_meal_data[0]);
    const randomMealsList = getRandomMeals(api_whole);