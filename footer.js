document.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('footer-container');
  if (container) {
    container.innerHTML = '<style>\n' +
      'footer{padding:40px 56px;border-top:1px solid rgba(0,0,0,0.1);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}\n' +
      '.footer-logo{font-family:var(--sans);font-size:13px;font-weight:600;letter-spacing:0.06em;color:var(--black)}\n' +
      '.footer-copy{font-family:var(--sans);font-size:12px;color:rgba(0,0,0,0.32)}\n' +
      '.footer-contact{font-family:var(--serif);font-style:italic;font-size:13px;color:rgba(0,0,0,0.38);display:flex;align-items:center;gap:8px}\n' +
      '.footer-contact a{color:rgba(0,0,0,0.38);text-decoration:none;border-bottom:1px solid rgba(0,0,0,0.15);padding-bottom:1px;transition:color .2s,border-color .2s}\n' +
      '.footer-contact a:hover{color:var(--black);border-color:var(--black)}\n' +
      '</style>\n' +
      '<footer>\n' +
      '  <span class="footer-logo">TSG</span>\n' +
      '  <span class="footer-contact">Press & collaborations —\n' +
      '    <a href="mailto:hello@thesubordinategaze.com">hello@thesubordinategaze.com</a>\n' +
      '  </span>\n' +
      '  <span class="footer-copy">The Subordinate Gaze &copy; 2025</span>\n' +
      '</footer>';
  }
});