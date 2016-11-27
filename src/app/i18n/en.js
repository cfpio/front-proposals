/* eslint max-len: "off" */
export default {
  COMMON: {
    FORM: {
      HELP: {
        REQUIRED: '*: mandatory field'
      }
    },
    BUTTON: {
      CANCEL: 'Cancel'
    }
  },
  PROPOSAL: {
    EDIT: {
      TITLE: {
        TITLE: 'Modification of "{{title}}"',
        NEW: 'New proposal'
      }
    },
    FORM: {
      NAME: {
        LABEL: 'Title of the presentation',
        PLACEHOLDER: 'Enter a title…',
        HELP: 'Provide a simple, clear title that summarizes what the participant will learn. Many speakers select a conference at the last moment, based on the title.'
      },
      DESCRIPTION: {
        LABEL: 'Description',
        PLACEHOLDER: 'Enter a description…',
        HELP: 'Describe your proposal, as participants will read it. You can use the Markdown syntax.'
      },
      REFERENCES: {
        LABEL: 'More information',
        PLACEHOLDER: 'Enter additional information…',
        HELP: 'Specify here all the important information about your presentation, which only the selection committee will see. Detail your presentation plan, all the elements that must make us choose your proposal of subject. You can include the URL to your slides if you want.'
      },
      FORMAT: {
        LABEL: 'Type of presentation'
      },
      LANGUAGE: {
        LABEL: 'Language'
      },
      TRACK: {
        LABEL: 'Theme'
      },
      DIFFICULTY: {
        LABEL: 'Level',
        LEVEL: {
          BEGINNER: {
            LABEL: 'Beginner',
            DESCRIPTION: 'Open to an audience with no specific knowledge on the subject'
          },
          INTERMEDIATE: {
            LABEL: 'Intermediate',
            DESCRIPTION: 'Open to an audience with some knowledge on the suject'
          },
          EXPERT: {
            LABEL: 'Expert',
            DESCRIPTION: 'For an expert or senior audience on the subject'
          }
        }
      },
      COSPEAKERS: {
        LABEL: 'Co-speakers',
        PLACEHOLDER: 'Enter email address of the co-speaker…',
        ADD: {
          TOOLTIP: 'Add a co-speaker'
        },
        REMOVE: {
          TOOLTIP: 'Remove the co-speaker'
        },
        HELP: 'If you are accompanied during this presentation (maximum 3 speakers), indicate the email address of the co-speakers.<br><b>Caution!</b> The entered email addresses must correspond to user accounts on cfp.io'
      },
      BUTTON: {
        SAVE_DRAFT: 'Save draft',
        SUBMIT: 'Submit'
      }
    }
  },
  LANG: {
    en: 'English',
    fr: 'Français'
  },
  MULTI_INPUT: {
    MAX_REACHED: 'Maximum count reached'
  },
  'DIALOGS_ERROR': 'Error',
  'DIALOGS_ERROR_MSG': 'An unknown error has occurred.',
  'DIALOGS_CLOSE': 'Close',
  'DIALOGS_PLEASE_WAIT': 'Please Wait',
  'DIALOGS_PLEASE_WAIT_ELIPS': 'Please Wait…',
  'DIALOGS_PLEASE_WAIT_MSG': 'Waiting on operation to complete.',
  'DIALOGS_PERCENT_COMPLETE': '% Complete',
  'DIALOGS_NOTIFICATION': 'Notification',
  'DIALOGS_NOTIFICATION_MSG': 'Unknown application notification.',
  'DIALOGS_CONFIRMATION': 'Confirmation',
  'DIALOGS_CONFIRMATION_MSG': 'Confirmation required.',
  'DIALOGS_OK': 'OK',
  'DIALOGS_YES': 'Yes',
  'DIALOGS_NO': 'No',
  'lang': {
    'fr-FR': 'Français',
    'en-US': 'English'
  },
  'header': {
    'login': 'Login',
    'logout': 'Logout',
    'dashboard': 'Dashboard',
    'review': 'Review',
    'schedule': 'Schedule',
    'configure': 'Configure',
    'profile': 'Profile',
    'openUntil': 'Open until the ',
    'decision': 'Decision the ',
    'admin': 'Admin'
  },
  'languageModal': {
    'choose': 'Choose a language',
    'search': 'Search languages...',
    'count1': 'This application is offered in',
    'count2': 'languages',
    'more': 'more',
    'close': 'Close'
  },
  'dashboard': {
    'createNewSession': 'Create a new talk',
    'submissionDisabled': 'Submitting new talks is disabled.',
    'editionTalks': 'Talks available for editing',
    'editionCoTalks': 'Cospeaker Talks available for editing',
    'noEditionTalks': 'You don\'t have any draft',
    'sendedTalks': 'Submitted talks',
    'draftModifiedAt': 'Draft modified the ',
    'modifiedAt': 'modified the ',
    'postedAt': 'submited the ',
    'noSendedTalks': 'You don\'t have submitted any talk yet',
    'verification': 'Verification',
    'verificationNeeded': 'An email has been sent to your address, click the link in it to confirm your account.',
    'submittedTalks': 'Submitted talks count: ',
    'sendedCoTalks': 'Submitted cospeaker talks'
  },
  'profile': {
    'title': 'My profile',
    'lastname': 'Last name',
    'firstname': 'First name',
    'gender': 'Gender',
    'genderMale': 'Male',
    'genderFemale': 'Female',
    'language': 'Favorite language',
    'phone': 'Phone',
    'company': 'Company',
    'bio': 'Bio',
    'bioPreview': 'Preview',
    'twitter': 'Twitter profile',
    'googleplus': 'Google + profile',
    'github': 'Github profile',
    'social': 'Other URLs (Blog, Linkedin, ...)',
    'tshirtSize': 'T-shirt size',
    // 'avatar': 'Profile picture',
    // 'hintAvatar': 'Select a picture for the website (least 360x360 and 5MB max)',
    // 'dropImage': 'Drop image here',
    // 'selectImage': 'Browse',
    'cancel': 'Cancel',
    'save': 'Save',
    'success': 'Profile saved',
    'error': 'Error saving the profile'
  },
  'login': {
    'email': 'Email',
    'password': 'Password',
    'login': 'Login',
    'noAccount': 'Don\'t have an account yet?',
    'signup': 'Signup',
    'or': 'Or',
    'signGoogle': 'Sign in with Google',
    'signGithub': 'Sign in with Github',
    'wait': 'Please wait',
    'badCredentials': 'Incorrect login or password',
    'alreadyLinked': 'There is already a user associated with this  provider'
  },
  'signup': {
    'signup': 'Sign up',
    'email': 'Email',
    'password': 'Password',
    'confirmPassword': 'Confirm Password',
    'yesAccount': 'Already have an account?',
    'loginNow': 'Log in now',
    'emailRequired': 'Your email address is required.',
    'emailPattern': 'Your email address is invalid.',
    'passwordMinLength': 'Password must be at least 6 characters long',
    'passwordRequired': 'Password is required.',
    'passwordMatch': 'Password must match.',
    'alreadyExists': 'There is already a user associated with this email'
  },
  'verify': {
    'title': 'Email ',
    'verified': 'Your email has been verified',
    'alreadyVerified': 'This account is already verified',
    'notVerified': 'Errror during verification'
  },
  'talkInfo': {
    'intro': 'Here some information on talk\'s format and talk\'s categories :',
    'formats': 'Formats',
    'categories': 'Categories'
  },
  'talk': {
    'edit': {
      'title': {
        'new': 'New talk',
        'update': 'Modification of talk "{{name}}"'
      },
      'saveDraft': 'Draft saved.',
      'saveSession': 'Session submitted. A confirmation email has been sent to you.'
    },
    'difficulty': {
      '1': 'Beginner',
      '2': 'Confirmed',
      '3': 'Expert'
    }
  },
  'step1': {
    'warning': 'Warning ! The informations given during this step will also be used for the talks already submitted.',
    'email': 'Email *:',
    'lastname': 'Name *:',
    'firstname': 'Firstname *:',
    'phone': 'Phone:',
    'errorPhone': 'Please enter a correct phone number',
    'company': 'Company:',
    'bio': 'Bio *:',
    'hintBio': 'Describe yourself with a few words. This description will be use to fill the website.',
    'social': 'Other URLs (Blog, Linkedin, ...) :',
    'twitter': 'Twitter Profil :',
    'googleplus': 'Google Plus Profil:',
    'github': 'Github Profil :',
    'hintSocial': 'Give us your socials networks data (for the website) : Twitter / G+ / Github / Blog.',
    'gender': 'T-shirt gender',
    'tshirtSize': 'T-shirt size'
  },
  'step2': {
    'name': 'Session name *',
    'description': 'Description *:',
    'hintDescription': 'Give a description of your talk. This description will be used to fill the website.',
    'references': 'References or complement informations :',
    'hintReferences': 'Is there any conferences where you have already spoken ? If you could give a link to the presentation, it\'s better.',
    'complement': 'Recommendation and additional information:',
    'difficulty': 'Difficulty * (Beginner, Confirmed, Expert):',
    'track': 'Track *:',
    'cospeaker': 'Co-speaker:',
    'hintCospeaker': 'If you are not alone on stage, give the co-speaker email. WARNING : cospeakers must have create an account with this email before.',
    'cospeakerNotFound': 'The cospeaker with email {{value}} doesn\'t exist.',
    'beginner': 'Beginner',
    'confirmed': 'Confirmed',
    'expert': 'Expert',
    'tracks': {
      'cloud': 'Cloud / BigData',
      'mobile': 'Mobile and internet of things',
      'web': 'Web',
      'discovery': 'Discovery'
    },
    'type': 'Type *:',
    'hintType': 'A conference must last about 45 minutes and a codelab about 2 hours.',
    'types': {
      'conference': 'Conference',
      'codelab': 'Codelab'
    },
    'hintTrack': 'Choose the track where you think your talk will be place.'
  },
  'step3': {
    'header1': 'Here is all the informations relatives to your venue. The following informations will be carefuly study for our decision. So please select Yes, only if needed.',
    'header2': 'Breakfast and lunch is offered the days of the event.',
    'financial': 'Do you need financial help ? *:',
    'labelTravel': 'Travel',
    'travel': 'I need financial help for the trip.',
    'date': 'For whitch date(s) ?:',
    'labelHotel': 'Housing',
    'hotel': 'I need financial help for the hotel.',
    'place': 'Where are you coming from ?:',
    'sendError': 'An error occurred during the submission, please retry.',
    'sryClosedSince': 'Sorry, submissions are closed since the '
  },
  'confirmModal': {
    'title': 'Confirmation',
    'text': 'Do you really want to submit this talk ? Once sent you will not be able to edit it.',
    'textDelete': 'Do you really want to delete this session ? Once done you will not be able to recover it.',
    'confirm': 'OK',
    'confirmDelete': 'Delete',
    'cancel': 'Cancel',
    'textDeleteFormat': 'Do you really want to delete this format?',
    'textDeleteTrack': 'Do you really want to delete this track?'
  },
  'previewModal': {
    'title': 'Preview',
    'confirm': 'OK',
    'nothingToPreview': 'Nothing to preview',
    'mdSupported': 'Markdown supported'
  },
  'editModal': {
    'title': 'Edition',
    'confirm': 'Edit',
    'cancel': 'Cancel'
  },
  'deleteModal': {
    'title': 'Confirmation',
    'text': 'Do you really want to delete this comment ?',
    'confirm': 'Delete',
    'cancel': 'Cancel'
  },
  'steps': {
    'saveAsDraft': 'Save as draft',
    'previous': 'Previous step',
    'next': 'Next step',
    'validate': 'Submit',
    'close': 'Close',
    'yes': 'Yes',
    'no': 'No',
    'step': 'Step',
    'done': 'Done !',
    'required': '* Required field.'
  },
  'result': {
    'success': 'Well done !',
    'successMessage': 'Your talk has been send. You will soon receive a confirmation email. We will contact you as soon as we will make our decision.',
    'goToHome': 'Back to main page'
  },
  'contact': {
    'message': 'Message',
    'validate': 'Submit',
    'edit': 'Edit',
    'hint': 'A question ? A mistake ? Submit your question here, an administrator will answer as soon as possible.'
  },
  'admin': {
    'logout': 'Logout',
    'allowSubmissions': 'Allow users to submit new talks ?',
    'session': 'Talk',
    'sessions': 'Talks',
    'administration': 'Administration',
    'toggle': 'Toggle navigation',
    'clearSorting': 'Clear sorting',
    'clearFilter': 'Clear filters',
    'export': 'Export',
    'title': 'Title',
    'difficulty': 'Difficulty',
    'track': 'Track',
    'trackModified': 'Track edited.',
    'modify': 'Change',
    'description': 'Description',
    'mean': 'Mean',
    'date': 'Date',
    'deliberation': 'Deliberation',
    'contact': 'Contact',
    'commentaries': 'Commentaries',
    'message': 'Message',
    'votes': 'Votes',
    'you': 'You',
    'financialHelp': 'Financial Help',
    'deleteSession': 'Delete session',
    'validated': 'Published talks',
    'draft': 'Talks being edited',
    'speaker': 'Speaker',
    'lastModification': 'Last activity',
    'never': 'Never',
    'noVote': 'Without opinion',
    'none': 'None',
    'hate': 'Rejected',
    'love': 'Favorite',
    'next': 'Next talk',
    'main': 'Page principale',
    'previous': 'Previous talk',
    'notReviewedYet': 'Not reviewed yet',
    'edit': 'Edit',
    'delete': 'Delete',
    'allType': 'All',
    'newMessages': 'New messages',
    'nextToRate': 'Next talk to rate'
  },
  'owner': {
    'admins': 'Admins',
    'config': 'Configuration',
    'hintAdmins': 'Enter admins email',
    'adminsSuccess': 'Admin list updated',
    'tracksAndFormats': 'Tracks and formats',
    'tracks': 'Tracks',
    'trackName': 'Name',
    'trackDescription': 'Description',
    'formats': 'Formats',
    'formatName': 'Name',
    'formatDuration': 'Duration in minutes',
    'formatDescription': 'Description'
  },
  'config': {
    'login': 'Login',
    'logout': 'Logout',
    'config': 'Configuration',
    'linkMyAccount': 'Link my Google Drive account with Call For Paper',
    'configurationNeeded': 'Administrator must configure the application before you use it',
    'success': 'Your account has been linked',
    'error': 'Error linking your account with Google Drive',
    'configureLink': 'Configure the application'
  },
  'error': {
    'backendcommunication': 'Sorry, a problem occure with the server',
    'noInternet': 'Sorry, it seems that your are not connected to internet'
  },
  'form': {
    errors: {
      required: 'This field is required'
    }
  },
  'just_now': 'just now',
  'seconds_ago': '{{time}} seconds ago',
  'a_minute_ago': 'a minute ago',
  'minutes_ago': '{{time}} minutes ago',
  'an_hour_ago': 'an hour ago',
  'hours_ago': '{{time}} hours ago',
  'a_day_ago': 'yesterday',
  'days_ago': '{{time}} days ago',
  'a_week_ago': 'a week ago',
  'weeks_ago': '{{time}} weeks ago',
  'a_month_ago': 'a month ago',
  'months_ago': '{{time}} months ago',
  'a_year_ago': 'a year ago',
  'years_ago': '{{time}} years ago',
  'over_a_year_ago': 'over a year ago',
  'seconds_from_now': '{{time}} seconds from now',
  'a_minute_from_now': 'a minute from now',
  'minutes_from_now': '{{time}} minutes from now',
  'an_hour_from_now': 'an hour from now',
  'hours_from_now': '{{time}} hours from now',
  'a_day_from_now': 'tomorrow',
  'days_from_now': '{{time}} days from now',
  'a_week_from_now': 'a week from now',
  'weeks_from_now': '{{time}} weeks from now',
  'a_month_from_now': 'a month from now',
  'months_from_now': '{{time}} months from now',
  'a_year_from_now': 'a year from now',
  'years_from_now': '{{time}} years from now',
  'over_a_year_from_now': 'over a year from now'
}
