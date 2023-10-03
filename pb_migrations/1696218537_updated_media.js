/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xwgk1ror4w9ag3g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z7aaijue",
    "name": "thumbnail",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xwgk1ror4w9ag3g")

  // remove
  collection.schema.removeField("z7aaijue")

  return dao.saveCollection(collection)
})
