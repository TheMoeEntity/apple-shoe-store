import client from "./client"
import ImageUrlBuilder  from "@sanity/image-url"

const urlForThumbnail = source => {

    return ImageUrlBuilder(client).image(source).width(300).url()
}
const urlFor = source => {
    
    return ImageUrlBuilder(client).image(source).width(400).url()
}

export { urlForThumbnail, urlFor }