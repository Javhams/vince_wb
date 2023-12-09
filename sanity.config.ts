import { defineConfig } from "sanity";
import { deskTool } from  "sanity/desk";

import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: 'b0csnmrs',
  dataset: 'production',
  title: 'My personal Website',
  apiVersion: '2023-12-09',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {types: schemas}
})

export default config