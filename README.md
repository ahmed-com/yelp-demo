# Usage :
This is a purly UI component, that dosn't implement the data fetching, data filtering and/or typeahead selection. It can be used as a regular inline custom select input element.

# Value :

The expected input value "for example when using *v-model*" is 
> {service: string, location: string}

# Events :
- search 

# Props :
1. servicePlaceholder
- string

the service placeholder text

2. locationPlaceholder
- string

the location placeholder text

3. serviceTypeahead
- string

A suggested hint for the service based on the user input 

4. locationTypeahead
- string

A suggested hint for the location based on the user input 

5. serviceSuggestions
- [string]

the list of suggested inputs for the service

6. locationSuggestions
- [string]

the list of suggested inputs of the location