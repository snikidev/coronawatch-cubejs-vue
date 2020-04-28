cube(`CovidCases`, {
  sql: `SELECT * FROM public.covid_cases`,
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [date]
    }
  },
  
  dimensions: {
    date: {
      sql: `date`,
      type: `string`
    },
    
    totalTestsPerThousand: {
      sql: `total_tests_per_thousand`,
      type: `string`
    },
    
    newCasesPerMillion: {
      sql: `new_cases_per_million`,
      type: `string`
    },
    
    testsUnits: {
      sql: `tests_units`,
      type: `string`
    },
    
    isoCode: {
      sql: `iso_code`,
      type: `string`
    },
    
    newDeathsPerMillion: {
      sql: `new_deaths_per_million`,
      type: `string`
    },
    
    totalTests: {
      sql: `total_tests`,
      type: `string`
    },
    
    location: {
      sql: `location`,
      type: `string`
    },
    
    newTests: {
      sql: `new_tests`,
      type: `string`
    },
    
    totalCasesPerMillion: {
      sql: `total_cases_per_million`,
      type: `string`
    },
    
    totalDeathsPerMillion: {
      sql: `total_deaths_per_million`,
      type: `string`
    },
    
    newTestsPerThousand: {
      sql: `new_tests_per_thousand`,
      type: `string`
    }
  }
});
