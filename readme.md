![](inflation.gif)
# Inflation
This calculates the value of a certain amount of money against a certain year. I'm coming up short on how to generically describe what this module does so I'll just spit it out.

This module tells you how much a certain dollar amount in a certain year is worth today. It uses the US Department of Labor's calculator to get the number. There's actually a lot more accuracy that could be added to this but I'm sticking with just years.

## Install
`npm i @dillonchr/inflation`

## Usage
There are 3 arguments required.

1. `year` - four digit year on or after 1913
1. `amount` - number that will be turned into a float if it isn't already
1. `callback` - with standard (err, result) signature

If the year is less than 1913 you'll get a smart alec response. If the year is the same as this year it'll just respond with your raw amount input. Smart alec response if you ask for future year too. Sorry. Open to PRs :beers:
