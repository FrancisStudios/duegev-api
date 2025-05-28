# 🔌 Users Endpoint

## General information

Path: ``/users``

Methods: ``GET``

## ``GET`` endpoint specs

### 1. GET all users

You can get the list of all users by accessing the root path of the endpoint via a ``GET`` request

Example ``get(   {@host}/users    );``

You'll receive a JSON object with the list of all users (password hash might be redacted - so don't count on that)


RESPONSE:
```JSON
{ 
    "status": "OK", 
    "message": [
        {
            "_id":"683043c0de2f1c4564ba08fd",
            "uid":"1","username":"francis",
            "password":"password",
            "playerName":"Protector Yehem",
            "preferredLanguage":"DN",
            "privileges":"SUDO"
        },
        {
            "_id":"6835e207aa7e8b3d98e6be39",
            "uid":"2",
            "username":"mendel",
            "password":"password",
            "playerName":"King Mendelas",
            "preferredLanguage":"EN",
            "privileges":"SUDO"
        }
    ] 
}
```

### 2. GET specific user

You can search for a specific user if you add the **user** get parameter to your url just like this ``@{host}/users?user=<user>``

Example ``get(   @{host}/users?user=francis   )``

RESPONSE:
```JSON
{ 
    "status": "OK", 
    "message": [
        {
            "_id":"683043c0de2f1c4564ba08fd",
            "uid":"1","username":"francis",
            "password":"password",
            "playerName":"Protector Yehem",
            "preferredLanguage":"DN",
            "privileges":"SUDO"
        }
    ]
}
```