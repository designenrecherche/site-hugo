import { defineConfig } from "tinacms";
import { actionsFields } from "./templates";
import { brevesFields } from "./templates";
import { membresFields } from "./templates";
import { popupFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "About",
        name: "about",
        path: "content/about",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: "md",
        label: "Nos actions",
        name: "nos_actions",
        path: "content/actions",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...actionsFields(),
        ],
      },
      {
        format: "md",
        label: "Membres",
        name: "membres",
        path: "content/membres",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...membresFields(),
        ],
      },
      {
        format: "md",
        label: "Brèves",
        name: "breves",
        path: "content/breves",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...brevesFields(),
        ],
      },
      {
        format: "md",
        label: "Adhésion",
        name: "adhesion",
        path: "content/contact-adhesion",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        format: "md",
        label: "Popup",
        name: "popup",
        path: "content/popup",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...popupFields(),
        ],
      },
      {
        format: "yml",
        label: "Data",
        name: "data",
        path: "data",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
