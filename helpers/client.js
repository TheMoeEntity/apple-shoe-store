import client from '@sanity/client'
import config from "../sanity/sanity.config";

export default client ({
    projectId:config.projectId,
    dataset:config.dataset,
    useCdn:true,
    apiVersion: "2023-03-31"
})