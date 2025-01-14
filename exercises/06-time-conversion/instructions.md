Given a time in -hour AM/PM format, convert it to military (24-hour) time.
Note:

- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.

Examples:

- Return '12:01:00' for input '12:01:00PM'.
- Return '00:01:00' for input '12:01:00AM'.

Function Description:

Complete the `timeConversion` function in the editor below. It should return a new string representing the input time in 24-hour format.

`timeConversion` has the following parameter(s):

- `string s`: a time in 12-hour format

Returns:

- `string`: the time in 24-hour format

Input Format:

- A single string `s` that represents a time in 12-hour clock format (i.e., 'hh:mm:ssAM' or 'hh:mm:ssPM').
