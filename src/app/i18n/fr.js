/* eslint max-len: "off" */
export default {
  COMMON: {
    FORM: {
      HELP: {
        REQUIRED: '* : champ obligatoire'
      }
    },
    BUTTON: {
      CANCEL: 'Annuler'
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
  },
  'DIALOGS_ERROR': 'Erreur',
  'DIALOGS_ERROR_MSG': 'Une erreur inconnue s\'est produite.',
  'DIALOGS_CLOSE': 'Fermer',
  'DIALOGS_PLEASE_WAIT': 'Veuillez patienter',
  'DIALOGS_PLEASE_WAIT_ELIPS': 'Veuillez patienter…',
  'DIALOGS_PLEASE_WAIT_MSG': 'Attente de la fin de l\'opération.',
  'DIALOGS_PERCENT_COMPLETE': '% Complet',
  'DIALOGS_NOTIFICATION': 'Notification',
  'DIALOGS_NOTIFICATION_MSG': 'Notification applicative Inconnu.',
  'DIALOGS_CONFIRMATION': 'Confirmation',
  'DIALOGS_CONFIRMATION_MSG': 'Confirmation requise.',
  'DIALOGS_OK': 'OK',
  'DIALOGS_YES': 'Oui',
  'DIALOGS_NO': 'Non',
  'lang': {
    'fr': 'Français',
    'en': 'English'
  },
  'header': {
    'login': 'Se connecter',
    'logout': 'Se déconnecter',
    'dashboard': 'Dashboard',
    'review': 'Relecture',
    'schedule': 'Calendrier',
    'configure': 'Configurer',
    'profile': 'Profil',
    'openUntil': 'Ouvert jusqu\'au ',
    'decision': 'Délibération le ',
    'admin': 'Admin'
  },
  'languageModal': {
    'choose': 'Choisissez une langue',
    'search': 'Rechercher une langue...',
    'count1': 'Cette application est proposée en ',
    'count2': 'langues',
    'more': 'plus',
    'close': 'Fermer'
  },
  'dashboard': {
    'createNewSession': 'Créer un nouveau talk',
    'submissionDisabled': 'La soumission de nouvelles candidatures est désactivée.',
    'editionTalks': 'Talks en cours d\'édition',
    'editionCoTalks': 'Talks (en tant que cospeaker) en cours d\'édition',
    'noEditionTalks': 'Vous n\'avez pas de talk en cours d\'édition',
    'sendedTalks': 'Talks envoyés',
    'draftModifiedAt': 'Brouillon modifié le ',
    'modifiedAt': 'modifié le ',
    'postedAt': 'ajouté le ',
    'noSendedTalks': 'Vous n\'avez pas encore proposé de talk',
    'verification': 'Vérification',
    'verificationNeeded': 'Un e-mail a été envoyé à votre adresse, cliquez sur le lien présent dans celui-ci pour valider votre compte.',
    'submittedTalks': 'Nombre de talks soumis : ',
    'sendedCoTalks': 'Talks (en tant que cospeaker) envoyés'
  },
  'profile': {
    'title': 'Mon profil',
    'lastname': 'Nom',
    'firstname': 'Prénom',
    'gender': 'Sexe',
    'genderMale': 'Homme',
    'genderFemale': 'Femme',
    'language': 'Langue préférée',
    'phone': 'Téléphone',
    'company': 'Entreprise',
    'bio': 'Bio',
    'bioPreview': 'Prévisualisation',
    'twitter': 'Profil Twitter',
    'googleplus': 'Profil Google +',
    'github': 'Profil Github',
    'social': 'Autres URLs (Blog, Linkedin, ...)',
    'tshirtSize': 'Taille t-shirt',
    // 'avatar': 'Image de profil :',
    // 'dropImage': 'Déposer l\'image ici',
    // 'selectImage': 'Parcourir',
    'cancel': 'Annuler',
    'save': 'Sauvegarder',
    'success': 'Profil sauvegardé',
    'error': 'Erreur lors de l\'enregistrement'
  },
  'login': {
    'title': 'Bienvenue sur le Call For Paper du Breizhcamp.',
    'email': 'Email',
    'password': 'Mot de passe',
    'login': 'Se connecter',
    'noAccount': 'Vous n\'avez pas encore de compte ?',
    'signup': 'S\'enregistrer',
    'or': 'Ou',
    'signGoogle': 'Se connecter avec Google',
    'signGithub': 'Se connecter avec Github',
    'wait': 'Veuillez patienter',
    'badCredentials': 'Login ou mot de passe incorrect',
    'alreadyLinked': 'Il existe déjà un utilisateur associé à ce fournisseur'
  },
  'signup': {
    'signup': 'S\'enregistrer',
    'email': 'Email',
    'password': 'Mot de passe',
    'confirmPassword': 'Confirmez le mot de passe',
    'yesAccount': 'Vous avez déjà un compte ?',
    'loginNow': 'Se connecter',
    'emailRequired': 'L\'adresse email est obligatoire',
    'emailPattern': 'Votre adresse email est invalide',
    'passwordRequired': 'Le mot de passe est obligatoire',
    'passwordMinLength': 'Le mot de passe doit contenir au moins 6 caractères',
    'passwordMatch': 'Les mots de passe doivent être identiques',
    'alreadyExists': 'Il existe déjà un utilisateur associé à cette adresse e-mail'
  },
  'talkInfo': {
    'intro': 'Voici quelques informations sur les formats et catégories des talks :',
    'formats': 'Formats',
    'categories': 'Catégories'
  },
  'verify': {
    'title': 'Verification de l\'email',
    'verified': 'Votre email a été vérifié',
    'alreadyVerified': 'Ce compte a déjà été vérifié',
    'notVerified': 'Erreur de vérification'
  },
  'talk': {
    'edit': {
      'title': {
        'new': 'Nouveau talk',
        'update': 'Modification du talk «{{name}}»'
      },
      'saveDraft': 'Brouillon enregistré.',
      'saveSession': 'Session soumise. Un mail de confirmation vous a été envoyé.'
    },
    'difficulty': {
      '1': 'Débutant',
      '2': 'Confirmé',
      '3': 'Expert'
    }
  },
  'step1': {
    'warning': 'Attention les informations enregistrées lors de cette étape modifieront votre profil pour tous les talks déjà proposés.',
    'email': 'Adresse email * :',
    'lastname': 'Nom * :',
    'firstname': 'Prénom * :',
    'language': 'Langue préférée',
    'phone': 'Téléphone :',
    'errorPhone': 'Entrez un numéro de téléphone correct',
    'company': 'Entreprise :',
    'bio': 'Bio * :',
    'hintBio': 'Décrivez vous en quelques mots. Cette description sera utilisée sur le site web.',
    'social': 'Autres URLs (Blog, Linkedin, ...) :',
    'twitter': 'Profil Twitter :',
    'googleplus': 'Profil Google Plus :',
    'github': 'Profil Github :',
    'hintSocial': 'Donnez les liens de vos réseaux sociaux (pour le site web) : Twitter / G+ / Github / Blog.',
    'gender': 'Sexe t-shirt',
    'tshirtSize': 'Taille t-shirt'
  },
  'step2': {
    'name': 'Nom de la conférence * :',
    'description': 'Description * :',
    'language': 'Langue de présentation :',
    'hintDescription': 'Donnez une description de votre présentation. Elle sera utilisée sur le site web.',
    'references': 'Références ou compléments d\'informations :',
    'hintReferences': 'Y a-t-il des conférences où vous avez déjà fait des présentations ? Si vous pouvez donner un lien vers celle(s)-ci ça serait bien.',
    'difficulty': 'Difficulté * (Débutant, Confirmé, Expert) :',
    'track': 'Catégorie * :',
    'cospeaker': 'Co-conférenciers :',
    'hintCospeaker': 'Si vous n\'êtes pas seul lors de la présentation, donnez l\'email des autres conférenciers. ATTENTION, ceux-ci doivent être préalablement inscrit sur le CFP avec cette même adresse.',
    'cospeakerNotFound': 'Le cospeaker avec l\'adresse {{value}} n\'existe pas.',
    'beginner': 'Débutant',
    'confirmed': 'Confirmé',
    'expert': 'Expert',
    'tracks': {
      'cloud': 'Cloud / BigData',
      'mobile': 'Mobile et objets connectés',
      'web': 'Web',
      'discovery': 'Découverte'
    },
    'type': 'Type * :',
    'hintType': 'Une conférence doit durer environ 45 minutes et un codelab 2 heures.',
    'types': {
      'conference': 'Conférence',
      'codelab': 'Codelab'
    },
    'hintTrack': 'Choisissez la catégorie dans laquelle vous pensez que votre conférence se situe.'
  },
  'step3': {
    'header1': 'Vous pouvez renseigner ici les informations nécessaires pour votre venue. Ces informations seront minutieusement étudiées pour notre décision. Ne choisissez oui que si vous en avez besoin.',
    'header2': 'Un petit déjeuner et un déjeuner sont offerts le jour de l\'évènement.',
    'financial': 'Avez-vous besoin d’une aide financière ? * :',
    'labelTravel': 'Voyage :',
    'travel': 'J\'ai besoin d\'une aide financière pour le voyage.',
    'place': 'D’où venez vous ? :',
    'labelHotel': 'Hébergement',
    'hotel': 'J\'ai besoin d’une aide financière pour l’hotel.',
    'date': 'Pour quelle(s) date(s) ? :',
    'sendError': 'Erreur lors de l\'envoi veuillez réessayer',
    'sryClosedSince': 'Désolé, le CFP est fermé depuis le '
  },
  'confirmModal': {
    'title': 'Confirmation',
    'text': 'Êtes-vous sûr de vouloir envoyer ce talk ? Une fois envoyé, vous ne serez pas en mesure de le modifier.',
    'textDelete': 'Êtes-vous sûr de vouloir suprimer cette session ? Une fois supprimée, vous ne serez pas en mesure de la restaurer.',
    'confirm': 'Envoyer',
    'confirmDelete': 'Supprimer',
    'cancel': 'Annuler',
    'textDeleteFormat': 'Êtes-vous sûr de vouloir supprimer ce format ?',
    'textDeleteTrack': 'Êtes-vous sûr de vouloir supprimer ce thème ?'
  },
  'previewModal': {
    'title': 'Prévisualisation',
    'confirm': 'OK',
    'nothingToPreview': 'Rien à prévisualiser',
    'mdSupported': 'Markdown supporté'
  },
  'editModal': {
    'title': 'Edition',
    'confirm': 'Editer',
    'cancel': 'Annuler'
  },
  'deleteModal': {
    'title': 'Confirmation',
    'text': 'Êtes-vous sûr de vouloir suprimer ce commentaire ?',
    'confirm': 'Supprimer',
    'cancel': 'Annuler'
  },
  'steps': {
    'saveAsDraft': 'Enregistrer brouillon',
    'previous': 'Etape précédente',
    'next': 'Etape suivante',
    'validate': 'Valider',
    'close': 'Fermer',
    'yes': 'Oui',
    'no': 'Non',
    'step': 'Etape',
    'done': 'Terminé !',
    'required': '* Champ requis.'
  },
  'result': {
    'success': 'Bravo !',
    'successMessage': 'Votre présentation a été envoyée. Vous recevrez bientôt un email de confirmation. Nous vous recontacterons dès que nous aurons fait notre choix.',
    'goToHome': 'Retour à la page principale'
  },
  'contact': {
    'message': 'Message',
    'validate': 'Valider',
    'edit': 'Editer',
    'hint': 'Un oubli, une question ? Postez votre message ici, un administrateur vous répondra dès que possible.'
  },
  'admin': {
    'logout': 'Se déconnecter',
    'allowSubmissions': 'Autoriser les utilisateurs à poster de nouveaux talks ?',
    'session': 'Talk',
    'sessions': 'Talks',
    'administration': 'Administration',
    'toggle': 'Ouvrir le volet',
    'clearSorting': 'Annuler le tri',
    'clearFilter': 'Annuler les filtres',
    'export': 'Exporter',
    'speaker': 'Conférencier',
    'title': 'Titre',
    'difficulty': 'Difficulté',
    'track': 'Catégorie',
    'trackModified': 'Talk modifié.',
    'modify': 'Modifier',
    'description': 'Description',
    'mean': 'Moyenne',
    'date': 'Date',
    'deliberation': 'Délibération',
    'contact': 'Contact',
    'commentaries': 'Commentaires',
    'message': 'Message',
    'votes': 'Votes',
    'you': 'Vous',
    'financialHelp': 'Aide financière',
    'deleteSession': 'Supprimer la session',
    'validated': 'Sessions validées',
    'draft': 'Sessions en cours d\'édition',
    'lastModification': 'Dernière activité',
    'never': 'Jamais',
    'noVote': 'Sans avis',
    'none': 'Aucune',
    'hate': 'Rejeté',
    'love': 'Coup de coeur',
    'next': 'Talk suivant',
    'main': 'Main page',
    'previous': 'Talk précédente',
    'notReviewedYet': 'Pas encore notés',
    'edit': 'Editer',
    'delete': 'Supprimer',
    'allType': 'Tous',
    'newMessages': 'Nouveaux messages',
    'nextToRate': 'Prochain talk à noter',
    'community': 'Nom de la communautée organisatrice',
    'eventName': 'Nom de l\'événement',
    'decisionDate': 'Date de fin des votes',
    'releaseDate': 'Date de fin des soumissions',
    'startDate': 'Date du début de l\'événement',
    'configCfp': 'Configuration du CFP',
    'btn.save': 'Sauvegarder'
  },
  'owner': {
    'admins': 'Admins',
    'config': 'Configuration',
    'hintAdmins': 'Ajouter les emails des admins',
    'adminsSuccess': 'La liste des admins a été mise à jour',
    'tracksAndFormats': 'Thèmes et formats',
    'tracks': 'Thèmes',
    'trackName': 'Libellé',
    'trackDescription': 'Description',
    'trackNew': 'Nouveau thème',
    'trackDelete': 'Supprimer',
    'formats': 'Formats',
    'formatName': 'Libellé',
    'formatDuration': 'Durée en minutes',
    'formatDescription': 'Description',
    'formatNew': 'Nouveau format',
    'formatDelete': 'Supprimer'
  },
  'config': {
    'logout': 'Se déconnecter',
    'login': 'Se connecter',
    'config': 'Configuration',
    'linkMyAccount': 'Lier mon compte Google Drive avec Call For Paper',
    'configurationNeeded': 'L\'administrateur doit configurer l\'application avant que vous puissiez l\'utiliser',
    'success': 'Votre compte est maintenant lié',
    'error': 'Erreur lors de la configuration',
    'configureLink': 'Configurer l\'application'
  },
  'error': {
    'backendcommunication': 'Désolé, il y a eu un problème avec le serveur distant',
    'noInternet': 'Désolé, il y a eu une problème de connexion, êtes vous connecté à internet ?'
  },
  'form': {
    errors: {
      required: 'Ce champ est obligatoire'
    }
  },
  'just_now': 'à l\'instant',
  'seconds_ago': 'il y a {{time}} secondes',
  'a_minute_ago': 'il y a une minute',
  'minutes_ago': 'il y a {{time}} minutes',
  'an_hour_ago': 'il y a une heure',
  'hours_ago': 'il y a {{time}} heures',
  'a_day_ago': 'hier',
  'days_ago': 'il y a {{time}} jours',
  'a_week_ago': 'il y a une semaine',
  'weeks_ago': 'il y a {{time}} semaines',
  'a_month_ago': 'il y a un mois',
  'months_ago': 'il y a {{time}} mois',
  'a_year_ago': 'il y a un an',
  'years_ago': 'il y a {{time}} ans',
  'over_a_year_ago': 'il y a plus d\'un an',
  'seconds_from_now': 'dans une seconde',
  'a_minute_from_now': 'dans une minute',
  'minutes_from_now': 'dans {{time}} minutes',
  'an_hour_from_now': 'dans une heure',
  'hours_from_now': 'dans {{time}} heures',
  'a_day_from_now': 'demain',
  'days_from_now': 'dans {{time}} jours',
  'a_week_from_now': 'dans une semaine',
  'weeks_from_now': 'dans {{time}} semaine',
  'a_month_from_now': 'dansun mois',
  'months_from_now': 'dans {{time}} mois',
  'a_year_from_now': 'dans un an',
  'years_from_now': 'dans {{time}} ans',
  'over_a_year_from_now': 'dans plus d\'un an'
}
