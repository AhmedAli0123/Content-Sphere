import { defineField, defineType } from 'sanity';

export const commentType = defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
    }),
    defineField({
      name: 'comment',
      type: 'text',
      title: 'Comment',
    }),
    defineField({
      name: 'post',
      type: 'reference',
      to: [{ type: 'post' }],
    }),
    defineField({
      name: 'approved',
      type: 'boolean',
      title: 'Approved',
      description: 'Comments won\'t show on the site without approval',
    }),
  ],
});
