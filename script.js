function flipCoin() {
    var coin = document.getElementById("coin");
    var status = document.getElementById("status");
    var button = document.querySelector("button");

    button.disabled = true;
    coin.className = 'flip-continuous';  // Start continuous flip
    status.innerHTML = 'Flipping<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>';

    // Function to initiate deceleration
    function startDeceleration() {
        var additionalSpin = Math.random() < 0.5 ? 0 : 360;  // Determine final state adjustment
        var finalDegrees = 3600 + additionalSpin;  // Full spins plus extra for result

        coin.style.setProperty('--rotation-start', '3600deg');
        coin.style.setProperty('--rotation-end', `${finalDegrees}deg`);

        coin.className = 'flip-decelerate';  // Start decelerate flip
    }

    // Function to finalize the result
    function finalizeResult() {
        var isHeads = coin.style.getPropertyValue('--rotation-end') === '3600deg';
        coin.className = '';  // Clear all animation classes
        coin.classList.add(isHeads ? "heads" : "tails");
        status.textContent = isHeads ? "Heads" : "Tails";
        button.disabled = false;
    }

    // Listen for the end of the continuous flip to transition to decelerate
    coin.addEventListener('animationiteration', startDeceleration, { once: true });

    // Listen for the end of the deceleration phase to finalize the result
    coin.addEventListener('animationend', finalizeResult, { once: true });
}