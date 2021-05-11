async function macroMeals() {
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
    const randomMeals = [];
    for (i = 0; i < 10; i++) {
      const currentRandomMeal = randInt(data.length - 1);
      randomMeals.push(data[currentRandomMeal]);
      data.splice(currentRandomMeal, 1);
    }
    return randomMeals;
  }
  
  async function mealDataPoints(macros){
    macroMealData.dataPoints.push({label: meal_data.meal_name, y: element.macros});
  }

  async function dataMacros() {
    const request = await fetch('/api/FullMeals');
    const apiMacro = await request.json();
    const {data} = apiMacro;
    const macro_meal_data = [
        {
          type: 'stackedBar',
          name: 'Calories',
          showInLegend: 'true',
          dataPoints: mealDataPoints(calories)
            },
    
        {
          type: 'stackedBar',
          name: 'Serving Size',
          showInLegend: 'true',
          dataPoints: mealDataPoints(serving_size)
        },
        {
          type: 'stackedBar',
          name: 'Cholesterol',
          showInLegend: 'true',
          dataPoints: mealDataPoints(cholesterol)
        },
        {
          type: 'stackedBar',
          name: 'Sodium',
          showInLegend: 'true',
          dataPoints: mealDataPoints(calories)
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
    
      const randomMeals = getRandomMeals(apiMacro);
      for (i = 0; i < randomMealList.length; i++) {
        element = randomMeals[i];
    
        const mealname_request = await fetch(`/api/meals/${element.meal_id}`);
        const meal_data = await mealname_request.json();
    
        console.log(meal_data);
      };
  
    
        const mealsChart = new CanvasJS.Chart("chartContainer",
        {
          title:{
          text: "Meal Macro Information"
          },
          data: macroData
        });
        mealsChart.render();
    
      }
  
  
  
  
  
   async function windowActions() {
      console.log('loaded window');
      const data = await macroMeals();
      console.table(data);
    }

    window.onload = windowActions;