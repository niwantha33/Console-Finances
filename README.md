# Console-Finances

## Description

## find_greatest_profit_period

This function is designed to find the month and profit amount corresponding to the greatest increase in profits over a given period of time, based on a given array of "finances" data.

### Parameters
- `finances`: an array of finances data, where each element is a sub-array containing a month and a profit amount.

### Return value
The function returns an array containing the month and profit amount corresponding to the greatest increase in profits over the given period of time.

### Example
```JavaScript
find_greatest_profit_period([["Jan", 100], ["Feb", 50], ["Mar", 75]])
```


## find_greatest_decrease_period

This function is designed to find the month and loss amount corresponding to the greatest decrease in losses over a given period of time, based on a given array of "finances" data.

### Parameters
- `finances`: an array of finances data, where each element is a sub-array containing a month and a loss amount.

### Return value
The function returns an array containing the month and loss amount corresponding to the greatest decrease in losses over the given period of time.

### Example
```JavaScript
find_greatest_decrease_period([["Jan", -100], ["Feb", -50], ["Mar", -75]])
Output: `["Mar", -75]` 
```