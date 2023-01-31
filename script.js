const form = document.querySelector("form");
      const output = document.querySelector(".output");

      form.addEventListener("submit", event => {
        event.preventDefault();

        const distance = parseFloat(document.querySelector("#distance").value);
        const baseFare = parseFloat(document.querySelector("#baseFare").value);
        const costPerMinute = parseFloat(document.querySelector("#costPerMinute").value);
        const costPerMile = parseFloat(document.querySelector("#costPerMile").value);

        const totalCost = baseFare + costPerMinute * distance + costPerMile * distance;

        output.innerHTML = `The total cost of the Uber ride is Rs.${totalCost.toFixed(2)}.`;
      });