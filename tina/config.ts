import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.NEXT_PUBLIC_TINA_TOKEN!,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "homepage",
        label: "Homepage",
        path: "content/pages",
        format: "json",
        fields: [
          {
            type: "string",
            name: "hero_title",
            label: "Hero Title",
            required: true,
          },
          {
            type: "string",
            name: "hero_subtitle",
            label: "Hero Subtitle",
          },
          {
            type: "string",
            name: "hero_image",
            label: "Hero Image URL",
          },
          {
            type: "rich-text",
            name: "about_text",
            label: "About Text",
          },
          {
            type: "string",
            name: "contact_phone",
            label: "Contact Phone",
          },
          {
            type: "string",
            name: "contact_email",
            label: "Contact Email",
          },
          {
            type: "string",
            name: "contact_address",
            label: "Contact Address",
          },
        ],
      },
    ],
  },
});
