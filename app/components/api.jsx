import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    }
    this.filterList = this.filterList.bind(this);
  }

  componentDidMount() {

  const url2 = 'build/documents.json';
  fetch(url2)
    .then(res => res.json())
    .then(res => {
      this.setState({ data: res });
      console.log(res[0].files);
      return res;
    })
    .catch(err => {
      console.log('Error happened during fetching!', err);
    });
  }

  filterList() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("file-list-container");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  }

  render() {
    return (
      <div>
      <label className="searchInputLabel"> Search by File Name</label>
        <input type="text" className="searchInput" id="myInput" onChange={this.filterList} />
        <ul id="file-list-container" className="file-list-container">
          {this.state.data.map(({ type, name, added }) => (<li key={name} className="file-list-container__wrapper"><h2 className="file-list-container__type">{type}</h2><span className="file-list-container__info">{name}</span><br /><time>{added}</time></li>))}
        </ul>
      </div>
    );
  }
}


export default Results;