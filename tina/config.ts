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
        defaultItem: () => {
          return {
            // title: 'Prénom Nom',
            // The body will be populated with "Default Text"
            body: {
              type: "root",
              children: [
                {
                  type: "html",
                  value: "<!-- Supprimer les parties non remplies (supprimer les blocks de lang s'il n'y a pas deux langues). Tu es libre d'ajouter ce que tu veux à cette partie -->",
                  children: [
                    {
                      type: "text",
                      text: ""
                    }
                  ]
                },
                {
                  type: "h1",
                  children: [
                    {
                      type: "text",
                      text: "Résumé de thèse"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "{{% lang class=\"fr\" %}}"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "Ici le résumé de la thèse en français"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "{{% /lang %}}"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "{{% lang class=\"en\" %}}"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "Ici le résumé de la thèse en anglais"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "{{% /lang %}}"
                    }
                  ]
                },
                {
                  type: "h2",
                  children: [
                    {
                      type: "text",
                      text: "Direction de thèse"
                    }
                  ]
                },
                {
                  type: "ul",
                  children: [
                    {
                      type: "li",
                      children: [
                        {
                          type: "lic",
                          children: [
                            {
                              type: "text",
                              text: "Directeur•ice de thèse",
                              bold: true
                            },
                            {
                              type: "text",
                              text: ", laboratoire de rattachement"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "li",
                      children: [
                        {
                          type: "lic",
                          children: [
                            {
                              type: "text",
                              text: "Co-directeur•ice de thèse",
                              bold: true
                            },
                            {
                              type: "text",
                              text: ", laboratoire de rattachement"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "h1",
                  children: [
                    {
                      type: "text",
                      text: "Biographie"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "{{% lang class=\"fr\" %}}"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "Ici la biographie en français"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "{{% /lang %}}"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "{{% lang class=\"en\" %}}"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "Ici la biographie en anglais"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "{{% /lang %}}"
                    }
                  ]
                },
                {
                  type: "h1",
                  children: [
                    {
                      type: "text",
                      text: "Soutenance de thèse"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "Date",
                      bold: true
                    },
                    {
                      type: "text",
                      text: " – lieu"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "Pour en savoir plus : "
                    },
                    {
                      type: "a",
                      url: "",
                      title: null,
                      children: [
                        {
                          type: "text",
                          text: "lien vers article de design en recherche"
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "h2",
                  children: [
                    {
                      type: "text",
                      text: "Composition du jury"
                    }
                  ]
                },
                {
                  type: "ul",
                  children: [
                    {
                      type: "li",
                      children: [
                        {
                          type: "lic",
                          children: [
                            {
                              type: "text",
                              text: "Prénom Nom",
                              bold: true
                            },
                            {
                              type: "text",
                              text: ", laboratoire de rattachement (rapporteur)"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "li",
                      children: [
                        {
                          type: "lic",
                          children: [
                            {
                              type: "text",
                              text: "Prénom Nom",
                              bold: true
                            },
                            {
                              type: "text",
                              text: ", laboratoire de rattachement"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "li",
                      children: [
                        {
                          type: "lic",
                          children: [
                            {
                              type: "text",
                              text: "Prénom Nom",
                              bold: true
                            },
                            {
                              type: "text",
                              text: ", laboratoire de rattachement"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
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
        defaultItem: () => {
          return {
            // title: 'Prénom Nom',
            // The body will be populated with "Default Text"
            body: {
              type: "root",
              children: [
                {
                  type: "html",
                  value: "<!-- Garder les niveaux de titres comme dans cet exemple -->",
                  children: [
                    {
                      type: "text",
                      text: ""
                    }
                  ]
                },
                {
                  type: "h1",
                  children: [
                    {
                      type: "text",
                      text: "Programme"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "{{% programme %}}"
                    }
                  ]
                },
                {
                  type: "h3",
                  children: [
                    {
                      type: "text",
                      text: "9h30-10h"
                    }
                  ]
                },
                {
                  type: "h3",
                  children: [
                    {
                      type: "text",
                      text: "Accueil des participants"
                    }
                  ]
                },
                {
                  type: "h2",
                  children: [
                    {
                      type: "text",
                      text: "10h-10h20"
                    }
                  ]
                },
                {
                  type: "h3",
                  children: [
                    {
                      type: "text",
                      text: "Titre de la première conférence"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "Pierre Paul",
                      bold: true
                    },
                    {
                      type: "text",
                      text: ", doctorant ECO"
                    }
                  ]
                },
                {
                  type: "h2",
                  children: [
                    {
                      type: "text",
                      text: "10h20-10h40"
                    }
                  ]
                },
                {
                  type: "h3",
                  children: [
                    {
                      type: "text",
                      text: "Titre de la deuxième conférence"
                    }
                  ]
                },
                {
                  type: "ul",
                  children: [
                    {
                      type: "li",
                      children: [
                        {
                          type: "lic",
                          children: [
                            {
                              type: "text",
                              text: "Pierre Paul",
                              bold: true
                            },
                            {
                              type: "text",
                              text: ", doctorant ECO"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "li",
                      children: [
                        {
                          type: "lic",
                          children: [
                            {
                              type: "text",
                              text: "Marie Bon",
                              bold: true
                            },
                            {
                              type: "text",
                              text: ", doctorante à Paris 8"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "h2",
                  children: [
                    {
                      type: "text",
                      text: "11h45-12h"
                    }
                  ]
                },
                {
                  type: "h3",
                  children: [
                    {
                      type: "text",
                      text: "Discussions"
                    }
                  ]
                },
                {
                  type: "h2",
                  children: [
                    {
                      type: "text",
                      text: "12h-13h30"
                    }
                  ]
                },
                {
                  type: "h3",
                  children: [
                    {
                      type: "text",
                      text: "Pause déjeuner ||"
                    }
                  ]
                },
                {
                  type: "h2",
                  children: [
                    {
                      type: "text",
                      text: "13h30-14h00"
                    }
                  ]
                },
                {
                  type: "h3",
                  children: [
                    {
                      type: "text",
                      text: "Titre de la troisième conférence"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "Pierre Paul",
                      bold: true
                    },
                    {
                      type: "text",
                      text: ", doctorant ECO"
                    }
                  ]
                },
                {
                  type: "h2",
                  children: [
                    {
                      type: "text",
                      text: "14h00-15h00"
                    }
                  ]
                },
                {
                  type: "h3",
                  children: [
                    {
                      type: "text",
                      text: "Table ronde: Titre de la table ronde"
                    }
                  ]
                },
                {
                  type: "h4",
                  children: [
                    {
                      type: "text",
                      text: "Modération"
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "Pierre Paul",
                      bold: true
                    },
                    {
                      type: "text",
                      text: ", doctorant ECO \\"
                    }
                  ]
                },
                {
                  type: "h4",
                  children: [
                    {
                      type: "text",
                      text: "Invités"
                    }
                  ]
                },
                {
                  type: "ul",
                  children: [
                    {
                      type: "li",
                      children: [
                        {
                          type: "lic",
                          children: [
                            {
                              type: "text",
                              text: "Marie Bon",
                              bold: true
                            },
                            {
                              type: "text",
                              text: ", doctorante à Paris 8"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "li",
                      children: [
                        {
                          type: "lic",
                          children: [
                            {
                              type: "text",
                              text: "Jaques Smith",
                              bold: true
                            },
                            {
                              type: "text",
                              text: ", grand ponte international"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      text: "{{% /programme %}}"
                    }
                  ]
                }
              ]
            }
          }
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of document",
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
            label: "Body of document",
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
