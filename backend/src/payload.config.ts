import path from 'path';
import { payloadCloud } from '@payloadcms/plugin-cloud';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';

// Import existing collection
import Users from './collections/Users';

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Users,
    {
      slug: 'pendaftaran_lomba',
      fields: [
        {
          name: 'Nama',
          label: 'Nama',
          type: 'text',
          required: true,
        },
        {
          name: 'Email',
          label: 'Email',
          type: 'email',
          required: true,
          unique: true,
        },
        {
          name: 'Asal',
          label: 'Asal Sekolah',
          type: 'text',
          required: true,
        },
        {
          name: 'Status',
          label: 'Status',
          type: 'select',
          options: ['Waiting', 'Rejected', 'Accepted'],
          required: true,
          defaultValue: 'Waiting', // Set default value here
        },
        {
          name: 'TanggalPendaftaran',
          label: 'Tanggal Pendaftaran',
          type: 'date',
          required: true,
        },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
