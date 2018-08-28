const ws = new WebSocket('ws://localhost:8090');

ws.onopen = () => {
  $('#status').text('Connected');
};

ws.onmessage = (event) => {
  $('<p>').text(event.data).appendTo('#msgs');
};

ws.onclose = () => {
  $('#status').text('Disconnected');
};

$('#msgForm').submit((event) => {
  event.preventDefault();

  const msg = $('input[name=msg]').val();
  ws.send(msg);
  $('input[name=msg]').val('');
});
