# open-ai-stack
This will host an api and a frontend.

## An API
### Required Config
Config should be stored in a `.env` file:   
```text
CONFIG_KEY_1=value-here
CONFIG_KEY_2=value-2-here
```
Note: there is no env file here - the config stores secrets and I'm keeping my secrets

- `OPENAI_API_KEY`: this needs to work with the [openai api](https://platform.openai.com)

### Debug Logs
The api code includes the [debuglog](https://nodejs.org/docs/latest-v18.x/api/util.html#utildebuglogsection-callback) node utility. This debuglog prints conditional logs based on a cli param with the start of the project, i.e
```bash
NODE_DEBUG=configsetup node .
```
Here's a list of debuglogs
- `configsetup` - logs after successful config setup
- `openaisetup` - logs after successful openai setup

## A Frontend
(_coming soon_)