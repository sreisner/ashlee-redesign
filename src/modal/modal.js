showModal = (frame) => {
  const modal = document.getElementById('modal');
  const imageContainer = modal.getElementsByClassName('image-container')[0];
  
  const {lowResUrl, highResUrl, width, height} = frame.dataset;
  
  const highResImage = new Image();
  
  modal.style.visibility = 'visible';
  
  imageContainer.innerHTML = `<img src="${lowResUrl}" />`;
  
  highResImage.onload = () => {
    imageContainer.innerHTML = `<img src="${highResUrl}" />`;
  };
  highResImage.src = highResUrl;
};

hideModal = () => {
  document.getElementById('modal').style.visibility = 'hidden';
  const imageContainer = modal.getElementsByClassName('image-container')[0];
  imageContainer.innerHTML = '';
};