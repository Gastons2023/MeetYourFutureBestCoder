import Project from "../components/Project";
const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            <div className="projects">
                <Project
                    title="WeatherAdvisor"
                    description="Application can be used to check the weather in multiple cities for event planning"
                    imageUrl="https://github.com/Gastons2023/WeatherAdvisor/raw/main/pictures/Screenshot%202025-02-05%20182915.png"
                    projectUrl="https://weatheradvisor.onrender.com/"
                    githubUrl="https://github.com/Gastons2023/WeatherAdvisor"
                />
                <Project
                    title="MealsMeForWeightloss"
                    description="Meal Me for Weightloss was created to give optional meal replacements or substitutes to help weightloss and maintain healthy eating habits."
                    imageUrl="https://github.com/ikranahmed/MealsMeForWeightloss/raw/main/assets/images/DeployedLink.png"
                    projectUrl="https://ikranahmed.github.io/MealsMeForWeightloss/"
                    githubUrl="https://github.com/ikranahmed/MealsMeForWeightloss?tab=readme-ov-file"
                />

                <Project
                    title="BuildAVehicle"
                    description="TypeScript command-line application that builds and uses cars to have additional options for motorbikes and trucks. The application prompts the user to create a new vehicle or select an existing vehicle. After going through the creation process or the selection process, the user is able to perform certain actions with the selected vehicle. The user is returned to the actions menu after each action until they decide to exit the application"
                    imageUrl="https://m.media-amazon.com/images/I/61GQbz3Sr-L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    projectUrl="https://drive.google.com/file/d/1wuRNmHlLcksYzQioUufbi64Rn5nBcv96/view"
                    githubUrl="https://github.com/Gastons2023/BuildAVehicle?tab=readme-ov-file"
                />
                <Project
                    title="07-README_Generator"
                    description="This application will generate a professional README."
                    imageUrl="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fuser-images.githubusercontent.com%2F9840435%2F59461914-cbc18380-8e22-11e9-8567-87b43da950ac.png"
                    projectUrl="https://drive.google.com/file/d/1LTuBVUaUbEGSeMbACmROoo26AteHDtxx/view"
                    githubUrl="https://github.com/Gastons2023/07-README_Generator?tab=readme-ov-file"


                />
                <Project
                    title="React_Portfolio"
                    description="This is a React portfolio application that showcases my projects and skills."
                    imageUrl= "/Portfolio.png"
                    projectUrl="https://harmonious-quokka-6ed5e5.netlify.app/"
                    githubUrl="https://github.com/Gastons2023/React-Portfolio"


                />

                <Project
                    title="Employee_Tracker"
                    description="Command-line application to manage a company's employee database, using Node.js, Inquirer, and PostgreSQL.."
                    imageUrl="https://tivazo.com/wp-content/uploads/2024/07/employee-monitoring-software-1.png"
                    projectUrl="https://drive.google.com/file/d/1tLIaCptW-K3UlT43kASAYcVE8Ba8A11U/view?usp=sharing"
                    githubUrl="https://github.com/Gastons2023/EmployeeCMSDatabase/blob/main/OneDrive/Desktop/Employee%20Tracker/README.md"


                />
            </div>
        </div>
    );
};

export default Portfolio;