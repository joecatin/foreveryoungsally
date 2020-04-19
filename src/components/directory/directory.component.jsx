import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

// const images = require.context ( '../../../public/images', true, /\.(png|jpe?g|svg)$/ )

function importAll(r) { return r.keys().map(r); }

const images = importAll(require.context('../../../public/images/', false, /\.(png|jpe?g|svg)$/))
  .map((url, index) => {return {imageUrl: url, id: index, size: Math.round(Math.random()) ? "large" : "small"}})
  .sort((a,b) => 0.5 - Math.random());


class Directory extends React.Component {
  constructor() {
    super();
    console.log(images)
    this.state = { images };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.images.map(({ imageUrl, id, size }) => (
          <MenuItem key={id} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
