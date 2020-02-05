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

## Mobile - testing on physical device📱

Plug phone into computer, open x-code and select Navi-dev then click the play button. 
- If I get an error like this, "**Can’t fing the ‘node’ binary to build the React Native bundle.**", do the following.
  - Got to `ios/Navi.xcodeproj/project.pbxproj`
  - Search for `NODE_BINARY` in the file
  - Run `which node` in any terminal window
  - Replace the value of `NODE_BINARY` with the value of `which node`
	
Can shake phone to open dev tools.

Remember to delete the app (dev version) and re-download regular app when I’m done deving.

