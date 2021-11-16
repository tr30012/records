# records

## API Endpoint
* `https://records-web-api.herokuapp.com/api/`

## Web Client
* `https://records-web-client.herokuapp.com/api/` for mainnet

## Auth/Login 
**Login request URL**
```
POST /auth/login
```

**Login request body**
```json 
{
    "username": "username",
    "password": "password",
}
```

**Respose**
```json 
{
    "access": "access-token",
    "refresh": "refresh-token",
    "id:": "id"
}
```

## Auth/Register
**Register request URL**
```
POST /auth/register
```

**Registerrequest body**
```json 
{
    "username": "username",
    "password": "password",
    "email:": "email"
}
```

**Respose**
```json 
{
    "access": "access-token",
    "refresh": "refresh-token",
    "id:": "id"
}
```

## Auth/Refresh
**Refresh request URL**
```
POST /auth/refresh
```

**Refresh cookies body**
```json 
{
    "refreshToken": "refreshToken"
}
```

**Respose**
```json 
{
    "access": "access-token",
    "refresh": "refresh-token",
    "id:": "id"
}
```

## Auth/Logout
**Logout request URL**
```
POST /auth/logout
```

**Respose**
```json 
{
    "status": "OK"
}
```

## Users/Delete
**request URL**
```
DELETE /users/:id
```

**Respose**
```json 
{
    "status": "OK"
}
```

## USers/Update
**request URL**
```
PUT /users/:id
```

**Respose**
```json 
{
    "id": "id",
    "email": "email",
    "username": "username",
}
```

**Request body**
```json 
{
    "id": "id",
    "email": "email",
    "username": "username",
    "password": "newpassword"
}
```

## Users/Get
**request URL**
```
GET /users/:id
```

**Respose**
```json 
{
    "id": "id",
    "email": "email",
    "username": "username"
}
```

## Posts/Create
**request URL**
```
POST /posts
```

## Posts/Get All
**request URL**
```
GET /posts
```

## Posts/Get One
**request URL**
```
GET /posts/:id
```

## Posts/Update
**request URL**
```
PUT /posts/:id
```

## Posts/Delete
**request URL**
```
DELETE /posts/:id
```

## Upload Files
**request URL**
```
DELETE /upload
```



 
