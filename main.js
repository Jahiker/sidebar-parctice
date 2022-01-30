const list = document.querySelectorAll('.list');

list.forEach(item => {
    item.onclick = () => {
        list.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    }
})

const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = () => {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}