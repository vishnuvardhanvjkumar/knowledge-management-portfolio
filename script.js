document.addEventListener("DOMContentLoaded", () => {

```
const cards = document.querySelectorAll(
    ".expertise-card, .portfolio-card, .certification-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.cursor = "pointer";
    });

});
```

});
