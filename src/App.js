import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactTable from "react-table";
import "react-table/react-table.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      x: true,
      data: [
        {
          name: "Suresh",
          age: 26,
          salary: 60000
        },
        {
          name: "Santosh",
          age: 22,
          salary: 30000
        },
        {
          name: "Sagar",
          age: 40,
          salary: 40000
        },
        {
          name: "Subham",
          age: 30,
          salary: 50000
        },
        {
          name: "Goverdhan",
          age: 32,
          salary: 50000
        },
        {
          name: "Suchit",
          age: 37,
          salary: 60000
        }
      ],

      view: [
        {
          name: "Suresh",
          age: 26,
          salary: 20000
        },
        {
          name: "Santosh",
          age: 22,
          salary: 30000
        },
        {
          name: "Sagar",
          age: 40,
          salary: 40000
        },
        {
          name: "Subham",
          age: 30,
          salary: 50000
        },
        {
          name: "Goverdhan",
          age: 32,
          salary: 50000
        },
        {
          name: "Suchit",
          age: 37,
          salary: 60000
        }
      ],
      columns: [
        {
          Header: "Name",
          accessor: "name"
        },
        {
          Header: "Age",
          accessor: "age"
        },
        {
          Header: "Salary",
          accessor: "salary"
        }
      ]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange2 = e => {
    this.setState({ search: e.target.value });
  };

  handleInputChange = event => {
    for (var i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].name === this.state.search) {
        this.setState({
          x: false,
          view: [
            {
              name: this.state.data[i].name,
              age: this.state.data[i].age,
              salary: this.state.data[i].salary
            }
          ]
        });
        break;
      }
      if (
        this.state.data[i].name !== this.state.search &&
        this.state.x === true
      ) {
        this.setState({
          view: [
            {
              name: "Name Not Found",
              age: "",
              salary: ""
            }
          ]
        });
      }
    }
    this.setState({ x: true });
  };

  render() {
    if (this.state.search === "") {
      return (
        <div>
          <h3 className="text-primary text-center">React Table</h3>
          <input
            type="text"
            placeholder="Search.."
            onChange={this.handleInputChange2}
          />
          <button
            type="submit"
            className="btn-primary"
            onClick={this.handleInputChange}
          >
            <i className="fa fa-search" />
          </button>
          <ReactTable
            data={this.state.data}
            columns={this.state.columns}
            defaultPageSize={2}
            pageSizeOptions={[2, 4, 6]}
          />
        </div>
      );
    }
    if (this.state.search !== "") {
      return (
        <div>
          <h3 className="text-primary text-center">React Table</h3>
          <input
            type="text"
            placeholder="Search.."
            onChange={this.handleInputChange2}
          />
          <button
            type="submit"
            className="btn-primary"
            onClick={this.handleInputChange}
          >
            <i className="fa fa-search" />
          </button>
          <ReactTable
            data={this.state.view}
            columns={this.state.columns}
            defaultPageSize={2}
            pageSizeOptions={[2, 4, 6]}
          />
        </div>
      );
    }
  }
}
export default App;
