function makeHandSVG(type, id) {
    const s = id;
    const defs = {
        skin: `<linearGradient id="sk${s}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f0e4d8"/><stop offset="50%" stop-color="#e4d4c4"/><stop offset="100%" stop-color="#d4c0aa"/></linearGradient>`,
        skinD: `<linearGradient id="sd${s}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#e8d8c8"/><stop offset="100%" stop-color="#ccbaa4"/></linearGradient>`,
        knuckle: `<radialGradient id="kn${s}" cx="50%" cy="30%" r="60%"><stop offset="0%" stop-color="#eadcce"/><stop offset="100%" stop-color="#d0bea6"/></radialGradient>`,
        nail: `<linearGradient id="nl${s}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f5ede5"/><stop offset="60%" stop-color="#e8dcd0"/><stop offset="100%" stop-color="#ddd0c2"/></linearGradient>`,
        shadow: `<filter id="fs${s}"><feDropShadow dx="1" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.3"/></filter>`
    };
    return Object.values(defs).join('');
}

function handRock(id) {
    const s = id || 'A';
    const defs = makeHandSVG('rock', s);
    return `<svg class="hand-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <defs>${defs}</defs>
    <g filter="url(#fs${s})">
        <path d="M100 240 Q95 240 93 235 L88 205 Q86 198 91 195 L189 195 Q194 198 192 205 L187 235 Q185 240 180 240Z" fill="url(#sk${s})"/>
        <line x1="105" y1="218" x2="175" y2="218" stroke="#c4b49e" stroke-width="0.7" opacity="0.35"/>
        <path d="M91 195 Q86 178 88 160 L92 135 Q95 128 100 125 L180 125 Q185 128 188 135 L192 160 Q194 178 189 195Z" fill="url(#sk${s})"/>
        <ellipse cx="110" cy="130" rx="13" ry="9" fill="url(#kn${s})" opacity="0.7"/>
        <ellipse cx="135" cy="127" rx="14" ry="10" fill="url(#kn${s})" opacity="0.7"/>
        <ellipse cx="160" cy="128" rx="13" ry="9" fill="url(#kn${s})" opacity="0.6"/>
        <ellipse cx="180" cy="132" rx="11" ry="8" fill="url(#kn${s})" opacity="0.5"/>
        <path d="M98 125 Q93 118 95 108 Q97 98 104 95 Q111 93 115 98 Q118 103 116 112 L113 125" fill="url(#sk${s})"/>
        <path d="M102 105 Q106 101 112 103" stroke="#c4b49e" stroke-width="0.7" fill="none" opacity="0.45"/>
        <path d="M119 123 Q116 114 118 104 Q120 94 128 91 Q136 89 140 94 Q143 99 141 110 L137 123" fill="url(#sd${s})"/>
        <path d="M123 100 Q128 96 134 98" stroke="#c4b49e" stroke-width="0.7" fill="none" opacity="0.45"/>
        <path d="M141 124 Q139 115 140 106 Q142 96 150 93 Q158 91 162 96 Q165 101 163 112 L160 124" fill="url(#sk${s})"/>
        <path d="M145 102 Q150 98 156 100" stroke="#c4b49e" stroke-width="0.7" fill="none" opacity="0.45"/>
        <path d="M165 127 Q164 119 165 111 Q167 103 173 101 Q179 99 182 104 Q184 109 182 118 L179 127" fill="url(#sd${s})"/>
        <path d="M169 107 Q173 104 178 106" stroke="#c4b49e" stroke-width="0.7" fill="none" opacity="0.45"/>
        <path d="M91 160 Q80 155 73 146 Q68 138 67 130 Q66 122 71 118 Q77 115 83 120 Q88 125 87 135 L86 150" fill="url(#sk${s})"/>
        <path d="M73 134 Q78 129 84 132" stroke="#c4b49e" stroke-width="0.7" fill="none" opacity="0.45"/>
        <path d="M100 158 Q135 150 178 155" stroke="#c4b49e" stroke-width="0.6" fill="none" opacity="0.3"/>
        <path d="M97 172 Q140 164 183 169" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.2"/>
        <path d="M104 140 Q109 137 114 140" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.3"/>
        <path d="M129 137 Q134 134 139 137" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.3"/>
        <path d="M153 138 Q158 135 163 138" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.3"/>
        <path d="M175 141 Q179 139 182 141" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.3"/>
        <path d="M108 97 Q110 93 114 95" stroke="url(#nl${s})" stroke-width="2.5" fill="none" opacity="0.5"/>
        <path d="M132 93 Q134 89 138 91" stroke="url(#nl${s})" stroke-width="2.5" fill="none" opacity="0.5"/>
        <path d="M156 95 Q158 91 162 93" stroke="url(#nl${s})" stroke-width="2.5" fill="none" opacity="0.5"/>
        <path d="M176 103 Q178 100 181 102" stroke="url(#nl${s})" stroke-width="2" fill="none" opacity="0.4"/>
    </g></svg>`;
}

function handPaper(id) {
    const s = id || 'B';
    const defs = makeHandSVG('paper', s);
    return `<svg class="hand-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <defs>${defs}</defs>
    <g filter="url(#fs${s})">
        <path d="M105 250 Q100 250 98 245 L93 215 Q91 208 96 205 L184 205 Q189 208 187 215 L182 245 Q180 250 175 250Z" fill="url(#sk${s})"/>
        <line x1="110" y1="228" x2="170" y2="228" stroke="#c4b49e" stroke-width="0.7" opacity="0.3"/>
        <path d="M96 205 Q91 185 93 165 L96 145 Q98 140 104 137 L176 137 Q182 140 184 145 L187 165 Q189 185 184 205Z" fill="url(#sk${s})"/>
        <ellipse cx="140" cy="172" rx="32" ry="18" fill="#eadcce" opacity="0.3"/>
        <path d="M104 137 L101 75 Q100 62 105 55 Q110 49 116 53 Q121 58 119 72 L116 137" fill="url(#sk${s})"/>
        <rect x="106" y="50" width="10" height="6" rx="3" fill="url(#nl${s})" opacity="0.7"/>
        <path d="M104 62 Q110 58 116 60" stroke="#c4b49e" stroke-width="0.6" fill="none" opacity="0.35"/>
        <path d="M103 78 Q110 74 117 76" stroke="#c4b49e" stroke-width="0.6" fill="none" opacity="0.35"/>
        <path d="M103 94 Q110 90 117 92" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.25"/>
        <path d="M120 135 L118 65 Q117 50 122 42 Q127 36 133 40 Q139 46 137 62 L133 135" fill="url(#sd${s})"/>
        <rect x="124" y="37" width="11" height="6" rx="3" fill="url(#nl${s})" opacity="0.7"/>
        <path d="M120 52 Q126 48 132 50" stroke="#c4b49e" stroke-width="0.6" fill="none" opacity="0.35"/>
        <path d="M119 68 Q126 64 133 66" stroke="#c4b49e" stroke-width="0.6" fill="none" opacity="0.35"/>
        <path d="M119 84 Q126 80 133 82" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.25"/>
        <path d="M139 137 L138 72 Q137 58 142 50 Q148 44 154 48 Q160 54 158 70 L154 137" fill="url(#sk${s})"/>
        <rect x="144" y="45" width="10" height="6" rx="3" fill="url(#nl${s})" opacity="0.7"/>
        <path d="M140 58 Q146 54 152 56" stroke="#c4b49e" stroke-width="0.6" fill="none" opacity="0.35"/>
        <path d="M139 74 Q146 70 153 72" stroke="#c4b49e" stroke-width="0.6" fill="none" opacity="0.35"/>
        <path d="M139 90 Q146 86 153 88" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.25"/>
        <path d="M157 141 L157 88 Q156 76 161 70 Q166 65 172 69 Q177 74 175 86 L171 141" fill="url(#sd${s})"/>
        <rect x="162" y="65" width="9" height="5" rx="2.5" fill="url(#nl${s})" opacity="0.6"/>
        <path d="M159 76 Q164 73 169 75" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.3"/>
        <path d="M158 90 Q164 86 170 88" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.25"/>
        <path d="M96 165 Q84 158 76 148 Q70 140 68 131 Q67 123 72 118 Q78 114 85 118 Q90 122 92 132 L93 150" fill="url(#sk${s})"/>
        <path d="M74 135 Q80 130 86 133" stroke="#c4b49e" stroke-width="0.6" fill="none" opacity="0.4"/>
        <path d="M72 147 Q78 143 84 145" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.3"/>
        <path d="M100 175 Q138 166 180 172" stroke="#c4b49e" stroke-width="0.6" fill="none" opacity="0.25"/>
        <path d="M97 190 Q142 182 182 187" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.2"/>
    </g></svg>`;
}

function handScissors(id) {
    const s = id || 'C';
    const defs = makeHandSVG('scissors', s);
    return `<svg class="hand-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <defs>${defs}</defs>
    <g filter="url(#fs${s})">
        <path d="M105 250 Q100 250 98 245 L93 215 Q91 208 96 205 L184 205 Q189 208 187 215 L182 245 Q180 250 175 250Z" fill="url(#sk${s})"/>
        <line x1="110" y1="228" x2="170" y2="228" stroke="#c4b49e" stroke-width="0.7" opacity="0.3"/>
        <path d="M96 205 Q91 185 93 165 L96 145 Q98 140 104 137 L176 137 Q182 140 184 145 L187 165 Q189 185 184 205Z" fill="url(#sk${s})"/>
        <path d="M104 137 L101 72 Q100 56 106 48 Q112 42 118 46 Q124 52 122 68 L118 137" fill="url(#sk${s})"/>
        <rect x="107" y="42" width="11" height="6" rx="3" fill="url(#nl${s})" opacity="0.7"/>
        <path d="M105 58 Q111 54 117 56" stroke="#c4b49e" stroke-width="0.6" fill="none" opacity="0.35"/>
        <path d="M104 74 Q111 70 118 72" stroke="#c4b49e" stroke-width="0.6" fill="none" opacity="0.35"/>
        <path d="M104 90 Q111 86 118 88" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.25"/>
        <path d="M122 135 L120 68 Q119 52 125 44 Q131 38 137 42 Q143 48 141 64 L137 135" fill="url(#sd${s})"/>
        <rect x="127" y="38" width="11" height="6" rx="3" fill="url(#nl${s})" opacity="0.7"/>
        <path d="M122 54 Q128 50 134 52" stroke="#c4b49e" stroke-width="0.6" fill="none" opacity="0.35"/>
        <path d="M121 70 Q128 66 135 68" stroke="#c4b49e" stroke-width="0.6" fill="none" opacity="0.35"/>
        <path d="M121 86 Q128 82 135 84" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.25"/>
        <path d="M142 140 Q140 130 142 120 Q144 112 150 110 Q156 109 159 114 Q161 119 159 128 L155 140" fill="url(#sk${s})"/>
        <path d="M144 116 Q149 112 155 114" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.35"/>
        <path d="M160 142 Q158 132 160 122 Q162 114 168 112 Q174 111 177 116 Q179 121 177 130 L173 142" fill="url(#sd${s})"/>
        <path d="M162 118 Q167 114 173 116" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.35"/>
        <path d="M96 165 Q84 158 76 148 Q70 140 68 131 Q67 123 72 118 Q78 114 85 118 Q90 122 92 132 L93 150" fill="url(#sk${s})"/>
        <path d="M74 135 Q80 130 86 133" stroke="#c4b49e" stroke-width="0.6" fill="none" opacity="0.4"/>
        <path d="M72 147 Q78 143 84 145" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.3"/>
        <path d="M100 175 Q138 166 180 172" stroke="#c4b49e" stroke-width="0.6" fill="none" opacity="0.25"/>
        <path d="M97 190 Q142 182 182 187" stroke="#c4b49e" stroke-width="0.5" fill="none" opacity="0.2"/>
    </g></svg>`;
}

const handSVGs = {
    rock: handRock('R'),
    paper: handPaper('P'),
    scissors: handScissors('S')
};

const btnHandSVGs = {
    rock: handRock('BR'),
    paper: handPaper('BP'),
    scissors: handScissors('BS')
};

const choiceEmoji = { rock: 'Rock', paper: 'Paper', scissors: 'Scissors' };

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
    btnRockHand: document.getElementById('btnRockHand'),
    btnPaperHand: document.getElementById('btnPaperHand'),
    btnScissorsHand: document.getElementById('btnScissorsHand'),
};

function initButtonHands() {
    elements.btnRockHand.innerHTML = btnHandSVGs.rock;
    elements.btnPaperHand.innerHTML = btnHandSVGs.paper;
    elements.btnScissorsHand.innerHTML = btnHandSVGs.scissors;
}

function getWinner(player, computer) {
    if (player === computer) return 'draw';
    const winConditions = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
    return winConditions[player] === computer ? 'win' : 'lose';
}

function playRound(choice) {
    if (state.isPlaying) return;
    state.isPlaying = true;

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = getWinner(choice, computerChoice);

    document.querySelectorAll('.hand-btn').forEach(btn => btn.classList.add('disabled'));

    elements.playerHand.className = 'hand-container';
    elements.computerHand.className = 'hand-container';
    elements.statusText.className = 'status-text';
    elements.statusText.textContent = '...';

    elements.playerHand.innerHTML = handSVGs[choice];
    elements.playerHand.classList.add('active');
    const playerSvg = elements.playerHand.querySelector('.hand-svg');
    if (playerSvg) playerSvg.classList.add('shake');

    setTimeout(() => {
        elements.computerHand.innerHTML = handSVGs[computerChoice];
        elements.computerHand.classList.add('active');
        const compSvg = elements.computerHand.querySelector('.hand-svg');
        if (compSvg) compSvg.classList.add('shake');
    }, 300);

    setTimeout(() => {
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

        animateValue(elements.playerScore, state.playerScore - (result === 'win' ? 1 : 0), state.playerScore);
        animateValue(elements.computerScore, state.computerScore - (result === 'lose' ? 1 : 0), state.computerScore);

        elements.totalGames.textContent = state.totalGames;
        elements.wins.textContent = state.wins;
        elements.losses.textContent = state.losses;
        elements.draws.textContent = state.draws;

        addHistory(state.totalGames, choice, computerChoice, result);

        document.querySelectorAll('.hand-btn').forEach(btn => btn.classList.remove('disabled'));
        state.isPlaying = false;
    }, 900);
}

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

    initDefaultHands();

    elements.historyList.innerHTML = '<div class="history-empty">No rounds played yet</div>';
    document.querySelectorAll('.hand-btn').forEach(btn => btn.classList.remove('disabled'));
}

function initDefaultHands() {
    elements.playerHand.innerHTML = handSVGs.rock;
    elements.computerHand.innerHTML = handSVGs.rock;
    elements.playerHand.className = 'hand-container';
    elements.computerHand.className = 'hand-container';
}

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

document.querySelectorAll('.hand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const choice = btn.getAttribute('data-choice');
        playRound(choice);
    });
});

elements.resetBtn.addEventListener('click', resetGame);

document.addEventListener('keydown', (e) => {
    if (state.isPlaying) return;
    if (e.key === '1' || e.key === 'r' || e.key === 'R') playRound('rock');
    if (e.key === '2' || e.key === 'p' || e.key === 'P') playRound('paper');
    if (e.key === '3' || e.key === 's' || e.key === 'S') playRound('scissors');
});

initButtonHands();
initDefaultHands();
createParticles();
