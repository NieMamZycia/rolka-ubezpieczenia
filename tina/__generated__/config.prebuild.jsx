// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  branch: process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "homepage",
        label: "Homepage",
        path: "content/pages",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "home"
        },
        fields: [
          {
            type: "string",
            name: "hero_title",
            label: "Hero title",
            required: true
          },
          {
            type: "string",
            name: "hero_subtitle",
            label: "Hero subtitle",
            required: true
          },
          {
            type: "image",
            name: "hero_image",
            label: "Hero image"
          },
          {
            type: "rich-text",
            name: "about_text",
            label: "About text",
            required: true
          },
          {
            type: "string",
            name: "contact_phone",
            label: "Contact phone",
            required: true
          },
          {
            type: "string",
            name: "contact_email",
            label: "Contact email",
            required: true
          },
          {
            type: "string",
            name: "contact_address",
            label: "Contact address",
            required: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
