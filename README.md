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

## USers/Update

## Users/Get

## Posts/Create

## Posts/Get All

## Posts/Get One

## Posts/Update

## Posts/Delete

 
