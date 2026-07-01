// SVG Hand Templates - Realistic hand illustrations
const handSVGs = {
    rock: `<svg class="hand-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="skinRock" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#e8e0d8"/>
                <stop offset="50%" style="stop-color:#ddd5cc"/>
                <stop offset="100%" style="stop-color:#d0c8be"/>
            </linearGradient>
            <filter id="shadowRock">
                <feDropShadow dx="1" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.25"/>
            </filter>
        </defs>
        <g filter="url(#shadowRock)">
            <!-- Main fist body -->
            <path d="M60 130 C55 130 48 125 46 118 L42 95 C40 88 42 80 48 76 L55 72 C58 70 62 70 65 72 L70 76 C72 74 76 72 80 72 L84 74 C87 72 91 71 95 72 L99 74 C102 72 106 72 109 74 L113 77 C116 75 120 75 123 78 L126 82 C129 80 133 80 136 83 L138 88 C141 86 145 87 147 91 L148 96 C150 100 150 105 148 110 L144 125 C141 132 134 136 127 136 L60 130Z" fill="url(#skinRock)"/>
            <!-- Finger lines -->
            <path d="M70 76 C70 82 70 90 72 95" stroke="#c4b8aa" stroke-width="1.2" fill="none" opacity="0.6"/>
            <path d="M84 74 C85 80 86 88 86 94" stroke="#c4b8aa" stroke-width="1.2" fill="none" opacity="0.6"/>
            <path d="M99 74 C100 80 100 88 99 94" stroke="#c4b8aa" stroke-width="1.2" fill="none" opacity="0.6"/>
            <path d="M113 77 C113 83 112 89 110 95" stroke="#c4b8aa" stroke-width="1.2" fill="none" opacity="0.6"/>
            <!-- Knuckle lines -->
            <path d="M65 82 C72 80 80 80 85 82" stroke="#c4b8aa" stroke-width="1" fill="none" opacity="0.5"/>
            <path d="M85 80 C92 78 100 78 105 80" stroke="#c4b8aa" stroke-width="1" fill="none" opacity="0.5"/>
            <path d="M105 80 C112 78 118 79 122 82" stroke="#c4b8aa" stroke-width="1" fill="none" opacity="0.5"/>
            <!-- Thumb -->
            <path d="M46 118 L38 108 C35 103 36 97 40 94 L48 88" stroke="url(#skinRock)" stroke-width="14" stroke-linecap="round" fill="none"/>
            <path d="M46 118 L38 108 C35 103 36 97 40 94 L48 88" stroke="#c4b8aa" stroke-width="1" fill="none" opacity="0.3"/>
            <!-- Wrist -->
            <path d="M55 135 L50 165 C49 170 52 174 57 175 L128 175 C133 174 136 170 135 165 L130 135" fill="url(#skinRock)"/>
            <line x1="58" y1="145" x2="127" y2="145" stroke="#c4b8aa" stroke-width="0.8" opacity="0.3"/>
        </g>
    </svg>`,

    paper: `<svg class="hand-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="skinPaper" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#e8e0d8"/>
                <stop offset="50%" style="stop-color:#ddd5cc"/>
                <stop offset="100%" style="stop-color:#d0c8be"/>
            </linearGradient>
            <filter id="shadowPaper">
                <feDropShadow dx="1" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.25"/>
            </filter>
        </defs>
        <g filter="url(#shadowPaper)">
            <!-- Palm -->
            <path d="M55 135 C52 135 48 132 47 128 L45 110 C44 105 46 100 50 98 L55 96 C57 96 59 97 60 100 L62 108 C63 106 65 105 68 105 L72 107 C74 105 77 105 80 106 L82 108 C84 106 87 106 90 107 L92 110 C94 108 97 108 100 110 L102 113 C105 111 108 111 111 113 L113 116 C116 114 120 115 122 118 L124 122 C127 120 131 121 133 125 L134 130 C136 134 135 138 132 141 L60 141 C57 140 55 138 55 135Z" fill="url(#skinPaper)"/>
            <!-- Index finger extended -->
            <path d="M60 100 L56 55 C55 48 58 42 63 40 L67 39 C72 38 76 42 77 48 L80 98" fill="url(#skinPaper)"/>
            <line x1="63" y1="55" x2="76" y2="55" stroke="#c4b8aa" stroke-width="0.8" opacity="0.4"/>
            <line x1="62" y1="68" x2="77" y2="68" stroke="#c4b8aa" stroke-width="0.8" opacity="0.4"/>
            <!-- Middle finger extended -->
            <path d="M80 106 L78 48 C77 40 80 34 85 32 L90 31 C95 30 99 34 100 42 L102 104" fill="url(#skinPaper)"/>
            <line x1="83" y1="48" x2="97" y2="48" stroke="#c4b8aa" stroke-width="0.8" opacity="0.4"/>
            <line x1="82" y1="62" x2="98" y2="62" stroke="#c4b8aa" stroke-width="0.8" opacity="0.4"/>
            <!-- Ring finger extended -->
            <path d="M100 110 L99 55 C99 47 102 41 107 39 L112 38 C117 37 121 41 122 49 L123 108" fill="url(#skinPaper)"/>
            <line x1="104" y1="55" x2="118" y2="55" stroke="#c4b8aa" stroke-width="0.8" opacity="0.4"/>
            <line x1="103" y1="68" x2="119" y2="68" stroke="#c4b8aa" stroke-width="0.8" opacity="0.4"/>
            <!-- Pinky finger extended -->
            <path d="M118 115 L118 68 C118 60 121 55 126 53 L130 52 C135 51 138 55 139 62 L139 113" fill="url(#skinPaper)"/>
            <line x1="122" y1="68" x2="135" y2="68" stroke="#c4b8aa" stroke-width="0.8" opacity="0.4"/>
            <!-- Thumb -->
            <path d="M50 98 L40 90 C37 87 36 83 38 80 L42 76 C44 74 47 74 49 76 L55 96" fill="url(#skinPaper)"/>
            <line x1="42" y1="84" x2="52" y2="84" stroke="#c4b8aa" stroke-width="0.8" opacity="0.4"/>
            <!-- Wrist -->
            <path d="M50 141 L48 170 C47 175 50 178 55 179 L130 179 C135 178 138 175 137 170 L135 141" fill="url(#skinPaper)"/>
            <line x1="55" y1="155" x2="132" y2="155" stroke="#c4b8aa" stroke-width="0.8" opacity="0.3"/>
        </g>
    </svg>`,

    scissors: `<svg class="hand-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="skinScissors" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#e8e0d8"/>
                <stop offset="50%" style="stop-color:#ddd5cc"/>
                <stop offset="100%" style="stop-color:#d0c8be"/>
            </linearGradient>
            <filter id="shadowScissors">
                <feDropShadow dx="1" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.25"/>
            </filter>
        </defs>
        <g filter="url(#shadowScissors)">
            <!-- Palm -->
            <path d="M55 135 C52 135 48 132 47 128 L45 115 C44 110 46 106 50 104 L58 101 C60 100 63 101 64 104 L66 110 C68 108 71 108 74 110 L78 112 C80 110 83 110 86 112 L88 115 C90 113 93 113 96 115 L98 118 C100 116 103 116 106 118 L108 122 C111 120 114 121 116 124 L118 128 C120 126 123 127 125 130 L126 135 C128 138 127 142 124 144 L60 144 C57 143 55 140 55 135Z" fill="url(#skinScissors)"/>
            <!-- Index finger up -->
            <path d="M64 104 L60 52 C59 44 62 38 67 36 L72 35 C77 34 81 38 82 46 L85 102" fill="url(#skinScissors)"/>
            <line x1="65" y1="52" x2="79" y2="52" stroke="#c4b8aa" stroke-width="0.8" opacity="0.4"/>
            <line x1="64" y1="66" x2="80" y2="66" stroke="#c4b8aa" stroke-width="0.8" opacity="0.4"/>
            <!-- Middle finger up -->
            <path d="M86 110 L85 55 C85 47 88 41 93 39 L98 38 C103 37 107 41 108 49 L109 108" fill="url(#skinScissors)"/>
            <line x1="90" y1="55" x2="104" y2="55" stroke="#c4b8aa" stroke-width="0.8" opacity="0.4"/>
            <line x1="89" y1="68" x2="105" y2="68" stroke="#c4b8aa" stroke-width="0.8" opacity="0.4"/>
            <!-- Ring and pinky folded -->
            <path d="M108 118 C110 115 113 112 116 115 L118 120 C120 118 122 118 124 121 L125 126 C126 130 124 134 120 136 L95 136 C91 135 88 132 88 128 L90 120 C90 117 92 115 95 114 L108 118Z" fill="url(#skinScissors)"/>
            <!-- Thumb -->
            <path d="M50 104 L40 96 C37 93 36 89 38 86 L42 82 C44 80 47 80 49 82 L56 100" fill="url(#skinScissors)"/>
            <line x1="42" y1="90" x2="52" y2="90" stroke="#c4b8aa" stroke-width="0.8" opacity="0.4"/>
            <!-- Wrist -->
            <path d="M52 144 L50 170 C49 175 52 178 57 179 L128 179 C133 178 136 175 135 170 L133 144" fill="url(#skinScissors)"/>
            <line x1="57" y1="158" x2="130" y2="158" stroke="#c4b8aa" stroke-width="0.8" opacity="0.3"/>
        </g>
    </svg>`
};

const btnHandSVGs = {
    rock: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="btnSkin1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#e8e0d8"/><stop offset="100%" style="stop-color:#d0c8be"/></linearGradient></defs>
        <g>
            <path d="M60 130 C55 130 48 125 46 118 L42 95 C40 88 42 80 48 76 L55 72 C58 70 62 70 65 72 L70 76 C72 74 76 72 80 72 L84 74 C87 72 91 71 95 72 L99 74 C102 72 106 72 109 74 L113 77 C116 75 120 75 123 78 L126 82 C129 80 133 80 136 83 L138 88 C141 86 145 87 147 91 L148 96 C150 100 150 105 148 110 L144 125 C141 132 134 136 127 136 L60 130Z" fill="url(#btnSkin1)"/>
            <path d="M70 76 C70 82 70 90 72 95" stroke="#c4b8aa" stroke-width="1.2" fill="none" opacity="0.6"/>
            <path d="M84 74 C85 80 86 88 86 94" stroke="#c4b8aa" stroke-width="1.2" fill="none" opacity="0.6"/>
            <path d="M99 74 C100 80 100 88 99 94" stroke="#c4b8aa" stroke-width="1.2" fill="none" opacity="0.6"/>
            <path d="M113 77 C113 83 112 89 110 95" stroke="#c4b8aa" stroke-width="1.2" fill="none" opacity="0.6"/>
            <path d="M46 118 L38 108 C35 103 36 97 40 94 L48 88" stroke="url(#btnSkin1)" stroke-width="14" stroke-linecap="round" fill="none"/>
            <path d="M55 135 L50 165 C49 170 52 174 57 175 L128 175 C133 174 136 170 135 165 L130 135" fill="url(#btnSkin1)"/>
        </g>
    </svg>`,
    paper: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="btnSkin2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#e8e0d8"/><stop offset="100%" style="stop-color:#d0c8be"/></linearGradient></defs>
        <g>
            <path d="M55 135 C52 135 48 132 47 128 L45 110 C44 105 46 100 50 98 L55 96 C57 96 59 97 60 100 L62 108 C63 106 65 105 68 105 L72 107 C74 105 77 105 80 106 L82 108 C84 106 87 106 90 107 L92 110 C94 108 97 108 100 110 L102 113 C105 111 108 111 111 113 L113 116 C116 114 120 115 122 118 L124 122 C127 120 131 121 133 125 L134 130 C136 134 135 138 132 141 L60 141 C57 140 55 138 55 135Z" fill="url(#btnSkin2)"/>
            <path d="M60 100 L56 55 C55 48 58 42 63 40 L67 39 C72 38 76 42 77 48 L80 98" fill="url(#btnSkin2)"/>
            <path d="M80 106 L78 48 C77 40 80 34 85 32 L90 31 C95 30 99 34 100 42 L102 104" fill="url(#btnSkin2)"/>
            <path d="M100 110 L99 55 C99 47 102 41 107 39 L112 38 C117 37 121 41 122 49 L123 108" fill="url(#btnSkin2)"/>
            <path d="M118 115 L118 68 C118 60 121 55 126 53 L130 52 C135 51 138 55 139 62 L139 113" fill="url(#btnSkin2)"/>
            <path d="M50 98 L40 90 C37 87 36 83 38 80 L42 76 C44 74 47 74 49 76 L55 96" fill="url(#btnSkin2)"/>
            <path d="M50 141 L48 170 C47 175 50 178 55 179 L130 179 C135 178 138 175 137 170 L135 141" fill="url(#btnSkin2)"/>
        </g>
    </svg>`,
    scissors: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="btnSkin3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#e8e0d8"/><stop offset="100%" style="stop-color:#d0c8be"/></linearGradient></defs>
        <g>
            <path d="M55 135 C52 135 48 132 47 128 L45 115 C44 110 46 106 50 104 L58 101 C60 100 63 101 64 104 L66 110 C68 108 71 108 74 110 L78 112 C80 110 83 110 86 112 L88 115 C90 113 93 113 96 115 L98 118 C100 116 103 116 106 118 L108 122 C111 120 114 121 116 124 L118 128 C120 126 123 127 125 130 L126 135 C128 138 127 142 124 144 L60 144 C57 143 55 140 55 135Z" fill="url(#btnSkin3)"/>
            <path d="M64 104 L60 52 C59 44 62 38 67 36 L72 35 C77 34 81 38 82 46 L85 102" fill="url(#btnSkin3)"/>
            <path d="M86 110 L85 55 C85 47 88 41 93 39 L98 38 C103 37 107 41 108 49 L109 108" fill="url(#btnSkin3)"/>
            <path d="M108 118 C110 115 113 112 116 115 L118 120 C120 118 122 118 124 121 L125 126 C126 130 124 134 120 136 L95 136 C91 135 88 132 88 128 L90 120 C90 117 92 115 95 114 L108 118Z" fill="url(#btnSkin3)"/>
            <path d="M50 104 L40 96 C37 93 36 89 38 86 L42 82 C44 80 47 80 49 82 L56 100" fill="url(#btnSkin3)"/>
            <path d="M52 144 L50 170 C49 175 52 178 57 179 L128 179 C133 178 136 175 135 170 L133 144" fill="url(#btnSkin3)"/>
        </g>
    </svg>`
};

const choiceEmoji = { rock: 'Rock', paper: 'Paper', scissors: 'Scissors' };

// Game State
const state = {
    playerScore: 0,
    computerScore: 0,
    totalGames: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    history: [],
    isPlaying: false
};

// DOM Elements
const elements = {
    playerScore: document.getElementById('playerScore'),
    computerScore: document.getElementById('computerScore'),
    totalGames: document.getElementById('totalGames'),
    wins: document.getElementById('wins'),
    losses: document.getElementById('losses'),
    draws: document.getElementById('draws'),
    playerHand: document.getElementById('playerHand'),
    computerHand: document.getElementById('computerHand'),
    statusText: document.getElementById('statusText'),
    historyList: document.getElementById('historyList'),
    resetBtn: document.getElementById('resetBtn'),
    btnRock: document.getElementById('btnRock'),
    btnPaper: document.getElementById('btnPaper'),
    btnScissors: document.getElementById('btnScissors'),
    btnRockHand: document.getElementById('btnRockHand'),
    btnPaperHand: document.getElementById('btnPaperHand'),
    btnScissorsHand: document.getElementById('btnScissorsHand'),
};

// Initialize button hands
function initButtonHands() {
    elements.btnRockHand.innerHTML = btnHandSVGs.rock;
    elements.btnPaperHand.innerHTML = btnHandSVGs.paper;
    elements.btnScissorsHand.innerHTML = btnHandSVGs.scissors;
}

// Determine winner
function getWinner(player, computer) {
    if (player === computer) return 'draw';
    const winConditions = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
    return winConditions[player] === computer ? 'win' : 'lose';
}

// Play a round
function playRound(choice) {
    if (state.isPlaying) return;
    state.isPlaying = true;

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = getWinner(choice, computerChoice);

    // Disable buttons
    document.querySelectorAll('.hand-btn').forEach(btn => btn.classList.add('disabled'));

    // Reset displays
    elements.playerHand.innerHTML = '<div class="hand-placeholder"><svg viewBox="0 0 200 200" class="placeholder-icon"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="#444" font-size="60">?</text></svg></div>';
    elements.computerHand.innerHTML = '<div class="hand-placeholder"><svg viewBox="0 0 200 200" class="placeholder-icon"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="#444" font-size="60">?</text></svg></div>';
    elements.playerHand.className = 'hand-container';
    elements.computerHand.className = 'hand-container';
    elements.statusText.className = 'status-text';
    elements.statusText.textContent = '3...';

    // Countdown animation
    setTimeout(() => { elements.statusText.textContent = '2...'; }, 400);
    setTimeout(() => { elements.statusText.textContent = '1...'; }, 800);

    // Show player hand
    setTimeout(() => {
        elements.playerHand.innerHTML = handSVGs[choice];
        elements.playerHand.classList.add('active');
        const playerSvg = elements.playerHand.querySelector('.hand-svg');
        if (playerSvg) playerSvg.classList.add('shake');
    }, 1100);

    // Show computer hand with delay
    setTimeout(() => {
        elements.computerHand.innerHTML = handSVGs[computerChoice];
        elements.computerHand.classList.add('active');
        const compSvg = elements.computerHand.querySelector('.hand-svg');
        if (compSvg) compSvg.classList.add('shake');
    }, 1500);

    // Show result
    setTimeout(() => {
        // Update scores
        state.totalGames++;
        if (result === 'win') {
            state.playerScore++;
            state.wins++;
            elements.playerHand.classList.add('win', 'victory');
            elements.computerHand.classList.add('lose');
            elements.statusText.textContent = 'You Win';
            elements.statusText.classList.add('win');
        } else if (result === 'lose') {
            state.computerScore++;
            state.losses++;
            elements.computerHand.classList.add('win');
            elements.playerHand.classList.add('lose');
            elements.statusText.textContent = 'You Lose';
            elements.statusText.classList.add('lose');
        } else {
            state.draws++;
            elements.playerHand.classList.add('active');
            elements.computerHand.classList.add('active');
            elements.statusText.textContent = 'Draw';
            elements.statusText.classList.add('draw');
        }

        // Animate score updates
        animateValue(elements.playerScore, state.playerScore - (result === 'win' ? 1 : 0), state.playerScore);
        animateValue(elements.computerScore, state.computerScore - (result === 'lose' ? 1 : 0), state.computerScore);

        elements.totalGames.textContent = state.totalGames;
        elements.wins.textContent = state.wins;
        elements.losses.textContent = state.losses;
        elements.draws.textContent = state.draws;

        // Add to history
        addHistory(state.totalGames, choice, computerChoice, result);

        // Re-enable buttons
        document.querySelectorAll('.hand-btn').forEach(btn => btn.classList.remove('disabled'));
        state.isPlaying = false;
    }, 2200);
}

// Animate number change
function animateValue(element, start, end) {
    if (start === end) { element.textContent = end; return; }
    const duration = 400;
    const startTime = performance.now();
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.round(start + (end - start) * eased);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// Add history entry
function addHistory(round, playerChoice, computerChoice, result) {
    if (state.history.length === 0) {
        elements.historyList.innerHTML = '';
    }

    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
        <span class="history-round">#${round}</span>
        <span class="history-hands">
            ${choiceEmoji[playerChoice]} <span class="vs">vs</span> ${choiceEmoji[computerChoice]}
        </span>
        <span class="history-result ${result}">${result === 'draw' ? 'Draw' : result === 'win' ? 'Win' : 'Lose'}</span>
    `;

    elements.historyList.insertBefore(item, elements.historyList.firstChild);
    state.history.push({ round, playerChoice, computerChoice, result });
}

// Reset game
function resetGame() {
    state.playerScore = 0;
    state.computerScore = 0;
    state.totalGames = 0;
    state.wins = 0;
    state.losses = 0;
    state.draws = 0;
    state.history = [];
    state.isPlaying = false;

    elements.playerScore.textContent = '0';
    elements.computerScore.textContent = '0';
    elements.totalGames.textContent = '0';
    elements.wins.textContent = '0';
    elements.losses.textContent = '0';
    elements.draws.textContent = '0';
    elements.statusText.textContent = 'Pick your hand';
    elements.statusText.className = 'status-text';

    elements.playerHand.innerHTML = '<div class="hand-placeholder"><svg viewBox="0 0 200 200" class="placeholder-icon"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="#444" font-size="60">?</text></svg></div>';
    elements.computerHand.innerHTML = '<div class="hand-placeholder"><svg viewBox="0 0 200 200" class="placeholder-icon"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="#444" font-size="60">?</text></svg></div>';
    elements.playerHand.className = 'hand-container';
    elements.computerHand.className = 'hand-container';

    elements.historyList.innerHTML = '<div class="history-empty">No rounds played yet</div>';
    document.querySelectorAll('.hand-btn').forEach(btn => btn.classList.remove('disabled'));
}

// Create background particles
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 2 + 1) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = (Math.random() * 20 + 15) + 's';
        particle.style.animationDelay = (Math.random() * 20) + 's';
        container.appendChild(particle);
    }
}

// Event Listeners
document.querySelectorAll('.hand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const choice = btn.getAttribute('data-choice');
        playRound(choice);
    });
});

elements.resetBtn.addEventListener('click', resetGame);

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (state.isPlaying) return;
    if (e.key === '1' || e.key === 'r' || e.key === 'R') playRound('rock');
    if (e.key === '2' || e.key === 'p' || e.key === 'P') playRound('paper');
    if (e.key === '3' || e.key === 's' || e.key === 'S') playRound('scissors');
});

// Initialize
initButtonHands();
createParticles();
