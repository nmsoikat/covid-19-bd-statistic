// init
const C19 = new Covid19;
const ui = new UI;

C19.getData()
  .then(allData => {
    // allData.forEach(data => {
    //   console.log(data);
    // })
    ui.display(allData)
  })
  .catch(err => console.log(err))