(function () {
  'use strict';
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  var link = document.getElementById('whatsapp-link');
  var subtitle = document.getElementById('whatsapp-subtitle');
  var settings = window.YGGDRASIL_CONFIG || {};
  var invite = typeof settings.whatsappCommunityUrl === 'string'
    ? settings.whatsappCommunityUrl.trim() : '';

  // Only activate a full HTTPS WhatsApp community invitation URL.
  if (link && /^https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9_-]+\/?(?:\?.*)?$/.test(invite)) {
    link.href = invite;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.classList.remove('is-unavailable');
    link.removeAttribute('aria-disabled');
    link.removeAttribute('tabindex');
    link.setAttribute('aria-label', 'Join the Yggdrasil WhatsApp Community, opens in a new tab');
    if (subtitle) subtitle.textContent = 'Join the conversation';
  }
})();
