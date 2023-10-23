The Group Controller API allows you to perform CRUD operations on groups.

## Base URL

```
[http://headless-inventory.vercel.app/api](http://headless-inventory.vercel.app/api)
```

## Endpoints

### GET /groups

List all groups.

#### Parameters

- `attributes` (optional): If set to `true`, includes attributes for each group. Default is `false`.

#### Example Request

```
GET /api/groups?attributes=true
```

#### Example Response

```json
{
    "data": [
        {
            "id": 1,
            "name": "Group 1",
            "created_at": "2022-01-01T00:00:00.000000Z",
            "updated_at": "2022-01-01T00:00:00.000000Z"
        },
        {
            "id": 2,
            "name": "Group 2",
            "created_at": "2022-01-02T00:00:00.000000Z",
            "updated_at": "2022-01-02T00:00:00.000000Z"
        }
    ]
}
```

### POST /groups

Create a new group.

#### Request Body

```json
{
    "name": "Group 3"
}
```

#### Example Request

```
POST /api/groups
Content-Type: application/json

{
    "name": "Group 3"
}
```

#### Example Response

```json
{
    "message": "Group created successfully",
    "data": {
        "id": 3,
        "name": "Group 3",
        "created_at": "2022-01-03T00:00:00.000000Z",
        "updated_at": "2022-01-03T00:00:00.000000Z"
    }
}
```

### GET /groups/{id}

Get a group by ID.

#### Parameters

- `id`: The ID of the group.

#### Example Request

```
GET /api/groups/1
```

#### Example Response

```json
{
    "data": {
        "id": 1,
        "name": "Group 1",
        "created_at": "2022-01-01T00:00:00.000000Z",
        "updated_at": "2022-01-01T00:00:00.000000Z"
    }
}
```

### PUT /groups/{id}

Update an existing group.

#### Request Body

```json
{
    "name": "Group 4"
}
```

#### Example Request

```
PUT /api/groups/1
Content-Type: application/json

{
    "name": "Group 4"
}
```

#### Example Response

```json
{
    "message": "Group updated successfully",
    "data": {
        "id": 1,
        "name": "Group 4",
        "created_at": "2022-01-01T00:00:00.000000Z",
        "updated_at": "2022-01-01T00:00:00.000000Z"
    }
}
```

### DELETE /groups/{id}

Delete a group by ID.

#### Parameters

- `id`: The ID of the group.

#### Example Request

```
DELETE /api/groups/1
```

#### Example Response

```json
{
    "message": "Group deleted successfully"
}
```
