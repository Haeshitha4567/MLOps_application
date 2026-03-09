const API_BASE = "http://127.0.0.1:8000/api/predict";

// DOM Elements
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Churn Elements
const churnInputs = {
    days: document.getElementById('days-login'),
    tickets: document.getElementById('support-tickets'),
    spend: document.getElementById('monthly-spend'),
    adoption: document.getElementById('feature-adoption')
};
const churnVals = {
    days: document.getElementById('days-val'),
    tickets: document.getElementById('tickets-val'),
    spend: document.getElementById('spend-val'),
    adoption: document.getElementById('adoption-val')
};
const churnBtn = document.getElementById('predict-churn-btn');
const churnResult = document.getElementById('churn-result');

// Sentiment Elements
const sentInput = document.getElementById('feedback-input');
const sentBtn = document.getElementById('predict-sentiment-btn');
const sentResult = document.getElementById('sentiment-result');
const exampleBtns = document.querySelectorAll('.example-btn');

// --- Tab Logic ---
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active', 'hidden'));
        tabContents.forEach(tc => tc.style.display = 'none');

        tab.classList.add('active');
        const targetId = tab.getAttribute('data-tab');
        document.getElementById(targetId).style.display = 'block';
        document.getElementById(targetId).classList.add('active');
    });
});

// Hide second tab initially
document.getElementById('sentiment-tab').style.display = 'none';

// --- Churn Slider Logic ---
Object.keys(churnInputs).forEach(key => {
    churnInputs[key].addEventListener('input', (e) => {
        let val = e.target.value;
        if (key === 'spend') val = `$${val}`;
        if (key === 'adoption') val = `${val}%`;
        churnVals[key].textContent = val;
    });
});

// --- Example Buttons ---
exampleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const targetId = e.target.getAttribute('data-target');
        document.getElementById(targetId).value = e.target.textContent.replace(/"/g, '');
    });
});

// --- API Calls ---

// 1. Churn Prediction
churnBtn.addEventListener('click', async () => {
    const payload = {
        days_since_login: parseInt(churnInputs.days.value),
        support_tickets: parseInt(churnInputs.tickets.value),
        monthly_spend: parseFloat(churnInputs.spend.value),
        feature_adoption: parseFloat(churnInputs.adoption.value) / 100.0
    };

    churnResult.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin placeholder-icon" style="color: var(--accent-purple)"></i><p>Running Random Forest inference...</p>';
    churnBtn.disabled = true;

    try {
        const res = await fetch(`${API_BASE}/churn`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!res.ok) throw new Error("API Error");
        const data = await res.json();

        renderChurnResult(data);
    } catch (err) {
        churnResult.innerHTML = `<p style="color:red">Connection Error. Is the FastAPI server running?</p>`;
    } finally {
        churnBtn.disabled = false;
    }
});

function renderChurnResult(data) {
    const prob = (data.churn_probability * 100).toFixed(1);

    let probClass = 'prob-low';
    let icon = 'fa-check-circle';
    let statusClass = 'status-low';

    if (data.risk_level === 'Critical') { probClass = 'prob-critical'; icon = 'fa-triangle-exclamation'; statusClass = 'status-critical'; }
    else if (data.risk_level === 'High') { probClass = 'prob-high'; icon = 'fa-circle-exclamation'; statusClass = 'status-high'; }
    else if (data.risk_level === 'Moderate') { probClass = 'prob-moderate'; icon = 'fa-circle-info'; statusClass = 'status-moderate'; }

    churnResult.innerHTML = `
        <div class="result-card">
            <div class="risk-badge ${statusClass}">
                <i class="fa-solid ${icon}"></i>
                <span>${data.risk_level} Risk</span>
            </div>
            
            <div class="probability-display ${probClass}">
                ${prob}%
            </div>
            
            <div class="details">
                <div class="detail-row">
                    <span class="detail-label">Model Used</span>
                    <span class="detail-value">Random Forest Classifier</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Prediction Target</span>
                    <span class="detail-value">Subscription Cancellation</span>
                </div>
            </div>
        </div>
    `;
}

// 2. Sentiment Analysis
sentBtn.addEventListener('click', async () => {
    const text = sentInput.value.trim();
    if (!text) return;

    sentResult.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin placeholder-icon" style="color: var(--accent-blue)"></i><p>Running TF-IDF & Logistic Regression...</p>';
    sentBtn.disabled = true;

    try {
        const res = await fetch(`${API_BASE}/sentiment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });

        if (!res.ok) throw new Error("API Error");
        const data = await res.json();

        renderSentimentResult(data);
    } catch (err) {
        sentResult.innerHTML = `<p style="color:red">Connection Error. Is the FastAPI server running?</p>`;
    } finally {
        sentBtn.disabled = false;
    }
});

function renderSentimentResult(data) {
    const classification = data.classification;
    const probs = data.all_probabilities;

    let statusClass = 'status-moderate';
    let icon = 'fa-comment-dots';

    if (classification === 'Positive') { statusClass = 'status-low'; icon = 'fa-face-smile'; }
    else if (classification === 'Negative') { statusClass = 'status-critical'; icon = 'fa-face-frown'; }
    else if (classification === 'Feature Request') { statusClass = 'status-high'; icon = 'fa-lightbulb'; }

    const makeBar = (label, probVal, colorClass) => {
        const percent = (probVal * 100).toFixed(1);
        return `
            <div class="s-bar-container">
                <div class="s-bar-header">
                    <span>${label}</span>
                    <span>${percent}%</span>
                </div>
                <div class="s-bar-track">
                    <div class="s-bar-fill ${colorClass}" style="width: 0%"></div>
                </div>
            </div>
        `;
    };

    sentResult.innerHTML = `
        <div class="result-card">
            <div class="risk-badge ${statusClass}">
                <i class="fa-solid ${icon}"></i>
                <span>${classification}</span>
            </div>
            
            <div class="sentiment-bars">
                ${makeBar('Positive', probs.Positive, 'fill-positive')}
                ${makeBar('Negative', probs.Negative, 'fill-negative')}
                ${makeBar('Feature Request', probs['Feature Request'], 'fill-feature')}
            </div>
            
            <div class="details" style="margin-top: 1rem">
                <div class="detail-row">
                    <span class="detail-label">Pipeline</span>
                    <span class="detail-value">TF-IDF Vectorizer + LogReg</span>
                </div>
            </div>
        </div>
    `;

    // Trigger animations
    setTimeout(() => {
        const fills = sentResult.querySelectorAll('.s-bar-fill');
        fills[0].style.width = `${(probs.Positive * 100).toFixed(1)}%`;
        fills[1].style.width = `${(probs.Negative * 100).toFixed(1)}%`;
        fills[2].style.width = `${(probs['Feature Request'] * 100).toFixed(1)}%`;
    }, 50);
}
