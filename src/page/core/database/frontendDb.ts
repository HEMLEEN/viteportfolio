export const FrontendDatabase = [
    {
        zone: "React",
        zoneCode: "1",
        group: "1",
        topic: "What is React",
        topicDesc: "React.js, commonly referred to as React, is an open-source JavaScript library primarily used for building user interfaces (UIs) for single-page web applications. It was developed by Facebook and released in 2013. React allows developers to create interactive UI components that can efficiently update and render based on changes in application state. Dowload React.txt file",
        answers: [
            {
                title: "DOM",
                description: "The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page. Dowload Dom.txt file.",
                code: []
            },
            {
                title: "Virtual DOM",
                description: "The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. Dowload VDOM.txt file.",
                code: []
            },
            {
                title: "Install node",
                description: "Need to Installation Node.js and npm ref : https://nodejs.org/ using this url to dowload latest version",
                code: [
                    {
                        title: 'open your terminal using (windowskey + R) type and run the following commands :',
                        example: ['npm install -g react']
                    },
                    {
                        title: 'Using vite for create react app',
                        example: ['npm create vite@latest']
                    },
                    {
                        title: 'Install dependencies:',
                        example: ['npm install or npm i']
                    },
                    {
                        title: 'Start the development server: Run npm run dev. This command will start the development server, usually on a default port like http://localhost:5173:',
                        example: ['npm run dev']
                    }
                ]
            }
        ]
    },
    {
        zone: "React",
        zoneCode: "1",
        group: "2",
        topic: " Explain the MVC architecture.",
        topicDesc: "The Model-View-Controller (MVC) framework is an architectural/design pattern that separates an application into three main logical components: Model, View, and Controller. Each architectural component is built to handle specific development aspects of an application. It isolates the business, logic, and presentation layers from each other",
        answers: [
            {
                title: "Controller",
                description: "The controller is the component that enables the interconnection between the views and the model so it acts as an intermediary. The controller doesn’t have to worry about handling data logic, it just tells the model what to do. It processes all the business logic and incoming requests, manipulates data using the Model component, and interact with the View to render the final output.",
                code: [
                    {
                        title: 'Responsibilities',
                        example: [
                            'Receiving user input and interpreting it.',
                            'Updating the Model based on user actions.',
                            'Selecting and displaying the appropriate View.'
                        ]
                    },
                ]
            },
            {
                title: "View",
                description: "The View component is used for all the UI logic of the application. It generates a user interface for the user. Views are created by the data which is collected by the model component but these data aren’t taken directly but through the controller. It only interacts with the controller.",
                code: [
                    {
                        title: 'Responsibilities',
                        example: [
                            'Rendering data to the user in a specific format.',
                            'Displaying the user interface elements.',
                            'Updating the display when the Model changes.'
                        ]
                    },
                ]
            },
            {
                title: "Model",
                description: "The Model component corresponds to all the data-related logic that the user works with. This can represent either the data that is being transferred between the View and Controller components or any other business logic-related data. It can add or retrieve data from the database. It responds to the controller's request because the controller can't interact with the database by itself. The model interacts with the database and gives the required data back to the controller.",
                code: [
                    {
                        title: 'Responsibilities',
                        example: [
                            'Managing data: CRUD (Create, Read, Update, Delete) operations.',
                            'Enforcing business rules.',
                            'Notifying the View and Controller of state changes.'
                        ]
                    },
                ]
            }
        ]
    },
    {
        zone: "React",
        zoneCode: "1",
        group: "3",
        topic: "What is JSX?",
        topicDesc: "JSX is a syntax extension of JavaScript. It is used with React to describe the user interface's appearance. Using JSX, we can write HTML structures in the same file that contains JavaScript code.",
        answers: [
            {
                title: "JSX is not a regular JavaScript",
                description: "Web browsers cannot read JSX directly. They are built only to read regular JS objects, and JSX is not a regular JavaScript object.",
                code: []
            },
            {
                title: "Use Babel",
                description: "A web browser can only read a JSX file if transformed into a regular JavaScript object. We use Babel for this.",
                code: []
            },
            {
                title: "Why JSX?",
                description: "React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.",
                code: [
                    {
                        title: 'Consider this variable declaration',
                        example: ['return <h1>Hello, Stranger.</h1>;']
                    },
                ]
            }
        ]
    },
    {
        zone: "React",
        zoneCode: "1",
        group: "4",
        topic: "Why use React instead of other frameworks, like Angular?",
        topicDesc: "",
        answers: []
    },
    {
        zone: "React",
        zoneCode: "1",
        group: "5",
        topic: "What is an event in React?",
        topicDesc: "",
        answers: []
    },
    {
        zone: "Next.js",
        zoneCode: "1",
        group: "1",
        topic: "installation method",
        topicDesc: "",
        answers: []
    },
]