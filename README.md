# Systems Tesing Summative 1

## 1. Project Proposal
This project is a Roman Numeral Encoder that converts an Arabic integer into Roman numerals using standard Roman numeral rules. It is a small beginner-friendly web application built with HTML, CSS, and JavaScript.

## 2. Requirements

### Functional Requirements (FR)
FR1: Convert integers from 1 to 3999 into Roman numerals  
- AC: Given an integer between 1 and 3999, when Convert is clicked, then the correct Roman numeral is displayed.

FR2: Reject invalid values (0 and negatives)  
- AC: Given input <= 0, when Convert is clicked, then an error message is shown and no conversion is displayed.

FR3: Reject values above 3999  
- AC: Given input > 3999, when Convert is clicked, then an error message is shown and no conversion is displayed.

FR4: Reject invalid input types  
- AC: Given decimal input or non-numeric input, when Convert is clicked, then an error message is shown.

FR5: UI output  
- AC: The UI displays the result in a dedicated output panel.

### Non-Functional Requirements (NFR)
NFR1 Accessibility: The form works with keyboard-only navigation and announces output updates.  
NFR2 Maintainability: Conversion logic is implemented as a pure function and unit tested.  
NFR3 Reliability: Conversion is deterministic and consistent for the same input.

## 3. Acceptance Criteria