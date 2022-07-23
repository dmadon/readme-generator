// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown');





const init = ()=>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (Required)',
            validate: titleInput=>{
                if(titleInput){
                    return true;
                }
                else{
                    console.log("Project title is required");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of this project. (Required)',
            validate: descInput=>{
                if(descInput){
                    return true;
                }
                else{
                    console.log("A project description is required");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Specify installation instructions for this project. (Required)',
            validate: instInput=>{
                if(instInput){
                    return true;
                }
                else{
                    console.log("Installation instructions are required");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Specify usage information for this project. (Required)',
            validate: usageInput=>{
                if(usageInput){
                    return true;
                }
                else{
                    console.log("Usage information is required");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Describe how users can contribute to this project. (Required)',
            validate: contInput=>{
                if(contInput){
                    return true;
                }
                else{
                    console.log("Contribution instructions are required");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Are there any testing instructions for this project? (Required)',
            validate: testInput=>{
                if(testInput){
                    return true;
                }
                else{
                    console.log("Testing instructions are required");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Would you like to add a license for this project?',
            choices: ['No license','MIT','GNU']
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'What is your GitHub username? (Required)',
            validate: nameInput=>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log("Your GitHub username is required");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address where users can reach out to you with questions? (Required)',
            validate: nameInput=>{
                if(nameInput){
                    return true;
                }
                else{
                    console.log("Your email address is required");
                    return false;
                }
            }
        }
    ]);// end of questions array
};// end of init function


   

    


// TODO: Create a function to write README file
function writeToFile(filePath, content) {
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,content,err=>{
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Your file has been created. It is ready for your review in the dist directory.'
            });
        });
    });
};



// Function call to initialize app
init()
.then(data =>{
    return generateMarkdown(data);
    })
.then(content=>{
    const filePath = './dist/README.md';
    return writeToFile(filePath,content);
    })
.then(message=>{
    console.log(message);
    });
