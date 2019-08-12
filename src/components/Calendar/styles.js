import styled from 'styled-components'

export const Bgithub = styled.span`
    padding: 10px;
    width: 100%;
    background: #555;
    color: #AAA;
    float: left;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 0;
    &:hover {
    background: #d9d9d9;
  }
`

export const H1github = styled.h1`
    float: left;
    text-align: left;
  }
`

export const Divgithub = styled.div`
    width: 100%;
    text-align: center;
`

export const calendarGenerators = {
  google: function(event) {
    var startTime = event.start.toISOString().replace(/-|:|\.\d+/g, '');
    var endTime = event.end ? event.end.toISOString().replace(/-|:|\.\d+/g, '') : new Date(event.start.getTime() + (event.duration * (60 * 1000)));

    var href = encodeURI([
      'https://www.google.com/calendar/render',
      '?action=TEMPLATE',
      '&text=' + (event.title || ''),
      '&dates=' + (startTime || ''),
      '/' + (endTime || ''),
      '&details=' + (event.description || ''),
      '&location=' + (event.address || ''),
      '&sprop=&sprop=name:'
    ].join(''));
    return '<a className="icon-google" target="_self" href="' +
      href + '">Google Calendar</a>';
  }
}

function formatTime(date) {
  return date.toISOString().replace(/-|:|\.\d+/g, '');
}

function calculateEndTime(event) {
  return event.end ?
    this.formatTime(event.end) :
    this.formatTime(new Date(event.start.getTime() + (event.duration * (60 * 1000))));
};
