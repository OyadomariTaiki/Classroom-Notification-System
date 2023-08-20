function MonFirstClass() {

  var url = 'https://api.line.me/v2/bot/message/push';
  var channelKey = '***';

  var messages = [{
    'type': 'text',
    'text': '0311',
  }];

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelKey,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': '***',
      'messages': messages,
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}

function MonSecondClass() {

  var url = 'https://api.line.me/v2/bot/message/push';
  var channelKey = '***';

  var messages = [{
    'type': 'text',
    'text': 'A301',
  }];

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelKey,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': '***',
      'messages': messages,
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}

function MonThirdClass() {

  var url = 'https://api.line.me/v2/bot/message/push';
  var channelKey = '***';

  var messages = [{
    'type': 'text',
    'text': '2002',
  }];

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelKey,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': '***',
      'messages': messages,
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}

function MonForthClass() {

  var url = 'https://api.line.me/v2/bot/message/push';
  var channelKey = '***';

  var messages = [{
    'type': 'text',
    'text': 'A204',
  }];

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelKey,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': '***',
      'messages': messages,
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}

function MonFifthClass() {

  var url = 'https://api.line.me/v2/bot/message/push';
  var channelKey = '***';

  var messages = [{
    'type': 'text',
    'text': '2003',
  }];

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelKey,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': '***',
      'messages': messages,
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}

function TueFirstClass() {

  var url = 'https://api.line.me/v2/bot/message/push';
  var channelKey = '***';

  var messages = [{
    'type': 'text',
    'text': 'A304',
  }];

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelKey,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': '***',
      'messages': messages,
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}

function TueSecondClass() {

  var url = 'https://api.line.me/v2/bot/message/push';
  var channelKey = '***';

  var messages = [{
    'type': 'text',
    'text': '5310',
  }];

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelKey,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': '***',
      'messages': messages,
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}

function WedFirstClass() {

  var url = 'https://api.line.me/v2/bot/message/push';
  var channelKey = '***';

  var messages = [{
    'type': 'text',
    'text': '2002',
  }];

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelKey,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': '***',
      'messages': messages,
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}

function WedSecondClass() {

  var url = 'https://api.line.me/v2/bot/message/push';
  var channelKey = '***';

  var messages = [{
    'type': 'text',
    'text': '2002',
  }];

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelKey,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': '***',
      'messages': messages,
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}

function WedThirdClass() {

  var url = 'https://api.line.me/v2/bot/message/push';
  var channelKey = '***';

  var messages = [{
    'type': 'text',
    'text': '0406',
  }];

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelKey,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': '***',
      'messages': messages,
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}

function ThuFirstClass() {

  var url = 'https://api.line.me/v2/bot/message/push';
  var channelKey = '***';

  var messages = [{
    'type': 'text',
    'text': '0310',
  }];

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelKey,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': '***',
      'messages': messages,
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}

function ThuSecondClass() {

  var url = 'https://api.line.me/v2/bot/message/push';
  var channelKey = '***';

  var messages = [{
    'type': 'text',
    'text': '0406',
  }];

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelKey,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': '***',
      'messages': messages,
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}

function FriFirstClass() {

  var url = 'https://api.line.me/v2/bot/message/push';
  var channelKey = '***';

  var messages = [{
    'type': 'text',
    'text': '0411',
  }];

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelKey,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': '***',
      'messages': messages,
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}
