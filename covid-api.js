class Covid19{
  async getData(){
    const response = await fetch("https://covid-193.p.rapidapi.com/statistics", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "00e02aa75emsh5d03ad1f29fb827p19175bjsnbd0b06c964f5"
    }
    });

    const data = await response.json()
    // console.log(data);
    return data.response;

  }
}