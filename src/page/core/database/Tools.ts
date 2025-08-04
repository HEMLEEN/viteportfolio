export const versionTools = [
    {
        zone: "Git",
        zoneCode: "1",
        group: "1",
        topic: "What is Git",
        topicDesc: "Git is a distributed version control system (DVCS) designed to track changes in source code and other files during software development. It enables multiple developers to collaborate on the same project simultaneously without overwriting each other's work.",
        answers: [

            {
                title: "Install git",
                description: "Need to Installation using below url to dowload latest version",
                code: [
                    {
                        title: 'open your browser download and install :',
                        example: ['https://git-scm.com/downloads']
                    },
                ]
            }
        ]
    },
    {
        zone: "Git",
        zoneCode: "1",
        group: "2",
        topic: "Creating Projects & Config",
        topicDesc: "",
        answers: [

            {
                title: "git init",
                description: "Initialize a local Git repository",
                code: [
                    {
                        title: 'open your terminal paste this command',
                        example: ['git init']
                    },
                ]
            },
            {
                title: "git clone",
                description: "Create a local copy of a remote repository",
                code: [
                    {
                        title: '',
                        example: ['git clone https://github.com/yourusername/my-repo.git']
                    },
                ]
            },
            {
                title: "Cloning to a specific folder",
                description: "git clone <repository_url> <folder_name>",
                code: [
                    {
                        title: '',
                        example: ['git clone https://github.com/yourusername/my-repo.git my-folder']
                    },
                ]
            },
            {
                title: "Cloning a specific tag",
                description: "git clone -b [tag_name] [repository_url]",
                code: [
                    {
                        title: '',
                        example: ['git clone --branch v1.0 https://github.com/yourusername/my-repo.git']
                    },
                ]
            },
            {
                title: "Cloning a specific branch",
                description: "git clone --branch <branch_name> <repository_url>",
                code: [
                    {
                        title: '',
                        example: ['git clone --branch my-branch https://github.com/yourusername/my-repo.git']
                    },
                ]
            },

        ]
    },

    {
        zone: "Git",
        zoneCode: "1",
        group: "3",
        topic: "Reinitializing a Git repository",
        topicDesc: "",
        answers: [

            {
                title: "cd /path/to/your/directory",
                description: "Navigate to the directory where you want to reinitialize the Git repository using the cd command. ",
                code: []
            },
            {
                title: "rm -rf .git",
                description: "Remove the existing Git repository by deleting the .git directory. This directory contains all the Git configuration and history information. You can use the following command to delete it:",
                code: []
            },

        ]
    },
    {
        zone: "Git",
        zoneCode: "1",
        group: "4",
        topic: "Basic Snapshotting",
        topicDesc: "",
        answers: [

            {
                title: "git status",
                description: "Check status",
                code: []
            },
            {
                title: "git add .",
                description: "new Git repository, add them to the staging area using git add and create an initial commit with git commit.",
                code: []
            },
            {
                title: "git add [file-name.txt]",
                description: "Add a file to the staging area",
                code: []
            },
            {
                title: "git add -A",
                description: "Add all new and changed files to the staging area",
                code: []
            },
            {
                title: `git commit -m "[commit message]"`,
                description: "Commit changes",
                code: []
            },
            {
                title: `git rm -r [file-name.txt]`,
                description: "Remove a file (or folder)",
                code: []
            },

        ]
    },


]