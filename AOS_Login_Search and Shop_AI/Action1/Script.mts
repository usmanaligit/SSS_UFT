AIUtil.SetContext Browser("creationtime:=0")
wait(8)
AIUtil("profile").Click
AIUtil("input", "Username").Type "sssdemo1"
AIUtil("input", "Password").Type "Password1"
AIUtil("button", "SIGN IN").Click



