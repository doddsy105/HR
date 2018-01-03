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
  const url2 = 'https://codepen.io/jobs.json';
  fetch(url2)
    .then(res => res.json())
    .then(res => {
      this.setState({ data: res.jobs });
    })
    .catch(err => {
      console.log('Error happened during fetching!', err);
    });
  }

  render() {
    return (
      <div className="codepen-job-list">
        {this.state.data.map(({ title, company_name, term, url }) => (<div className="codepen-job-list__row"><h3 className="codepen-job-list__title">{title}</h3><p><a className="codepen-job-list__company" href={url}>{company_name}</a></p><p>{term}</p></div>))}
      </div>
    );
  }
}


export default Results;