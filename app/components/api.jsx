import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    }
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

  render() {
    return (
      <div className="file-list-container">
        {this.state.data.map(({ type, name, added }) => (<div key={name} className="file-list-container__wrapper"><h2 className="file-list-container__type">{type}</h2><span className="file-list-container__info">{name}{added}</span></div>))}
      </div>
    );
  }
}


export default Results;