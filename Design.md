### General Requirements

  - When a user selects an company from an input<drop-down>, historical trend of the selected company is display on a
    chart( graph, table).
  - A user can select an option to view 30-day estimated future trend.
  - A user can select a start-date or end-date of the data they want to see.


### Accessibility
  - N/B accessibility is personal to me, I believe every web application application should be accessible to as many people/agents as
    possible.
  - I will try to make this application accessible to a number of devices, crawlers & people as possible
        - Responsive design with the help of flex-box
        - some of the best SEO practices, if I can.

### Component Architecture && Component Heierarchy
```
  - Filters(search)
      - dropdown (selects a company)
      - SelectType component
      - Company Details
  - Results
      - chart
      - graph
  - DateRange
      - DatePicker
```
### Data structure

* Companies
```ts
  type Company {
    company_name: string;
    code: string;
    status: string;
    country: string;
    exchange: string;
  }
```
```ts
    Companies {
      companies: Company[]
    }
```
* Future Trend
```ts
  type Trend {
    days: number;
  }
```
* Date Range
```ts
  type Date-Range {
    date1: timestamp;
    date2: timestamp;
  }
```
* stock-data (chart-data)
```ts 
  type stock {

  }
```

### data API Data

* They are all get endpoints 😼

 - stock data -> daily historical data
    `js get("https://www.quandl.com/api/v3/datasets/{datasets}/{database_code}/data.json?limit={n}&api_key={API_KEY}") `
 - 30-day estimated future trend
    `js get() `
 - date range historical data
    `js get("https://www.quandl.com/api/v3/datasets/{datasets}/{database_code}/data.json?limit={n}&start_date=2014-01-01&end_date=2014-12-31&api_key={API_KEY}")  `
