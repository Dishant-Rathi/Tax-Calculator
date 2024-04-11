# Tax-Calculator
### References & Requirements

- The tax calculation works based on this formula -
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
        - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
        - if Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax
    - Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60
        - Example
            - Age = 34, Income = 40 Lakhs, no deductions, tax = .3 * (40 - 8) = .3 * 32 = 9.6 Lakhs
- Do not restrict user from entering incorrect values like characters in the number fields
    - Highlight a error icon to the right of the input field (shown as an example in above image as a circle with `!`). Hovering over it should show the error in a tooltip
    - If no errors are present, dont show the error icon
    - This should be present in all the number fields
- The age dropdown field should have 3 values -
    - <40
    - ≥ 40 & < 60
    - ≥ 60
    - If user has not entered this value and clicks on submit, show a error icon hovering over which should show that input field is mandatory
- Error icons should not be visible in the form by default.
- Clicking on submit should show a modal which would show the final values based on above calculations.

# Demo Link
  https://eclectic-squirrel-3591f3.netlify.app/

# Screenshots

![image](https://github.com/Dishant-Rathi/Tax-Calculator/assets/115811248/8dbf8487-4891-412b-b036-2d929c6cf88b)

![image](https://github.com/Dishant-Rathi/Tax-Calculator/assets/115811248/daba4dce-cf55-40b3-99e2-ec8ececd73df)

![image](https://github.com/Dishant-Rathi/Tax-Calculator/assets/115811248/ae77c380-06f3-486b-b099-b5d34d52ebc0)

![image](https://github.com/Dishant-Rathi/Tax-Calculator/assets/115811248/9cccca3e-c646-4e72-868a-2e73f5142db8)

![image](https://github.com/Dishant-Rathi/Tax-Calculator/assets/115811248/926724f6-90f4-402d-bb77-53194b436c51)

![image](https://github.com/Dishant-Rathi/Tax-Calculator/assets/115811248/a1374bc9-c238-41e1-924a-1fa2e65760ee)

![image](https://github.com/Dishant-Rathi/Tax-Calculator/assets/115811248/d2dde58d-b1c0-4e39-828b-5130a02c7705)

![image](https://github.com/Dishant-Rathi/Tax-Calculator/assets/115811248/acebf79b-310d-42f3-909d-4f8b02acdffe)

![image](https://github.com/Dishant-Rathi/Tax-Calculator/assets/115811248/7ca57d5a-60f2-4879-a710-0f40a4744970)

![image](https://github.com/Dishant-Rathi/Tax-Calculator/assets/115811248/b4c37f51-cdd0-422e-91f3-3be441b410fb)







