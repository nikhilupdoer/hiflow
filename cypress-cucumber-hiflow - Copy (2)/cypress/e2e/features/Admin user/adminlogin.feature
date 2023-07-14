Feature: Login page

    Feature Login page will work depending on the user credentials.

     Background:
         Given Navigate to Admin Base Url
    Scenario: Success Login
#       Given User is on Login page
        When An Admin user enters the username the password and clicks on the login button
#     And User Enters username
#     And User Enters password
#     And Click on login button
        Then Verify the Admin Url
       
