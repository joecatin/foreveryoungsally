import React from 'react';
import Masonry from 'react-masonry-css'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const breakpointColumnsObj = { default: 3, 700: 2, 500: 1};

function importAll(r) { return r.keys().map(r); }

const images = importAll(require.context('../../../public/images/', false, /\.(png|jpe?g|svg)$/))
  .map((url, index) => {return {imageUrl: url, id: index, size: Math.round(Math.random()) ? 'large' : 'small'}})
  .sort((a,b) => 0.5 - Math.random());


class Directory extends React.Component {
  constructor() {
    super();
    console.log(images)
    this.state = { images };
  }

  render() {

    return (
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {this.state.images.map(({ imageUrl, id, size }) => ( <MenuItem key={id} imageUrl={imageUrl} size={size} /> ))}
        </Masonry>

    );
  }
}

export default Directory;
