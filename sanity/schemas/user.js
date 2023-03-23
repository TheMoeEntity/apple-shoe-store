export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'lname',
      title: 'LName',
      type: 'string',
    },
    {
        name: 'password',
        title: 'Password',
        type: 'string',
      },
      {
        name: 'isAdmin',
        title: 'IsAdmin',
        type: 'boolean',
      },
  ],
}
