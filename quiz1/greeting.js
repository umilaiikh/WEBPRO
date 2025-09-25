function greeting() {
    const popup = document.createElement('div');
    popup.innerHTML = `
        <span id="close-btn" style="
            position:absolute;
            top:5px;
            right:10px;
            cursor:pointer;
            font-weight:bold;
            font-size:16px;
        ">×</span>
        Hello viewers, welcome to Umi Lailatul Khotimah's personal website!
    `;
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'rgba(0,0,0,0.85)';
    popup.style.color = '#fff';
    popup.style.padding = '20px 40px';
    popup.style.borderRadius = '10px';
    popup.style.fontSize = '18px';
    popup.style.textAlign = 'center';
    popup.style.zIndex = '1000';
    popup.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
    popup.style.opacity = '0';
    popup.style.transition = 'opacity 0.5s ease';

    document.body.appendChild(popup);
    setTimeout(() => popup.style.opacity = '1', 100);
    document.getElementById('close-btn').onclick = () => {
        popup.style.opacity = '0';
        setTimeout(() => document.body.removeChild(popup), 500);
    };
}
window.onload = greeting;