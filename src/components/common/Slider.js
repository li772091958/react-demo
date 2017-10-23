/**
* 轮播组件
*/ 

import React, { Component } from 'react'
import Slider from 'react-slick'

export default class SimpleSlider extends Component { 

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      autoplay:false,
      arrows:false,
      lazyLoad:true
    }
      
    return (
      <div className='fullSlide'>
        <Slider {...settings}  >
          {/*<div><img src="http://192.168.110.108:8004/img/1.png" /></div>*/}
          <img src="http://obryln0jh.bkt.clouddn.com/1.png" />
          <img src="http://obryln0jh.bkt.clouddn.com/1.png" />
          <img src="http://obryln0jh.bkt.clouddn.com/1.png" />
          <img src="http://obryln0jh.bkt.clouddn.com/1.png" />
          <img src="http://obryln0jh.bkt.clouddn.com/1.png" />
        </Slider>
      </div>
    )
  }
}