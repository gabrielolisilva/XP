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

interface IEventFormDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function EventFormDialog(props: IEventFormDialogProps) {
  return (
    <div>
      <Dialog open={props.open} onClose={props.onClose}>
        <DialogTitle>Criar Evento</DialogTitle>
        <DialogContent>
          <TextField
            type="date"
            margin="normal"
            label="Data"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="normal"
            label="Descrição"
            fullWidth
            variant="standard"
          />
          <TextField
            type="time"
            margin="normal"
            label="Hora"
            fullWidth
            variant="standard"
          />
          <FormControl variant="standard" fullWidth>
            <InputLabel id="select-calendar">Agenda</InputLabel>
            <Select labelId="select-calendar" label="Age">
              <MenuItem value="Pessoal">Pessoal</MenuItem>
              <MenuItem value="Trabalho">Trabalho</MenuItem>
            </Select>
          </FormControl>
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
