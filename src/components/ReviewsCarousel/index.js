import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activecarousel: 0}

  leftArrow = () => {
    const {activecarousel} = this.state

    this.setState(prevState => ({
      activecarousel:
        activecarousel > 0 ? prevState.activecarousel - 1 : activecarousel,
    }))
  }

  rightArrow = () => {
    const {activecarousel} = this.state

    this.setState(prevState => ({
      activecarousel:
        activecarousel < 3 ? prevState.activecarousel + 1 : activecarousel,
    }))
  }

  render() {
    const {reviewsList} = this.props
    const {activecarousel} = this.state
    const currentreviewsList = reviewsList[activecarousel]
    return (
      <div className="reviews-carousel-container">
        <div className="carousel-container">
          <h1 className="reviews-heading"> Reviews </h1>
          <ul className="carouselreviews-container">
            <li className="carouselreviews">
              <div>
                <img
                  src={currentreviewsList.imgUrl}
                  className="reviews-person-image"
                  alt={currentreviewsList.username}
                />
              </div>
              <div className="arrow-btn">
                <button onClick={this.leftArrow} type="button" className="btn">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                    className="left-arrow"
                    alt="left arrow"
                  />
                </button>
                <button onClick={this.rightArrow} type="button" className="btn">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                    className="left-arrow"
                    alt="right arrow"
                  />
                </button>
              </div>
              <p className="person-name"> {currentreviewsList.username} </p>
              <p className="person-company-name">
                {currentreviewsList.companyName}
              </p>
              <p className="person-discription">
                {currentreviewsList.description}
              </p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
