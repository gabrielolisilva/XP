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

export interface IUser {
  name: string;
  email: string;
}

function handleResponse(resp: Response) {
  if (resp.ok) {
    return resp.json();
  } else {
    throw new Error(resp.statusText);
  }
}

export async function getCalendarEndPoint(): Promise<ICalendar[]> {
  return await fetch("http://localhost:3500/calendars", {
    credentials: "include",
  }).then(handleResponse);
}

export async function getEventsEndPoint(
  from: string,
  to: string
): Promise<IEvent[]> {
  return await fetch(
    `http://localhost:3500/events?date_gte=${from}&date_lte=${to}&_sort=date,time`,
    {
      credentials: "include",
    }
  ).then(handleResponse);
}

export async function createEventEndPoint(
  event: IEditingEvent
): Promise<IEvent> {
  return await fetch(`http://localhost:3500/events`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  }).then(handleResponse);
}

export async function updateEventEndPoint(
  event: IEditingEvent
): Promise<IEvent> {
  return await fetch(`http://localhost:3500/events/${event.id}`, {
    credentials: "include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  }).then(handleResponse);
}

export async function deleteEventEndPoint(eventId: number): Promise<void> {
  return await fetch(`http://localhost:3500/events/${eventId}`, {
    credentials: "include",
    method: "DELETE",
  }).then(handleResponse);
}

export async function getUserEndPoint(): Promise<IUser> {
  return await fetch(`http://localhost:3500/auth/user`, {
    credentials: "include",
  }).then(handleResponse);
}

export async function signInEndPoint(
  email: string,
  password: string
): Promise<IUser> {
  return await fetch(`http://localhost:3500/auth/login`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
}
