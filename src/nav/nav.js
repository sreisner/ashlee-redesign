const setNavPosition = () => {
  if(window.aboveTheFold && !aboveTheFold()) {
    window.aboveTheFold = false;
    applyBelowTheFoldStyle();
  } else if(!window.aboveTheFold && aboveTheFold()) {
    window.aboveTheFold = true;
    applyAboveTheFoldStyle();
  }
};

const aboveTheFold = () => {
  return window.scrollY < window.innerHeight;
}

const applyAboveTheFoldStyle = () => {
  document.getElementById('nav').style = 'position: absolute; top: 100vh';
}

const applyBelowTheFoldStyle = () => {
  document.getElementById('nav').style = 'position: fixed; top: 0';
}

const updateTrianglePosition = () => {
  let landing = document.getElementById('landing');
  let art = document.getElementById('art');
  let about = document.getElementById('about');
  if(isCurrentElementInCenterOfScreen(landing) || isCurrentElementInCenterOfScreen(art)) {
    let arrow = document.getElementsByClassName('arrow-left')[0];
    arrow.style.transform = 'translateX(-100%) translateY(0%)';
  } else if(isCurrentElementInCenterOfScreen(about)) {
    let arrow = document.getElementsByClassName('arrow-left')[0];
    arrow.style.transform = 'translateX(-100%) translateY(100%)';
  }
};

const isCurrentElementInCenterOfScreen = (element) => {
  return window.scrollY < element.offsetTop + element.clientHeight - window.innerHeight / 2;
};

const collapseNav = () => {
  document.getElementById('nav').classList.remove('active');
};

const onload = () => {
  if(window.innerWidth <= 600) {
    document.getElementById('nav').style = 'position: fixed';
  } else {
    if(aboveTheFold()) {
      window.aboveTheFold = true;
      applyAboveTheFoldStyle();
    } else {
      window.aboveTheFold = false;
      applyBelowTheFoldStyle();
    }
  }

  window.addEventListener('scroll', function() {
    if(window.innerWidth <= 600) {
      document.getElementById('nav').style = 'position: fixed';
    } else {
      setNavPosition();
      updateTrianglePosition();
    }
  });

  window.addEventListener('resize', function() {
    if(window.innerWidth <= 600) {
      document.getElementById('nav').style = 'position: fixed';
    } else {
      if(window.aboveTheFold) {
        applyAboveTheFoldStyle();
      } else {
        applyBelowTheFoldStyle();
      }
      updateTrianglePosition();
    }
    collapseNav();
  });
  
  const hamburger = document.getElementsByClassName('hamburger')[0];
  const nav = document.getElementById('nav');
  hamburger.addEventListener('click', () => {
    if(nav.classList.contains('active')) {
      nav.classList.remove('active');
    } else {
      nav.classList.add('active');
    }
  });
  
  nav.addEventListener('click', (event) => {
    if(event.target.tagName === 'A') {
      collapseNav();
    }
  });
};

module.exports = {
  onload: onload
};
