### General Requirements

  - When a user selects an company from an input<drop-down>, historical trend of the selected company is display on a
    chart( graph, table).
  - A user can select an option to view 30-day estimated future trend.
  - A user can select a start-date or end-date of the data they want to see.

### Accessibility

  - In addition to having a Graph to display data, I will have an extra component(Table) to display all the data as
    well.

### Component Heierarchy

```
  - Filters(search)
      - dropdown (selects a company)
      - SelectType component
      - Show Future Trend
  - Company Details
      - Company Details (name, status, country)
  - Results
      - Table
      - Graph
  - DateRange
      - DatePicker
```

### Data structure

##### Companies
```ts
  type Company {
    company_name: string;
    code: string;
    status?: string;
    country?: string;
    exchange?: string;
  }
```

```ts
    Companies {
      companies: Company[]
    }
```

##### Date Range

```ts
  type DateRange {
    date1: timestamp;
    date2: timestamp;
  }
```
##### stock-data (chart-data)

```ts 
  type Stock {
    close: float;
    open: float;
    high: float;
    volume: float;
    name: string;
  }
```

```ts
  type StockData {
    data: Stock[];
  }
```

##### Future Trend

```ts
  type Trends {
    data: Stock[];
  }
```

### API

 - stock data -> daily historical data
    ```js
      get("https://www.quandl.com/api/v3/datasets/{datasets}/{database_code}/data.json?limit={n}&api_key={API_KEY}")
    ```
 - future estimated trend
    ```js
      get("https://www.quandl.com/api/v3/datasets/{datasets}/{database_code}/data.json?limit={n}&api_key={API_KEY}")
    ```
 - date range historical data
    ```js
      get("https://www.quandl.com/api/v3/datasets/{datasets}/{database_code}/data.json?limit={n}&start_date=2014-01-01&end_date=2014-12-31&api_key={API_KEY}")
    ```

### My Schedule

| Date | Activity |
--- | ---
| Day 01 | <ul> <li>Reading the requirements document </li> <li>Going through Quandle API and identify which endpoints to use ( This gave a rough idea of how the User Interface might look).</li>
| Day 02 | <ul> <li> Design component architecture and data format. </li><li> Identify component hierarchy.</li><li> Data flow between components. </li><li> Design Data structure of the application.</li><li> Setup react application</li> </ul> |
| Day 03 | <ul> <li> Identify which libraries to use:<ul><li>[recharts](https://github.com/recharts/recharts) for my graph, why Reacharts? </li><ul><li> The library has a variety of graphs components. </li><li> It is an Active project(actively maintained). </li><li> Follows good patterns of component re-usability. </li><li> Lightweight. </li></ul></ul><ul><li>[antd](https://github.com/ant-design/ant-design/) for the following components</li><ul><li> Table </li><li> Date Picker </li><li> Searchable Select component </li><li> Tag selector </li><li> Buttons </li><li> Why antd? </li><ul><li> It is an Active project(actively maintained)</li><li> It comes with re-usable components that can be easily customized with CSS.</li><li> This gave time to focus on the design of the application rather than styling i.e DatePicker</li></ul></ul></ul> |
| Day 04 | <ul> <li> Implementing the following components with minimal styles: <ul> <li> dropdown (selects a company) </li> <li> SelectType(low, high, open) component </li> <li> Company Details (name, status, country) </li> <li>
DatePicker </li> </ul></li> <li> create an MVP application with *static* data</li> </ul> |
| Day 05 | <ul> <li> Implemented Chart component with static data. </li><li> Implemented Table component with static data </li><li> Write data formatting functions for graphs & table components </li><li>connect the
application with API data</li> </ul> |
| Day 06 | <ul> <li> Added CSS to design my layout. </li></ul> |
