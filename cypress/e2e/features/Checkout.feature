Feature: Test feature for search

  Scenario Outline: Search scenario for the list of search.
    Given Launch amal website <url>
    Then Verify website is loaded
#    And Click on category
#    Then Click on view all
#    And Search for a search term <value>
#    And Click on search icon
#    Then Search result PLP should display

    Examples:
      | url                     | value              |
      | https://www.amal.com/ | iphone |
