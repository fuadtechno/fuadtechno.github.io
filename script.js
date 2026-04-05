const appData = {
    courses: [
        { title: "Java Swing & JDBC", level: "Expert", icon: "☕", color: "blue" },
        { title: "Full-Stack Node.js", level: "Advanced", icon: "🚀", color: "green" },
        { title: "GIS & Remote Sensing", level: "Intermediate", icon: "🌍", color: "orange" }
    ],
    videos: [
        { title: "How to Deploy on GitHub", dur: "10:20", thumb: "https://via.placeholder.com/400x225/2563eb/ffffff?text=GitHub+Deploy" },
        { title: "Advanced MySQL Queries", dur: "15:45", thumb: "https://via.placeholder.com/400x225/1e293b/ffffff?text=MySQL+Tutorial" }
    ],
    news: [
        { date: "April 5", head: "Dire Dawa IT Center Opens", tag: "Local" },
        { date: "April 4", head: "AI Trends in 2026", tag: "Tech" }
    ]
};

function renderAll() {
    // Render Courses
    document.getElementById('course-container').innerHTML = appData.courses.map(c => `
        <div class="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100">
            <div class="text-4xl mb-4">${c.icon}</div>
            <h3 class="text-2xl font-extrabold text-gray-800 mb-2">${c.title}</h3>
            <span class="inline-block px-3 py-1 bg-${c.color}-100 text-${c.color}-600 rounded-full text-xs font-bold uppercase">${c.level}</span>
            <button class="mt-8 w-full py-3 bg-gray-900 text-white rounded-xl font-bold group-hover:bg-blue-600 transition">Enroll Now</button>
        </div>
    `).join('');

    // Render Videos
    document.getElementById('video-container').innerHTML = appData.videos.map(v => `
        <div class="bg-gray-800 rounded-2xl overflow-hidden group">
            <img src="${v.thumb}" class="w-full h-48 object-cover group-hover:scale-105 transition duration-500">
            <div class="p-6">
                <h4 class="text-xl font-bold">${v.title}</h4>
                <p class="text-gray-400 text-sm mt-2">Duration: ${v.dur}</p>
            </div>
        </div>
    `).join('');

    // Render News
    document.getElementById('news-container').innerHTML = appData.news.map(n => `
        <div class="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-blue-600 flex justify-between items-center hover:shadow-md transition">
            <div>
                <span class="text-blue-600 font-bold text-sm">${n.date}</span>
                <h4 class="text-xl font-bold text-gray-800">${n.head}</h4>
            </div>
            <span class="px-4 py-1 bg-gray-100 rounded-full text-xs font-bold">${n.tag}</span>
        </div>
    `).join('');
}

// Dark Mode Toggle Logic
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.getElementById('body').classList.toggle('bg-gray-900');
    document.getElementById('body').classList.toggle('text-white');
    themeBtn.innerText = document.getElementById('body').classList.contains('bg-gray-900') ? '☀️' : '🌙';
});

// Search Filter Logic
document.getElementById('courseSearch').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = appData.courses.filter(c => c.title.toLowerCase().includes(term));
    // Re-render courses only
    document.getElementById('course-container').innerHTML = filtered.map(c => `
        <div class="group bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-3 transition-all border border-gray-100">
            <div class="text-4xl mb-4">${c.icon}</div>
            <h3 class="text-2xl font-extrabold text-gray-800 mb-2">${c.title}</h3>
            <button class="mt-8 w-full py-3 bg-gray-900 text-white rounded-xl font-bold">Enroll Now</button>
        </div>
    `).join('');
});

document.addEventListener('DOMContentLoaded', renderAll);
