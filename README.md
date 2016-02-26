Uses FlowRouter to add a route group to `/secrets` to browse data collected from meteor-imsi-catcher-catcher.

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

Open http://HOST/secrets?secret=CATCHER_SECRETS_KEY and explore the data.
