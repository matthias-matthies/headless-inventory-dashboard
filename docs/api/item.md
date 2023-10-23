The Item Controller API allows you to perform CRUD operations on items and their attributes.

## Base URL

```
http://headless-inventory.vercel.app/api
```

## Endpoints

### GET /items

List all items.

#### Parameters

- `variants` (optional): If set to `true`, includes variant attributes for each item. Default is `false`.
- `attributes` (optional): If set to `true`, includes attributes for each item. Default is `false`.

#### Example Request

```
GET /api/items?variants=true&attributes=false
```

#### Example Response

```json
{
    "data": [
        {
            "id": 1,
            "item_id": null,
            "created_at": "2022-01-01T00:00:00.000000Z",
            "updated_at": "2022-01-01T00:00:00.000000Z"
        },
        {
            "id": 2,
            "item_id": null,
            "created_at": "2022-01-02T00:00:00.000000Z",
            "updated_at": "2022-01-02T00:00:00.000000Z"
        }
    ]
}
```

### POST /items

Create a new item.

#### Request Body

```json
{
    "item_id": 1,
    "attributes": {
        "1": "attribute1",
        "2": "attribute2"
    }
}
```

#### Example Request

```
POST /api/items
Content-Type: application/json

{
    "item_id": 1,
    "attributes": {
        "1": "attribute1",
        "2": "attribute2"
    }
}
```

#### Example Response

```json
{
    "message": "Item created successfully",
    "data": {
        "id": 3,
        "item_id": 1,
        "created_at": "2022-01-03T00:00:00.000000Z",
        "updated_at": "2022-01-03T00:00:00.000000Z"
    }
}
```

### GET /items/{id}

Get an item by ID.

#### Parameters

- `id`: The ID of the item.

#### Example Request

```
GET /api/items/1
```

#### Example Response

```json
{
    "data": {
        "id": 1,
        "item_id": null,
        "created_at": "2022-01-01T00:00:00.000000Z",
        "updated_at": "2022-01-01T00:00:00.000000Z"
    }
}
```

### PUT /items/{id}

Update an existing item.

#### Request Body

```json
{
    "item_id": 2,
    "attributes": {
        "1": "updated attribute1",
        "2": "updated attribute2"
    }
}
```

#### Example Request

```
PUT /api/items/1
Content-Type: application/json

{
    "item_id": 2,
    "attributes": {
        "1": "updated attribute1",
        "2": "updated attribute2"
    }
}
```

#### Example Response

```json
{
    "message": "Item updated successfully.",
    "data": {
        "id": 1,
        "item_id": 2,
        "created_at": "2022-01-01T00:00:00.000000Z",
        "updated_at": "2022-01-01T00:00:00.000000Z"
    }
}
```

### DELETE /items/{id}

Delete an item by ID.

#### Parameters

- `id`: The ID of the item.

#### Example Request

```
DELETE /api/items/1
```

#### Example Response

```json
{
    "message": "Item deleted successfully"
}
```
