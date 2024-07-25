AIUtil.SetContext Browser("creationtime:=0")
wait(5)
AIUtil("search").Search "17t"
wait(4)
AIUtil.FindTextBlock("HP ENVY - 17t Touch").Click
AIUtil("button", "ADD TO CART").Click
AIUtil("shopping_cart").Click
wait(5)
AIUtil("button", micAnyText, micFromBottom, 1).Click
AIUtil("button", "NEXT").Click


