/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xwgk1ror4w9ag3g",
    "created": "2023-10-02 03:48:24.032Z",
    "updated": "2023-10-02 03:48:24.032Z",
    "name": "media",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rwzy6q0k",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "c1iai1vt",
        "name": "year",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "o8atkk2i",
        "name": "category",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "TV Series",
            "Movie"
          ]
        }
      },
      {
        "system": false,
        "id": "cho2g39l",
        "name": "rating",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "PG",
            "E"
          ]
        }
      },
      {
        "system": false,
        "id": "holuhi3y",
        "name": "isBookmarked",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ljj0qv2w",
        "name": "isTrending",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xwgk1ror4w9ag3g");

  return dao.deleteCollection(collection);
})
