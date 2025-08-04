export const BackendDatabase = [
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
]