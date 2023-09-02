import type { TinaField } from "tinacms";
export function actionsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "titre",
      required: true,
    },
    {
      type: "string",
      name: "type_page",
      label: "type_page",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "descriptiontemp",
      label: "description_temporaire",
    },
    {
      type: "string",
      name: "tags",
      label: "mots_cles",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "datetime",
      name: "publishDate",
      label: "date_de_publication",
    },
    {
      type: "datetime",
      name: "dateevent",
      label: "date_de_l_evenement",
    },
    {
      type: "string",
      name: "time",
      label: "horaire_de_debut",
      required: true,
    },
    {
      type: "string",
      name: "category",
      label: "categorie",
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
      label: "lieu_de_l_evenement",
    },
    {
      type: "image",
      name: "documents",
      label: "documents",
    },
  ] as TinaField[];
}
export function brevesFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "titre",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "datetime",
      name: "publishDate",
      label: "date",
    },
    {
      type: "string",
      name: "link",
      label: "url",
    },
    {
      type: "image",
      name: "documents",
      label: "documents",
    },
  ] as TinaField[];
}
export function membresFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "prenom_nom",
      required: true,
    },
    {
      type: "string",
      name: "name",
      label: "nom_de_famille_pour_tri_par_ordre_alphabetique",
      required: true,
    },
    {
      type: "boolean",
      name: "membre_actif",
      label: "membre_actif",
    },
    {
      type: "boolean",
      name: "membre_bureau",
      label: "membre_du_bureau",
    },
    {
      type: "string",
      name: "bureau",
      label: "statut_si_membre_du_bureau",
    },
    {
      type: "string",
      name: "type_page",
      label: "type_page",
    },
    {
      type: "image",
      name: "photo",
      label: "photo_de_profil",
    },
    {
      type: "string",
      name: "etablissement",
      label: "etablissements_laboratoires",
    },
    {
      type: "string",
      name: "section_cnu",
      label: "section_cnu",
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
      label: "titre_de_la_these_fr",
      required: true,
    },
    {
      type: "string",
      name: "titretheseEn",
      label: "titre_de_la_these_en_anglais_en",
    },
    {
      type: "number",
      name: "these_start",
      label: "date_d_inscription_en_these",
      required: true,
    },
    {
      type: "boolean",
      name: "these_soutenue",
      label: "these_soutenue",
    },
    {
      type: "number",
      name: "these_end",
      label: "date_de_soutenance_de_these",
      required: true,
    },
    {
      type: "string",
      name: "tags",
      label: "mots_cles",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "object",
      name: "contact",
      label: "contact",
      fields: [
        {
          type: "string",
          name: "mail",
          label: "mail",
        },
        {
          type: "string",
          name: "site",
          label: "site_perso",
        },
        {
          type: "string",
          name: "telephone",
          label: "telephone",
        },
        {
          type: "string",
          name: "twitter",
          label: "twitter",
        },
        {
          type: "string",
          name: "linkedin",
          label: "linkedin",
        },
        {
          type: "string",
          name: "instagram",
          label: "instagram",
        },
        {
          type: "string",
          name: "facebook",
          label: "facebook",
        },
        {
          type: "string",
          name: "medium",
          label: "medium",
        },
        {
          type: "string",
          name: "hypotheses",
          label: "carnet_hypotheses",
        },
        {
          type: "string",
          name: "github",
          label: "github",
        },
        {
          type: "string",
          name: "gitlab",
          label: "gitlab",
        },
      ],
    },
    {
      type: "string",
      name: "url_thesesfr",
      label: "url_theses_fr",
    },
    {
      type: "string",
      name: "url_hal",
      label: "lien_these_hal",
    },
    {
      type: "object",
      name: "instagram_1",
      label: "instagram_1",
      fields: [
        {
          type: "string",
          name: "post1",
          label: "post1",
        },
        {
          type: "string",
          name: "post2",
          label: "post2",
        },
        {
          type: "string",
          name: "post3",
          label: "post3",
        },
        {
          type: "string",
          name: "post4",
          label: "post4",
        },
        {
          type: "string",
          name: "post5",
          label: "post5",
        },
        {
          type: "string",
          name: "post6",
          label: "post6",
        },
        {
          type: "string",
          name: "post7",
          label: "post7",
        },
        {
          type: "string",
          name: "post8",
          label: "post8",
        },
        {
          type: "string",
          name: "post9",
          label: "post9",
        },
      ],
    },
    {
      type: "object",
      name: "instagram_files",
      label: "instagram_files",
      fields: [
        {
          type: "string",
          name: "post1link",
          label: "lien_post_1",
        },
        {
          type: "image",
          name: "img1",
          label: "image_post_1",
        },
        {
          type: "string",
          name: "post2link",
          label: "lien_post_2",
        },
        {
          type: "image",
          name: "img2",
          label: "image_post_2",
        },
        {
          type: "string",
          name: "post3link",
          label: "lien_post_3",
        },
        {
          type: "image",
          name: "img3",
          label: "image_post_3",
        },
        {
          type: "string",
          name: "post4link",
          label: "lien_post_4",
        },
        {
          type: "image",
          name: "img4",
          label: "image_post_4",
        },
        {
          type: "string",
          name: "post5link",
          label: "lien_post_5",
        },
        {
          type: "image",
          name: "img5",
          label: "image_post_5",
        },
        {
          type: "string",
          name: "post6link",
          label: "lien_post_6",
        },
        {
          type: "image",
          name: "img6",
          label: "image_post_6",
        },
        {
          type: "string",
          name: "post7link",
          label: "lien_post_7",
        },
        {
          type: "image",
          name: "img7",
          label: "image_post_7",
        },
        {
          type: "string",
          name: "post8link",
          label: "lien_post_8",
        },
        {
          type: "image",
          name: "img8",
          label: "image_post_8",
        },
        {
          type: "string",
          name: "post9link",
          label: "lien_post_9",
        },
        {
          type: "image",
          name: "img9",
          label: "image_post_9",
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
      label: "title",
      required: true,
    },
    {
      type: "datetime",
      name: "publishDate",
      label: "date",
    },
    {
      type: "boolean",
      name: "display",
      label: "afficher_le_pop_up",
    },
  ] as TinaField[];
}
