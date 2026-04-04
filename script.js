
// Dynamic Data Objects
const appData = {
    courses: [
        { title: "Java Swing & MySQL", level: "Intermediate", icon: "☕" },
        { title: "Full-Stack Web Dev", level: "Advanced", icon: "🌐" },
        { title: "Mobile App Design", level: "Beginner", icon: "📱" }
    ],
    videos: [
        { title: "Intro to AJAX", duration: "12:05", thumbnail: "https://via.placeholder.com/400x225" },
        { title: "Node.js Setup", duration: "15:30", thumbnail: "https://via.placeholder.com/400x225" }
    ],
    news: [
        { date: "April 5", headline: "Dire Dawa IT Summit Announced", tag: "Local" },
        { date: "April 3", headline: "New AI Frameworks in 2026", tag: "Global" }
    ]
};

// Functions to Render Content Dynamically
function renderApp() {
    // 1. Render Courses
    const courseHTML = appData.courses.map(c => `
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all border-t-4 border-blue-600">
            <span class="text-4xl">${c.icon}</span>
            <h3 class="text-xl font-bold mt-2">${c.title}</h3>
            <p class="text-blue-500 font-medium">${c.level}</p>
        </div>
    `).join('');
    document.getElementById('course-container').innerHTML = courseHTML;

    // 2. Render Videos
    const videoHTML = appData.videos.map(v => `
        <div class="bg-gray-800 rounded-xl overflow-hidden group cursor-pointer">
            <img src="${v.thumbnail}" class="w-full group-hover:opacity-80 transition">
            <div class="p-4">
                <h4 class="font-bold">${v.title}</h4>
                <span class="text-sm text-gray-400">${v.duration}</span>
            </div>
        </div>
    `).join('');
    document.getElementById('video-container').innerHTML = videoHTML;

    // 3. Render News
    const newsHTML = appData.news.map(n => `
        <div class="flex items-center gap-4 p-4 bg-white rounded border-l-4 border-green-500">
            <div class="text-sm font-bold text-gray-400">${n.date}</div>
            <div class="font-semibold text-gray-800">${n.headline}</div>
            <span class="ml-auto text-xs bg-gray-100 px-2 py-1 rounded">${n.tag}</span>
        </div>
    `).join('');
    document.getElementById('news-container').innerHTML = newsHTML;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', renderApp);
