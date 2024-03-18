paypal.Buttons({
  style: {
      shape: 'rect',
      color: 'gold',
      layout: 'vertical',
      label: 'subscribe'
  },
  createSubscription: function(data, actions) {
    return actions.subscription.create({
      /* Creates the subscription */
      plan_id: 'P-22021808HH807521LMXY6CTQ'
    });
  },
  onApprove: function (data, actions) {
    const main = document.querySelector("main")
    main.innerHTML = ""
    const p = document.createElement("p")
    p.classList.add("success")
    p.innerText = "Transaction completed, Thank you for buying our service"
    main.append(p)
  },
}).render('#paypal-button-container-P-22021808HH807521LMXY6CTQ');