import React, { Component } from 'react'
// import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component  {
  static defaultProps ={
    country:'in',
    category: 'general'
  }

  static propTypes ={
    country: PropTypes.string,
    category: PropTypes.string
  }

  constructor(){
     super();
     console.log("This is constructor from News");
     this.state={
         articles : [],
         loading : false,
         page : 1
     }
    }
    async componentDidMount(){
        console.log("mount");
        //  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2bfd8dcf12040ad91cfed71107d1a90&page=1`;
        //  this.setState({loading : true});
        //  let data = await fetch(url);
        //  let parsedData = await data.json()
        //  this.setState({
        //    articles:parsedData.articles,
        //    loading: false
        //   })
    }
    handleNext = async()=>{
      console.log("next");
        //    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2bfd8dcf12040ad91cfed71107d1a90&page=${this.state.page + 1}`;
        //    this.setState({loading : true});
        //    let data = await fetch(url);
        //  let parsedData = await data.json()
         
        //    this.setState({
        //      page : this.state.page + 1,
        //      articles:parsedData.articles,
        //      loading: false

        //     })
    }
    handlePrevious =  async ()=>{
      console.log("prev");

      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2bfd8dcf12040ad91cfed71107d1a90&page=${this.state.page - 1}`;
      //    this.setState({loading : true});
      //    let data = await fetch(url);
      //    let parsedData = await data.json()
      //    this.setState({articles:parsedData.articles})
      //      this.setState({
      //        page : this.state.page - 1,
      //        articles:parsedData.articles,
      //        loading: false
      //       })
    }
  render() {
    return (
      <div className="container my-3">
        <h2 style={{marginTop:'70px'}}>NewsApp - Top {this.props.category} Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
        {/* {this.state.articles.map((element)=>{
          return <div className="col-md-4" key ={element.url}>   
          <NewsItem   title={element.title} description={element.description} author={element.author} date={element.publishedAt} source={element.source.name} imgUrl={element.urlToImage}
              newsUrl={element.url}  />
          </div>
        })}
        </div>
        <div className="conatiner d-flex justify-content-between">
        <button disabled={this.state.page<2} type="button" className="btn btn-primary" onClick={this.handlePrevious}>&larr; Previous</button>
        <button type="button" className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button> */}
        </div>
      </div>
    )
  }
}

