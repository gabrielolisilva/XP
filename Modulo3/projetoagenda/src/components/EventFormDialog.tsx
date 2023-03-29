import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  createEventEndPoint,
  ICalendar,
  IEditingEvent,
} from "../backend/backend";
import { useState, useEffect, useRef } from "react";

interface IEventFormDialogProps {
  event: IEditingEvent | null;
  calendars: ICalendar[];
  onCancel: () => void;
  onSave: () => void;
}

interface IValidateErrors {
  [field: string]: string;
}

export default function EventFormDialog(props: IEventFormDialogProps) {
  const [event, setEvent] = useState<IEditingEvent | null>(null);
  const [errors, setErrors] = useState<IValidateErrors>({});

  const inputDate = useRef<HTMLInputElement | null>();
  const inputDesc = useRef<HTMLInputElement | null>();

  useEffect(() => {
    setEvent(props.event);
    setErrors({});
  }, [props.event]);

  function validate(): boolean {
    if (event) {
      const currentErrors: IValidateErrors = {};
      if (!event.date) {
        currentErrors["date"] = "A data deve ser preenchida";
        inputDate.current?.focus();
      }
      if (!event.desc) {
        currentErrors["desc"] = "A descrição deve ser preenchida";
        inputDesc.current?.focus();
      }
      setErrors(currentErrors);
      return Object.keys(currentErrors).length === 0;
    }
    return false;
  }

  function save(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      createEventEndPoint(event!).then(props.onSave);
      /* event can be null to add ! at the end to ensure that he exists */
    }
  }

  return (
    <div>
      <Dialog open={!!event} onClose={props.onCancel}>
        {/* !!props.event meaning that has an event so it's true */}
        <form onSubmit={save}>
          <DialogTitle>Criar Evento</DialogTitle>
          <DialogContent>
            {event && (
              <>
                <TextField
                  inputRef={inputDate}
                  type="date"
                  margin="normal"
                  label="Data"
                  fullWidth
                  variant="standard"
                  value={event.date}
                  onChange={(e) => setEvent({ ...event, date: e.target.value })}
                  error={!!errors.date}
                  helperText={errors.date}
                />
                <TextField
                  inputRef={inputDesc}
                  autoFocus
                  margin="normal"
                  label="Descrição"
                  fullWidth
                  variant="standard"
                  value={event.desc}
                  onChange={(e) => setEvent({ ...event, desc: e.target.value })}
                  error={!!errors.desc}
                  helperText={errors.desc}
                />
                <TextField
                  type="time"
                  margin="normal"
                  label="Hora"
                  fullWidth
                  variant="standard"
                  value={
                    event.time ?? ""
                  } /* ?? if undefined validated right side */
                  onChange={(e) => setEvent({ ...event, time: e.target.value })}
                />
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="select-calendar">Agenda</InputLabel>
                  <Select
                    labelId="select-calendar"
                    value={event.calendarId}
                    onChange={(e) =>
                      setEvent({
                        ...event,
                        calendarId: e.target.value as number,
                      })
                    }
                  >
                    {props.calendars.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onCancel}>Cancelar</Button>
            <Button type="submit" color="primary">
              Salvar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
