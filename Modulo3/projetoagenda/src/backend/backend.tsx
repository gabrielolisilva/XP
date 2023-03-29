export interface ICalendar {
  id: number;
  name: string;
  color: string;
}

export interface IEditingEvent {
  id?: number;
  date: string;
  time?: string;
  desc: string;
  calendarId: number;
}

export interface IEvent extends IEditingEvent {
  id: number;
}

export async function getCalendarEndPoint(): Promise<ICalendar[]> {
  return await fetch("http://localhost:3500/calendars").then((resp) => {
    return resp.json();
  });
}

export async function getEventsEndPoint(
  from: string,
  to: string
): Promise<IEvent[]> {
  return await fetch(
    `http://localhost:3500/events?date_gte=${from}&date_lte=${to}&_sort=date,time`
  ).then((resp) => {
    return resp.json();
  });
}

export async function createEventEndPoint(
  event: IEditingEvent
): Promise<IEvent> {
  return await fetch(`http://localhost:3500/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  }).then((resp) => {
    return resp.json();
  });
}
