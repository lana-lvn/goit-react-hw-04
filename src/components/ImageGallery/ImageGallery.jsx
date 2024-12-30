import ImageCard from "../ImageCard/ImageCard"
import s from "./imageGallery.module.css"


const ImageGallery = ( {pictures} ) => {
  return (
    <ul className={s.list} >
		{pictures.map(picture => (
			<li key={picture.id}>
			<ImageCard src={picture.urls.small} alt={picture.description} />
			</li> ))}
	
	</ul>
  )
}

export default ImageGallery
