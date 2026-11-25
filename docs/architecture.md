\# AccessSA – Initial System Architecture



\## 1. Project Overview



AccessSA is a platform designed to improve accessibility in South Africa by helping people find accessibility information, allowing trained assessors to record accessibility conditions, and helping organisations identify and address accessibility barriers.



\## 2. Architecture Overview



AccessSA will use a three-layer architecture:



1\. \*\*Presentation Layer:\*\* React and TypeScript frontend.

2\. \*\*Application Layer:\*\* ASP.NET Core Web API.

3\. \*\*Data Layer:\*\* Microsoft SQL Server database.



\## 3. System Architecture Diagram



```mermaid

flowchart TB

&#x20;   Users\["AccessSA Users"]



&#x20;   subgraph Presentation\["Presentation Layer"]

&#x20;       Frontend\["React + TypeScript Frontend"]

&#x20;   end



&#x20;   subgraph Application\["Application Layer"]

&#x20;       API\["ASP.NET Core Web API"]

&#x20;       Auth\["Authentication and Authorisation"]

&#x20;       Location\["Location and Accessibility Services"]

&#x20;       Assessment\["Assessment Management"]

&#x20;       Reports\["Community Reports"]

&#x20;       Matching\["Accessibility Matching"]

&#x20;   end



&#x20;   subgraph Data\["Data Layer"]

&#x20;       Database\[("Microsoft SQL Server")]

&#x20;       UserData\["User Accounts"]

&#x20;       LocationData\["Locations and Accessibility Data"]

&#x20;       AssessmentData\["Assessment Records"]

&#x20;       ReportData\["Community Reports"]

&#x20;   end



&#x20;   Users --> Frontend

&#x20;   Frontend --> API

&#x20;   API --> Auth

&#x20;   API --> Location

&#x20;   API --> Assessment

&#x20;   API --> Reports

&#x20;   API --> Matching



&#x20;   Auth --> Database

&#x20;   Location --> Database

&#x20;   Assessment --> Database

&#x20;   Reports --> Database

&#x20;   Matching --> Database



&#x20;   Database --> UserData

&#x20;   Database --> LocationData

&#x20;   Database --> AssessmentData

&#x20;   Database --> ReportData

```



\## 4. Main System Components



\### 4.1 Presentation Layer



The frontend will provide the interface through which users interact with AccessSA.



Technology:

\- React

\- TypeScript

\- HTML and CSS



Main responsibilities:

\- Display accessibility information.

\- Allow users to explore locations.

\- Provide interfaces for assessors and organisations.

\- Communicate with the backend API.



\### 4.2 Application Layer



The backend will handle the system's business logic and process requests from the frontend.



Technology:

\- C#

\- ASP.NET Core Web API



Planned services:



\- \*\*Authentication and Authorisation:\*\* Manage user accounts and access permissions.

\- \*\*Location and Accessibility Services:\*\* Manage location information and accessibility features.

\- \*\*Assessment Management:\*\* Manage accessibility assessments conducted by trained assessors.

\- \*\*Community Reports:\*\* Allow users to submit accessibility-related information.

\- \*\*Accessibility Matching:\*\* Match locations against users' selected accessibility requirements using transparent rules.



\### 4.3 Data Layer



The database will store and organise the information required by AccessSA.



Planned technology:

\- Microsoft SQL Server



Planned data entities:

\- User Accounts

\- Locations

\- Accessibility Data

\- Assessment Records

\- Community Reports



\## 5. Example System Process



Example: A visitor wants to find a restaurant that has wheelchair-accessible facilities.



1\. The visitor searches through the AccessSA frontend.

2\. React sends the search request to the ASP.NET Core Web API.

3\. The backend processes the request and applies the relevant accessibility matching rules.

4\. The API retrieves the relevant information from SQL Server.

5\. The backend returns the results to the frontend.

6\. React displays the available information to the visitor.



\## 6. Development Status



| Component | Current Status |

|---|---|

| React and TypeScript frontend | Initial webpage created |

| ASP.NET Core Web API | Created and status endpoint tested |

| SQL Server database | Planned |

| Authentication and authorisation | Planned |

| Location management | Planned |

| Accessibility assessments | Planned |

| Community reporting | Planned |

| Accessibility matching | Planned |



\## 7. Design Principles



AccessSA will follow these principles:



\- Accessibility information must be transparent and understandable.

\- Unverified information must not be presented as confirmed.

\- Accessibility matching must use clear, explainable rules.

\- User information must be handled responsibly.

\- The platform must be designed with input from people with disabilities.

\- Businesses must not be able to purchase favourable accessibility results.



\## 8. Architecture Status



This document represents the initial proposed architecture of AccessSA.



The frontend and backend foundations have been created. The remaining services, database integration and platform functionality will be developed progressively as the project advances.



