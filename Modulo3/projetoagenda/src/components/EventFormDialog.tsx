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
import { ICalendar } from "../backend/backend";

export interface IEditingEvent {
  id?: number;
  date: string;
  time?: string;
  desc: string;
  calendarId: number;
}

interface IEventFormDialogProps {
  event: IEditingEvent | null;
  calendars: ICalendar[];
  onClose: () => void;
}

export default function EventFormDialog(props: IEventFormDialogProps) {
  return (
    <div>
      <Dialog open={!!props.event} onClose={props.onClose}>
        {/* !!props.event meaning that has an event so it's true */}
        <DialogTitle>Criar Evento</DialogTitle>
        <DialogContent>
          {props.event && (
            <>
              <TextField
                type="date"
                margin="normal"
                label="Data"
                fullWidth
                variant="standard"
                value={props.event.date}
              />
              <TextField
                autoFocus
                margin="normal"
                label="Descrição"
                fullWidth
                variant="standard"
                value={props.event.desc}
              />
              <TextField
                type="time"
                margin="normal"
                label="Hora"
                fullWidth
                variant="standard"
                value={props.event.time}
              />
              <FormControl variant="standard" fullWidth>
                <InputLabel id="select-calendar">Agenda</InputLabel>
                <Select
                  labelId="select-calendar"
                  value={props.event.calendarId}
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
          <Button onClick={props.onClose}>Cancelar</Button>
          <Button onClick={props.onClose} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
