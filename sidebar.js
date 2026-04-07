// Fuadsoft Fixed Toggle Engine (YouTube Style)
document.addEventListener("DOMContentLoaded", function() {
    const sidebarHTML = `
        <div class="menu-header" style="padding: 15px 20px; display: flex; align-items: center; background: #0f172a;">
            <button id="menu-toggle" style="background:none; border:none; color:#38bdf8; font-size:2rem; cursor:pointer; z-index: 9999;">☰</button>
            <span id="mini-logo" style="margin-left: 15px; font-weight: 800; color: white; display: none;">FS</span>
        </div>

        <div id="sidebar-content" style="transition: 0.3s ease;">
            <div class="logo-area" style="padding: 10px 25px; font-size: 1.5rem; font-weight: 800; color: white;">Fuadsoft</div>

            <div style="padding: 1rem; margin: 0 1rem 1.5rem 1rem; background: rgba(255,255,255,0.03); border-radius: 15px; border: 1px solid rgba(255,255,255,0.08);">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 35px; height: 35px; background: #38bdf8; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #020617; font-size: 0.8rem;">FA</div>
                    <div class="profile-text">
                        <div style="font-size: 0.8rem; font-weight: 700;">Fuad Aliyi</div>
                        <div style="font-size: 0.6rem; color: #38bdf8; text-transform: uppercase;">PhD Candidate</div>
                    </div>
                </div>
            </div>
            
            <nav class="nav-lists" style="padding: 0 10px;">
                <div class="nav-group">
                    <span class="nav-label" style="display:block; padding: 10px; font-size: 0.7rem; color: #64748b;">🏠 HOME</span>
                    <a href="index.html" class="nav-link" data-page="index.html" style="display: flex; align-items: center; padding: 10px; color: #f1f5f9; text-decoration: none; border-radius: 10px;">Home Page</a>
                </div>

                <div class="nav-group">
                    <span class="nav-label" style="display:block; padding: 10px; font-size: 0.7rem; color: #64748b;">📊 PLATFORM</span>
                    <a href="dashboard.html" class="nav-link" data-page="dashboard.html" style="display: block; padding: 10px; color: #f1f5f9; text-decoration: none;">Dashboard</a>
                    <a href="projects.html" class="nav-link" data-page="projects.html" style="display: block; padding: 10px; color: #f1f5f9; text-decoration: none;">Projects</a>
                </div>

                <div class="nav-group">
                    <span class="nav-label" style="display:block; padding: 10px; font-size: 0.7rem; color: #64748b;">⚙️ SETTINGS</span>
                    <a href="language.html" class="nav-link" data-page="language.html" style="display: block; padding: 10px; color: #f1f5f9; text-decoration: none;">Language</a>
                </div>
            </nav>
        </div>
    `;

    const sidebarElement = document.getElementById('sidebar-container');
    
    if (sidebarElement) {
        sidebarElement.innerHTML = sidebarHTML;

        const menuBtn = document.getElementById('menu-toggle');
        const sidebarContent = document.getElementById('sidebar-content');
        const miniLogo = document.getElementById('mini-logo');

        // Toggle Function
        menuBtn.addEventListener('click', function() {
            if (sidebarContent.style.visibility === "hidden") {
                // BANUU
                sidebarContent.style.visibility = "visible";
                sidebarContent.style.opacity = "1";
                sidebarElement.style.width = "280px";
                miniLogo.style.display = "none";
            } else {
                // CUFUU
                sidebarContent.style.visibility = "hidden";
                sidebarContent.style.opacity = "0";
                sidebarElement.style.width = "80px";
                miniLogo.style.display = "block";
            }
        });

        // Active Page Highlight
        const path = window.location.pathname;
        const currentPage = path.split("/").pop() || "index.html";
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.getAttribute('data-page') === currentPage) {
                link.style.background = "rgba(56, 189, 248, 0.1)";
                link.style.color = "#38bdf8";
            }
        });
    }
});
