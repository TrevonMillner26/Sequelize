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
    const api_full = await request.json();
    const {data} = api_full;
    const macroMealData = [
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
    const randomMealsList = getRandomMeals(api_full);
    for (i = 0; i < randomMeallist.length; i++) {
        element = randomMealsList[i];
        const nameRequest = await fetch(`/api/meals/${element.meal_id}`);
        const nameDataMeal = await nameRequest.json();
        console.log(nameDataMeal);

        //adding the data point to the stacked chart

        macroMealData[0].dataPoints.push({ label: nameDataMeal[0].meal_name, y: element.calories });
        macroMealData[1].dataPoints.push({ label: nameDataMeal[0].meal_name, y: element.serving_size });
        macroMealData[2].dataPoints.push({ label: nameDataMeal[0].meal_name, y: element.cholesterol });
        macroMealData[3].dataPoints.push({ label: nameDataMeal[0].meal_name, y: element.sodium });
        macroMealData[4].dataPoints.push({ label: nameDataMeal[0].meal_name, y: element.carbs });
        macroMealData[5].dataPoints.push({ label: nameDataMeal[0].meal_name, y: element.protein });
        macroMealData[6].dataPoints.push({ label: nameDataMeal[0].meal_name, y: element.fat });
    }

    const mealsChart = new CanvasJS.Chart("chartContainer",
    {
      title: {
        text: "Meal/Macro Information Chart"
      },
      data: macroMealData
    });

  mealsChart.render();
}

async function windowActions() {
    console.log("loaded window");
    const data = await macroMeals();
    await dataMacros();
    console.table(data);
  }
  
  window.onload = windowActions;