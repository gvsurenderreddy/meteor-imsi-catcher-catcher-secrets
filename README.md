Uses FlowRouter to add a route group to `/secrets/{Meteor.settings.CATCHER_SECRETS_KEY}`.

## Usage
````
meteor add marvin:meteor-imsi-catcher-catcher-secrets
````

Add `SECRET_PATH` to your `settings.json`. It should be set to a random long string like:

````
{
  CATCHER_SECRETS_KEY: "sldkfjlsdjflaksjfdsdfjeo2398rfdwedf9wewojlj"
}
````

Start your server with `meteor --settings settings.json`.

Open http://HOST/secrets/CATCHER_SECRETS_KEY and explore your data.
