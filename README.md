In this project BrandStorm we are creating an app useful for the impactful and convenient search for various Sporting Brands available in the Country. We will be focusing to Distinguish Sporting Wears, Sports Shoes and the playing kits for players playing specific sports. 
Hence making it easier to buy, search and find wears, spikes or accessories of their liking.
For that purpose our app would be comprising of the following:

EntryScreen: Asking user to Login or Signup depending upon whether or not he is authenticated.

SignUpScreeen: Asking user for his E-mail, his name, BrandStorm Account Password which he needs to confirm in the next field after which he will be navigated to login screen to login with the newly authenticated credentials.

LoginScreen: Two text fields to enter email and BrandStorm Account Password. With a forget password touchable opacity navigating to forget password screen.

MainScreen: If LogIn is successful then it navigates to this screen which displays 3 horizontal flatlists on already selected Home Screen Tab for:
1.	Sporting Shoes
2.	Sporting Wears
3.	Sporting Accessories
Each of the flat list is fetched from RealTime Database created with the name of the app BrandStorm. It fetches the key as id, Title, Description, Image, Price and a Boolean value Liked from Database and displays it.

TabBar: The main screen has an accessible Tab Bar with 
Two Tabs:
1.	Automatically selected and displayed Home Screen.
2.	About Bar displaying the information regarding creators of the App.
