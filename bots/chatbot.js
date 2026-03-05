(async function () {
  // Replace with your Direct Line token (never expose the secret directly in production)
  const directLineToken = "YOUR_DIRECT_LINE_TOKEN";

  const styleOptions = {
    botAvatarInitials: 'CB',
    userAvatarInitials: 'You',
    backgroundColor: '#F5F5F5'
  };

  window.WebChat.renderWebChat(
    {
      directLine: window.WebChat.createDirectLine({ token: directLineToken }),
      styleOptions
    },
    document.getElementById('webchat')
  );

  document.querySelector('#webchat > *').focus();
})();
