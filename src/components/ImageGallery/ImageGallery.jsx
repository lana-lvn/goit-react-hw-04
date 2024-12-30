

const ImageGallery = ( {pictures} ) => {
  return (
    <ul>
		  {pictures.map(picture => (<li key={picture.id}>
		<div>
		  <img src={picture.urls.small} alt={picture.description} />
		</div>
	</li> ))}
	
</ul>
  )
}

export default ImageGallery
