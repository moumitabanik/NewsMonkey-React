import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={!imageUrl ? "https://www.cnet.com/a/img/resize/fd7f5a3780ed7a591ceb81af240410295717ba98/hub/2024/07/12/bf8fca1d-5256-459e-9413-390e3d9cc44c/airtags-prime-day-bg.jpg?auto=webp&fit=crop&height=675&width=1200" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
