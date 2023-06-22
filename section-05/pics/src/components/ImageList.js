import ImageShow from './ImageShow';

function ImageList({ images }) {
  return (
    <div>
      {images.map(image => <ImageShow key={image.id} image={image} />)}
    </div>
  )
}

export default ImageList;
