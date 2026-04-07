// Fuadsoft PhD-Core Sidebar Engine v3.0
document.addEventListener("DOMContentLoaded", function() {
    const sidebarHTML = `
        <div class="logo-area">Fuadsoft</div>

        <div style="padding: 1rem; margin-bottom: 1.5rem; background: rgba(255,255,255,0.03); border-radius: 15px; border: 1px solid var(--border-glass);">
            <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 40px; height: 40px; background: var(--accent); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: var(--bg-deep);">FA</div>
                <div>
                    <div style="font-size: 0.85rem; font-weight: 700;">Fuad Aliyi</div>
                    <div style="font-size: 0.65rem; color: var(--accent); text-transform: uppercase; letter-spacing: 1px;">PhD Candidate</div>
                </div>
            </div>
        </div>
        
        <div class="nav-group">
            <span class="nav-label">🏠 HOME</span>
            <a href="index.html" class="nav-link" data-page="index.html"><span>Home Page</span></a>
        </div>

        <div class="nav-group">
            <span class="nav-label">📊 PLATFORM</span>
            <a href="dashboard.html" class="nav-link" data-page="dashboard.html"><span>Dashboard</span></a>
            <a href="analytics.html" class="nav-link" data-page="analytics.html"><span>Analytics</span></a>
            <a href="projects.html" class="nav-link" data-page="projects.html"><span>Projects</span></a>
            <a href="teams.html" class="nav-link" data-page="teams.html"><span>Teams</span></a>
        </div>

        <div class="nav-group">
            <span class="nav-label">👨‍💻 DEVELOPERS</span>
            <a href="api-docs.html" class="nav-link" data-page="api-docs.html"><span>API Docs</span></a>
            <a href="sdks.html" class="nav-link" data-page="sdks.html"><span>SDKs</span></a>
            <a href="cli.html" class="nav-link" data-page="cli.html"><span>CLI Tool</span></a>
            <a href="status.html" class="nav-link" data-page="status.html"><span>System Status</span></a>
        </div>

        <div class="nav-group">
            <span class="nav-label">🏢 COMPANY</span>
            <a href="about.html" class="nav-link" data-page="about.html"><span>About Us</span></a>
            <a href="careers.html" class="nav-link" data-page="careers.html"><span>Careers</span></a>
            <a href="press.html" class="nav-link" data-page="press.html"><span>Press Kit</span></a>
        </div>

        <div class="nav-group">
            <span class="nav-label">🆘 SUPPORT</span>
            <a href="help.html" class="nav-link" data-page="help.html"><span>Help Center</span></a>
            <a href="contact.html" class="nav-link" data-page="contact.html"><span>Contact Us</span></a>
            <a href="community.html" class="nav-link" data-page="community.html"><span>Community</span></a>
        </div>

        <div class="nav-group">
            <span class="nav-label">⚖️ LEGAL</span>
            <a href="privacy.html" class="nav-link" data-page="privacy.html"><span>Privacy Policy</span></a>
            <a href="terms.html" class="nav-link" data-page="terms.html"><span>Terms of Service</span></a>
        </div>

        <div class="nav-group">
            <span class="nav-label">⚙️ SETTINGS</span>
            <a href="language.html" class="nav-link" data-page="language.html"><span>Language</span></a>
            <a href="currency.html" class="nav-link" data-page="currency.html"><span>Currency</span></a>
        </div>

        <div style="margin-top: auto; padding-top: 2rem;">
            <a href="#" class="nav-link" style="color: #ef4444;"><span>🚪 Sign Out</span></a>
        </div>
    `;

    const sidebarElement = document.getElementById('sidebar-container');
    if (sidebarElement) {
        sidebarElement.innerHTML = sidebarHTML;
        
        // Active Link Automation
        const path = window.location.pathname;
        const currentPage = path === "/" || path.endsWith("/") ? "index.html" : path.split("/").pop();
        
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            }
        });
    }
});
