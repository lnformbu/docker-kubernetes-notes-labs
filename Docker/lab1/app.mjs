import express from 'express';
import os from 'os';
import connectToDatabase from './helpers.mjs';

const app = express();

// Author details
const authorName = "Lenon Nformbui";
const linkedinLink = "https://www.linkedin.com/in/lenonnformbui/";
const mediumLink = "https://medium.com/@lenonnformbui";

// Fun facts about Docker
const dockerFunFacts = [
  "Docker was first released in 2013 and revolutionized container technology.",
  "The Docker logo is a whale carrying containers, symbolizing lightweight containerization.",
  "Docker containers are faster to spin up than traditional virtual machines.",
  "Over 13 million developers use Docker worldwide.",
  "Docker Hub contains over 15 million container images for public use.",
  "Docker was originally developed by Solomon Hykes and his team at dotCloud.",
  "The first version of Docker was written in Python.",
  "Docker Hub is the world's largest library and community for container images.",
  "Docker containers are lightweight because they share the host kernel instead of requiring a full operating system.",
  "The name 'Docker' comes from 'dock worker,' representing the process of moving containers around.",
  "Docker Hub has both public and private repositories to store container images securely.",
  "Docker Desktop makes it easy to develop locally on Windows, Mac, and Linux with containers.",
  "The Docker whale in the logo carries five containers, symbolizing simplicity and flexibility.",
  "With Docker Compose, you can manage multi-container applications using a single YAML file.",
  "Docker images are made up of multiple layers, which makes them more space-efficient.",
  "Docker Hub supports automated builds, so you can link a GitHub repository to automatically create images.",
  "Docker containers can start in milliseconds, which is much faster than traditional VMs.",
  "Docker Hub allows you to pull official images like 'nginx', 'mysql', and 'redis' for free.",
  "Docker Swarm is Docker's native clustering and orchestration solution for containers.",
  "Docker containers are portable and can run on any machine with Docker installed, ensuring consistency across environments.",
  "Docker Hub has a built-in search function to find specific images or technologies easily.",
  "Many DevOps pipelines integrate Docker to streamline CI/CD workflows.",
  "Kubernetes, the popular container orchestration tool, works seamlessly with Docker containers.",
  "Docker supports multi-architecture builds, allowing you to create images for different platforms (e.g., x86, ARM).",
  "Docker Hub features verified publisher images, ensuring secure and reliable software from trusted sources.",
  "Docker networks enable seamless communication between containers within the same network.",
  "You can inspect Docker layers with the 'docker history' command to see how an image was built.",
  "Docker Hub allows teams to collaborate by sharing images in private repositories.",
  "Docker Compose simplifies linking services, such as databases, with web servers for local development.",
  "The introduction of Docker has significantly influenced the growth of microservices architecture.",
  "Docker Hub's official images are maintained by Docker or trusted publishers and are tested for quality.",
  "Docker has contributed significantly to edge computing by enabling lightweight deployments on IoT devices."
];


// Celebration message with a button for fun facts
const celebrationMessage = `
  <div style="text-align:center; font-family:sans-serif; color:#333;">
    <h1 style="color:green;">🎉 Congratulations! 🎉</h1>
    <h2>You’ve successfully built your first Docker image and container! 🐳</h2>
    <p>Keep going, you're becoming a Docker pro! 🚀</p>
    <p style="margin-top:20px;">
      <strong>Author:</strong> ${authorName} <br>
      <a href="${linkedinLink}" target="_blank" style="text-decoration:none; color:#0e76a8;">LinkedIn</a> | 
      <a href="${mediumLink}" target="_blank" style="text-decoration:none; color:#ff5722;">Medium</a>
    </p>
    <button onclick="fetchFunFact()" style="margin-top:20px; padding:10px 20px; font-size:16px; background-color:#007bff; color:white; border:none; border-radius:5px; cursor:pointer;">
      Show Fun Fact 🐳
    </button>
    <p id="fun-fact" style="margin-top:20px; font-size:18px; color:#555;"></p>
    <script>
      async function fetchFunFact() {
        const response = await fetch('/fun-fact');
        const data = await response.json();
        document.getElementById('fun-fact').innerText = data.fact;
      }
    </script>
  </div>
`;

// Function to get the current date and time
const getCurrentDateTime = () => {
  const now = new Date();
  return now.toLocaleString(); // Returns a formatted string with date and time
};

// Root endpoint
app.get('/', (req, res) => {
  res.send(celebrationMessage);
});

// Info endpoint
app.get('/info', (req, res) => {
  const containerInfo = {
    hostname: os.hostname(),
    cpuUsage: getCpuUsage(),
    uptime: `${(os.uptime() / 60).toFixed(2)} minutes`
  };

  res.json(containerInfo);
});

// Fun facts endpoint
app.get('/fun-fact', (req, res) => {
  const randomFact = dockerFunFacts[Math.floor(Math.random() * dockerFunFacts.length)];
  res.json({ fact: randomFact });
});

// Connect to the database
await connectToDatabase();

// Start the server
app.listen(3000, () => {
  console.log('🌟 Server running at http://localhost:3000 🌟');
  console.log('Try fun-fact for a random Docker fact! 🐳');
});
