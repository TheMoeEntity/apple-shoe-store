import sanityClient from '@sanity/client'
import config from "../sanity/sanity.config";

const client = sanityClient ({
    projectId:config.projectId,
    dataset:config.dataset,
    useCdn:true,
    apiVersion: "2023-03-31"
})

export default client