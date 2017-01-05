/* eslint max-len: "off" */
export default {
  COMMON: {
    FORM: {
      HELP: {
        REQUIRED: '* : champ obligatoire'
      }
    },
    BUTTON: {
      CANCEL: 'Annuler',
      SAVE: 'Enregistrer'
    }
  },
  FOOTER: {
    BUGREPORT: 'Signaler une anomalie'
  },
  HOME: {
    TITLE: 'Appel à propositions',
    DATES: 'Ouvert jusqu\'au {{closingDate}} — Annonce du programme le {{programDate}}',
    NEW_PROPOSAL: 'Devient conférencier !',
    TRACKS: {
      TITLE: 'Thèmes',
      HELP: 'Les différents thèmes abordés durant l\'événement'
    }
  },
  PROFILE: {
    EDIT: {
      TITLE: 'Mon profil'
    },
    FORM: {
      LASTNAME: {
        LABEL: 'Nom',
        PLACEHOLDER: 'Saisissez votre nom…'
      },
      FIRSTNAME: {
        LABEL: 'Prénom',
        PLACEHOLDER: 'Saisissez votre prénom…'
      },
      PHONE: {
        LABEL: 'Téléphone',
        PLACEHOLDER: 'Vous pouvez saisir un numéro de téléphone où vous joindre…'
      },
      ORGANIZATION: {
        LABEL: 'Organisation',
        PLACEHOLDER: 'Entreprise, association…'
      },
      BIO: {
        LABEL: 'Bio',
        PLACEHOLDER: 'Parlez nous de vous…'
      },
      TWITTER: {
        LABEL: 'Twitter',
        PLACEHOLDER: ''
      },
      GITHUB: {
        LABEL: 'Github',
        PLACEHOLDER: ''
      },
      GOOGLEPLUS: {
        LABEL: 'Google+',
        PLACEHOLDER: ''
      },
      SOCIAL: {
        LABEL: 'Autre',
        PLACEHOLDER: '(Blog, Linkedin…)'
      },
      LANGUAGE: {
        LABEL: 'Langue'
      },
      TSHIRTMODEL: {
        LABEL: 'Tee-shirt',
        MODELS: {
          MALE: 'Homme',
          FEMALE: 'Femme'
        }
      },
      TSHIRTSIZE: {
        LABEL: 'Taille',
        SIZES: {
          XS: 'XS',
          S: 'S',
          M: 'M',
          L: 'M',
          XL: 'XL',
          XXL: 'XXL',
          XXXL: 'XXXL'
        }
      }
    }
  },
  PROPOSAL: {
    EDIT: {
      TITLE: {
        TITLE: 'Modification de « {{title}} »',
        NEW: 'Nouvelle proposition'
      }
    },
    FORM: {
      NAME: {
        LABEL: 'Titre de la présentation',
        PLACEHOLDER: 'Saisir un titre…',
        HELP: 'Proposez un titre simple, clair, qui résume ce que le participant va apprendre. Beaucoup de conférenciers sélectionnent une conférence au dernier moment, en se basant sur le titre.'
      },
      DESCRIPTION: {
        LABEL: 'Description',
        PLACEHOLDER: 'Saisir une description…',
        HELP: 'Décrivez votre proposition, telle que la liront les participants. Vous pouvez utiliser la syntaxe Markdown.'
      },
      REFERENCES: {
        LABEL: 'Complément d\'information',
        PLACEHOLDER: 'Saisir des informations complémentaires…',
        HELP: 'Précisez ici toutes les informations importantes sur votre présentation, que seul le comité de sélection verra. Détaillez votre plan de présentation, l\'ensemble des éléments qui doivent nous faire choisir votre proposition de sujet. Vous pouvez inclure l\'URL vers vos diapositives si vous le souhaitez.'
      },
      FORMAT: {
        LABEL: 'Type de présentation'
      },
      LANGUAGE: {
        LABEL: 'Langue'
      },
      TRACK: {
        LABEL: 'Thème'
      },
      DIFFICULTY: {
        LABEL: 'Niveau',
        LEVEL: {
          BEGINNER: {
            LABEL: 'Débutant',
            DESCRIPTION: 'Ouvert à un public sans connaissance spécifique sur le sujet'
          },
          INTERMEDIATE: {
            LABEL: 'Intermédiaire',
            DESCRIPTION: 'Ouvert à un public ayant des connaissances sur le sujet'
          },
          EXPERT: {
            LABEL: 'Expert',
            DESCRIPTION: 'Pour un auditoire expert ou senior sur le sujet'
          }
        }
      },
      COSPEAKERS: {
        LABEL: 'Co-présentateurs',
        PLACEHOLDER: 'Saisir l\'adresse email du co-présentateur…',
        ADD: {
          TOOLTIP: 'Ajouter un co-présentateur'
        },
        REMOVE: {
          TOOLTIP: 'Supprimer le co-présentateur'
        },
        HELP: 'Si vous êtes accompagnés lors de cette présentation (maximum 3 présentateurs), indiquez l\'adresse email des co-présentateurs.<br><b>Attention !</b> les adresses email saisies doivent correspondre à des comptes utilisateurs sur cfp.io'
      },
      BUTTON: {
        SAVE_DRAFT: 'Sauvegarder le brouillon',
        SUBMIT: 'Soumettre'
      }
    }
  },
  LANG: {
    en: 'English',
    fr: 'Français'
  },
  MULTI_INPUT: {
    MAX_REACHED: 'Nombre maximum atteint'
  }
}
