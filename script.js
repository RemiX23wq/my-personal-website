const $ = id => document.getElementById(id);

if (localStorage.getItem('theme') === 'light') document.body.classList.remove('dark-theme');

$('theme-toggle')?.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

let i = 0, imgs = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'];
const slide = d => { if($('slider-img')) $('slider-img').src = `images/${imgs[i = (i + d + 5) % 5]}`; };
const nextSlide = () => slide(1), prevSlide = () => slide(-1);

let sem = 1;
const changeSemester = (d = 0) => {
    sem = Math.max(1, Math.min(3, sem + d));
    
    [1, 2, 3].forEach(n => $(`semester-${n}`)?.classList.toggle('hidden', n !== sem));
    
    if($('semester-indicator')) $('semester-indicator').textContent = `СЕМЕСТР ${sem}`;
    if($('prev-semester')) $('prev-semester').disabled = sem === 1;
    if($('next-semester')) $('next-semester').disabled = sem === 3;
};
changeSemester();
