# Systems Tesing Summative 1

## 1. Project Overview
This project is a Roman Numeral Encoder that converts an Arabic integer into Roman numerals using standard Roman numeral rules. It is a small beginner-friendly web application built with HTML, CSS, JavaScript, and Jest.

The purpose of this project is to demonstrate my understanding of core software development principles through the implementation of a small but complete web application using HTML, CSS, and JavaScript. In developing this system, I focused on applying good practice in code organisation, separating business logic from user interface concerns, and producing a maintainable and understandable solution.
A central aspect of the project was the use of test-driven development (TDD). Unit tests were written using Jest to validate the Roman numeral conversion logic and to ensure that edge cases and invalid inputs were handled correctly. This approach encouraged a more disciplined development process and improved confidence in the correctness and reliability of the code as changes were introduced.

The project also required clear definition of functional and non-functional requirements and their traceability throughout the development lifecycle. Requirements were captured as GitHub Issues with defined acceptance criteria and were linked to pull requests and tests. This provided transparency between requirements, implementation, and verification, and helped to structure development in a systematic way.
Project planning and task management were carried out using GitHub Projects in a Kanban-style workflow. This supported incremental development and provided visibility of progress from initial planning through to completion. Both features and defects were managed using the same issue-based approach, reflecting industry-standard practices.

Automated testing and continuous integration were implemented using GitHub Actions to ensure that unit tests were executed consistently on every push and pull request. Continuous deployment was achieved using Netlify, enabling separate development and production environments that are automatically updated from their respective branches.
In addition to automated testing, manual user interface, accessibility, and end-to-end testing were conducted to evaluate the system from a user’s perspective. Finally, comprehensive user and technical documentation was produced to explain the application’s behaviour, design decisions, and development process.

## 2. Project Proposal

Project Idea: 
The Roman Numeral Encoder converts whole numbers between 1 and 3999 into Roman numerals using standard Roman numeral rules.

This project was selected because Roman numerals provide a problem domain with clear and well-defined constraints, making it suitable for demonstrating structured logic and validation. The conversion process can be implemented as a pure function, which supports effective unit testing and separation of concerns. Additionally, the limited range of valid inputs makes edge cases straightforward to identify and test. The user interface can be kept intentionally simple and accessible, allowing the focus to remain on software development practices rather than complex design. Finally, the project aligns well with the course tutorials and can be implemented using beginner-level programming knowledge, making it an appropriate and realistic choice for this assessment.

<img width="1260" height="444" alt="image" src="https://github.com/user-attachments/assets/74634c44-8d35-4f7f-9da6-31d8379a2fca" />


## 3. Requirements

### 3.1 Functional Requirements (FR)

| **ID** | **Functional Requirement**                          | **Acceptance Criteria (AC)**                                                                                                                              |
| ------ | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FR1    | Convert integers from 1 to 3999 into Roman numerals | Given an integer between 1 and 3999, when the **Romanize!** button is clicked, the correct Roman numeral is displayed in the output area.                 |
| FR2    | Reject invalid values (zero and negative numbers)   | Given an input value less than or equal to 0, when **Romanize!** is clicked, an appropriate error message is shown and no conversion result is displayed. |
| FR3    | Reject values above 3999                            | Given an input value greater than 3999, when **Romanize!** is clicked, an appropriate error message is shown and no conversion result is displayed.       |
| FR4    | Reject invalid input types                          | Given decimal or non-numeric input, when **Romanize!** is clicked, an appropriate validation error message is displayed.                                  |
| FR5    | Display conversion output in the UI                 | The application displays either the Roman numeral result or a validation error message in a dedicated output panel.                                       |


### 3.2 Non-Functional Requirements (NFR)

| **ID** | **Non-Functional Requirement**                                | **Acceptance Criteria (AC)**                                                                                                                                |
| ------ | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NFR1   | Accessibility – keyboard navigation and screen reader support | The application can be fully operated using keyboard-only navigation, and output updates are announced to screen readers using appropriate ARIA attributes. |
| NFR2   | Maintainability of codebase                                   | The Roman numeral conversion logic is implemented as a pure function, separate from the UI, and is covered by automated unit tests.                         |
| NFR3   | Reliability and determinism                                   | Given the same valid input, the application always produces the same Roman numeral output.                                                                  |
| NFR4   | Colour contrast and visual accessibility                      | Text and interactive elements meet sufficient colour contrast to remain readable for users with visual impairments.                                         |
| NFR5   | Responsive design                                             | The user interface adapts appropriately to different screen sizes, including desktop and mobile devices, without loss of functionality.                     |
| NFR6   | Mobile usability                                              | The application remains usable on mobile devices, with form inputs, buttons, and output areas accessible via touch interaction.                             |
| NFR7   | Performance                                                   | The conversion result is displayed immediately after submission with no noticeable delay.                                                                   |
| NFR8   | Compatibility                                                 | The application functions correctly on modern web browsers (e.g. Chrome, Firefox, Edge).                                                                    |
| NFR9   | Simplicity and usability                                      | The interface remains simple and uncluttered, allowing users to understand and use the application without instructions.                                    |


## 4. Project Planning and Management 
Project planning was carried out using GitHub Issues and a GitHub Projects Kanban board.

Board columns included: Backlog, Ready, In Progress, In Review, Done.

<img width="1770" height="315" alt="image" src="https://github.com/user-attachments/assets/d8af324e-1ce8-4807-844a-2efaeeca866a" />

Labels were also added to each ticket to help make identification and filtering easier.

<img width="348" height="693" alt="image" src="https://github.com/user-attachments/assets/375f5a3c-25be-4906-b1be-47a6effdf25f" />


Ticket structure:
Each ticket includes a clear description, acceptance criteria, labels and bug tickets include reproduction steps. Traceability is also clearly highlighted and shown in each ticket, with a new branch being created for each item to avoid confusion.

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

For example, in the following code block for CSS:

<img width="1638" height="1365" alt="image" src="https://github.com/user-attachments/assets/f67f8469-679e-4611-ad4c-457aefc20a5a" />

The CSS code demonstrates the use of consistent and descriptive class naming conventions following a Block–Element structure (for example, form__input, form__button, and form__label). As a tester, this approach is particularly valuable because it improves readability and makes the relationship between UI components explicit. Clear naming conventions reduce ambiguity when analysing the user interface and make it easier to identify elements during manual testing and automated UI testing.
From a maintainability perspective, this structure ensures that styling changes can be made in a controlled and predictable way without unintended side effects on unrelated elements. For testing purposes, predictable class names also support more stable selectors in automated tests, reducing the likelihood of tests that break due to minor UI changes. Adopting this naming standard reflects good coding practice and supports collaboration between developers and testers by making the codebase easier to understand and verify.

In addition to this, good coding standards were also displayed in the index.js file:

<img width="2529" height="1146" alt="image" src="https://github.com/user-attachments/assets/9f4b753a-cfe0-4576-b694-f19658b0fd24" />

This function demonstrates good coding practice through the use of a pure function that performs validation and conversion without interacting with the DOM. From a testing perspective, this separation makes the logic easy to unit test and ensures consistent, deterministic behaviour. Clear validation rules and early returns also make expected outcomes explicit, which supports effective test case design and simplifies defect identification.

Workflow:
- Work tracked using GitHub issues
- One branch per ticket (feature or bugfix)
- Pull requests created for each issue
- Pull requests reference issues using 'Closes #<issue number>'

<img width="729" height="870" alt="image" src="https://github.com/user-attachments/assets/acc28b1e-048e-43a9-b0f9-681f780ba57e" />


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
The application is structured using standard web technologies, with HTML providing the page structure and form elements, CSS responsible for styling and layout, and JavaScript handling both the Roman numeral conversion logic and user interface interactions. Automated unit testing is implemented using Jest, which supports validation of the core logic independently from the user interface.

The Roman numeral conversion is implemented as a pure function that accepts an input value and returns the corresponding Roman numeral or an error message without producing side effects. This design choice supports maintainability and makes the logic straightforward to test, as the function behaves deterministically for a given input.

## 8. Automated Unit Testing
Automated unit tests were written using the Jest testing framework to verify the correctness of the Roman numeral conversion logic. The test suite covers basic conversions for values between 1 and 10, subtractive notation such as IV, IX, XL, and XC, and boundary values including the upper limit of 3999. In addition, tests were created to validate error handling for invalid inputs, including zero and negative values, numbers greater than 3999, decimal values, and non-numeric input.

Tests are executed using the npm test command within the Visual Studio Code terminal. In addition, the configured CI/CD pipeline ensures that all unit tests are automatically executed on every push and pull request, helping to prevent regressions and maintain code quality throughout development.

## 9. UI and Accessibility Testing

Manual user interface testing was performed to confirm that valid number inputs produce the correct Roman numeral output and that invalid inputs result in clear and appropriate error messages. The interface was also tested to ensure that it updates correctly on each submission and provides consistent feedback to the user.

Accessibility testing focused on ensuring that the application can be operated using keyboard-only navigation and that form labels are correctly associated with their corresponding input elements. Output updates are announced using ARIA live regions, and the input field uses aria-describedby to link validation messages. The interface was assessed against WCAG accessibility considerations and was verified using Google Lighthouse accessibility checks. All accessibility and UI tests passed successfully.

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
To use the Roman Numeral Encoder, the user opens the application in a web browser and is presented with a simple input form. A whole number between 1 and 3999 should be entered into the input field, after which the Romanize! button can be clicked to perform the conversion. The application then displays either the corresponding Roman numeral or an informative error message directly below the form.

If an invalid value is entered, such as a number outside the supported range, a decimal, or a non-numeric value, the application provides clear feedback explaining why the conversion could not be completed. This behaviour allows users not only to perform valid conversions but also to verify that validation and error handling are working as expected.

## 13. Technical Notes
From a technical perspective, the project is implemented as a static web application. To run the application locally, the user can open the index.html file directly in a web browser, or alternatively use a local development server such as the Live Server extension in Visual Studio Code. No additional build steps are required to run the application in the browser.

The core Roman numeral conversion logic is implemented in index.js as a pure function, separate from the user interface logic. This design supports maintainability and allows the logic to be tested independently of the UI. User interface behaviour, including event handling and output display, is handled within the same file but is clearly separated from the conversion logic.

Automated unit tests are written using Jest and are defined in index.test.js. Tests can be executed locally by running the command npm test in the Visual Studio Code terminal, which runs the full test suite and generates coverage information. Continuous integration is configured to automatically run these tests on every push and pull request, ensuring ongoing reliability of the codebase. Continuous deployment is handled via Netlify, which automatically deploys the application to separate development and production environments based on the active Git branch.

## 14. Known Limitations
- Only encoding is supported and there is no roman to arabic decoding
- Only whole numbers are supported
- Styling and UI design is minimal

## 15. Future Improvements
- Add Roman numeral decoding
- Improve UI styling
- Add automated UI tests
- Add more advanced coding logic and improve the application
- Develop a more technical design

## 16. Conclusion
This project was successful in demonstrating the complete software development lifecycle, from initial planning and requirements definition through to implementation, testing, deployment, and documentation. One of the main strengths of the project was the clear separation of concerns between business logic and user interface logic. Implementing the Roman numeral conversion as a pure function allowed the logic to be easily tested in isolation and contributed to a reliable and maintainable solution. The use of automated unit tests and continuous integration further strengthened confidence in the correctness of the application as it evolved.

A key learning outcome from this project was the practical application of test-driven development principles. Writing unit tests alongside the implementation helped to clarify expected behaviour early and made it easier to identify and fix defects. The introduction of a bug-related pull request, supported by a failing test, highlighted the value of regression testing and reinforced the importance of validating edge cases rather than relying solely on manual testing. Additionally, working with GitHub Issues, pull requests, and a Kanban-style project board improved my understanding of traceability and structured task management in a real-world development workflow.

Several challenges were encountered during development, particularly around input validation and environment setup. Handling edge cases such as decimal-formatted input required careful consideration, as some values appeared valid after type conversion. This issue was resolved by validating the raw input before processing and by adding targeted unit tests to prevent regression. Configuration challenges were also encountered when setting up continuous integration and deployment, especially when managing multiple branches and ensuring that workflows were correctly triggered. These issues were resolved through incremental troubleshooting, careful version control practices, and consultation of platform documentation.

From a testing and quality perspective, the project reinforced the importance of accessibility and usability considerations. Ensuring that the application supported keyboard-only navigation and screen reader announcements required deliberate design decisions, such as the correct use of labels and ARIA attributes. Manual UI and end-to-end testing complemented automated tests by validating the system from a user’s perspective, highlighting that not all quality aspects can be fully addressed through automation alone.

Overall, this project provided valuable insight into how even a simple application can benefit from professional development practices. By combining structured planning, testing, automation, and reflective documentation, the project demonstrates not only technical implementation but also an understanding of software quality, maintainability, and user-centred design. These skills and lessons are directly transferable to larger and more complex software projects.
