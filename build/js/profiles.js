'use strict';

function animation_1(modal) {
  var tl = new TimelineLite();
  tl.to(modal, 0.1, { display: 'block' }).to(modal, 0.5, { backgroundColor: 'rgba(0, 0, 0, 0.9)', ease: Power1.easeOut }).to(document.getElementById('js-profile'), 0.6, { left: '50%', autoAlpha: 1, force3D: true, ease: Power1.easeOut });

  document.getElementById('js-modal-close').addEventListener('click', function () {
    tl.to(document.getElementById('js-profile'), 0.5, { left: '54%', autoAlpha: 0, force3D: true, ease: Power1.easeIn }).to(modal, 0.5, { backgroundColor: 'rgba(0, 0, 0, 0)', ease: Power1.easeIn }).to(modal, 0.5, { clearProps: 'all' });
  }, false);
}

function animation_2(modal, src) {
  var tl = new TimelineLite();
  src.classList.add('member-is-clicked');

  tl.to(modal, 0.1, { display: 'block' }).to(modal, 0.5, { backgroundColor: 'rgba(128, 128, 128, 0.9)' }).to(document.getElementById('js-profile'), 0.6, { left: '50%', autoAlpha: 1, force3D: true, ease: Power1.easeOut });
  // .to(profile, 0.6, { autoAlpha: 1, force3D: true, ease: Power1.easeOut});

  // document.getElementById('js-modal-close').addEventListener('click', function() {
  document.getElementById('js-modal-close').addEventListener('click', function () {
    tl.to(document.getElementById('js-profile'), 0.5, { left: '54%', autoAlpha: 0, force3D: true, ease: Power1.easeIn }).to(modal, 0.5, { backgroundColor: 'rgba(0, 0, 0, 0)' }).to(modal, 0, { clearProps: 'all' });

    setTimeout(function () {
      return src.classList.remove('member-is-clicked');
    }, 900);
  }, false);
}

function addModal(el, tmp, anim) {
  if (typeof tmp === 'undefined') {
    console.log(tmp);
    return;
  }
  var modal = document.getElementById(el);
  modal.innerHTML = tmp;
  anim(modal);
};

function addModal2(el, tmp, anim, src) {
  if (typeof tmp === 'undefined') {
    console.log(tmp);
    return;
  }
  var modal = document.getElementById(el);
  modal.innerHTML = tmp;
  return anim(modal, src);
};

function profileHandler(e) {
  //promise???
  var profile = findData(data.profiles, 'id', e.currentTarget.dataset.id);
  var markup = Tmps.markupProfiles(profile);
  addModal('js-modal', markup, animation_1);
}

function profileHandler_2(e) {
  //promise???
  var src = e.currentTarget;
  // const profile = findValueByIndex(profiles, 'id', src.dataset.member);
  var profile = findValue(data.profiles, 'id', src.dataset.id);
  var markup = Tmps.markupProfiles(profile);

  addModal2('js-modal', markup, animation_2, src);
}

var members = document.querySelectorAll('.js-member');
var members_2 = document.querySelectorAll('.js-member-anim');
var modal = document.querySelectorAll('.js-modal');

forEachEl(members, profileHandler);
forEachEl(members_2, profileHandler_2);
forEachEl(modal, profileHandler_2);