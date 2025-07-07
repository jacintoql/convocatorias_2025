// ========== Modal de Ubicación ==========
const modalUbicacion = document.getElementById('mapModal');
const openUbicacionBtn = document.getElementById('openModalUBtn');
const closeUbicacionBtn = document.getElementById('closeModalUBtn');

if (openUbicacionBtn && closeUbicacionBtn && modalUbicacion) {
  openUbicacionBtn.addEventListener('click', () => {
    modalUbicacion.style.display = 'block';
  });

  closeUbicacionBtn.addEventListener('click', () => {
    modalUbicacion.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modalUbicacion) {
      modalUbicacion.style.display = 'none';
    }
  });
}

// Feedback modal
document.getElementById('feedback-tab').addEventListener('click', () => {
  document.getElementById('feedback-modal').style.display = 'block';
});

document.getElementById('close-feedback').addEventListener('click', () => {
  document.getElementById('feedback-modal').style.display = 'none';
});

// Opcional: cerrar haciendo clic fuera del modal
window.addEventListener('click', function(e) {
  const modal = document.getElementById('feedback-modal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

