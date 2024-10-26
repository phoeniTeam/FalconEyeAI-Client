const searchForImage = (searchTerm, images) => {
    return images.filter(image => image.title.toLowerCase().includes(searchTerm.toLowerCase()))
}

export default searchForImage