The Attribute Controller API allows you to perform CRUD operations on attributes.

## Base URL

```
http://headless-inventory.vercel.app/api
```

## Endpoints

### GET /attributes

List all attributes.

#### Example Request

```
GET /api/attributes
```

#### Example Response

```json
{
    "data": [
        {
            "id": 1,
            "group_id": 1,
            "name": "attribute1",
            "created_at": "2022-01-01T00:00:00.000000Z",
            "updated_at": "2022-01-01T00:00:00.000000Z"
        },
        {
            "id": 2,
            "group_id": 2,
            "name": "attribute2",
            "created_at": "2022-01-02T00:00:00.000000Z",
            "updated_at": "2022-01-02T00:00:00.000000Z"
        }
    ]
}
```

### POST /attributes

Create a new attribute.

#### Request Body

```json
{
    "group_id": 1,
    "name": "attribute1"
}
```

#### Example Request

```
POST /api/attributes
Content-Type: application/json

{
    "group_id": 1,
    "name": "attribute1"
}
```

#### Example Response

```json
{
    "message": "Attribute created successfully",
    "data": {
        "id": 3,
        "group_id": 1,
        "name": "attribute1",
        "created_at": "2022-01-03T00:00:00.000000Z",
        "updated_at": "2022-01-03T00:00:00.000000Z"
    }
}
```

### GET /attributes/{id}

Get an attribute by ID.

#### Parameters

- `id`: The ID of the attribute.

#### Example Request

```
GET /api/attributes/1
```

#### Example Response

```json
{
    "data": {
        "id": 1,
        "group_id": 1,
        "name": "attribute1",
        "created_at": "2022-01-01T00:00:00.000000Z",
        "updated_at": "2022-01-01T00:00:00.000000Z"
    }
}
```

### PUT /attributes/{id}

Update an existing attribute.

#### Request Body

```json
{
    "group_id": 2,
    "name": "updated attribute1"
}
```

#### Example Request

```
PUT /api/attributes/1
Content-Type: application/json

{
    "group_id": 2,
    "name": "updated attribute1"
}
```

#### Example Response

```json
{
    "message": "Attribute updated successfully",
    "data": {
        "id": 1,
        "group_id": 2,
        "name": "updated attribute1",
        "created_at": "2022-01-01T00:00:00.000000Z",
        "updated_at": "2022-01-01T00:00:00.000000Z"
    }
}
```

### DELETE /attributes/{id}

Delete an attribute by ID.

#### Parameters

- `id`: The ID of the attribute.

#### Example Request

```
DELETE /api/attributes/1
```

#### Example Response

```json
{
    "message": "Attribute deleted successfully"
}
```
