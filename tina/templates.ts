import type { TinaField } from "tinacms";
export function actionsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titre",
      required: true,
    },
    {
      type: "string",
      name: "type_page",
      label: "Type de page",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "string",
      name: "descriptiontemp",
      label: "Description temporaire",
    },
    {
      type: "string",
      name: "tags",
      label: "Mots-clés",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "datetime",
      name: "publishDate",
      label: "Date de publication",
    },
    {
      type: "datetime",
      name: "dateevent",
      label: "Date de l'évenement",
    },
    {
      type: "string",
      name: "time",
      label: "Horaire de début",
      required: true,
    },
    {
      type: "string",
      name: "category",
      label: "Catégorie",
      options: [
        "RDV asso",
        "Atelier",
        "Conférence",
        "Journée d'étude",
        "Soutenance de thèse",
        "Publication",
        "Partenariat",
        "Autre",
      ],
    },
    {
      type: "string",
      name: "lieu",
      label: "Lieu de l'évènement",
    },
    {
      type: "image",
      name: "documents",
      label: "Documents",
    },
  ] as TinaField[];
}
export function brevesFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Titre",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "datetime",
      name: "publishDate",
      label: "Date de publication",
    },
    {
      type: "string",
      name: "link",
      label: "URL",
    },
    {
      type: "image",
      name: "documents",
      label: "Documents",
    },
  ] as TinaField[];
}
export function membresFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Prénom Nom",
      required: true,
    },
    {
      type: "string",
      name: "name",
      label: "Nom de famille (pour tri par ordre alphabétique)",
      required: true,
    },
    {
      type: "boolean",
      name: "membre_actif",
      label: "Membre actif",
    },
    {
      type: "boolean",
      name: "membre_bureau",
      label: "Membre du bureau",
    },
    {
      type: "string",
      name: "bureau",
      label: "Statut (si membre du bureau)",
    },
    {
      type: "string",
      name: "type_page",
      label: "Type de page",
    },
    {
      type: "image",
      name: "photo",
      label: "Photo de profil",
    },
    {
      type: "string",
      name: "etablissement",
      label: "Établissement(s), laboratoire(s)",
    },
    {
      type: "string",
      name: "section_cnu",
      label: "Section CNU",
      options: [
        "71 Sciences de l'information et de la communication",
        "18 Architecture",
        "18 Arts appliqués",
        "18 Arts plastiques",
        "18 Arts du spectacle",
        "18 Épistémologie des enseignements artistiques",
        "18 Esthétique",
        "18 Musicologie, musique",
        "18 Sciences de l'art",
        "04 Science politique",
        "05 Sciences économiques",
        "06 Sciences de gestion",
        "07 Sciences du langage : linguistique et phonétique générales",
        "08 Langues et littératures anciennes",
        "09 Langue et littérature françaises",
        "10 Littératures comparées",
        "11 Langues et littératures anglaises et anglo-saxonnes",
        "12 Langues et littératures germaniques et scandinaves",
        "13 Langues et littératures slaves",
        "14 Langues et littératures romanes : espagnol, italien, portugais, autres langues romanes",
        "15 Langues et littératures arabes, chinoises, japonaises, hébraïques, d'autres domaines",
        "linguistiques",
        "16 Psychologie",
        "16 Psychologie, Ergonomie",
        "17 Philosophie",
        "19 Sociologie",
        "20 Anthropologie",
        "20 Ethnologie",
        "21 Histoire, civilisation, archéologie et art des mondes anciens et médiévaux",
        "22 Histoire des mondes modernes",
        "22 Histoire du monde contemporain",
        "22 Histoire de l'art",
        "22 Histoirede la musique",
        "23 Géographie physique, humaine, économique et régionale",
        "24 Aménagement de l'espace, urbanisme",
        "25 Mathématiques",
        "26 Mathématiques appliquées et applications des mathématiques",
        "27 Informatique",
        "28 Milieux denses et matériaux",
        "29 Constituants élémentaires",
        "30 Milieux dilués et optique",
        "31 Chimie théorique, physique, analytique",
        "32 Chimie organique, minérale, industrielle",
        "33 Chimie des matériaux",
        "34 Astronomie, astrophysique",
        "35 Structure et évolution de la Terre et des autres planètes",
        "36 Terre solide : géodynamique des enveloppes supérieures, paléo-biosphère",
        "60 Mécanique, génie mécanique, génie civil",
        "61 Génie informatique, automatique et traitement du signal",
        "62 Energétique, génie des procédés",
        "63 Génie électrique, électronique, photonique et systèmes",
        "64 Biochimie et biologie moléculaire",
        "65 Biologie cellulaire",
        "67 Biologie des populations et écologie",
        "68 Biologie des organismes",
        "69 Neurosciences",
        "70 Sciences de l'éducation",
        "72 Epistémologie, histoire des sciences et des techniques",
        "73 Cultures et langues régionales",
        "74 Sciences et techniques des activités physiques et sportives",
      ],
    },
    {
      type: "string",
      name: "titrethese",
      label: "Titre de la thèse (FR)",
      required: true,
    },
    {
      type: "string",
      name: "titretheseEn",
      label: "Titre de la thèse (EN)",
    },
    {
      type: "number",
      name: "these_start",
      label: "Date d'inscription en thèse",
      required: true,
    },
    {
      type: "boolean",
      name: "these_soutenue",
      label: "Thèse soutenue",
    },
    {
      type: "number",
      name: "these_end",
      label: "Date de soutenance de thèse",
      required: true,
    },
    {
      type: "string",
      name: "tags",
      label: "Mots-clés",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "object",
      name: "contact",
      label: "Contact",
      fields: [
        {
          type: "string",
          name: "mail",
          label: "Mail",
        },
        {
          type: "string",
          name: "site",
          label: "Site personnel",
        },
        {
          type: "string",
          name: "telephone",
          label: "Téléphone",
        },
        {
          type: "string",
          name: "twitter",
          label: "Twitter",
        },
        {
          type: "string",
          name: "linkedin",
          label: "Linkedin",
        },
        {
          type: "string",
          name: "instagram",
          label: "Instagram",
        },
        {
          type: "string",
          name: "facebook",
          label: "Facebook",
        },
        {
          type: "string",
          name: "mastodon",
          label: "Mastodon",
        },
        {
          type: "string",
          name: "medium",
          label: "Medium",
        },
        {
          type: "string",
          name: "hypotheses",
          label: "Carnet hypothèses",
        },
        {
          type: "string",
          name: "github",
          label: "GitHub",
        },
        {
          type: "string",
          name: "gitlab",
          label: "GitLab",
        },
      ],
    },
    {
      type: "string",
      name: "url_thesesfr",
      label: "URL theses.fr",
    },
    {
      type: "string",
      name: "url_hal",
      label: "Lien thèse HAL",
    },
    {
      type: "object",
      name: "instagram_1",
      label: "Instagram",
      fields: [
        {
          type: "string",
          name: "post1",
          label: "Post1",
        },
        {
          type: "string",
          name: "post2",
          label: "Post2",
        },
        {
          type: "string",
          name: "post3",
          label: "Post3",
        },
        {
          type: "string",
          name: "post4",
          label: "Post4",
        },
        {
          type: "string",
          name: "post5",
          label: "Post5",
        },
        {
          type: "string",
          name: "post6",
          label: "Post6",
        },
        {
          type: "string",
          name: "post7",
          label: "Post7",
        },
        {
          type: "string",
          name: "post8",
          label: "Post8",
        },
        {
          type: "string",
          name: "post9",
          label: "Post9",
        },
      ],
    },
    {
      type: "object",
      name: "instagram_files",
      label: "Fichiers Instagram",
      fields: [
        {
          type: "string",
          name: "post1link",
          label: "Lien_post_1",
        },
        {
          type: "image",
          name: "img1",
          label: "Image_post_1",
        },
        {
          type: "string",
          name: "post2link",
          label: "Lien_post_2",
        },
        {
          type: "image",
          name: "img2",
          label: "Image_post_2",
        },
        {
          type: "string",
          name: "post3link",
          label: "Lien_post_3",
        },
        {
          type: "image",
          name: "img3",
          label: "Image_post_3",
        },
        {
          type: "string",
          name: "post4link",
          label: "Lien_post_4",
        },
        {
          type: "image",
          name: "img4",
          label: "Image_post_4",
        },
        {
          type: "string",
          name: "post5link",
          label: "Lien_post_5",
        },
        {
          type: "image",
          name: "img5",
          label: "Image_post_5",
        },
        {
          type: "string",
          name: "post6link",
          label: "Lien_post_6",
        },
        {
          type: "image",
          name: "img6",
          label: "Image_post_6",
        },
        {
          type: "string",
          name: "post7link",
          label: "Lien_post_7",
        },
        {
          type: "image",
          name: "img7",
          label: "Image_post_7",
        },
        {
          type: "string",
          name: "post8link",
          label: "Lien_post_8",
        },
        {
          type: "image",
          name: "img8",
          label: "Image_post_8",
        },
        {
          type: "string",
          name: "post9link",
          label: "Lien_post_9",
        },
        {
          type: "image",
          name: "img9",
          label: "Image_post_9",
        },
      ],
    },
  ] as TinaField[];
}
export function popupFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "datetime",
      name: "publishDate",
      label: "Date",
    },
    {
      type: "boolean",
      name: "display",
      label: "Afficher le popup",
    },
  ] as TinaField[];
}
