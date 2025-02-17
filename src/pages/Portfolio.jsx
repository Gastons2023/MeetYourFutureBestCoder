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
                    projectUrl="https://"
                    githubUrl="https://www.github.com"
                />
                <Project
                    title="Project 4"
                    description="This is a description of Project 4."
                    imageUrl="https://placehold.co/150"
                    projectUrl="https://www.example.com"
                    githubUrl="https://www.github.com"


                />
                <Project
                    title="Project 5"
                    description="This is a description of Project 5."
                    imageUrl="https://placehold.co/150"
                    projectUrl="https://www.example.com"
                    githubUrl="https://www.github.com"


                />

                <Project
                    title="Project 6"
                    description="This is a description of Project 6."
                    imageUrl="https://placehold.co/150"
                    projectUrl="https://www.example.com"
                    githubUrl="https://www.github.com"


                />
            </div>
        </div>
    );
};

export default Portfolio;