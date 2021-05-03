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
    > `js get("https://www.quandl.com/api/v3/datasets/{datasets}/{database_code}/data.json?limit={n}&api_key={API_KEY}") `
 - 30-day estimated future trend
    > `js get()`
 - date range historical data
    > `js get("https://www.quandl.com/api/v3/datasets/{datasets}/{database_code}/data.json?limit={n}&start_date=2014-01-01&end_date=2014-12-31&api_key={API_KEY}")`


### My Schedule


| Date | Activity |
--- | ---
| Day 01 |
  - Read & understanding through the requirement-document
  - Going through the `Quanle` api, understanding what parameteres maybe application ( This gave a better sense of how
    the UI might look)   |
| Day 02 |
  - After getting a better understanding of the API, I started designing  my component architecture & my data format
  - came up with component hierarchy
  - understanding data flow ( which component required thier own state & which component might recieve data via props)
  - Design Data structure of my application
  - setup my my react app  |
| Day 03 |   - Indentify which libraries to to use:
     - [recharts](https://github.com/recharts/recharts) for my graph
        > Why Recharts?
            * The library has a variety of graphs components
            * It is an Active project(actively maintained)
            * Follows good patterns of component re-usability
            * lightweight

     - [antd](https://github.com/ant-design/ant-design/) for the following components
          - Table
          - Date Picker
          - Searchable Select component
          - Tag selector
          - Buttons

          > Why antd?
            * The library has a variety of graphs components
            * It is an Active project(actively maintained)
            * It comes with re-usable components that can be easily customized with css.
            * This game time to focus on the design of the application rather than styling i.e a DatePicker |
| Day 04 |
    - Implementing the following components with minimal styles.
      - dropdown (selects a company)
      - SelectType component
      - Company Details (name, status, country)
      - DatePicker
  - I started with passing static data before wiring it up with data from the api  |
| Day 05 |
  - Implemented Chart component with static data.
  - Implemented Table component with static data
  - Wired the whole application with api data
      -  Write date formatting functions for graphs & table components  |
| Day 06 |   - Added CSS to design my layout.  |

Day 01:
  - Read & understanding through the requirement-document
  - Going through the `Quanle` api, understanding what parameteres maybe application ( This gave a better sense of how
    the UI might look)

Day 02:
  - After getting a better understanding of the API, I started designing  my component architecture & my data format
  - came up with component hierarchy
  - understanding data flow ( which component required thier own state & which component might recieve data via props)
  - Design Data structure of my application
  - setup my my react app

Day 03:
  - Indentify which libraries to to use:
     - [recharts](https://github.com/recharts/recharts) for my graph
        > Why Recharts?
            * The library has a variety of graphs components
            * It is an Active project(actively maintained)
            * Follows good patterns of component re-usability
            * lightweight

     - [antd](https://github.com/ant-design/ant-design/) for the following components
          - Table
          - Date Picker
          - Searchable Select component
          - Tag selector
          - Buttons

          > Why antd?
            * The library has a variety of graphs components
            * It is an Active project(actively maintained)
            * It comes with re-usable components that can be easily customized with css.
            * This game time to focus on the design of the application rather than styling i.e a DatePicker

Day 04:
  - Implementing the following components with minimal styles.
      - dropdown (selects a company)
      - SelectType component
      - Company Details (name, status, country)
      - DatePicker
  - I started with passing static data before wiring it up with data from the api

Day 05:
  - Implemented Chart component with static data.
  - Implemented Table component with static data
  - Wired the whole application with api data
      -  Write date formatting functions for graphs & table components

Day 06:
  - Added CSS to design my layout.
