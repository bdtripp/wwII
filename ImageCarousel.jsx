import React from 'react';
import ReactDOM from 'react-dom';
import Arrow from './Arrow.jsx';

export default class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      imageStyle: {
        maxHeight: "none",
        display: "none"
      },
      arrowStyle: {
        opacity: .8
      },
      showingArrows: true,
      inMobile: false,
    };
    
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.resizeImage = this.resizeImage.bind(this);
    this.updateViewSize = this.updateViewSize.bind(this);
    this.toggleArrows = this.toggleArrows.bind(this);
    
    window.addEventListener("resize", function() {
      this.updateViewSize();
      this.resizeImage();
      console.log(window.innerHeight);
    }.bind(this));
    
    window.onload = function() {
      this.updateViewSize();
      console.log(window.visualViewport.height);
      this.resizeImage();
    }.bind(this);
  }
  
  prevImage() {
    var lastIndex = this.props.imgNames.length - 1;
    var loopAround = this.state.currentImageIndex === 0;
    this.setState({
      currentImageIndex: loopAround ? lastIndex : (this.state.currentImageIndex - 1)
    })
  }
  
  nextImage() {
    var lastIndex = this.props.imgNames.length - 1;
    var loopAround = this.state.currentImageIndex === lastIndex;
    this.setState({
      currentImageIndex: loopAround ? 0 : (this.state.currentImageIndex + 1)
    })
  }
  
  resizeImage() {
    this.setState({
      imageStyle: {
        maxHeight: this.state.inMobile ? "none" : (window.visualViewport.height + "px"),
        display: "block"
      },
    })
  }
  
  toggleArrows() {
    if (this.state.inMobile) {
      if (this.state.showingArrows) {
        this.setState({
          showingArrows: false,
          arrowStyle: {
            opacity: 0
          }
        });
      } else {
        this.setState({
          showingArrows: true,
          arrowStyle: {
            opacity: .8
          }
        });
      }
    }
  }
  
  updateViewSize() {
    this.setState({
      inMobile: window.innerWidth < 700
    })
  }
  
  render() {
    var imgNames = this.props.imgNames;
    
    return (  
      <div id="image_carousel">
        <div id="image_container">
          <p id="image_num">{(this.state.currentImageIndex + 1) + " of " + imgNames.length}</p>
          <img id="questionnaire_image" src={"images/questionnaires/" + imgNames[this.state.currentImageIndex]} style={this.state.imageStyle} onClick={this.toggleArrows}/>
        </div>
        <Arrow style={this.state.arrowStyle} direction="left" clickHandler={this.prevImage}/>
        <Arrow style={this.state.arrowStyle} direction="right" clickHandler={this.nextImage}/>
      </div>                             
    ); 
  }
}