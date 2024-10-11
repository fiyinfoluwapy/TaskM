document.addEventListener('DOMContentLoaded', () => {

    // Task management

    const taskInput = document.getElementById('task-input');

    const taskCategory = document.getElementById('task-category');

    const addTaskBtn = document.getElementById('add-task-btn');

    const taskList = document.getElementById('task-list');

    let tasks = []; // Stores tasks



    // Function to render tasks

    function renderTasks() {

        taskList.innerHTML = ''; // Clear task list



        tasks.forEach((task, index) => {

            const taskItem = document.createElement('li');

            taskItem.classList.add('task-item');



            const taskText = document.createElement('span');

            taskText.textContent = task.text;

            taskItem.style.borderLeftColor = getCategoryColor(task.category); // Apply category color



            // Add complete and delete buttons

            const completeBtn = document.createElement('button');

            completeBtn.innerHTML = '<i class="fas fa-check"></i>';

            completeBtn.addEventListener('click', () => {

                task.completed = !task.completed;

                renderTasks();

            });



            const deleteBtn = document.createElement('button');

            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

            deleteBtn.addEventListener('click', () => {

                tasks.splice(index, 1);

                renderTasks();

            });



            taskItem.appendChild(completeBtn);

            taskItem.appendChild(taskText);

            taskItem.appendChild(deleteBtn);



            // Strike-through if task is completed

            if (task.completed) {

                taskText.style.textDecoration = 'line-through';

            }



            taskList.appendChild(taskItem);

        });



        updateProgressBar(); // Update progress bar after rendering tasks

    }



    // Function to return the color based on category

    function getCategoryColor(category) {

        switch (category) {

            case 'health': return 'var(--color-health)';

            case 'work': return 'var(--color-work)';

            case 'personal': return 'var(--color-personal)';

            case 'study': return 'var(--color-study)';

            default: return 'var(--color-accent)';

        }

    }



    // Add task on button click

    addTaskBtn.addEventListener('click', () => {

        const taskText = taskInput.value.trim();

        const category = taskCategory.value;



        if (taskText === '') {

            alert('Please enter a task');

            return;

        }



        const task = {

            text: taskText,

            category: category,

            completed: false

        };



        tasks.push(task);

        renderTasks();

        taskInput.value = ''; // Clear input field after adding task

    });



    // Productivity Tips and Motivational Quotes

    const tips = [

        "Stay organized and prioritize your tasks.",

        "Take short breaks to increase focus.",

        "Use the Pomodoro technique for time management.",

        "Set clear goals for each day.",

        "Eliminate distractions to boost productivity.",

        "Batch similar tasks together.",

        "Take care of your health, it fuels productivity.",

        "Use apps to track your goals and tasks.",

        "Start with the hardest task first.",

        "Reward yourself when tasks are completed."

    ];



    const quotes = [

        "The key to productivity is to work smarter, not harder.",

        "Success is the sum of small efforts repeated day in and day out.",

        "Do something today that your future self will thank you for.",

        "Productivity is never an accident. It is the result of a commitment to excellence.",

        "Focus on being productive instead of being busy.",

        "The best way to predict the future is to create it.",

        "Your mind is for having ideas, not holding them.",

        "Don't watch the clock; do what it does. Keep going.",

        "Action is the foundational key to all success.",

        "Amateurs sit and wait for inspiration, the rest of us just get up and go to work."

    ];



    const tipDisplay = document.getElementById('tip-display');

    const quoteDisplay = document.getElementById('quote-display');

    let tipIndex = 0;

    let quoteIndex = 0;



    function rotateTipsAndQuotes() {

        tipDisplay.textContent = tips[tipIndex];

        quoteDisplay.textContent = quotes[quoteIndex];



        tipIndex = (tipIndex + 1) % tips.length;

        quoteIndex = (quoteIndex + 1) % quotes.length;

    }



    setInterval(rotateTipsAndQuotes, 20000); // Change every 20 seconds

    rotateTipsAndQuotes(); // Initial call



    // Goal Tracking (Progress Bar)

    const progressBar = document.getElementById('progress-bar');



    function updateProgressBar() {

        const totalTasks = tasks.length;

        const completedTasks = tasks.filter(task => task.completed).length;

        const progressPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;



        progressBar.style.width = `${progressPercentage}%`;

    }



    // Light/Dark Mode Toggle

    const lightModeIcon = document.getElementById('light-mode-icon');

    const darkModeIcon = document.getElementById('dark-mode-icon');

    const body = document.body;



    lightModeIcon.addEventListener('click', () => {

        body.classList.add('dark-mode');

        lightModeIcon.style.display = 'none';

        darkModeIcon.style.display = 'inline';

    });



    darkModeIcon.addEventListener('click', () => {

        body.classList.remove('dark-mode');

        lightModeIcon.style.display = 'inline';

        darkModeIcon.style.display = 'none';

    });



    // Smooth Scrolling for Navigation Links

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {

        link.addEventListener('click', (event) => {

            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);

            const targetSection = document.getElementById(targetId);



            window.scrollTo({

                top: targetSection.offsetTop - 50, // 50px offset for better visual effect

                behavior: 'smooth'

            });

        });

    });



   //hamburger menu toggle for mobile

   const hamburger = document.querySelector('.hamburger');

   const navLinksContainer = document.querySelector('.nav-links');


   hamburger.addEventListener('click', () => {

    navLinksContainer.classList.toggle('show');
    
   });

});