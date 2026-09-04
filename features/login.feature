Feature: User login

Scenario: Successful login with valid credentials
  Given I navigate to the login page
  When I submit valid credentials
  Then I should see the alert message
  And It should say a success message
  When I am done and then click in logout
  Then I should see the login page again
  And I should see the alert message
  And It should see a logged out message