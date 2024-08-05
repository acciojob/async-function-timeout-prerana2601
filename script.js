//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function() {
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value, 10);

    if (isNaN(delay) || delay < 0) {
        document.getElementById('output').textContent = 'Please enter a valid delay in milliseconds.';
        return;
    }

    document.getElementById('output').textContent = 'Waiting...';

    await delayFunction(delay);

    document.getElementById('output').textContent = text;
});

async function delayFunction(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}