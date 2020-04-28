cube(`CovidCases`, {
  sql: `SELECT * FROM public.covid_cases`,
  
  measures: {
    virusFreeDays: {
      type: `count`,
      filters: [
        { sql: `${CUBE}.new_cases = 0` }
      ],
      rollingWindow: {
        trailing: `unbounded`
      },
    },
    
  },
  
  dimensions: {
    date: {
      sql: `date`,
      type: `string`
    },
    
    totalCases: {
      sql: `total_cases`,
      type: `number`
    },
    
    newCases: {
      sql: `new_cases`,
      type: `number`
    },
    
    totalDeaths: {
      sql: `total_deaths`,
      type: `number`
    },
    
    newDeaths: {
      sql: `new_deaths`,
      type: `number`
    },
    
    location: {
      sql: `location`,
      type: `string`
    },
  }
});
