<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Network Design Pro | Study Guide</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #fcfcfd;
            color: #0f172a;
        }

        .glass-header {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(226, 232, 240, 0.5);
        }

        .concept-card {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 1px solid #f1f5f9;
        }

        .concept-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
            border-color: #3b82f6;
        }

        .sidebar-item {
            transition: all 0.2s ease;
            position: relative;
        }

        .sidebar-item.active::before {
            content: '';
            position: absolute;
            left: 0;
            top: 25%;
            height: 50%;
            width: 4px;
            background-color: #3b82f6;
            border-radius: 0 4px 4px 0;
        }

        .section-tag {
            background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
        }

        .gradient-card-blue { background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); }
        .gradient-card-purple { background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%); }
        .gradient-card-emerald { background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
    </style>
</head>
<body class="antialiased">

    <!-- Navigation Header -->
    <header class="glass-header sticky top-0 z-50 w-full">
        <div class="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <i class="fas fa-project-diagram"></i>
                </div>
                <h1 class="text-xl font-extrabold tracking-tight">NetDesign<span class="text-blue-600">Pro</span></h1>
            </div>
            
            <div class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
                <a href="#lifecycle" class="hover:text-blue-600 transition">Lifecycle</a>
                <a href="#topology" class="hover:text-blue-600 transition">Topology</a>
                <a href="#hierarchy" class="hover:text-blue-600 transition">Hierarchy</a>
                <button class="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-all duration-300">Start Quiz</button>
            </div>
        </div>
    </header>

    <div class="max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row gap-12 py-12">
        
        <!-- Interactive Sidebar Navigation -->
        <aside class="w-full lg:w-72 flex-shrink-0">
            <div class="sticky top-28 bg-white border border-slate-100 p-6 rounded-3xl shadow-sm">
                <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-2">Table of Contents</h3>
                <nav class="space-y-1">
                    <a href="#intro" class="sidebar-item active block px-4 py-3 rounded-xl text-sm font-semibold text-blue-600 bg-blue-50">1.1 Design Introduction</a>
                    <a href="#lifecycle" class="sidebar-item block px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50">1.2 PPDIOO Lifecycle</a>
                    <a href="#requirements" class="sidebar-item block px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50">1.3 Requirements Analysis</a>
                    <a href="#topology" class="sidebar-item block px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50">1.4 Physical vs. Logical</a>
                    <a href="#hierarchy" class="sidebar-item block px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50">1.5 Hierarchical Model</a>
                    <a href="#addressing" class="sidebar-item block px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50">1.6 IP Addressing</a>
                </nav>
                
                <div class="mt-10 p-5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl text-white">
                    <p class="text-xs font-medium text-slate-400 mb-2">Current Progress</p>
                    <div class="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden mb-3">
                        <div class="bg-blue-400 h-full w-1/3"></div>
                    </div>
                    <p class="text-[10px] text-slate-400 italic">"Good design is obvious. Great design is transparent."</p>
                </div>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-grow max-w-4xl space-y-24">
            
            <!-- Hero Introduction -->
            <section id="intro">
                <div class="mb-10">
                    <span class="section-tag text-sm tracking-widest uppercase mb-4 block">Chapter 01</span>
                    <h2 class="text-5xl font-extrabold text-slate-900 leading-tight mb-6">The Art of Network Design</h2>
                    <p class="text-xl text-slate-500 leading-relaxed max-w-2xl">
                        Network design is not just connecting cables; it's the architectural blueprint for an organization's digital nervous system.
                    </p>
                </div>

                <div class="bg-white p-1 rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                    <div class="p-8 md:p-12">
                        <h3 class="text-2xl font-bold mb-8">What exactly is Network Design?</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="space-y-4">
                                <div class="flex gap-4">
                                    <div class="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex-shrink-0 flex items-center justify-center font-bold">1</div>
                                    <p class="text-slate-600 leading-relaxed">It's a phase in the project where we select **protocols, hardware, and physical layouts** to meet specific business goals.</p>
                                </div>
                                <div class="flex gap-4">
                                    <div class="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex-shrink-0 flex items-center justify-center font-bold">2</div>
                                    <p class="text-slate-600 leading-relaxed">It ensures the network can **scale** without needing a complete overhaul every two years.</p>
                                </div>
                            </div>
                            <div class="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <i class="fas fa-lightbulb text-yellow-500"></i> Essential Objectives
                                </h4>
                                <ul class="space-y-3 text-sm font-medium text-slate-600">
                                    <li class="flex items-center gap-3"><i class="fas fa-check-circle text-green-500"></i> Availability (Uptime)</li>
                                    <li class="flex items-center gap-3"><i class="fas fa-check-circle text-green-500"></i> Resilience (Redundancy)</li>
                                    <li class="flex items-center gap-3"><i class="fas fa-check-circle text-green-500"></i> Manageability</li>
                                    <li class="flex items-center gap-3"><i class="fas fa-check-circle text-green-500"></i> Performance (QoS)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- PPDIOO Lifecycle -->
            <section id="lifecycle">
                <div class="flex items-center gap-4 mb-8">
                    <div class="h-px bg-slate-200 flex-grow"></div>
                    <h3 class="text-2xl font-bold text-slate-800">The PPDIOO Lifecycle</h3>
                    <div class="h-px bg-slate-200 flex-grow"></div>
                </div>
                
                <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div class="concept-card bg-white p-6 rounded-3xl text-center">
                        <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-full mx-auto flex items-center justify-center mb-4 text-xl">
                            <i class="fas fa-map"></i>
                        </div>
                        <h4 class="font-bold mb-2">Prepare</h4>
                        <p class="text-xs text-slate-500">Assess business vision and tech strategy.</p>
                    </div>
                    <div class="concept-card bg-white p-6 rounded-3xl text-center">
                        <div class="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full mx-auto flex items-center justify-center mb-4 text-xl">
                            <i class="fas fa-search"></i>
                        </div>
                        <h4 class="font-bold mb-2">Plan</h4>
                        <p class="text-xs text-slate-500">Analyze current gaps and define requirements.</p>
                    </div>
                    <div class="concept-card bg-white p-6 rounded-3xl text-center border-blue-500 shadow-xl shadow-blue-50">
                        <div class="w-14 h-14 bg-blue-600 text-white rounded-full mx-auto flex items-center justify-center mb-4 text-xl">
                            <i class="fas fa-pencil-ruler"></i>
                        </div>
                        <h4 class="font-bold mb-2 text-blue-600">Design</h4>
                        <p class="text-xs text-slate-500">Logical & physical architecture mapping.</p>
                    </div>
                    <div class="concept-card bg-white p-6 rounded-3xl text-center">
                        <div class="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full mx-auto flex items-center justify-center mb-4 text-xl">
                            <i class="fas fa-tools"></i>
                        </div>
                        <h4 class="font-bold mb-2 text-emerald-600">Implement</h4>
                        <p class="text-xs text-slate-500">System installation and configuration.</p>
                    </div>
                    <div class="concept-card bg-white p-6 rounded-3xl text-center">
                        <div class="w-14 h-14 bg-amber-50 text-amber-600 rounded-full mx-auto flex items-center justify-center mb-4 text-xl">
                            <i class="fas fa-cog"></i>
                        </div>
                        <h4 class="font-bold mb-2 text-amber-600">Operate</h4>
                        <p class="text-xs text-slate-500">Day-to-day monitoring and maintenance.</p>
                    </div>
                    <div class="concept-card bg-white p-6 rounded-3xl text-center">
                        <div class="w-14 h-14 bg-rose-50 text-rose-600 rounded-full mx-auto flex items-center justify-center mb-4 text-xl">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <h4 class="font-bold mb-2 text-rose-600">Optimize</h4>
                        <p class="text-xs text-slate-500">Continuous improvement and scaling.</p>
                    </div>
                </div>
            </section>

            <!-- Topology Section -->
            <section id="topology">
                <div class="bg-slate-900 rounded-[2.5rem] p-12 text-white overflow-hidden relative">
                    <div class="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                    
                    <h3 class="text-3xl font-bold mb-10">Topology: Physical vs. Logical</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                        <div class="space-y-6">
                            <div class="flex items-center gap-4 mb-4">
                                <span class="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-xs font-bold uppercase">Physical</span>
                                <h4 class="text-xl font-bold italic">"How it's wired"</h4>
                            </div>
                            <p class="text-slate-400 text-sm leading-relaxed">Represents the actual layout of cables, nodes, and devices. Think of it as a floor plan.</p>
                            <ul class="space-y-3 text-slate-300 text-sm">
                                <li class="flex items-center gap-3"><i class="fas fa-ethernet text-blue-400"></i> Cable types and lengths</li>
                                <li class="flex items-center gap-3"><i class="fas fa-server text-blue-400"></i> Physical port locations</li>
                                <li class="flex items-center gap-3"><i class="fas fa-warehouse text-blue-400"></i> Server room layouts</li>
                            </ul>
                        </div>
                        
                        <div class="space-y-6">
                            <div class="flex items-center gap-4 mb-4">
                                <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase">Logical</span>
                                <h4 class="text-xl font-bold italic">"How data flows"</h4>
                            </div>
                            <p class="text-slate-400 text-sm leading-relaxed">Shows the path that data follows through the network. A single wire might carry multiple logical paths (VLANs).</p>
                            <ul class="space-y-3 text-slate-300 text-sm">
                                <li class="flex items-center gap-3"><i class="fas fa-project-diagram text-emerald-400"></i> IP Addressing schemes</li>
                                <li class="flex items-center gap-3"><i class="fas fa-shield-alt text-emerald-400"></i> Routing protocols (OSPF, BGP)</li>
                                <li class="flex items-center gap-3"><i class="fas fa-layer-group text-emerald-400"></i> Virtual LAN (VLAN) structure</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Hierarchical Network Design -->
            <section id="hierarchy">
                <h3 class="text-3xl font-bold text-slate-900 mb-4">Cisco 3-Layer Hierarchical Model</h3>
                <p class="text-slate-500 mb-10">Designing in modules prevents "spaghetti" networks and facilitates easier troubleshooting.</p>
                
                <div class="space-y-4">
                    <!-- Core -->
                    <div class="group bg-white p-8 rounded-3xl border border-slate-100 flex gap-8 items-center transition hover:border-slate-300">
                        <div class="w-20 h-20 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-3xl shrink-0">
                            <i class="fas fa-microchip"></i>
                        </div>
                        <div>
                            <div class="flex items-center gap-3 mb-2">
                                <h4 class="text-xl font-bold">Core Layer</h4>
                                <span class="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded font-bold uppercase">Speed</span>
                            </div>
                            <p class="text-slate-600 text-sm leading-relaxed italic">The "Fast Highway". Transporting large amounts of data between sections of the network. Reliability and speed are key.</p>
                        </div>
                    </div>

                    <!-- Distribution -->
                    <div class="group bg-white p-8 rounded-3xl border border-slate-100 flex gap-8 items-center transition hover:border-slate-300">
                        <div class="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl shrink-0">
                            <i class="fas fa-filter"></i>
                        </div>
                        <div>
                            <div class="flex items-center gap-3 mb-2">
                                <h4 class="text-xl font-bold">Distribution Layer</h4>
                                <span class="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded font-bold uppercase">Policy</span>
                            </div>
                            <p class="text-slate-600 text-sm leading-relaxed italic">The "Traffic Guard". Routing between VLANs, security filtering (ACLs), and QoS policies are defined here.</p>
                        </div>
                    </div>

                    <!-- Access -->
                    <div class="group bg-white p-8 rounded-3xl border border-slate-100 flex gap-8 items-center transition hover:border-slate-300">
                        <div class="w-20 h-20 bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-3xl shrink-0">
                            <i class="fas fa-plug"></i>
                        </div>
                        <div>
                            <div class="flex items-center gap-3 mb-2">
                                <h4 class="text-xl font-bold">Access Layer</h4>
                                <span class="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded font-bold uppercase">Entry</span>
                            </div>
                            <p class="text-slate-600 text-sm leading-relaxed italic">The "Front Door". Where end devices (PCs, printers, IP phones) connect to the network.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    </div>

    <!-- Modern Footer -->
    <footer class="bg-white border-t border-slate-100 pt-20 pb-10 mt-24">
        <div class="max-w-[1440px] mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                <div class="max-w-xs">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs">
                            <i class="fas fa-project-diagram"></i>
                        </div>
                        <h2 class="text-lg font-bold tracking-tight">NetDesignPro</h2>
                    </div>
                    <p class="text-sm text-slate-500 leading-relaxed">Comprehensive study resources for aspiring network architects and IT professionals.</p>
                </div>
                
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-12">
                    <div>
                        <h4 class="text-sm font-bold text-slate-900 mb-4">Modules</h4>
                        <ul class="text-sm text-slate-500 space-y-3">
                            <li><a href="#" class="hover:text-blue-600">Enterprise Campus</a></li>
                            <li><a href="#" class="hover:text-blue-600">Data Center</a></li>
                            <li><a href="#" class="hover:text-blue-600">Cloud Hybrid</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-sm font-bold text-slate-900 mb-4">Resources</h4>
                        <ul class="text-sm text-slate-500 space-y-3">
                            <li><a href="#" class="hover:text-blue-600">Case Studies</a></li>
                            <li><a href="#" class="hover:text-blue-600">Flashcards</a></li>
                            <li><a href="#" class="hover:text-blue-600">Lab Guides</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                <p class="text-xs text-slate-400">&copy; 2024 Network Design Pro Series. All rights reserved.</p>
                <div class="flex gap-6 text-slate-400">
                    <i class="fab fa-twitter hover:text-blue-400 transition cursor-pointer"></i>
                    <i class="fab fa-github hover:text-slate-900 transition cursor-pointer"></i>
                    <i class="fab fa-linkedin hover:text-blue-700 transition cursor-pointer"></i>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Update active sidebar state on scroll
        window.addEventListener('scroll', () => {
            let current = "";
            const sections = document.querySelectorAll("section");
            const navItems = document.querySelectorAll(".sidebar-item");

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute("id");
                }
            });

            navItems.forEach((item) => {
                item.classList.remove("active", "text-blue-600", "bg-blue-50");
                item.classList.add("text-slate-600");
                if (item.getAttribute("href").includes(current)) {
                    item.classList.add("active", "text-blue-600", "bg-blue-50");
                    item.classList.remove("text-slate-600");
                }
            });
        });
    </script>
</body>
</html>
