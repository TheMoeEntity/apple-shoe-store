import client from "./client"
import ImageUrlBuilder  from "@sanity/image-url"

const urlForThumbnail = (source,fallback) => {

    return source === undefined ? fallback :  ImageUrlBuilder(client).image(source).width(500).url()
}
const urlFor = (source,fallback) => {
    
    return source === undefined ? fallback : ImageUrlBuilder(client).image(source).width(500).url()
}

export { urlForThumbnail, urlFor }