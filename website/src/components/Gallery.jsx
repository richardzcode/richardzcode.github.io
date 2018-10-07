import React, { Component } from 'react';
import { Row, Col } from 'bootstrap-4-react';

const gallery_path = '/gallery/';
const gallery = [
  'sunrise.jpg',
  'moon.jpg',
  'morning.jpg',
  'uw-1.jpg',
  'uw-2.jpg',
  'uw-3.jpg',
  'ladro.jpg',
  'ucc.jpg',
  'nordstorm.jpg',
  'seattle-coffee-works.jpg',
  'van-street.jpg',
  'slough.jpg',
  'fall.jpeg',
  'amazon-go.jpeg',
  'richmond-water.jpeg',
  'vancouver-harbor.jpeg',
  'morning-run.jpg',
  'green.jpg'
]

function cellStyle(img_src) {
  return {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + gallery_path + img_src + ')',
    width: '100%',
    height: '6rem'
  }
}

export default class Gallery extends Component {
  render() {
    return (
      <Row noGutters>
        { gallery.map((src, index) => {
            return (
              <Col col="2 xl-1" key={index}>
                <div style={cellStyle(src)} />
              </Col>
            )
          })
        }
      </Row>
    )
  }
}
