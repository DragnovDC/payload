import type { CollectionConfig } from '../collections/config/types.js'
import type { Access, Config } from '../config/types.js'

export const getLocksCollection = (config: Config): CollectionConfig => ({
  slug: 'payload-locks',
  // admin: {
  //   hidden: true,
  // },
  fields: [
    {
      name: 'docId',
      type: 'text',
    },
    {
      name: '_lastEdited',
      type: 'group',
      fields: [
        {
          name: 'user',
          type: 'relationship',
          hooks: {
            beforeValidate: [
              ({ req }) => {
                if (!req?.user) {
                  return null
                }
                return {
                  relationTo: req?.user.collection,
                  value: req?.user.id,
                }
              },
            ],
          },
          relationTo: config.collections
            .filter((collectionConfig) => collectionConfig.auth)
            .map((collectionConfig) => collectionConfig.slug),
          required: true,
        },
        {
          name: 'editedAt',
          type: 'date',
        },
      ],
    },
    {
      name: 'isLocked',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
})
