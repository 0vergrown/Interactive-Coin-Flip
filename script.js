function flipCoin() {
    var coin = document.getElementById("coin");
    var status = document.getElementById("status");

    coin.classList.remove("heads", "tails");
    coin.classList.add("flip");
    status.innerHTML = 'Flipping<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>';

    setTimeout(function() {
        coin.classList.remove("flip");

        // Randomly choose heads or tails
        if (Math.random() < 0.5) {
            coin.classList.add("heads");
            status.textContent = "Heads";
        } else {
            coin.classList.add("tails");
            status.textContent = "Tails";
        }
    }, 3000);
}