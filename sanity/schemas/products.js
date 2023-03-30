export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of:[{type:'string'}],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
    {
        name: 'countInStock',
        title: 'CountInStock',
        type: 'number',
      },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'number',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of:[{type:'image'}],
      options: {
        hotspot: true,
      },
    },
  ],
}
