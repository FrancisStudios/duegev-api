# 🫱 Intents

Intents are essential **signals** in programming that informs an API on what you are wanting it to do with the provided data. 

In your queries (most of your queries) you will have to provide an intent in your request object so the API can check your privileges on the action requested. 

Your request queries will look like this:

```Javascript
{
    "intent": "YOUR_INTENT_ENUMERATOR",
    "auth": { ... }
    "payload": {
        ...
    }
}
```


## List of intents

``` Javascript
```

for more details please refer to the `/src/API/model/intents.js` file. 