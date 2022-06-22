/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./resources/js/apps.js ***!
  \******************************/
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    margin: 130,
    stagePadding: 130,
    responsiveClass: true,
    navContainer: '#customNav',
    responsive: {
      // > 0
      0: {
        dots: false,
        margin: 30,
        stagePadding: 30,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
      },
      // > 768
      768: {
        margin: 130,
        stagePadding: 130,
        dots: true,
        nav: false
      }
    }
  });
});
$(document).ready(function () {
  $('.menu-burger__header').click(function () {
    $('.menu-burger__header').toggleClass('open-menu');
    $('.header__nav').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
  });
});

(function () {
  if (typeof window.CustomEvent === "function") return false;

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  window.CustomEvent = CustomEvent;
})();

$modal = function $modal(options) {
  var _elemModal,
      _eventShowModal,
      _eventHideModal,
      _hiding = false,
      _destroyed = false,
      _animationSpeed = 200;

  function _createModal(options) {
    var elemModal = document.createElement('div'),
        modalTemplate = '<div class="modal__backdrop" data-dismiss="modal"><div class="modal__content"><div class="modal__header"><div class="modal__title" data-modal="title">{{title}}</div><span class="modal__btn-close" data-dismiss="modal" title="Закрыть">×</span></div><div class="modal__body" data-modal="content">{{content}}</div>{{footer}}</div></div>',
        modalFooterTemplate = '<div class="modal__footer">{{buttons}}</div>',
        modalButtonTemplate = '<button type="button" class="{{button_class}}" data-handler={{button_handler}}>{{button_text}}</button>',
        modalHTML,
        modalFooterHTML = '';
    elemModal.classList.add('modal');
    modalHTML = modalTemplate.replace('{{title}}', options.title || 'Новое окно');
    modalHTML = modalHTML.replace('{{content}}', options.content || '');

    if (options.footerButtons) {
      for (var i = 0, length = options.footerButtons.length; i < length; i++) {
        var modalFooterButton = modalButtonTemplate.replace('{{button_class}}', options.footerButtons[i]["class"]);
        modalFooterButton = modalFooterButton.replace('{{button_handler}}', options.footerButtons[i].handler);
        modalFooterButton = modalFooterButton.replace('{{button_text}}', options.footerButtons[i].text);
        modalFooterHTML += modalFooterButton;
      }

      modalFooterHTML = modalFooterTemplate.replace('{{buttons}}', modalFooterHTML);
    }

    modalHTML = modalHTML.replace('{{footer}}', modalFooterHTML);
    elemModal.innerHTML = modalHTML;
    document.body.appendChild(elemModal);
    return elemModal;
  }

  function _showModal() {
    if (!_destroyed && !_hiding) {
      _elemModal.classList.add('modal__show');

      document.dispatchEvent(_eventShowModal);
    }
  }

  function _hideModal() {
    _hiding = true;

    _elemModal.classList.remove('modal__show');

    _elemModal.classList.add('modal__hiding');

    setTimeout(function () {
      _elemModal.classList.remove('modal__hiding');

      _hiding = false;
    }, _animationSpeed);
    document.dispatchEvent(_eventHideModal);
  }

  function _handlerCloseModal(e) {
    if (e.target.dataset.dismiss === 'modal') {
      _hideModal();
    }
  }

  _elemModal = _createModal(options || {});

  _elemModal.addEventListener('click', _handlerCloseModal);

  _eventShowModal = new CustomEvent('show.modal', {
    detail: _elemModal
  });
  _eventHideModal = new CustomEvent('hide.modal', {
    detail: _elemModal
  });
  return {
    show: _showModal,
    hide: _hideModal,
    destroy: function destroy() {
      _elemModal.parentElement.removeChild(_elemModal), _elemModal.removeEventListener('click', _handlerCloseModal), _destroyed = true;
    },
    setContent: function setContent(html) {
      _elemModal.querySelector('[data-modal="content"]').innerHTML = html;
    },
    setTitle: function setTitle(text) {
      _elemModal.querySelector('[data-modal="title"]').innerHTML = text;
    }
  };
};
/******/ })()
;