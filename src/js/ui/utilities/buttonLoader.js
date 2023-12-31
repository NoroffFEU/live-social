export function buttonLoader(button = document.createElement("button"), loadingText = "Loading...") {
    const initalText = button.innerText;
    button.disabled = true;
    button.innerHTML = `<div class="spinner-grow spinner-grow-sm me-2" role="status">
    <span class="visually-hidden">Loading...</span>
</div>${loadingText}`;

    return {
        resetButton: () => {
            button.disabled = false;
            button.innerText = initalText;
        }
    }
}