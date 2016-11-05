const EditProposalController = function($translate, $state) {
  'ngInject'

  this.proposalTitle = this.proposal.name

  this.formats = this.formats.plain()
  this.formatObjects = _.keyBy(this.formats, 'id')

  this.tracks = this.tracks.plain()
  this.trackObjects = _.keyBy(this.tracks, 'id')

  this.availableLanguages = $translate.getAvailableLanguageKeys()

  this.difficultyLevels = [{
    value: 1, level: 'BEGINNER'
  }, {
    value: 2, level: 'INTERMEDIATE'
  }, {
    value: 3, level: 'EXPERT'
  }]

  const finished = () => {
    $state.go('welcome')
  }

  this.save = (proposal) => {
    proposal.save().then(finished)
  }

  this.submit = (proposal) => {
    proposal.submit().then(finished)
  }
}

export const EditProposal = {
  controller: EditProposalController,
  templateUrl: 'app/components/proposal/edit-proposal.html',
  bindings: {
    proposal: '=',
    tracks: '=',
    formats: '='
  }
}
