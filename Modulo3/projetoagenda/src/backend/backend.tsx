export interface ICalendar {
  id: number;
  name: string;
  color: string;
}

export interface IEvents {
  id: number;
  date: string;
  time?: string;
  desc: string;
  calendarId: number;
}

export function getCalendarEndPoint(): Promise<ICalendar[]> {
  return fetch("http://localhost:3500/calendars").then((resp) => {
    return resp.json();
  });
}

export function getEventsEndPoint(): Promise<IEvents[]> {
  return fetch("http://localhost:3500/events").then((resp) => {
    return resp.json();
  });
}
