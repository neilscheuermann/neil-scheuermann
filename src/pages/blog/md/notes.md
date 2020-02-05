--- 
title: "Work Notes" 
date: "2020-02-05" 
---


## When pulling from master in Elixir repos

When pulling from master, if you see the mix.exs or mix.lock has changed you
likely need to run `mix deps.get`. If there are new /migrations/ files, you’ll
likely need to run `mix ecto.migrate`


## Spinning up Docker

Open platform, pull from master, then run - `bin/halberd/start && dcud stormcrow
rapidash arth0-web akron-hammer && dc stop schema-registry akron-hammer`

(**Updated to restart platform**) `bin/auth/restart && dcud rabbitmq akron-hammer
rapidash && dc stop schema-registry review-rocket-web && dc ps`


## To start web 🖥

**BlackMamba:**
- `mix phx.server`
- `mix worker.start`
- `mix twilio_status_worker.start`

**Kazaam:** 
- `yarn start`

**Magic:** 
- `mix phx.server`

**In the podium folder:** 
- `./ngrok http --subdomain neilsch 4000`

**To run Team Chat:**
**AkronHammer:** 
- `mix phx.server`

If I need to run **Rapidash**, and Rapidashk keeps trying to force connect to port 4000, run `PORT=4300 mix phoenix.server`


## To start mobile 📱

When *switching between branches that have different deps*, run `make reset-deps &&
make clean && make server` to clean out previous builds and get everything
running smoothly. Can take about **8-10 minutes**.

To reset server build, run `make reset-server`

For quick reset, `make quick-reset-server`

**Link:** 
- `mix phx.server` 

**Navi**: 
- `make server`  
- iPhone: 
  - `make run-ios` 
- Android:
  - `make run-android` (must have Android Studio running and open virtual android device).  
- Can specify ios device with `react-native run-ios --simulator="iPhone 11"`

**Podium**: 
- `./ngrok http --subdomain neil_link 9001` (**IMPORTANT**:
Need to replace line 1 in Navi .env to be
`RN_API_HOST='http://neil_link.ngrok.io'` 

**Start dev-tools** 
- **~**: `open "rndebugger://set-debugger-loc?host=localhost&port=8081"` 
- “Cmd + D” -> “Debug JS Remotely” to see Chrome devtools in the computer
  browser.



## To be able to text back and forth locally

Can text back at **+1 254 374 2016** by doing the following:
- Go to “locations” in the ReviewRocket DB and replace “podium_number” with `+12543742016`


## Mobile - testing on physical device📱

Plug phone into computer, open x-code and select Navi-dev then click the play button. 
- If I get an error like this, "**Can’t fing the ‘node’ binary to build the React Native bundle.**", do the following.
  - Got to `ios/Navi.xcodeproj/project.pbxproj`
  - Search for `NODE_BINARY` in the file
  - Run `which node` in any terminal window
  - Replace the value of `NODE_BINARY` with the value of `which node`
    - Mine in this case was `/Users/neilscheuermann/.asdf/shims/node`
	
Can shake phone to open dev tools.

Remember to delete the app (dev version) and re-download regular app when I’m done deving.

