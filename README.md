<img width="720" height="390" alt="decimal bug systems testing" src="https://github.com/user-attachments/assets/9dd55414-bccb-4805-9de6-788a0ba23591" /># Systems Tesing Summative 1

## 1. Project Overview
This project is a Roman Numeral Encoder that converts an Arabic integer into Roman numerals using standard Roman numeral rules. It is a small beginner-friendly web application built with HTML, CSS, JavaScript, and Jest.

The purpose of this project is to demonstrate:
- Basic software development using web technologies
- Test-driven development (TDD)
- Requirements definition and traceability
- Project planning using GitHub Projects
- Automated testing and CI/CD pipelines
- Manual UI, accessibility and end-to-end testing
- Clear user and technical documentation

The project is intentionally simple but structured to reflect system testing ability and professional development practices.

## 2. Project Proposal

Project Idea: 
The Roman Numeral Encoder converts whole numbers between 1 and 3999 into Roman numerals using standard Roman numeral rules.

This project was chosen because:
- Roman numerals have clear, well-defined constraints
- Conversion logic can be implemented as a pure function
- Edge cases are easy to identify and test
- The UI can be kept simple and accessible
- The course tutorials provide a starting block
- Beginner level coding knowledge is required to build this application

<img width="1260" height="444" alt="image" src="https://github.com/user-attachments/assets/74634c44-8d35-4f7f-9da6-31d8379a2fca" />


## 3. Requirements

### 3.1 Functional Requirements (FR)
FR1: Convert integers from 1 to 3999 into Roman numerals  
- AC: Given an integer between 1 and 3999, when 'Romanize!' is clicked, then the correct Roman numeral is displayed.

FR2: Reject invalid values (0 and negatives)  
- AC: Given input <= 0, when 'Romanize!' is clicked, then an error message is shown and no conversion is displayed.

FR3: Reject values above 3999  
- AC: Given input > 3999, when 'Romanize!' is clicked, then an error message is shown and no conversion is displayed.

FR4: Reject invalid input types  
- AC: Given decimal input or non-numeric input, when 'Romanize!' is clicked, then an error message is shown.

FR5: UI output  
- AC: The UI displays the result in a dedicated output panel.

### 3.2 Non-Functional Requirements (NFR)
NFR1 Accessibility: The form works with keyboard-only navigation and screen readers are informed of output updates.  
NFR2 Maintainability: Conversion logic is implemented as a pure function and unit tested.  
NFR3 Reliability: The same input must always produce the same output.

## 4. Project Planning and Management 
Project planning was carried out using GitHub Issues and a GitHub Projects Kanban board.

Board columns included: Backlog, Ready, In Progress, In Review, Done.

<img width="1803" height="972" alt="github kanban board" src="https://github.com/user-attachments/assets/88e546b9-6b84-4011-8ff3-cdbad25312ac" />

Ticket structure:
Each ticket includes a clear description, acceptance criteria and bug tickets include reproduction steps. Traceability is also clearly highlighted and shown in each ticket, with a new branch being created for each item to avoid confusion.
<img width="1872" height="930" alt="ticket example" src="https://github.com/user-attachments/assets/21796e5d-d4d7-4f71-8d39-94334a8c49d5" />


Example Bug Ticket:
BUG-1 - Decimal input not handled correctly

<img width="975" height="813" alt="bug ticket example" src="https://github.com/user-attachments/assets/93247a08-8786-4614-b9b8-1c44ca494523" />

Steps to reproduce:
- Enter 2.0
- Click Romanize!

Expected result:
Decimal input rejected

Actual result:
Conversion occurred.

This bug was fixed using a test-first approach.

Before fix: 
Decimals were still being converted, such as 2.0
<img width="720" height="390" alt="decimal bug systems testing" src="https://github.com/user-attachments/assets/8a9b8628-e7ef-4195-8f40-42087ee47618" />

This resulted in the test failing:
<img width="2493" height="1197" alt="bug evidence failing test" src="https://github.com/user-attachments/assets/5134fd40-71a6-4001-b205-1a90dfa559a2" />

After another unit test was added as part of the fix for this bug, the test had passed:
<img width="1806" height="774" alt="bug fix successful" src="https://github.com/user-attachments/assets/623fc202-f09d-4b4b-b2db-0b165f11f9ef" />

And this was reflected on the application:
<img width="714" height="432" alt="image" src="https://github.com/user-attachments/assets/0e7b4bda-dedc-4fa7-b682-8d3d607bc1c9" />

## 5. Coding standards and workflow
Coding Standards:
- camelCase naming for variables and functions
- Pure logic functions contain no DOM access
- UI code is limited to event handling and output
- Jest tests use descriptive test names

Workflow:
- Work tracked using GitHub issues
- One branch per ticket (feature or bugfix)
- Pull requests created for each issue
- Pull requests reference issues using 'Closes #<issue number>'

## 6. Requirement Traceability
| Requirement          | Issue     | PR        | Tests         |
| -------------------- | --------- | --------- | ------------- |
| FR1 Convert          | T2        | Linked PR | index.test.js |
| FR2 Reject ≤0        | T3        | Linked PR | index.test.js |
| FR3 Reject >3999     | T3        | Linked PR | index.test.js |
| FR4 Reject invalid   | T3, BUG-1 | Linked PR | index.test.js |
| FR5 Display output   | T4        | Linked PR | Manual UI     |
| NFR1 Accessibility   | T5        | Linked PR | Manual checks |
| NFR2 Maintainability | T2        | Linked PR | Unit tests    |
| NFR3 Reliability     | T2        | Linked PR | Unit tests    |

## 7. Application Design
Architecture summary:
- HTML: Used for page structure and form
- CSS: Used for styling and layout
- Javascript: Used for conversion logic and UI Interaction
- Jest: Used for automated unit testing

The roman numeral conversion is implemented as a pure function that takes input and returns output without any side effects.

## 8. Automated Unit Testing
Testing Framework:
Unit tests were written using Jest

Test Coverage:
Tests cover:
- Basic conversions (1-10)
- Subtractive notation (4, 9, 40, 90)
- Boundary values (3999)
- Invalid inputs: 0 and negatives, values above 3999, decimal input, non-numeric input.

Tests are executed using the command 'npm test' in the visual studio code terminal and upon each pull and push request due to the addition of CI/CD pipeline.

## 9. UI and Accessibility Testing
Manual UI Tests:
- Valid number conversion displays correct result
- Invalid input displays error message
- UI updates on each submission

Accessibility checks:
- Keyboard-only navigation works
- Label correctly associated with input
- Output uses aria-live to announce updates
- Input uses aria-describedby to link messages
- WCAG compliant
- Passes google lighthouse test for accessibility

All checks passed.

<img width="534" height="798" alt="accessibility test lighthouse" src="https://github.com/user-attachments/assets/1a0550c6-7ac3-4326-8128-c9fbb98d340c" />


## 10. Continuous Integration and Deployment
Continuous Integration (CI)

GitHub Actions is used to automatically:

- Install dependencies
- Run Jest unit tests
- Fail the pipeline if tests fail
- This runs on every push and pull request.

Continuous Deployment (CD)

The project is deployed using Netlify with GitHub integration.

Production environment (main branch):
<https://system-testing-assignment.netlify.app/>

Development environment (develop branch):
<https://develop--system-testing-assignment.netlify.app/>

Deployments occur automatically when changes are pushed to the relevant branch.

## 11. Manual End-to-End Testing
| ID     | Test Case       | Expected Result     | Status |
| ------ | --------------- | ------------------- | ------ |
| E2E-01 | Convert 2022    | MMXXII              | Pass   |
| E2E-02 | Convert 1       | I                   | Pass   |
| E2E-03 | Convert 3999    | MMMCMXCIX           | Pass   |
| E2E-04 | Input 0         | Error message       | Pass   |
| E2E-05 | Input -10       | Error message       | Pass   |
| E2E-06 | Input 4000      | Error message       | Pass   |
| E2E-07 | Input 2.5       | Decimal error       | Pass   |
| E2E-08 | Input abc       | Invalid input error | Pass   |
| E2E-09 | Keyboard submit | Output updates      | Pass   |

## 12. User Guide
How to use:
1. Enter a number between 1 and 3999
2. Click Romanize! button
3. View the result or error message below the form

Values outside the specified range can be inputted to verify error message functionality

## 13. Technical Notes
- Conversion logic implemented as a pure function
- UI logic separated from business logic
- Tests written before or alongside fixes
- CI ensures reliability
- CD ensures consistent deployment

## 14. Known Limitations
- Only encoding is supported and there is no roman to arabic decoding
- Only whole numbers are supported
- Styling and UI design is minimal

## 15. Future Improvements
- Add Roman numeral decoding
- Improve UI styling
- Add automated UI tests
- Add more advanced coding logic and improve the application

## 16. Conclusion
This project demonstrates a complete software development lifecycle, including planning, implementation, testing, deployment, and documentation.
Despite its simplicity, it applies professional development practices appropriate for a systems tester who is looking to upskill in software development and become more involved with automationa and developer practices. 
