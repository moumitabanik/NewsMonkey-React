import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=apple&from=2024-10-17&to=2024-10-17&sortBy=popularity&apiKey=14f4bf845073446e8a439c22454897d5&page=1&pagesize=6"
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/everything?q=apple&from=2024-10-17&to=2024-10-17&sortBy=popularity&apiKey=14f4bf845073446e8a439c22454897d5&page=${this.state.page - 1}&pagesize=6`
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 6)) {

        }
        else {

            let url = `https://newsapi.org/v2/everything?q=apple&from=2024-10-17&to=2024-10-17&sortBy=popularity&apiKey=14f4bf845073446e8a439c22454897d5&page=${this.state.page + 1}&pagesize=6`
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url} >
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-info" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
