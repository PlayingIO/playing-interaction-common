const { DocTypes } = require('playing-content-common');

module.exports = Object.assign({
  collection: {
    "packages": "playing-interaction-elements",
    "type":"Collection",
    "facets":[
      "Versionable",
      "Collection",
      "Tagable",
      "NotCollectionMember"
    ]
  },
  favorite: {
    "packages": "playing-interaction-elements",
    "type":"Favorite",
    "facets":[
      "Versionable",
      "Collection",
      "Tagable",
      "NotCollectionMember"
    ]
  },
  workspace: {
    "type": "Workspace",
    "packages": "playing-interaction-elements",
    "facets": [
      "Folderish"
    ],
    "subtypes": ['collection', 'file', 'folder', 'note']
  },
}, DocTypes);