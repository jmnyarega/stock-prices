### General Requirements

  - When a user selects an company from an input<drop-down>, historical trend of the selected company is display on a
    chart( graph, table).
  - A user can select an option to view 30-day estimated future trend.
  - A user can select a start-date or end-date of the data they want to see.

### Accessibility
  - In addition to having a Graph to display data, I will have an extra component(Table) to display all the data as
    well.

### Component Architecture && Component Heierarchy

 * Main Components
```
  - Filters(search)
      - dropdown (selects a company)
      - SelectType component
  - Company Details
      - Company Details (name, status, country)
  - Results
      - Table
      - Graph
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
  type DateRange {
    date1: timestamp;
    date2: timestamp;
  }
```
* stock-data (chart-data)
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

### API

* They are all get endpoints 😼

 - stock data -> daily historical data
    ```js get("https://www.quandl.com/api/v3/datasets/{datasets}/{database_code}/data.json?limit={n}&api_key={API_KEY}")```
 - 30-day estimated future trend
    ```js get()```
 - date range historical data
    ```js get("https://www.quandl.com/api/v3/datasets/{datasets}/{database_code}/data.json?limit={n}&start_date=2014-01-01&end_date=2014-12-31&api_key={API_KEY}")```


### My Schedule


| Date | Activity |
--- | ---
| Day 01 | <ul> <li> Read & understanding through the requirement-document </li> <li>Going through the `Quandle` api, understanding what parameteres maybe application ( This gave a better sense of how the UI might look. </li> </ul>|
| Day 02 | <ul> <li> After getting a better understanding of the API, I started designing  my component architecture & my data format </li><li> came up with component hierarchy</li><li> understanding data flow ( which component required thier own state & which component might recieve data via props)</li><li> Design Data structure of my application</li><li> setup my my react app</li> </ul> |
| Day 03 | <ul> <li> Indentify which libraries to to use:<ul><li>[recharts](https://github.com/recharts/recharts) for my graph, why Reacharts? </li><ul><li> The library has a variety of graphs components </li><li> It is an Active project(actively maintained) </li><li> Follows good patterns of component re-usability </li><li> lightweight </li></ul></ul><ul><li>[antd](https://github.com/ant-design/ant-design/) for the following components</li><ul><li> Table </li><li> Date Picker </li><li> Searchable Select component </li><li> Tag selector </li><li> Buttons </li><li> Why antd? </li><ul><li> The library has a variety of graphs components</li><li> It is an Active project(actively maintained)</li><li> It comes with re-usable components that can be easily customized with css.</li><li> This game time to focus on the design of the application rather than styling i.e a DatePicker</li></ul></ul></ul> |
| Day 04 | <ul> <li> Implementing the following components with minimal styles.: <ul> <li> dropdown (selects a company) </li> <li> SelectType component </li> <li> Company Details (name, status, country) </li> <li> DatePicker </li> </ul></li> <li> I started with passing static data before wiring it up with data from the api </li> </ul> |
| Day 05 | <ul> <li> Implemented Chart component with static data. </li><li> Implemented Table component with static data </li><li> Write date formatting functions for graphs & table components </li><li> Wired the whole application with api data</li> </ul> |
| Day 06 | <ul> <li> Added CSS to design my layout. </li></ul> |
