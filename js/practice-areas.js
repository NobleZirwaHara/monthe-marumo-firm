const practiceAreas = [
    {
        imgSrc: "/assets/img/icons/property.png",
        altText: "Property Law",
        title: "Property",
        description: "We provide comprehensive legal services for property transactions, development, finance, and dispute resolution, ensuring compliance with regulations for real estate investments."
    },
    {
        imgSrc: "/assets/img/icons/litigation.png",
        altText: "Litigation Law",
        title: "Litigation",
        description: "We offer expert legal support in various fields, including disputes, personal injury, and insolvency, with a focus on resolving conflicts and protecting rights."
    },
    {
        imgSrc: "/assets/img/icons/tax-calculate.png",
        altText: "Tax",
        title: "Tax",
        description: "We specialize in cross-border transactions, tax structuring, and compliance, offering expert representation in tax litigation, objections, and appeals."
    },
    {
        imgSrc: "/assets/img/icons/trophy.png",
        altText: "Competition Law",
        title: "Competition",
        description: "Our firm offers expert competition law services, including compliance, merger approvals, and tailored training for senior management across key industries."
    },
    {
        imgSrc: "/assets/img/icons/construction-site.png",
        altText: "Construction Law",
        title: "Construction",
        description: "Monthe Marumo & Co. offers expert legal services in the construction industry, including contract drafting, dispute resolution, and payment recovery."
    },
    {
        imgSrc: "/assets/img/icons/document.png",
        altText: "International Trade",
        title: "International Trade",
        description: "Our firm is a leader in International Trade, offering expert advice on trade remedies, legislation, tariff issues, duty disputes, procurement, and import/export controls."
    },
    {
        imgSrc: "/assets/img/icons/document.png",
        altText: "Pension Funds",
        title: "Pension Funds",
        description: "Our pension funds team offers expert advice on all aspects of pension law, including disputes, governance, compliance, and pension scheme mergers, while assisting with structuring, audits, and legal issues in M&A transactions."
    },
    {
        imgSrc: "/assets/img/icons/purchase-order.png",
        altText: "Public Procurement",
        title: "Public Procurement",
        description: "Our Public Procurement Law department offers comprehensive services, including advising on procurement procedures, drafting tender documents, representing clients in procurement disputes, and facilitating public/private partnerships."
    },
    {
        imgSrc: "/assets/img/icons/acquisition.png",
        altText: "Mergers & Acquisitions",
        title: "Mergers & Acquisitions",
        description: "We provide strategic transactional services for corporates, specializing in M&A, restructurings, due diligence, acquisitions, financing, and dispute resolution, along with regulatory and compliance support."
    },
    {
        imgSrc: "/assets/img/icons/headquarters.png",
        altText: "Company Secretarial Services",
        title: "Company Secretarial Services",
        description: "Our Company Secretarial department offers services including company registration, name reservations, share conversions, annual returns, director training, and maintaining statutory records."
    },
    {
        imgSrc: "/assets/img/icons/restructuring.png",
        altText: "Insolvency & Restructuring",
        title: "Insolvency & Restructuring",
        description: "We have expertise in financial institutions, energy, infrastructure, mining, transport, and technology, specializing in asset tracing, debt restructuring, distressed M&A, equity capital raising, and formal insolvency."
    },
    {
        imgSrc: "/assets/img/icons/job-opportunities.png" ,
        altText: "Employment Law & Industrial Relations",
        title: "Employment Law & Industrial Relations",
        description: "Our Employment Law and Industrial Relations department assists companies, unions, and employees with labor legislation, including dismissal disputes, collective bargaining, employment agreements, and related litigation."
    }
];

// Function to create a practice card
function createPracticeCard(practice) {
    return `
        <div class="practice-card">
            <img src="${practice.imgSrc}" alt="${practice.altText}">
            <h4>${practice.title}</h4>
            <p>${practice.description}</p>
            <button class="nav-btn" id="nextBtn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                </svg>
            </button>
        </div>
    `;
}

// Function to render all practice cards
function renderPracticeCards() {
    const practiceAreasList = document.getElementById('practiceAreasList');
    practiceAreasList.innerHTML = practiceAreas.map(createPracticeCard).join('');
}

// Call the function to render the practice cards
renderPracticeCards();
