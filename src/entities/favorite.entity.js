const Entity = require('mostly-entity');
const fp = require('mostly-func');
const { BlobEntity, DocTypes } = require('playing-content-common');

const FavoriteEntity = new Entity('Favorite', {
  file: { using: BlobEntity },
  files: { using: BlobEntity },
});

FavoriteEntity.expose('parent', (obj, options) => {
  if (options.provider && obj.parent && obj.parent.parent) {
    return fp.omit(['parent'], obj.parent);
  }
  return obj.parent;
});

FavoriteEntity.expose('metadata', (obj, options) => {
  obj.metadata = obj.metadata || {};

  const Types = options.DocTypes || DocTypes;

  if (Types[obj.type]) {
    obj.metadata.facets = Types[obj.type].facets;
    obj.metadata.packages = Types[obj.type].packages;
  }

  return fp.sortKeys(obj.metadata);
});

FavoriteEntity.discard('_id');

module.exports = FavoriteEntity.freeze();
