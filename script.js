// TalentStream - Screening Dashboard Controller

// 1. Seed Candidate Data Store
let candidates = [
    {
        id: "c1",
        name: "Arlo Finch",
        email: "arlo.finch@example.com",
        phone: "+1 (555) 382-9901",
        position: "Senior Frontend Developer",
        department: "Engineering",
        experience: 6,
        skills: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Figma"],
        status: "Pending",
        photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhKwV4FI4Nz8-RcTMu7IFGVIsf4ixFOFc91wjd5-ooy1YDrQ85DX6FJRfshvPlFv6CGdYP3lJw__V8fW1eFCB9E71CIA6Odx4GQb9zi0b1ggQr3P3XApxnOBPQqEz_1b1QlJ9FSvQPQyp2xtGc-75h7xGCpESJy1DILqY6lNFWFQGpGF0G2SH5QFj0zg7ebSAwcUZxt_j_phgBLMypodQ7vGXYU2WTz25OEtFFGKoPGuXvvJc4678yJ1fND11GQ6ZSOTDWoCCRA1s",
        summary: "Highly skilled Frontend Engineer with a focus on building scalable, high-performance web applications. Expert in modern JavaScript frameworks, design systems, and utility-first CSS. Proven track record of leading designs to polished code."
    },
    {
        id: "c2",
        name: "Elena Rodriguez",
        email: "elena.r@agency.net",
        phone: "+1 (555) 912-3829",
        position: "Lead UX Designer",
        department: "Design",
        experience: 8,
        skills: ["Figma", "User Research", "Interaction Design", "Prototyping"],
        status: "Pending",
        photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd2Biq2ujkvopD6uEaO5-8sJRUQNIymG2WvwwRy4qwnlnp2B6j7ViCtfpMcdMsCBaf-CxicQn2tCjMxZnNUqZ76R0WUrDifZeV29GO6mMcLWWoa7VdyK5kZZTMQFCxlT23dnR-rkASJQ-UXfAnAPhWoLZJ0CP9NtP_FS9FR9eR3VqSB6VBOfNnSBXTqmen_szj26bPS6W2v-lYVznbm8EhqUgzPIbZnC2TpRwYtkcvThqxNRtmN9coA6engT_cVb8uV5UsqeIinHk",
        summary: "Passionate Design Leader specializing in collaborative products and SaaS dashboards. Dedicated to translation of user research into high-fidelity prototype flows, detailed wireframes, and standardized cross-team design systems."
    },
    {
        id: "c3",
        name: "Toby Kimmich",
        email: "tkimmich@devs.com",
        phone: "+1 (555) 238-1930",
        position: "Backend Engineer",
        department: "Engineering",
        experience: 4,
        skills: ["Go", "SQL", "Docker", "Redis", "gRPC"],
        status: "Pending",
        photo: null, // Test fallback initials avatar
        summary: "Backend specialist with strong expertise in systems architecture, databases, and microservices in Go. Focuses on writing readable, testable, and optimized code, and maintaining containerized deployment pipelines."
    },
    {
        id: "c4",
        name: "Clara Oswald",
        email: "clara.o@marketing.co",
        phone: "+1 (555) 887-2391",
        position: "Digital Marketer",
        department: "Marketing",
        experience: 4,
        skills: ["Google Analytics", "Growth Hacking", "SEO", "Copywriting"],
        status: "Accepted",
        photo: null,
        summary: "Data-driven Digital Marketer who builds and grows content channels. Skilled in marketing automation, analytical auditing, content strategy planning, and multi-channel advertising optimization."
    },
    {
        id: "c5",
        name: "Marcus Sterling",
        email: "marcus.s@saleshub.com",
        phone: "+1 (555) 728-1129",
        position: "Sales Director",
        department: "Sales",
        experience: 12,
        skills: ["Enterprise Sales", "CRM", "Contract Negotiation", "Strategy"],
        status: "Rejected",
        photo: null,
        summary: "Executive-level Sales representative with over a decade of experience closing large enterprise contracts. Strategic thinker, mentor to sales teams, and builder of long-term commercial accounts."
    },
    {
        id: "c6",
        name: "Priya Patel",
        email: "priya.patel@codetech.org",
        phone: "+1 (555) 438-2990",
        position: "Full Stack Engineer",
        department: "Engineering",
        experience: 5,
        skills: ["Node.js", "React.js", "MongoDB", "AWS", "Python"],
        status: "Pending",
        photo: null,
        summary: "Versatile Full Stack engineer bridging client-side components with scalable cloud servers. Enthusiastic about automated tests, continuous delivery, and clean design patterns."
    },
    {
        id: "c7",
        name: "Lucas Vance",
        email: "lucas.v@creative.studio",
        phone: "+1 (555) 609-3811",
        position: "UI Designer",
        department: "Design",
        experience: 3,
        skills: ["Figma", "Illustrator", "Visual Design", "Design Systems"],
        status: "Accepted",
        photo: null,
        summary: "UI Designer specializing in layout composition, visual branding, typography, and styling vectors. Crafting aesthetic and consistent interfaces for web applications and creative websites."
    },
    {
        id: "c8",
        name: "Jordan Blake",
        email: "jordan.b@outreach.net",
        phone: "+1 (555) 302-9988",
        position: "Sales Executive",
        department: "Sales",
        experience: 1,
        skills: ["Lead Generation", "Cold Outreach", "Salesforce", "Communication"],
        status: "Pending",
        photo: null,
        summary: "Outgoing Sales Executive focused on prospecting, inbound lead qualification, and customer relations. Adaptable worker looking to expand career in SaaS sales environments."
    },
    {
        id: "c9",
        name: "Amina Al-Masri",
        email: "amina.m@marketly.io",
        phone: "+1 (555) 542-8812",
        position: "SEO Specialist",
        department: "Marketing",
        experience: 2,
        skills: ["SEO Audits", "Keyword Research", "SEM", "Webflow"],
        status: "Pending",
        photo: null,
        summary: "Dedicated SEO specialist with experience driving organic search visibility for B2B brands. Expert in building search campaigns, backlink analysis, and speed performance optimization."
    }
];

// 2. Global State Configuration
const state = {
    filters: {
        search: "",
        experience: "all", // "all" | "junior" | "mid" | "senior"
        departments: ["Engineering", "Design", "Marketing", "Sales"],
        status: "all" // "all" | "Pending" | "Accepted" | "Rejected"
    },
    viewType: "table", // "table" | "grid"
    selectedCandidateId: null
};

// 3. Select DOM Elements
const searchInput = document.getElementById("candidate-search");
const selectExperience = document.getElementById("filter-experience");
const deptCheckboxes = document.getElementsByName("department");
const statusPillContainer = document.getElementById("status-filter-pills");
const resetFiltersBtn = document.getElementById("reset-filters-btn");
const viewToggleTable = document.getElementById("view-toggle-table");
const viewToggleGrid = document.getElementById("view-toggle-grid");
const candidatesContainer = document.getElementById("candidates-container");
const resultsCount = document.getElementById("results-count");
const activeFiltersSummary = document.getElementById("active-filters-summary");

// Stats counters
const statTotal = document.getElementById("stat-count-total");
const statAccepted = document.getElementById("stat-count-accepted");
const statRejected = document.getElementById("stat-count-rejected");
const statPending = document.getElementById("stat-count-pending");

// Theme Elements
const themeToggleBtn = document.getElementById("theme-toggle");

// Modal Elements
const detailsModal = document.getElementById("details-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalContent = document.getElementById("modal-content");

// Mobile Sidebar
const mobileSidebarToggle = document.getElementById("mobile-sidebar-toggle");
const mobileSidebarClose = document.getElementById("mobile-sidebar-close");
const appSidebar = document.getElementById("app-sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");

// Initialization & Core Setup
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    setupEventListeners();
    updateDashboardStats();
    renderCandidates();
});

// Theme Management (Light / Dark Mode)
function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    showToast(`Switched to ${isDark ? 'Dark' : 'Light'} Mode`, "info");
}

// Core Render Controllers

// Re-calculate and update counters
function updateDashboardStats() {
    const total = candidates.length;
    const accepted = candidates.filter(c => c.status === "Accepted").length;
    const rejected = candidates.filter(c => c.status === "Rejected").length;
    const pending = candidates.filter(c => c.status === "Pending").length;

    // Animate statistics counter text update
    animateValue(statTotal, parseInt(statTotal.textContent) || 0, total, 400);
    animateValue(statAccepted, parseInt(statAccepted.textContent) || 0, accepted, 400);
    animateValue(statRejected, parseInt(statRejected.textContent) || 0, rejected, 400);
    animateValue(statPending, parseInt(statPending.textContent) || 0, pending, 400);
}

// Value Increment Animation Helper
function animateValue(obj, start, end, duration) {
    if (start === end) {
        obj.textContent = end;
        return;
    }
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            obj.textContent = end;
        }
    };
    window.requestAnimationFrame(step);
}

// Filter evaluation function
function getFilteredCandidates() {
    return candidates.filter(c => {
        // Search query check (Matches name or position case-insensitive)
        const nameMatch = c.name.toLowerCase().includes(state.filters.search.toLowerCase());
        const roleMatch = c.position.toLowerCase().includes(state.filters.search.toLowerCase());
        const matchesSearch = nameMatch || roleMatch;

        // Experience Level Check
        let matchesExperience = true;
        if (state.filters.experience === "junior") {
            matchesExperience = c.experience <= 2;
        } else if (state.filters.experience === "mid") {
            matchesExperience = c.experience >= 3 && c.experience <= 5;
        } else if (state.filters.experience === "senior") {
            matchesExperience = c.experience >= 6;
        }

        // Department Check
        const matchesDepartment = state.filters.departments.includes(c.department);

        // Status Check
        const matchesStatus = state.filters.status === "all" || c.status === state.filters.status;

        return matchesSearch && matchesExperience && matchesDepartment && matchesStatus;
    });
}

// Main candidate lists layout generator
function renderCandidates() {
    const list = getFilteredCandidates();
    resultsCount.textContent = `${list.length} candidate${list.length === 1 ? '' : 's'} found`;
    
    // Update active filters visual chips
    renderActiveFilterSummary();

    if (list.length === 0) {
        candidatesContainer.innerHTML = `
            <div class="empty-state">
                <span class="material-symbols-outlined empty-icon">person_search</span>
                <h3 class="empty-title">No candidates match filters</h3>
                <p class="empty-desc">Try clearing search phrases or adjusting experience and department filters in the sidebar.</p>
            </div>
        `;
        return;
    }

    if (state.viewType === "table") {
        candidatesContainer.className = "candidates-table-container custom-scrollbar";
        candidatesContainer.innerHTML = buildTableHTML(list);
    } else {
        candidatesContainer.className = "candidates-grid-container";
        candidatesContainer.innerHTML = buildGridHTML(list);
    }

    // Attach card/row click triggers and action listeners
    attachCandidateCardEvents();
}

// Render active filters as chips for transparency
function renderActiveFilterSummary() {
    activeFiltersSummary.innerHTML = "";
    let summaries = [];

    if (state.filters.search) {
        summaries.push({
            type: "search",
            label: `Search: "${state.filters.search}"`,
            action: () => {
                state.filters.search = "";
                searchInput.value = "";
                renderCandidates();
            }
        });
    }

    if (state.filters.experience !== "all") {
        const expLabel = state.filters.experience === "junior" ? "Junior (0-2 yrs)" : 
                         state.filters.experience === "mid" ? "Mid-Level (3-5 yrs)" : "Senior (6+ yrs)";
        summaries.push({
            type: "experience",
            label: expLabel,
            action: () => {
                state.filters.experience = "all";
                selectExperience.value = "all";
                renderCandidates();
            }
        });
    }

    if (state.filters.status !== "all") {
        summaries.push({
            type: "status",
            label: `Status: ${state.filters.status}`,
            action: () => {
                state.filters.status = "all";
                // Reset active pills
                document.querySelectorAll(".status-pill-btn").forEach(btn => {
                    btn.classList.toggle("active", btn.dataset.status === "all");
                });
                renderCandidates();
            }
        });
    }

    // If departments are partially checked
    const availableDepts = ["Engineering", "Design", "Marketing", "Sales"];
    if (state.filters.departments.length < availableDepts.length) {
        state.filters.departments.forEach(dept => {
            summaries.push({
                type: "dept",
                label: dept,
                action: () => {
                    state.filters.departments = state.filters.departments.filter(d => d !== dept);
                    // Update checkbox UI
                    Array.from(deptCheckboxes).forEach(cb => {
                        if (cb.value === dept) cb.checked = false;
                    });
                    renderCandidates();
                }
            });
        });
    }

    if (summaries.length > 0) {
        summaries.forEach(chip => {
            const el = document.createElement("div");
            el.className = "summary-chip";
            el.innerHTML = `
                <span>${chip.label}</span>
                <span class="material-symbols-outlined summary-chip-remove">close</span>
            `;
            el.querySelector(".summary-chip-remove").addEventListener("click", (e) => {
                e.stopPropagation();
                chip.action();
            });
            activeFiltersSummary.appendChild(el);
        });
    }
}

// Generate Initials Avatar
function getAvatarPlaceholder(name) {
    const parts = name.trim().split(" ");
    const initials = parts.length > 1 ? (parts[0][0] + parts[parts.length - 1][0]) : parts[0][0];
    return initials.toUpperCase();
}

// Build table view layout
function buildTableHTML(list) {
    let rows = list.map(c => {
        const avatar = c.photo 
            ? `<img src="${c.photo}" alt="${c.name}" class="cell-avatar">`
            : `<div class="cell-avatar gradient-fallback">${getAvatarPlaceholder(c.name)}</div>`;

        const skillsPills = c.skills.slice(0, 3).map(s => `<span class="skill-tag">${s}</span>`).join("");
        const moreSkills = c.skills.length > 3 ? `<span class="skill-tag more-skills">+${c.skills.length - 3}</span>` : "";

        return `
            <tr data-id="${c.id}" class="candidate-row">
                <td data-label="Candidate Name">
                    <div class="candidate-cell-profile">
                        ${avatar}
                        <div class="cell-info">
                            <span class="cell-name">${c.name}</span>
                            <span class="cell-email">${c.email}</span>
                        </div>
                    </div>
                </td>
                <td data-label="Position">${c.position}</td>
                <td data-label="Exp">${c.experience} yrs</td>
                <td data-label="Skills">
                    <div class="skills-list">
                        ${skillsPills}
                        ${moreSkills}
                    </div>
                </td>
                <td data-label="Status">
                    <span class="status-badge ${c.status.toLowerCase()}">${c.status}</span>
                </td>
                <td data-label="Actions" class="text-right">
                    <div class="row-actions">
                        <button class="action-btn view" data-action="view" title="View Details">
                            <span class="material-symbols-outlined">visibility</span>
                        </button>
                        ${c.status !== 'Accepted' ? `
                        <button class="action-btn accept" data-action="accept" title="Accept Candidate">
                            <span class="material-symbols-outlined">check_circle</span>
                        </button>` : ''}
                        ${c.status !== 'Rejected' ? `
                        <button class="action-btn reject" data-action="reject" title="Reject Candidate">
                            <span class="material-symbols-outlined">cancel</span>
                        </button>` : ''}
                    </div>
                </td>
            </tr>
        `;
    }).join("");

    return `
        <table class="candidates-table">
            <thead>
                <tr>
                    <th>Candidate Name</th>
                    <th>Position</th>
                    <th>Experience</th>
                    <th>Skills</th>
                    <th>Status</th>
                    <th class="text-right">Actions</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
    `;
}

// Build grid view layout
function buildGridHTML(list) {
    const cards = list.map(c => {
        const avatar = c.photo 
            ? `<img src="${c.photo}" alt="${c.name}" class="card-avatar">`
            : `<div class="card-avatar gradient-fallback">${getAvatarPlaceholder(c.name)}</div>`;

        const skillsPills = c.skills.slice(0, 3).map(s => `<span class="skill-tag">${s}</span>`).join("");
        const moreSkills = c.skills.length > 3 ? `<span class="skill-tag more-skills">+${c.skills.length - 3}</span>` : "";

        return `
            <div class="candidate-card" data-id="${c.id}">
                <div class="card-top">
                    <span class="status-badge ${c.status.toLowerCase()}">${c.status}</span>
                    <button class="action-btn view" data-action="view" title="View Details">
                        <span class="material-symbols-outlined">visibility</span>
                    </button>
                </div>
                <div class="card-body">
                    ${avatar}
                    <h3 class="card-name">${c.name}</h3>
                    <p class="card-role">${c.position}</p>
                    <span class="card-exp">${c.experience} years experience</span>
                    <div class="card-skills">
                        ${skillsPills}
                        ${moreSkills}
                    </div>
                </div>
                <div class="card-bottom">
                    <button class="btn btn-secondary" data-action="view">
                        Details
                    </button>
                    <div style="display:flex; gap:0.25rem;">
                        ${c.status !== 'Accepted' ? `
                        <button class="btn btn-primary btn-full" style="padding:0.5rem; background-color: var(--success); color: white;" data-action="accept" title="Accept">
                            <span class="material-symbols-outlined" style="font-size:1.125rem;">check</span>
                        </button>` : ''}
                        ${c.status !== 'Rejected' ? `
                        <button class="btn btn-danger btn-full" style="padding:0.5rem;" data-action="reject" title="Reject">
                            <span class="material-symbols-outlined" style="font-size:1.125rem;">close</span>
                        </button>` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join("");

    return `
        <div class="candidates-grid">
            ${cards}
        </div>
    `;
}

// Attach action event listeners to rendered elements
function attachCandidateCardEvents() {
    const viewClass = state.viewType === "table" ? ".candidate-row" : ".candidate-card";
    
    document.querySelectorAll(viewClass).forEach(el => {
        const id = el.dataset.id;

        // Clicking card/row opens detail modal
        el.addEventListener("click", (e) => {
            // Stop trigger if clicking an action button specifically
            if (e.target.closest("button") || e.target.closest(".summary-chip-remove")) return;
            openDetailsModal(id);
        });

        // Specific actions
        el.querySelectorAll("[data-action]").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const action = btn.dataset.action;
                if (action === "view") openDetailsModal(id);
                if (action === "accept") acceptCandidate(id);
                if (action === "reject") rejectCandidate(id);
            });
        });
    });
}

// Candidate State Actions

function acceptCandidate(id) {
    const candidate = candidates.find(c => c.id === id);
    if (!candidate) return;

    candidate.status = "Accepted";
    showToast(`Candidate ${candidate.name} Accepted`, "success");
    
    // Refresh GUI states
    updateDashboardStats();
    renderCandidates();

    // If detail modal is open for this candidate, re-render it
    if (state.selectedCandidateId === id) {
        renderModalContent(candidate);
    }
}

function rejectCandidate(id) {
    const candidate = candidates.find(c => c.id === id);
    if (!candidate) return;

    candidate.status = "Rejected";
    showToast(`Candidate ${candidate.name} Rejected`, "danger");

    // Refresh GUI states
    updateDashboardStats();
    renderCandidates();

    // If detail modal is open for this candidate, re-render it
    if (state.selectedCandidateId === id) {
        renderModalContent(candidate);
    }
}

// Modal Operations

function openDetailsModal(id) {
    state.selectedCandidateId = id;
    const candidate = candidates.find(c => c.id === id);
    if (!candidate) return;

    renderModalContent(candidate);
    
    // Show Modal
    detailsModal.classList.add("open");
    detailsModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Disable background scrolling
}

function closeDetailsModal() {
    detailsModal.classList.remove("open");
    detailsModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Restore background scrolling
    state.selectedCandidateId = null;
}

// Construct modal detail fields dynamically
function renderModalContent(c) {
    const avatar = c.photo 
        ? `<img src="${c.photo}" alt="${c.name}" class="modal-avatar">`
        : `<div class="modal-avatar gradient-fallback">${getAvatarPlaceholder(c.name)}</div>`;

    const skillsList = c.skills.map(s => `<span class="modal-skill-pill">${s}</span>`).join("");

    modalContent.innerHTML = `
        <div class="modal-profile-header">
            ${avatar}
            <h2 class="modal-name">${c.name}</h2>
            <p class="modal-title-role">${c.position}</p>
            <span class="status-badge ${c.status.toLowerCase()} modal-status-badge">${c.status}</span>
        </div>

        <div class="modal-details-grid">
            <div class="modal-detail-card">
                <p class="modal-detail-label">Experience</p>
                <p class="modal-detail-value">${c.experience} Years</p>
            </div>
            <div class="modal-detail-card">
                <p class="modal-detail-label">Department</p>
                <p class="modal-detail-value">${c.department}</p>
            </div>
        </div>

        <div class="modal-section">
            <h4 class="modal-section-title">Contact Information</h4>
            <div class="modal-contacts">
                <div class="contact-item">
                    <span class="material-symbols-outlined">mail</span>
                    <span>${c.email}</span>
                </div>
                <div class="contact-item">
                    <span class="material-symbols-outlined">call</span>
                    <span>${c.phone}</span>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h4 class="modal-section-title">Technical Skills</h4>
            <div class="modal-skills-list">
                ${skillsList}
            </div>
        </div>

        <div class="modal-section">
            <h4 class="modal-section-title">Resume Summary</h4>
            <p class="modal-summary-text">${c.summary}</p>
        </div>

        <!-- Action Footer -->
        <div class="modal-actions">
            ${c.status !== 'Accepted' ? `
            <button class="btn btn-primary" id="modal-accept-btn" style="background-color: var(--success); color: white;">
                <span class="material-symbols-outlined btn-icon">check_circle</span>
                Accept Candidate
            </button>` : `<div class="btn btn-secondary" style="border-color: var(--success); color: var(--success); cursor: default; box-shadow: none;">Accepted</div>`}
            
            ${c.status !== 'Rejected' ? `
            <button class="btn btn-danger" id="modal-reject-btn">
                <span class="material-symbols-outlined btn-icon">cancel</span>
                Reject Candidate
            </button>` : `<div class="btn btn-secondary" style="border-color: var(--danger); color: var(--danger); cursor: default; box-shadow: none;">Rejected</div>`}
        </div>
    `;

    // Attach actions in modal
    const modalAccept = document.getElementById("modal-accept-btn");
    const modalReject = document.getElementById("modal-reject-btn");

    if (modalAccept) {
        modalAccept.addEventListener("click", () => acceptCandidate(c.id));
    }
    if (modalReject) {
        modalReject.addEventListener("click", () => rejectCandidate(c.id));
    }
}

// Event Listeners Setup
function setupEventListeners() {
    // 1. Search Query Input
    searchInput.addEventListener("input", (e) => {
        state.filters.search = e.target.value;
        renderCandidates();
    });

    // 2. Experience level selection
    selectExperience.addEventListener("change", (e) => {
        state.filters.experience = e.target.value;
        renderCandidates();
    });

    // 3. Department checkboxes
    Array.from(deptCheckboxes).forEach(cb => {
        cb.addEventListener("change", () => {
            const activeDepts = [];
            Array.from(deptCheckboxes).forEach(box => {
                if (box.checked) activeDepts.push(box.value);
            });
            state.filters.departments = activeDepts;
            renderCandidates();
        });
    });

    // 4. Status pill quick buttons
    statusPillContainer.addEventListener("click", (e) => {
        const pill = e.target.closest(".status-pill-btn");
        if (!pill) return;

        // Toggle Active styles
        document.querySelectorAll(".status-pill-btn").forEach(btn => btn.classList.remove("active"));
        pill.classList.add("active");

        state.filters.status = pill.dataset.status;
        renderCandidates();
    });

    // 5. Reset Filters Button
    resetFiltersBtn.addEventListener("click", () => {
        state.filters.search = "";
        state.filters.experience = "all";
        state.filters.status = "all";
        state.filters.departments = ["Engineering", "Design", "Marketing", "Sales"];

        // Reset sidebar UI elements
        searchInput.value = "";
        selectExperience.value = "all";
        
        Array.from(deptCheckboxes).forEach(cb => cb.checked = true);
        
        document.querySelectorAll(".status-pill-btn").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.status === "all");
        });

        showToast("Filters restored to defaults", "info");
        renderCandidates();
    });

    // 6. View toggles
    viewToggleTable.addEventListener("click", () => {
        if (state.viewType === "table") return;
        state.viewType = "table";
        viewToggleTable.classList.add("active");
        viewToggleGrid.classList.remove("active");
        renderCandidates();
    });

    viewToggleGrid.addEventListener("click", () => {
        if (state.viewType === "grid") return;
        state.viewType = "grid";
        viewToggleGrid.classList.add("active");
        viewToggleTable.classList.remove("active");
        renderCandidates();
    });

    // 7. Dark Mode Toggle
    themeToggleBtn.addEventListener("click", toggleTheme);

    // 8. Modal Closing Triggers
    modalCloseBtn.addEventListener("click", closeDetailsModal);
    
    // Close modal on overlay click
    detailsModal.addEventListener("click", (e) => {
        if (e.target === detailsModal) closeDetailsModal();
    });

    // Close modal on Escape Key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && detailsModal.classList.contains("open")) {
            closeDetailsModal();
        }
    });

    // 9. Mobile Sidebar Controls
    mobileSidebarToggle.addEventListener("click", () => {
        appSidebar.classList.add("open");
        sidebarOverlay.classList.add("open");
    });

    const closeMobileSidebar = () => {
        appSidebar.classList.remove("open");
        sidebarOverlay.classList.remove("open");
    };

    mobileSidebarClose.addEventListener("click", closeMobileSidebar);
    sidebarOverlay.addEventListener("click", closeMobileSidebar);
}

// Toast Notification Engine
function showToast(message, type = "info") {
    const toastContainer = document.getElementById("toast-container");
    if (!toastContainer) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    let icon = "info";
    if (type === "success") icon = "check_circle";
    if (type === "danger") icon = "error";

    toast.innerHTML = `
        <span class="material-symbols-outlined toast-icon">${icon}</span>
        <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Auto dismiss after 3 seconds
    setTimeout(() => {
        toast.classList.add("removing");
        // Remove from DOM once transition completes
        toast.addEventListener("transitionend", () => {
            toast.remove();
        });
    }, 3000);
}
