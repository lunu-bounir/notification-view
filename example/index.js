const e = document.querySelector('notification-view');

document.getElementById('info').onclick = () => e.notify('this is my message' + Math.random(), 'info');
document.getElementById('warning').onclick = () => e.notify('this is my message' + Math.random(), 'warning');
document.getElementById('error').onclick = () => e.notify('this is my message' + Math.random(), 'error');
document.getElementById('success').onclick = () => e.notify('this is my message' + Math.random(), 'success');
document.getElementById('clean').onclick = () => e.clean();
