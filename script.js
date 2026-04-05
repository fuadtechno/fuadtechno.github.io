const appData = {
    courses: [
        { title: "Java Swing & JDBC", level: "Expert", icon: "☕", color: "blue" },
        { title: "Full-Stack Node.js", level: "Advanced", icon: "🚀", color: "green" },
        { title: "GIS & Spatial Data", level: "Intermediate", icon: "🌍", color: "orange" },
        { title: "React.js Framework", level: "Professional", icon: "⚛️", color: "cyan" },
        { title: "Android with Kotlin", level: "Advanced", icon: "📱", color: "purple" }
    ]
};

// Render Function with PhD Level Styling
function displayCourses(filtered) {
    const container = document.getElementById('course-container');
    container.innerHTML = filtered.map(c => `
        <div class="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black">${c.icon}</div>
            <div class="relative z-10">
                <div class="text-4xl mb-4">${c.icon}</div>
                <h3 class="text-2xl font-extrabold text-gray-800 mb-2">${c.title}</h3>
                <span class="inline-block px-3 py-1 bg-${c.color}-100 text-${c.color}-600 rounded-full text-xs font-bold uppercase">${c.level}</span>
                <p class="mt-4 text-gray-500 text-sm">Professional curriculum designed for real-world project development.</p>
                <button class="mt-8 w-full py-3 bg-gray-900 text-white rounded-xl font-bold group-hover:bg-blue-600 transition">Enroll Now</button>
            </div>
        </div>
    `).join('');
}

// Search Logic
document.getElementById('courseSearch').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const result = appData.courses.filter(c => c.title.toLowerCase().includes(term));
    displayCourses(result);
});

// Dark Mode Toggle Logic
const themeBtn = document.getElementById('themeToggle');
const body = document.getElementById('body');
const logoText = document.getElementById('logoText');

themeBtn.addEventListener('click', () => {
    body.classList.toggle('bg-gray-900');
    body.classList.toggle('text-white');
    
    if (body.classList.contains('bg-gray-900')) {
        themeBtn.innerText = '☀️';
        logoText.style.color = 'white';
        // Add more dark mode styling logic here
    } else {
        themeBtn.innerText = '🌙';
        logoText.style.color = '#374151';
    }
});

// Initial Load
displayCourses(appData.courses);
