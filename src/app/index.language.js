import fr from './i18n/fr'
import en from './i18n/en'

export const i18n = ($translateProvider, tmhDynamicLocaleProvider) => {
  'ngInject'

  $translateProvider
    .useSanitizeValueStrategy('sanitizeParameters')
    .registerAvailableLanguageKeys(['en', 'fr'], {
      'en_*': 'en',
      'fr_*': 'fr'
    })
    .determinePreferredLanguage()
    .fallbackLanguage('fr')
    .translations('fr', fr)
    .translations('en', en)

  tmhDynamicLocaleProvider.localeLocationPattern('l10n/angular-locale_{{locale}}.js')
}
