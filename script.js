function calculateLove() {
  const name1 = document.getElementById('name1').value.trim();
  const name2 = document.getElementById('name2').value.trim();
  const percentage = Math.floor(Math.random() * 21) + 80; // 80% - 100%

  if (!name1 || !name2) {
    alert("দুইটা নামই দিতে হবে! 😅");
    return;
  }

  document.getElementById('nameDisplay').innerText = `${name1} & ${name2} 👇`;
  document.getElementById('percentage').innerText = `${percentage}%`;

  let loveMessage = "তোমাদের লাভ ফের আমার WiFi সিগনালের চেয়েও বেশি! ❤️📶🔥";
  if (percentage > 95) loveMessage = "এতো লাভ! বিয়ের দিন ঠিক করো এখনই! 💍💘";
  else if (percentage < 85) loveMessage = "একটু চেষ্টা বাড়াও, লাভ বাড়বে 😉";

  document.getElementById('loveText').innerText = loveMessage;
  document.getElementById('resultBox').style.display = "block";
}

function resetForm() {
  document.getElementById('name1').value = '';
  document.getElementById('name2').value = '';
  document.getElementById('resultBox').style.display = "none";
}
