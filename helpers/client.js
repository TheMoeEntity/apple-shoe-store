import { createClient } from '@sanity/client'
import config from "../sanity/sanity.config";

export const client = createClient ({
    projectId:config.projectId,
    dataset:config.dataset,
    useCdn:true,
    apiVersion: "2023-03-31"
})