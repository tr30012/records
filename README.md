# records

## API Endpoint
* `https://records-web-api.herokuapp.com//api/`

## Web Client
* `https://records-web-client.herokuapp.com//api/` for mainnet

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


 
