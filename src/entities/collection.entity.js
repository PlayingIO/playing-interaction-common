const Entity = require('mostly-entity');
const fp = require('mostly-func');
const { BlobEntity, DocTypes } = require('playing-content-common');

const CollectionEntity = new Entity('Collection', {
  file: { using: BlobEntity },
  files: { using: BlobEntity },
});

CollectionEntity.expose('parent', (obj, options) => {
  if (options.provider && obj.parent && obj.parent.parent) {
    return fp.omit(['parent'], obj.parent);
  }
  return obj.parent;
});

CollectionEntity.expose('metadata', (obj, options) => {
  obj.metadata = obj.metadata || {};

  const Types = options.DocTypes || DocTypes;

  if (Types[obj.type]) {
    obj.metadata.facets = Types[obj.type].facets;
    obj.metadata.packages = Types[obj.type].packages;
  }

  return fp.sortKeys(obj.metadata);
});

CollectionEntity.discard('_id');

module.exports = CollectionEntity.freeze();
