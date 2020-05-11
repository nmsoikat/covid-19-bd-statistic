class UI{
  display(allData){
    // dom selection.
    const date = document.getElementById('date');
    const newCases = document.getElementById('new-cases')
    const newRecovered = document.getElementById('new-recovered')
    const newDeath = document.getElementById('new-death')
    const totalCases = document.getElementById('total-cases')
    const totalTest = document.getElementById('total-test')
    const totalDeath = document.getElementById('total-death')

    
    let data = allData.find(data => {
      return data.country === "Bangladesh"
    });
    
    // show date [year-month-date] to [date-month-year]
    const split = data.day.split("-"); //string to array
    const day = split.reverse().join("-") // array reverse // array to string
    const textNode = document.createTextNode(day);
    date.appendChild(textNode);

    // show data
    newCases.innerText = data.cases.new;
    newRecovered.innerText = data.cases.recovered;
    newDeath.innerText = data.deaths.new;
    totalCases.innerText = data.cases.total;
    totalTest.innerText = data.tests.total;
    totalDeath.innerText = data.deaths.total;

    console.log(data);
  }
}
