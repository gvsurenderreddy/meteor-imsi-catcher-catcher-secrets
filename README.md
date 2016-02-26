Uses FlowRouter to add a route group to `/secrets` to browse data collected from meteor-imsi-catcher-catcher.

## Usage
````
meteor add marvin:meteor-imsi-catcher-catcher-secrets
````

Add `CATCHER_SECRETS_KEY` to your `settings.json`. It should be set to a random long string like:

````
{
  CATCHER_SECRETS_KEY: "REALLY_LONG_STRING_OH_MY"
}
````

Start your server with `meteor --settings settings.json`.

Open http://HOST/secrets?secret=CATCHER_SECRETS_KEY and explore the data.
