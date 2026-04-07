// Fuadsoft Professional Enterprise Sidebar - Static Version (Line 80+)
document.addEventListener("DOMContentLoaded", function() {
    const sidebarHTML = `
        <div class="logo-area" style="padding: 30px 25px; font-size: 1.8rem; font-weight: 800; color: white; letter-spacing: 1.5px; border-bottom: 1px solid rgba(255,255,255,0.05);">
            Fuadsoft<span style="color: #38bdf8;">.</span>
        </div>

        <div style="padding: 1.2rem; margin: 1.5rem 1rem; background: linear-gradient(135deg, rgba(56, 189, 248, 0.05), rgba(255, 255, 255, 0.02)); border-radius: 18px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="display: flex; align-items: center; gap: 15px;">
                <div style="width: 45px; height: 45px; background: #38bdf8; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #020617; box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);">FA</div>
                <div>
                    <div style="font-size: 0.95rem; font-weight: 700; color: white;">Fuad Aliyi</div>
                    <div style="font-size: 0.65rem; color: #38bdf8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">PhD Candidate</div>
                </div>
            </div>
        </div>
        
        <nav style="padding: 0 15px; display: flex; flex-direction: column; gap: 20px;">
            
            <div class="nav-group">
                <span class="nav-label" style="display:block; padding: 0 12px 10px 12px; font-size: 0.7rem; color: #64748b; font-weight: 700; letter-spacing: 1px;">🏠 MAIN MENU</span>
                <a href="index.html" class="nav-link" data-page="index.html">Home Page</a>
            </div>

            <div class="nav-group">
                <span class="nav-label" style="display:block; padding: 0 12px 10px 12px; font-size: 0.7rem; color: #64748b; font-weight: 700; letter-spacing: 1px;">📊 ANALYTICS & CORE</span>
                <a href="dashboard.html" class="nav-link" data-page="dashboard.html">System Dashboard</a>
                <a href="analytics.html" class="nav-link" data-page="analytics.html">Data Analytics</a>
                <a href="projects.html" class="nav-link" data-page="projects.html">Research Projects</a>
                <a href="teams.html" class="nav-link" data-page="teams.html">Core Team</a>
            </div>

            <div class="nav-group">
                <span class="nav-label" style="display:block; padding: 0 12px 10px 12px; font-size: 0.7rem; color: #64748b; font-weight: 700; letter-spacing: 1px;">👨‍💻 DEV TOOLS</span>
                <a href="api-docs.html" class="nav-link" data-page="api-docs.html">API Documentation</a>
                <a href="sdks.html" class="nav-link" data-page="sdks.html">Software SDKs</a>
                <a href="cli.html" class="nav-link" data-page="cli.html">CLI Interface</a>
                <a href="status.html" class="nav-link" data-page="status.html">System Status</a>
            </div>

            <div class="nav-group">
                <span class="nav-label" style="display:block; padding: 0 12px 10px 12px; font-size: 0.7rem; color: #64748b; font-weight: 700; letter-spacing: 1px;">🏢 ORGANIZATION</span>
                <a href="about.html" class="nav-link" data-page="about.html">About Fuadsoft</a>
                <a href="careers.html" class="nav-link" data-page="careers.html">Careers</a>
                <a href="privacy.html" class="nav-link" data-page="privacy.html">Privacy Policy</a>
                <a href="terms.html" class="nav-link" data-page="terms.html">Terms of Service</a>
            </div>

            <div class="nav-group">
                <span class="nav-label" style="display:block; padding: 0 12px 10px 12px; font-size: 0.7rem; color: #64748b; font-weight: 700; letter-spacing: 1px;">⚙️ PREFERENCES</span>
                <a href="language.html" class="nav-link" data-page="language.html">System Language</a>
                <a href="currency.html" class="nav-link" data-page="currency.html">Currency Settings</a>
            </div>
        </nav>

        <div style="margin-top: 3rem; padding: 0 15px 30px 15px;">
            <a href="#" class="nav-link" style="color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.15); display: flex; align-items: center; justify-content: center; gap: 10px;">
                <span>🚪</span> Sign Out
            </a>
        </div>
    `;

    const sidebarElement = document.getElementById('sidebar-container');
    if (sidebarElement) {
        sidebarElement.innerHTML = sidebarHTML;
        
        // Active Page Logic - Koodii haaraa (High Precision)
        const path = window.location.pathname;
        const currentPage = (path === "/" || path.endsWith("/")) ? "index.html" : path.split("/").pop();
        
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            // Base Styles for Links
            link.style.display = "block";
            link.style.padding = "12px 15px";
            link.style.color = "#94a3b8";
            link.style.textDecoration = "none";
            link.style.borderRadius = "12px";
            link.style.fontSize = "0.9rem";
            link.style.marginBottom = "4px";
            link.style.transition = "all 0.3s ease";

            // If this is the current active page
            if (link.getAttribute('data-page') === currentPage) {
                link.style.background = "rgba(56, 189, 248, 0.1)";
                link.style.color = "#38bdf8";
                link.style.fontWeight = "600";
                link.style.paddingLeft = "20px";
                link.style.borderLeft = "4px solid #38bdf8";
            }
        });
    }
});
