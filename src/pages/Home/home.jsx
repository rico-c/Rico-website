import React from "react";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import homeApps from "../../data/homeApps";
import { connect } from "react-redux";

import "./index.less";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends React.Component {
  handleClickApp(path) {
    if(path.includes('http')){
      window.location.href = path;
    }
    else{
      this.props.history.push(path);
    }
  }
  render() {
    const slideSettings = {
      dots: true,
      infinite: true,
      speed: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true
    };
    return (
      <div className="home-page">
        <div className="slide-bar">
          <Slider {...slideSettings} className="slide-wrapper">
            {homeApps.slideApps.map((page, pageIndex) => (
              <div className="slide-page" key={pageIndex}>
                {page.map(app => (
                  <div
                    key={app.enName}
                    className="app-section"
                    key={app.enName}
                    onClick={e => this.handleClickApp(app.jump)}
                  >
                    <img src={require(`../../assets/${app.img}.png`)}></img>
                    {this.props.lang === "zh" ? (
                      <span>{app.cnName}</span>
                    ) : (
                      <span>{app.enName}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </Slider>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bg"></div>
          {homeApps.bottomApps.map(app => (
            <div
              key={app.enName}
              className="app-section"
              onClick={e => this.handleClickApp(app.jump)}
            >
              <img src={require(`../../assets/${app.img}.png`)}></img>
              {this.props.lang === "zh" ? (
                <span>{app.cnName}</span>
              ) : (
                <span>{app.enName}</span>
              )}
            </div>
          ))}
        </div>
        <div className="wall-paper">
          <img src={require("../../assets/wallpaper3.jpeg")} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lang: state.settingReducer.lang
  };
};

export default connect(mapStateToProps)(withRouter(Home));
